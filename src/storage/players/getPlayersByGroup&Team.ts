import { GetPlayersByGroup } from './getPlayersByGroup'

export async function GetPlayersByGroupAndTeam(group: string, team: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await GetPlayersByGroup(group)
    const players = storage.filter((player) => player.team === team)
    return players
  } catch (error) {
    throw error
  }
}
