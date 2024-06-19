#!/usr/bin/sh

# inputs

. .env

method="track.get"

echo
echo "method: ${method}"
echo

commontrack_id="${1}"

echo
echo "commontrack_id: ${commontrack_id}"
echo

# runner

resp=$( bash curl.sh "${method}" "commontrack_id=${commontrack_id}" )

# outputs

bash create.sh "${method}" "${commontrack_id}" "commontrack_id" "${commontrack_id}"

bash create.sh "${method}" "${commontrack_id}" "json" "${resp}"
