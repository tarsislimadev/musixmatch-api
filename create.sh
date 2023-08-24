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

bytes=$( expr length "${content}" )

if [[ "${bytes}" -le 0 ]]; then
  echo "exiting with ${bytes}" bytes

  exit 0
fi

echo "writing ${bytes} bytes in ${dir}/${file}" 

mkdir -p "${dir}"
touch "${dir}/${file}"
bash ./lines.sh "${content}" > "${dir}/${file}" 
