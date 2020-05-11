#!/bin/bash

PATH=/usr/local/bin/:$PATH

SPACES=$(
    yabai -m query --spaces --display 1
)

echo $(cat <<-EOF
    $SPACES
EOF
)
