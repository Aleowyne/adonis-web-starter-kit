import type { Errors, ErrorBag } from '@inertiajs/core'

export type InertiaProps = {
  errors?: Errors & ErrorBag
  message?: {
    type: string
    content: string
  }
  csrfToken: string
  isAuthenticated: boolean
}

export type UserForm = {
  email: string
  username: string
  password: string
  _csrf: string
}
