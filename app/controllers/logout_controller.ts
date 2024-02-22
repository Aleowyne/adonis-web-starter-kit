import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  async index({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('login')
  }
}
