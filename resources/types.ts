export type Message = {
  message?: {
    type: string
    content: string
  }
}

export type Auth = {
  isAuthenticated: boolean
}

export type UserForm = {
  email: string
  username: string
  password: string
  _csrf: string
}
