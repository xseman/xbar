#!/bin/bash

PATH=/usr/local/bin/:$PATH

WINDOWS=$(
    yabai -m query --windows --display 1
)

echo $(cat <<-EOF
    $WINDOWS
EOF
)
