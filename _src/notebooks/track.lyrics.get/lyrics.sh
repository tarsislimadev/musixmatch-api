#!/bin/sh

. .env

# inputs

from="track.lyrics.get"

to="lyrics"

# runner

lyrics=$( ls "${DATABASE}/${from}" )

echo "lyrics: ${lyrics}"

for lyric in $lyrics

do

echo "lyric: ${lyric}"

body=$( cat "${DATABASE}/${from}/${lyric}/json" | jq '.message.body' )

lyrics_id=$( echo "${body}" | jq '.lyrics?.lyrics_id' )

lyrics_body=$( echo "${body}" | jq '.lyrics?.lyrics_body' | sed -e 's/\\n/. /ig' )

# outputs

bash create.sh "${to}" "${lyrics_id}" "lyrics_id" "${lyrics_id}"

bash create.sh "${to}" "${lyrics_id}" "lyrics_body" "${lyrics_body}"

done
