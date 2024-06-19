import { HTML } from '@brtmvdl/frontend'

import { InputComponent } from './input.component.js'

export class InputsComponent extends HTML {
  children = {
    apikey: new InputComponent('apikey', ''),
    track_id: new InputComponent('track_id', ''),
    artist_id: new InputComponent('artist_id', ''),
    album_id: new InputComponent('album_id', ''),
    commontrack_id: new InputComponent('commontrack_id', ''),
    track_mbid: new InputComponent('track_mbid', ''),
    artist_mbid: new InputComponent('artist_mbid', ''),
    album_mbid: new InputComponent('album_mbid', ''),
    q_track: new InputComponent('q_track', ''),
    q_artist: new InputComponent('q_artist', ''),
    q_lyrics: new InputComponent('q_lyrics', ''),
    q: new InputComponent('q', ''),
    f_has_lyrics: new InputComponent('f_has_lyrics', ''),
    f_is_instrumental: new InputComponent('f_is_instrumental', ''),
    f_has_subtitle: new InputComponent('f_has_subtitle', ''),
    f_music_genre_id: new InputComponent('f_music_genre_id', ''),
    f_subtitle_length: new InputComponent('f_subtitle_length', ''),
    f_subtitle_length_max_deviation: new InputComponent('f_subtitle_length_max_deviation', ''),
    f_lyrics_language: new InputComponent('f_lyrics_language', ''),
    f_artist_id: new InputComponent('f_artist_id', ''),
    f_artist_mbid: new InputComponent('f_artist_mbid', ''),
    g_commontrack: new InputComponent('g_commontrack', ''),
    s_track_rating: new InputComponent('s_track_rating', ''),
    s_track_release_date: new InputComponent('s_track_release_date', ''),
    s_artist_rating: new InputComponent('s_artist_rating', ''),
    page: new InputComponent('page', ''),
    page_size: new InputComponent('page_size', ''),
    subtitle_format: new InputComponent('subtitle_format', ''),
    country: new InputComponent('country', ''),
  }

  getComponent(component) {
    return this.children[component]
  }

  getValue() {
    return this.getComponent(component)?.getValue()
  }
}
