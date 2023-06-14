import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { getGroups } from './getGroups'

export async function RemoveGroupByName(groupName: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await getGroups()
    const groupsWithoutDeletedOne = storedGroups.filter(
      (group) => group !== groupName,
    )
    const storage = JSON.stringify(groupsWithoutDeletedOne)
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    await AsyncStorage.removeItem(
      `${PLAYER_COLLECTION}-${groupsWithoutDeletedOne}`,
    )
  } catch (error) {
    throw error
  }
}
