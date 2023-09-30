#!/usr/bin/sh

# inputs

. .env

method="track.search"

echo
echo "method: ${method}"
echo

lyrics="${1}"

echo
echo "lyrics: ${lyrics}"
echo

q_lyrics=$( bash accents.sh "${lyrics}" )

echo
echo "q_lyrics: ${q_lyrics}"
echo

page_size=80

echo
echo "page_size: ${page_size}"
echo

# runner

resp=$( bash curl.sh "${method}" "page_size=${page_size}&q_lyrics=${q_lyrics}" )

# outputs

bash create.sh "${method}" "${q_lyrics}" "q_lyrics" "${q_lyrics}"

bash create.sh "${method}" "${q_lyrics}" "json" "${resp}"
