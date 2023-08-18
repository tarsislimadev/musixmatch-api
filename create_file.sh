#!/usr/bin/sh

. .env

index="${1}"
id="${2}"
file="${3}"
content="${4}"
dir="${DATABASE}/${index}/${id}"

mkdir -p "${dir}"
touch "${dir}/${file}"
echo "${content}" > "${dir}/${file}" 

echo written $( expr length "${content}" ) bytes in "${dir}/${file}"
