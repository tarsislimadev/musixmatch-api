import { HTML, nFlex } from '@brtmvdl/frontend'
import { LinkComponent } from './link.component.js'
import { TwoColumnsComponent } from '../components/two.columns.component.js'

export class HeaderComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
  }

  getFlex() {
    return new TwoColumnsComponent({
      html1: new LinkComponent({ text: 'brtmvdl', href: '/?' + Date.now() }),
      html2: new HTML(),
    })
  }
}
