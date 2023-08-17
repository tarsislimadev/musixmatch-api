#!/usr/bin/sh

. .env

dir="${1}"
file="${2}"
content="${3}"

mkdir -p "${DATA_PATH}/${dir}"
touch "${dir}/${file}"
echo "${content}" > "${dir}/${file}"
