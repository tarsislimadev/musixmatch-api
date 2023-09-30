#!/usr/bin/sh

# inputs

. .env

method="artist.albums.get"

echo
echo "method: ${method}"
echo

artist_id="${1}"

echo
echo "artist_id: ${artist_id}"
echo

page_size=80

echo
echo "page_size: ${page_size}"
echo

# runner

resp=$( bash curl.sh "${method}" "page_size=${page_size}&artist_id=${artist_id}" )

# outputs

bash create.sh "${method}" "${artist_id}" "artist_id" "${artist_id}"

bash create.sh "${method}" "${artist_id}" "json" "${resp}"
