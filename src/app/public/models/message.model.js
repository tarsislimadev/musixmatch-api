import { Model } from '../models/model.js' // './model.js'

export class MessageModel extends Model {
  type = null
  text = ''

  constructor(text = '') {
    super()
    this.text = text
  }
}
