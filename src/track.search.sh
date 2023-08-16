#!/usr/bin/sh

# before

method="track.search"

q_artist=$( echo "${1}" | sed -e 's/ /+/ig' )

# while

resp=$( bash musixmatch.sh "${method}" "q_artist=${q_artist}" | jq )

# after

bash create_file.sh "./data/musixmatch/${method}/${q_artist}/" "q_artist" "${q_artist}"

bash create_file.sh "./data/musixmatch/${method}/${q_artist}/" "json" "${resp}"
