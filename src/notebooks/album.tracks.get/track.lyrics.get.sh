#!/bin/sh

. .env

# inputs

from="album.tracks.get"

to="track.lyrics.get"

tracks=$( ls "${DATABASE}/${from}" )

echo "tracks: ${tracks}"

# runner

for track in $tracks

do

body=$( cat "${DATABASE}/${from}/${track}/json" | jq '.message.body' )

track_ids=$( echo "${body}" | jq '.track_list[].track.track_id' )

echo
echo "track_ids: ${track_ids}"
echo

for track_id in $track_ids

do

echo
echo "track_id: ${track_id}"
echo

# outputs

bash "./src/getters/${to}.sh" "${track_id}"

sleep 1

done

sleep 1

done
