import { Model } from './model.js'

export class MessageModel extends Model {
  message = ''

  constructor(message) {
    super()
    this.message = message
  }
}
