import * as assert from "assert";
import {majorityElement} from "./majorityElement";
import {distributeCandy} from "./distributeCandy";
import {longestIncrementalSubsequence} from "./longestIncrementalSubsequence";
import {rotationalCipher} from "./rotationalCipher";

assert.deepEqual(majorityElement([1, 2, 2]), 2)

assert.deepEqual(distributeCandy([1, 2]), 3)
assert.deepEqual(distributeCandy([1, 3, 2, 1]), 7)

assert.deepEqual(longestIncrementalSubsequence([1, 2, 1, 3]), 3)
assert.deepEqual(longestIncrementalSubsequence([1, 2, 1, 3, 2, 5, 3, 6, 7, 8]), 7)

assert.deepEqual(rotationalCipher("All-convoYs-9-be:Alert1.", 4), "Epp-gsrzsCw-3-fi:Epivx5.")
assert.deepEqual(rotationalCipher("abcdZXYzxy-999.@", 200), "stuvRPQrpq-999.@")

