import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'
import User from '#models/user'

export default class SigninController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const searchPayload = { email: payload.email }
    const user = await User.firstOrCreate(searchPayload, payload)

    if (!user.$isLocal) {
      session.flash('message', { type: 'error', content: "Erreur à l'inscription" })
      return response.redirect().back()
    }

    return response.redirect('/login')
  }
}
