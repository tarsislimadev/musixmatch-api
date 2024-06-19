import { HTML, nFlex } from '@brtmvdl/frontend'
import { ImageLinkComponent } from './components/image.link.component.js'
import { SelectComponent } from './components/select.component.js'
import { ButtonComponent } from './components/button.component.js'
import { InputsComponent } from './components/inputs.component.js'
import { TextComponent } from './components/text.component.js'
import { RequestModel } from './models/request.model.js'
import { MessageModel } from './models/message.model.js'
import { getMethodsList, getMethodQuery } from './utils/lists.js'

export class Page extends HTML {
  state = {
    io: io(),
    socket: null,
  }

  children = {
    select: new SelectComponent('API Methods'),
    form: new HTML(),
    inputs: new InputsComponent(),
    messages: new HTML(),
  }

  onCreate() {
    super.onCreate()
    this.setSocketEvents()
    this.append(this.getHeaderComponent())
    this.append(this.getBodyComponent())
  }

  setSocketEvents() {
    this.state.io.on('connection', (socket) => {
      socket.on('message', (message) => this.onSocketMessage(message))
      this.state.socket = socket
    })
  }

  onSocketMessage(message) {
    console.log('on socket message', message)
  }

  getHeaderComponent() {
    const logo = new ImageLinkComponent('./logo.png', 'https://developer.musixmatch.com/')
    logo.children.image.setStyle('margin', 'calc(1rem / 1) 0rem')
    logo.children.image.setContainerStyle('width', '10rem')
    logo.children.image.setStyle('text-aling', 'center')
    return logo
  }

  getBodyComponent() {
    const flex = new nFlex()
    flex.append(this.getLeftBodyComponent())
    flex.append(this.getRightBodyComponent())
    return flex
  }

  getRightHeaderComponent() {
    return new HTML()
  }

  getLeftBodyComponent() {
    const html = new HTML()
    html.append(this.getMethodSelect())
    html.append(this.getFormHTML())
    html.append(this.getSendButton())
    return html
  }

  getMethodSelect() {
    Array.from(getMethodsList()).map(({ name }) => this.children.select.addOption(name, name))
    this.children.select.on('change', () => this.onMethodSelect({ value: this.children.select.getValue() }))
    return this.children.select
  }

  onMethodSelect({ value } = {}) {
    this.children.form.clear()
    Array.from(getMethodQuery(this.children.select.getValue())).map((q) => this.children.form.append(this.children.inputs.getComponent(q)))
  }

  getFormHTML() {
    return this.children.form
  }

  getSendButton() {
    return new ButtonComponent('send', () => this.onSendButtonClick())
  }

  onSendButtonClick() {
    const method = this.children.select.getValue()
    const m = getMethodsList().find(({ name }) => name == method)
    this.sendSocketMessage({ name: method.name, url: method.url, method: method.method })
  }

  getMethodUrl(m = new RequestModel()) {
    const search = Array.from(m.query).map((q) => [q, this.children.inputs.getValue(q)].join('=')).join('&')
    return `${m.url}?${search}`
  }

  sendSocketMessage(message = {}) {
    this.state.io.emit('message 01', JSON.stringify(message))
  }

  getRightBodyComponent() {
    return this.children.messages
  }

  addMessage(message = new MessageModel()) {
    this.children.messages.append(this.createMessageComponent(message))
  }

  createMessageComponent(model = new MessageModel()) {
    const message = new HTML()
    message.append(new TextComponent(model.message))
    return message
  }
}
