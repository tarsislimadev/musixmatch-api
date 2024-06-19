import { HTML, nSelect } from '@brtmvdl/frontend'

export class SelectComponent extends HTML {
  state = {
    label: '',
  }

  children = {
    label: new HTML(),
    input: new nSelect(),
    error: new HTML(),
  }

  constructor(label) {
    super()
    this.state.label = label
  }

  onCreate() {
    super.onCreate()
    this.append(this.getLabel())
    this.append(this.getInput())
    this.append(this.getError())
  }

  getLabel() {
    return this.children.label
  }

  getInput() {
    return this.children.input
  }

  getError() {
    return this.children.error
  }

  addOption(key, value = '') {
    this.children.input.addOption(key, value)
    return this
  }

  getValue() {
    return this.children.input.getValue()
  }

}
