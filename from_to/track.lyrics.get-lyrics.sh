#!/bin/sh

# before

database="./data/musixmatch"

from="track.lyrics.get"

to="lyrics"

# while

track_lyrics=$( ls "${database}/${from}" )

echo "track_lyrics: ${track_lyrics}"

for track_lyric in $track_lyrics

do

echo "track_lyric: ${track_lyric}"

body=$( cat "${database}/${from}/${track_lyric}/json" | jq '.message.body' )

lyrics_id=$( echo "${body}" | jq '.lyrics?.lyrics_id' )

lyrics_body=$( echo "${body}" | jq '.lyrics?.lyrics_body' | sed -e 's/\\n/. /ig' )

# after

bash create_file.sh "${database}/${to}/${lyrics_id}/" "lyrics_id" "${lyrics_id}"

bash create_file.sh "${database}/${to}/${lyrics_id}/" "lyrics_body" "${lyrics_body}"

done
