#!/usr/bin/sh

# inputs

. .env

method="track.lyrics.get"

echo
echo "method: ${method}"
echo

echo musixmatch track id:

track_id=

if [[ -z "${track_id}" ]]; then
  track_id="${1}"
fi

echo
echo "track_id: ${track_id}"
echo

# runner

resp=$( bash musixmatch.sh "${method}" "track_id=${track_id}" | jq )

# outputs

bash create_file.sh "${method}" "${track_id}" "track_id" "${track_id}"

bash create_file.sh "${method}" "${track_id}" "json" "${resp}"
