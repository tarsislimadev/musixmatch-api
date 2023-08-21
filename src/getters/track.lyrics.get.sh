#!/usr/bin/sh

# inputs

. .env

method="track.lyrics.get"

echo
echo "method: ${method}"
echo

track_id="${1}"

echo
echo "track_id: ${track_id}"
echo

# runner

resp=$( bash curl.sh "${method}" "track_id=${track_id}" | jq )

# outputs

bash create.sh "${method}" "${track_id}" "track_id" "${track_id}"

bash create.sh "${method}" "${track_id}" "json" "${resp}"
