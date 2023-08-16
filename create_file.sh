#!/usr/bin/sh

dir="${1}"
file="${2}"
content="${3}"

mkdir -p "${dir}"
touch "${dir}/${file}"
echo "${content}" > "${dir}/${file}"
