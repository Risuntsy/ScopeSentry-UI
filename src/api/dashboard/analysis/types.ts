export type DashboardTotalTypes = {
  asetCount: number
  subdomainCount: number
  sensitiveCount: number
  urlCount: number
  vulnerabilityCount: number
}

export type UserAccessSource = {
  value: number
  name: string
}

export type WeeklyUserActivity = {
  value: number
  name: string
}

export type MonthlySales = {
  name: string
  estimate: number
  actual: number
}

export type VersionData = {
  name: string
  cversion: string
  lversion: string
  msg: string
}




export type SubdomainScanLog = {
  domain: string
  ip: string
  findTime: string
}

export type IpScanLog = {
  ip: string
  location: string
  findTime: string
}

export type PortScanLog = {
  ip: string
  port: string
  service: string
  findTime: string
}

export type Vulnerability  = {
  target: string
  type: string
  level: string
  findTime: string
}

export type AssetData = {
  subdomain: SubdomainScanLog[]
  ip: IpScanLog[]
  port: PortScanLog[]
  vulnerability: Vulnerability[]
}
