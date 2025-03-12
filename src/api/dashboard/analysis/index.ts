import request from '@/axios'
import type {
  DashboardTotalTypes,
  UserAccessSource,
  WeeklyUserActivity,
  MonthlySales,
  VersionData,
  AssetData
} from './types'

interface DashboardTotalTypesResponse {
  data: DashboardTotalTypes
}

export const getAssetStatisticsApi = (): Promise<IResponse<DashboardTotalTypesResponse[]>> => {
  return request.get({ url: '/api/asset/statistics/data' })
}

export const getUserAccessSourceApi = (): Promise<IResponse<UserAccessSource[]>> => {
  return request.get({ url: '/mock/analysis/userAccessSource' })
}

export const getWeeklyUserActivityApi = (): Promise<IResponse<WeeklyUserActivity[]>> => {
  return request.get({ url: '/mock/analysis/weeklyUserActivity' })
}

export const getMonthlySalesApi = (): Promise<IResponse<MonthlySales[]>> => {
  return request.get({ url: '/mock/analysis/monthlySales' })
}

interface VersionDataResponse {
  list: VersionData[]
}
export const getVersionDataApi = (): Promise<IResponse<VersionDataResponse>> => {
  return request.get({ url: '/api/system/version' })
}

export const UPDATEsYSTEMApi = (
  server: string,
  scan: string,
  key: string
): Promise<IResponse<VersionDataResponse>> => {
  return request.post({ url: '/api/system/update', data: { server, scan, key } })
}

export const getAssetDataApi = (): Promise<IResponse<AssetData>> => {
  return new Promise((resolve) => {
    resolve({
      message: 'success',
      logs: '',
      code: 200,
      data: {
        subdomain: [
          {
            domain: 'example.com',
            ip: '192.168.1.1',
            findTime: '2021-01-01 12:00:00'
          }
        ],
        ip: [
          {
            ip: '192.168.1.1',
            location: '80',
            findTime: '2021-01-01 12:00:00'
          }
        ],
        port: [
          {
            ip: '192.168.1.1',
            port: '80',
            service: 'HTTP',
            findTime: '2021-01-01 12:00:00'
          }
        ],
        vulnerability: [
          {
            target: 'example.com',
            type: 'XSS',
            level: 'High',
            findTime: '2021-01-01 12:00:00'
          }
        ]
      }
    })
  })
  // return request.get({ url: '/api/asset/dynamic' })
}
