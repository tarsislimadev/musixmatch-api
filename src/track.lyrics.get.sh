#!/usr/bin/sh

# before

method="track.lyrics.get"

track_id=$( echo "${1}" | sed -e 's/ /+/ig' )

# while

resp=$( bash musixmatch.sh "${method}" "track_id=${track_id}" | jq )

# after

bash create_file.sh "./data/api.musixmatch.com/${method}/${track_id}/" "track_id" "${track_id}"

bash create_file.sh "./data/api.musixmatch.com/${method}/${track_id}/" "json" "${resp}"
