import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { getGroups } from './getGroups'
import { AppError } from '@utils/AppError'

export async function groupCreate(groupName: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await getGroups()
    const groupAlreadyExitis = storedGroups.includes(groupName)
    if (groupAlreadyExitis) {
      throw new AppError('Group Already Exists')
    }
    const storage = JSON.stringify([...storedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
