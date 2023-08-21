#!/bin/sh

# inputs

from="track.lyrics.get"

to="lyrics"

# runner

track_lyrics=$( ls "${DATABASE}/${from}" )

echo "track_lyrics: ${track_lyrics}"

for track_lyric in $track_lyrics

do

echo "track_lyric: ${track_lyric}"

body=$( cat "${DATABASE}/${from}/${track_lyric}/json" | jq '.message.body' )

lyrics_id=$( echo "${body}" | jq '.lyrics?.lyrics_id' )

lyrics_body=$( echo "${body}" | jq '.lyrics?.lyrics_body' | sed -e 's/\\n/. /ig' )

# outputs

bash create "${to}" "${lyrics_id}" "lyrics_id" "${lyrics_id}"

bash create "${to}" "${lyrics_id}" "lyrics_body" "${lyrics_body}"

done
