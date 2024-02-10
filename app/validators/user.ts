import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().alphaNumeric().minLength(3).maxLength(50),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)
