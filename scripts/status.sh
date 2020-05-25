#!/bin/sh

# BATTERY_PERCENTAGE=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%')
# BATTERY_STATUS=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19)
# BATTERY_REMAINING=$(pmset -g batt | egrep -o '([0-9]+%).*' | cut -d\  -f3)

# BATTERY_CHARGING=""

# if [ "$BATTERY_STATUS" == "Ba" ]; then
#     BATTERY_CHARGING="false"
# elif [ "$BATTERY_STATUS" == "AC" ]; then
#     BATTERY_CHARGING="true"
# fi

# WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
# WIFI_SSID=$(networksetup -getairportnetwork en0 | cut -c 24-)

# IP_ADDR=$(ifconfig | sed -En 's/127.0.0.1//;s/127.94.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p')

TIME=$(date +"%H:%M")
DATE=$(date "+%A, %B %d")

echo $(cat <<-EOF
{
    "time": "$TIME",
    "date": "$DATE"
}
EOF
)
