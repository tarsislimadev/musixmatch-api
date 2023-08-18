#!/usr/bin/sh

# inputs

. .env

method="track.lyrics.get"

echo
echo "method: ${method}"
echo

echo musixmatch track id:

read track_id

echo
echo "track_id: ${track_id}"
echo

# runner

resp=$( bash musixmatch.sh "${method}" "track_id=${track_id}" | jq )

# outputs

bash create_file.sh "${method}" "${track_id}" "track_id" "${track_id}"

bash create_file.sh "${method}" "${track_id}" "json" "${resp}"
