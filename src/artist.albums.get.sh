#!/usr/bin/sh

# before

method="artist.albums.get"

echo
echo "method: ${method}"
echo

echo musixmatch artist_id:

read artist_id

# while

resp=$( bash musixmatch.sh "${method}" "page_size=80&artist_id=${artist_id}" | jq )

# after

bash create_file.sh "./data/musixmatch/${method}/${artist_id}/" "artist_id" "${artist_id}"

bash create_file.sh "./data/musixmatch/${method}/${artist_id}/" "json" "${resp}"
