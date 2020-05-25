#!/bin/bash

SPACES=$(
    /usr/local/bin/yabai -m query --spaces
)

echo $(cat <<-EOF
    {
        "spaces": $SPACES
    }
EOF
)
