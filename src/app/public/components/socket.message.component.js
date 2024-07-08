import { HTML } from '@brtmvdl/frontend'
import { CardHeaderComponent } from '../components/card.header.component.js'
import { CardFooterComponent } from '../components/card.footer.component.js'
import { TwoColumnsComponent } from '../components/two.columns.component.js'
import { CardBodyComponent } from '../components/card.body.component.js'
import { SocketMessageModel } from '../models/socket.message.model.js'
import { CardComponent } from '../components/card.component.js'
import { TextComponent } from '../components/text.component.js'

import * as str from '../utils/str.js'

export class SocketMessageComponent extends HTML {
  model = new SocketMessageModel()

  constructor(model = new SocketMessageModel()) {
    super()
    this.model = model
  }

  onCreate() {
    super.onCreate()
    this.append(this.getCard())
  }

  getCard() {
    const card = new CardComponent()
    card.append(this.getHeaderComponent())
    card.append(this.getBodyComponent())
    card.append(this.getFooterComponent())
    return card
  }

  getHeaderComponent() {
    const header = new CardHeaderComponent()
    header.append(new TwoColumnsComponent({
      html1: new TextComponent({ text: this.model.text }),
      html2: this.getDatetimeComponent(),
    }))
    return header
  }

  getDatetimeComponent() {
    const component = new TextComponent({ text: str.datetime2str(this.model.datetime), title: this.model.datetime })
    component.setStyle('text-align', 'right')
    return component
  }

  getBodyComponent() {
    const body = new CardBodyComponent()
    Object.keys(this.model.params).map(() => { })
    return body
  }

  getFooterComponent() {
    return new CardFooterComponent()
  }
}
