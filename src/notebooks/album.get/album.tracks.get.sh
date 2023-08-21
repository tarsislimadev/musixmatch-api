#!/bin/sh

. .env

# inputs

from="album.get"

to="album.tracks.get"

albums=$( ls "${DATABASE}/${from}" )

echo "albums: ${albums}"

# runner

for album in $albums

do

body=$( cat "${DATABASE}/${from}/${album}/json" | jq '.message.body' )

album_id=$( echo "${body}" | jq '.album.album_id' )

echo
echo "album_id: ${album_id}"
echo

bash "./src/getters/${to}.sh" "${album_id}"

sleep 1

done
