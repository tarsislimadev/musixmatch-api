#!/bin/sh

. .env

# inputs

from="artist.albums.get"

albums=$( ls "${DATABASE}/${from}" )

echo "albums: ${albums}"

# runner

for album in $albums

do

body=$( cat "${DATABASE}/${from}/${album}/json" | jq '.message.body' )

album_ids=$( echo "${body}" | jq '.album_list[].album.album_id' )

echo
echo "album_ids: ${album_ids}"
echo

for album_id in $album_ids

do

echo
echo "album_id: ${album_id}"
echo

bash ./src/getters/album.get.sh "${album_id}"

sleep 2

done

sleep 2

done
