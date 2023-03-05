export type User = {
  userId: string
  name: string
  surname: string
  passwordHash: string
  email: string
  username: string
}

export interface UserStorage {
  createUser: (user: User) => Promise<User>
  updateUserById: ({ user, id }: { user: User; id: string }) => Promise<User>
  deleteUserByID: ({ id }: { id: string }) => Promise<void>
  getUserById: ({ id }: { id: string }) => Promise<User>
}
