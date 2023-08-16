#!/usr/bin/sh

path="${1}"
apikey="apikey=26b4d8590f68cb916cb0437cabe44b2a"
queries="${2}"

curl -sL "http://api.musixmatch.com/ws/1.1/${path}?${apikey}&${queries}" 
