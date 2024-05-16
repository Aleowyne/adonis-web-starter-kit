import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'
import User from '#models/user'

export default class SigninController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const user = await User.findBy('email', payload.email)

    if (user) {
      session.flash('message', { type: 'error', content: "Erreur à l'inscription" })
      return response.redirect().back()
    }

    await User.create(payload)

    return response.redirect('/login')
  }
}
