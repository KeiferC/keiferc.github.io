#!/bin/bash
WORDS=$(cat wordlist.txt)
for WORD in $WORDS
do
        echo "performing attack with payload: $WORD"
        touch input.txt
        echo "username" > input.txt
        echo $WORD >> input.txt
        echo "temp-code" >> input.txt
        rm vending-machines.json
        cat input.txt | ./vending-machines > /dev/null
        if [ ! -f ./outputs.txt ]; then
                touch outputs.txt
        fi
        echo "$WORD:$(cat vending-machines.json)" >> outputs.txt
done
