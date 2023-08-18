#!/usr/bin/sh

# inputs

. .env

method="artist.get"

echo
echo "method: ${method}"
echo

echo musixmatch artist_id:

read artist_id

# runner

resp=$( bash musixmatch.sh "${method}" "artist_id=${artist_id}" | jq )

# outputs

bash create_file.sh "${method}" "${artist_id}" "artist_id" "${artist_id}"

bash create_file.sh "${method}" "${artist_id}" "json" "${resp}"
