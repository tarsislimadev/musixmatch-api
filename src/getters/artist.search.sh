#!/usr/bin/sh

# inputs

. .env

method="artist.search"

echo
echo "method: ${method}"
echo

artist="${1}"

echo
echo "artist: ${artist}"
echo

q_artist=$( bash accents.sh "${artist}" )

echo
echo "q_artist: ${q_artist}"
echo

page_size=80

echo
echo "page_size: ${page_size}"
echo

# runner

resp=$( bash curl.sh "${method}" "page_size=${page_size}&q_artist=${q_artist}" | jq )

# outputs

bash create_file.sh "${method}" "${q_artist}" "q_artist" "${q_artist}"

bash create_file.sh "${method}" "${q_artist}" "json" "${resp}"
