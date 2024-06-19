import { HTML, nButton } from '@brtmvdl/frontend'

export class ButtonComponent extends nButton {
  state = {
    text: '',
    onclick: (() => { }),
  }

  constructor(text, onclick = (() => { })) {
    super()
    this.state.text = text
    this.state.onclick = onclick
  }

  onCreate() {
    super.onCreate()
    this.setText(this.state.text)
    this.on('click', () => this.state.onclick())
  }

}
