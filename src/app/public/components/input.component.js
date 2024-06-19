import { HTML, nInput } from '@brtmvdl/frontend'

export class InputComponent extends HTML {
  state = {
    label: '',
    value: '',
    placeholder: ''
  }

  children = {
    label: new HTML(),
    input: new nInput(),
    error: new HTML(),
  }

  constructor(label, value = '', placeholder = '') {
    super()
    this.state.label = label
    this.state.value = value
    this.state.placeholder = placeholder
  }

  onCreate() {
    super.onCreate()
    this.append(this.getLabel())
    this.append(this.getInput())
    this.append(this.getError())
  }

  getLabel() {
    this.children.label.setText(this.state.label)
    return this.children.label
  }

  getInput() {
    this.children.input.setValue(this.state.value)
    this.children.input.setAttr('placeholder', this.state.placeholder)
    return this.children.input
  }

  getError() {
    return this.children.error
  }

  getValue() {
    return this.children.input.getValue()
  }

}
