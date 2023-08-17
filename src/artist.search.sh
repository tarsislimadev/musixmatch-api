#!/usr/bin/sh

# before

. .env

method="artist.search"

echo
echo "method: ${method}"
echo

echo musixmatch artist:

read artist

q_artist=$( echo "${artist}" | sed -e 's/ /+/ig' )

echo
echo "q_artist: ${q_artist}"
echo

# while

resp=$( bash musixmatch.sh "${method}" "page_size=80&q_artist=${q_artist}" | jq )

# after

bash create_file.sh "${method}" "${q_artist}" "q_artist" "${q_artist}"

bash create_file.sh "${method}" "${q_artist}" "json" "${resp}"
