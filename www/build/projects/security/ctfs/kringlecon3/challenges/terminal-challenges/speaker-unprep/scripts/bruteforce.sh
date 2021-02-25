#!/bin/bash
CHARS=$(cat numsymlist.txt)
for CHAR in $CHARS
do
        echo "performing attack with payload: $CHAR"
        touch input.txt
        echo "username" > input.txt
        echo "CandyCane${CHAR}" >> input.txt
        echo "temp-code" >> input.txt
        rm vending-machines.json
        cat input.txt | ./vending-machines > /dev/null
        OUTPUT=$(cat vending-machines.json | python -c \
                'import json,sys;obj=json.load(sys.stdin);print obj["password"]')
        if [[ "$OUTPUT" == "LVEdQPpBwr" ]]; then
                echo "Found: CandyCane${CHAR} -- $OUTPUT"
                break
        fi
done
