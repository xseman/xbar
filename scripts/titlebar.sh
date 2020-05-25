#!/bin/bash

WINDOWS=$(
    /usr/local/bin/yabai -m query --windows --display 1
)

echo $(cat <<-EOF
    {
        "windows": $WINDOWS
    }
EOF
)
