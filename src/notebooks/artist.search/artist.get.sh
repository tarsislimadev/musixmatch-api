#!/bin/sh

. .env

# inputs

from="artist.search"

to="artists"

artists=$( ls "${DATABASE}/${from}" )

echo "artists: ${artists}"

# runner

for artist in $artists

do

body=$( cat "${DATABASE}/${from}/${artist}/json" | jq '.message.body' )

artist_ids=$( echo "${body}" | jq '.artist_list[].artist.artist_id' )

echo
echo "artist_ids: ${artist_ids}"
echo

for artist_id in $artist_ids

do

echo
echo "artist_id: ${artist_id}"
echo

bash ./src/getters/artist.get.sh "${artist_id}"

sleep 1

done

sleep 1

done
