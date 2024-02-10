import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champ "{{field}}" est obligatoire',
  email: 'Le champ "{{field}}" doit être une adresse mail valide',
  alphaNumeric: 'Le champ "{{field}}" ne doit contenir que des lettres et des chiffres',
  minLength: 'Le champ "{{field}}" doit contenir au moins {{min}} caractères',
  maxLength: 'Le champ "{{field}}" ne doit pas contenir plus de {{max}} caractères',
}

const fields = {
  username: "Nom d'utilisateur",
  email: 'Adresse mail',
  password: 'Mot de passe',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)
