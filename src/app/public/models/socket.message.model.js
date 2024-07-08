import { MessageModel } from './message.model.js'

export class SocketMessageModel extends MessageModel {
  datetime = Date.now()
  params = {}

  constructor(api_method, params = {}) {
    super()
    this.text = api_method
    this.params = params
  }

  toJSON() {
    const { text, params, datetime } = this
    return { text, params, datetime }
  }
}
