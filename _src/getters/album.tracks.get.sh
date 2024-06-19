#!/usr/bin/sh

# inputs

. .env

method="album.tracks.get"

echo
echo "method: ${method}"
echo

album_id="${1}"

echo
echo "album_id: ${album_id}"
echo

page_size=80

echo
echo "page_size: ${page_size}"
echo

# runner

resp=$( bash curl.sh "${method}" "page_size=${page_size}&album_id=${album_id}" )

# outputs

bash create.sh "${method}" "${album_id}" "album_id" "${album_id}"

bash create.sh "${method}" "${album_id}" "json" "${resp}"
