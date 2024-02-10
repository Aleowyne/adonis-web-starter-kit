import type { HttpContext } from '@adonisjs/core/http'
import { loginUserValidator } from '#validators/user'
import User from '#models/user'

export default class LoginController {
  async index({ response, auth, inertia }: HttpContext) {
    let isConnected = await auth.use('web').check()

    if (isConnected) {
      return response.redirect('/')
    }

    return inertia.render('auth/login')
  }

  async store({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(payload.email, payload.password)

    await auth.use('web').login(user)

    return response.redirect('/')
  }
}
