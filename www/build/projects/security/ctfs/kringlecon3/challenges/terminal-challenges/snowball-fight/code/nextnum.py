# nextnum.py
# quick script that predicts a Mersenne twister and passes the
# next value as the seed to a PRNG

import random
from mt19937predictor import MT19937Predictor

predictor = MT19937Predictor()

with open('nums.txt', 'r') as file:
    for line in file:
        predictor.setrand_int32(int(line))

print(predictor.getrandbits(32))
