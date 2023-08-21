#!/usr/bin/sh

# echo ". .env"
. .env

# echo index "${index}"
index="${1}"

# echo id "${id}"
id="${2}"

# echo file "${file}"
file="${3}"

# echo content "${content}"
content="${4}"

# echo dir "${dir}"
dir="${DATABASE}/${index}/${id}"

mkdir -p "${dir}"
touch "${dir}/${file}"
echo "${content}" > "${dir}/${file}" 

echo written $( expr length "${content}" ) bytes in "${dir}/${file}" 
