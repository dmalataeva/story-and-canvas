#!/bin/bash

PROJECT=$1

BOULANGERIE="boulangerie"
SPACE_STONE="space-stone"

if [[ $PROJECT ==  $BOULANGERIE ]]; then
    echo "chose boulangerie"
elif [[ $PROJECT == $SPACE_STONE ]]; then
    echo "chose space stone"
else
    echo "invalid project; please choose an existing project"
fi