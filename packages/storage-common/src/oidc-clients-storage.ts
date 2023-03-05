export type OidcClient = {
  id: string
  secret: string
  // TODO: TBD
  settings: OidcClientSettings
}

export type OidcClientSettings = {
  // TODO: TBD
  anything: any
}

export interface OidcClientsStorage {
  getClientById: ({ id }: { id: string }) => Promise<OidcClient>
  deleteClientById: ({ id }: { id: string }) => Promise<void>
  createClient: (newClient: OidcClient) => Promise<OidcClient>
  getAllClients: () => Promise<OidcClient[]>
}
