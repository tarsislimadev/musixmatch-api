#!/usr/bin/sh

. .env

path="${1}"
apikey="apikey=${MUSIXMATCH_APIKEY}"
queries="${2}"

curl -sL "http://api.musixmatch.com/ws/1.1/${path}?${apikey}&${queries}"
