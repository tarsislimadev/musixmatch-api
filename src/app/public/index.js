import { HTML } from '@brtmvdl/frontend'
import { SocketMessageComponent } from './components/socket.message.component.js'
import { TwoColumnsComponent } from './components/two.columns.component.js'
import { ImageLinkComponent } from './components/image.link.component.js'
import { PaddingComponent } from './components/padding.component.js'
import { SelectComponent } from './components/select.component.js'
import { ButtonComponent } from './components/button.component.js'
import { InputComponent } from './components/input.component.js'
import { getEndpointsList } from './utils/endpoints.list.js'

import { SocketMessageModel } from './models/socket.message.model.js'

export class Page extends PaddingComponent {
  state = { io: new io() }

  children = {
    query: new HTML(),
    endpoints: new SelectComponent({ label: 'endpoint' }),
    messages: new HTML(),
    inputs: {
      apikey: new InputComponent({ label: 'apikey', value: Date.now().toString(), type: 'password' }),
      album_id: new InputComponent({ label: 'album_id', type: 'number' }),
      album_mbid: new InputComponent({ label: 'album_mbid' }),
      artist_id: new InputComponent({ label: 'artist_id', type: 'number' }),
      artist_mbid: new InputComponent({ label: 'artist_mbid' }),
      chart_name: new InputComponent({ label: 'chart_name' }),
      commontrack_id: new InputComponent({ label: 'commontrack_id', type: 'number' }),
      country: new InputComponent({ label: 'country' }),
      domain: new InputComponent({ label: 'domain' }),
      f_artist_id: new InputComponent({ label: 'f_artist_id', type: 'number' }),
      f_artist_mbid: new InputComponent({ label: 'f_artist_mbid' }),
      f_has_lyrics: new InputComponent({ label: 'f_has_lyrics' }),
      f_richsync_length: new InputComponent({ label: 'f_richsync_length' }),
      f_richsync_length_max_deviation: new InputComponent({ label: 'f_richsync_length_max_deviation' }),
      f_subtitle_length: new InputComponent({ label: 'f_subtitle_length' }),
      f_subtitle_length_max_deviation: new InputComponent({ label: 'f_subtitle_length_max_deviation' }),
      format: new InputComponent({ label: 'format' }),
      formatDecide: new InputComponent({ label: 'formatDecide' }),
      g_album_name: new InputComponent({ label: 'g_album_name' }),
      min_completed: new InputComponent({ label: 'min_completed' }),
      page: new InputComponent({ label: 'page', value: '1', type: 'number' }),
      page_size: new InputComponent({ label: 'page_size', value: '100', type: 'number' }),
      q: new InputComponent({ label: 'q' }),
      q_album: new InputComponent({ label: 'q_album' }),
      q_artist: new InputComponent({ label: 'q_artist' }),
      q_lyrics: new InputComponent({ label: 'q_lyrics' }),
      q_track: new InputComponent({ label: 'q_track' }),
      q_track_artist: new InputComponent({ label: 'q_track_artist' }),
      q_writer: new InputComponent({ label: 'q_writer' }),
      quorum_factor: new InputComponent({ label: 'quorum_factor' }),
      selected_language: new InputComponent({ label: 'selected_language' }),
      subtitle_format: new InputComponent({ label: 'subtitle_format' }),
      track_id: new InputComponent({ label: 'track_id', type: 'number' }),
      track_isrc: new InputComponent({ label: 'track_isrc' }),
      track_mbid: new InputComponent({ label: 'track_mbid' }),
    }
  }

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.append(this.getHeader())
    this.append(this.getBody())
  }

  setEvents() {
    this.state.io.on('connect', () => console.log('connect', { datetime: Date.now() }))
    this.state.io.on('disconnect', () => console.log('disconnect', { datetime: Date.now() }))
  }

  getHeader() {
    return new TwoColumnsComponent({
      html1: new ImageLinkComponent({ src: './logo.png', href: 'https://developer.musixmatch.com/' }),
      html2: new HTML(),
    })
  }

  getBody() {
    return new TwoColumnsComponent({
      html1: this.getForm(),
      html2: this.getMessages()
    })
  }

  getForm() {
    const form = new HTML()
    form.append(this.getEndpointsSelect())
    form.append(this.getQueryComponent())
    form.append(new ButtonComponent({ text: 'send', onclick: () => this.onSendButtonClick() }))
    return form
  }

  getEndpointsSelect() {
    this.children.endpoints.on('change', () => this.onEndpointsSelectChange())
    Array.from(getEndpointsList()).map(({ name }) => this.children.endpoints.children.input.addOption(name, name))
    return this.children.endpoints
  }

  getQueryComponent() {
    return this.children.query
  }

  getSelectedEndpoint() {
    const endpointsValue = this.children.endpoints.getValue()
    return getEndpointsList().find(({ name }) => name == endpointsValue)
  }

  onEndpointsSelectChange() {
    const endpoint = this.getSelectedEndpoint()
    this.children.query.clear()
    Array.from(endpoint.query).map((component) => this.children.query.append(this.children.inputs[component]))
  }

  onSendButtonClick() {
    const endpoint = this.getSelectedEndpoint()
    const query = Array.from(endpoint.query).reduce((q, component) => ({ ...q, [component]: this.children.inputs[component]?.getValue() }), {})
    this.sendMessage(new SocketMessageModel(endpoint.name, query))
  }

  sendMessage(message = new SocketMessageModel()) {
    this.addSocketMessage(message)
  }

  addSocketMessage(message = new SocketMessageModel()) {
    this.children.messages.prepend(new SocketMessageComponent(message))
  }

  getMessages() {
    return this.children.messages
  }
}
