import type { HttpContext } from '@adonisjs/core/http'
import { loginUserValidator } from '#validators/user'
import User from '#models/user'

export default class LoginController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async store({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect('/')
  }
}
