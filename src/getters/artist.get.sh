#!/usr/bin/sh

# inputs

. .env

method="artist.get"

echo
echo "method: ${method}"

artist_id="${1}"

echo
echo "artist_id: ${artist_id}"

# runner

resp=$( bash curl.sh "${method}" "artist_id=${artist_id}" | jq )

# outputs

bash create.sh "${method}" "${artist_id}" "artist_id" "${artist_id}"

bash create.sh "${method}" "${artist_id}" "json" "${resp}"
