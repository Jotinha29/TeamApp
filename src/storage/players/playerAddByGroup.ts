import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { GetPlayersByGroup } from './getPlayersByGroup'
import { AppError } from '@utils/AppError'

export async function PlayerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedPlayers = await GetPlayersByGroup(group)
    const playerAlreadyAddedOnGroup = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )
    if (playerAlreadyAddedOnGroup.length > 0) {
      throw new AppError('This player is already on this team')
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    console.log(error)
    throw error
  }
}
