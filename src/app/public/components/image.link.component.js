import { HTML, nImage, nLink } from '@brtmvdl/frontend'

export class ImageLinkComponent extends HTML {
  state = {
    src: '',
    href: '',
    alt: '',
  }

  children = {
    link: new nLink(),
    image: new nImage(),
  }

  constructor(src, href = '?', alt = 'image') {
    super()
    this.state.src = src
    this.state.href = href
    this.state.alt = alt
  }

  onCreate() {
    super.onCreate()
    this.append(this.getLink())
  }

  getLink() {
    this.children.link.href(this.state.href)
    this.children.link.append(this.getImage())
    return this.children.link
  }

  getImage() {
    this.children.image.src(this.state.src)
    this.children.image.alt(this.state.alt)
    return this.children.image
  }
}
