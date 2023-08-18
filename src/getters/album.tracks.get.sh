#!/usr/bin/sh

# inputs

. .env

method="album.tracks.get"

echo
echo "method: ${method}"
echo

echo musixmatch album_id:

read album_id

if [[ -z "${album_id}" ]]; then
  album_id="${1}"
fi

# runner

resp=$( bash musixmatch.sh "${method}" "page_size=80&album_id=${album_id}" | jq )

# outputs

bash create_file.sh "${method}" "${album_id}" "album_id" "${album_id}"

bash create_file.sh "${method}" "${album_id}" "json" "${resp}"
