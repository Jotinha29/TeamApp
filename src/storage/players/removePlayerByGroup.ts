import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { GetPlayersByGroup } from './getPlayersByGroup'

export async function RemovePlayerByGroup(playerName: string, group: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedPlayers = await GetPlayersByGroup(group)
    const playerFiltered = storedPlayers.filter(
      (player) => player.name !== playerName,
    )
    const storage = JSON.stringify(playerFiltered)
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    console.log(error)
    throw error
  }
}
