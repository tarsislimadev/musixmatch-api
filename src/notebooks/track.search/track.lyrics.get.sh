#!/bin/sh

. .env

# inputs

from="track.search"

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

bash ./src/getters/track.lyrics.get.sh "${track_id}"

sleep 2

done

sleep 2

done
