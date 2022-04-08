package com.example.java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

public class LongestSubSequence {
    private List<Integer> getPossibleNext(Integer current, List<Integer> numberList) {
        return numberList.stream().filter(num -> num > current).toList();
    }

    public int calculate(Integer current, List<Integer> numberList) {
        List<Integer> possibleNext = current != null ? getPossibleNext(current, numberList) : numberList;
        return IntStream.range(0, possibleNext.size())
                .map(index -> calculate(possibleNext.get(index), possibleNext.subList(index, possibleNext.size())) + 1)
                .max().orElse(0);
    }

    public int calculate5(List<Integer> nums) {
        List<Integer> numOfPreviousDecreasingElementsWithoutRepetition = new ArrayList<>(Collections.nCopies(nums.size(), 1));
        return IntStream.range(0, nums.size())
                .map(indexA -> {
                    AtomicInteger indexB = new AtomicInteger(0);
                    return nums.subList(0, indexA).stream().reduce(1, (max, subNum) -> {
                        if (subNum < nums.get(indexA)) {
                            max = Math.max(max, numOfPreviousDecreasingElementsWithoutRepetition.get(indexB.get()) + 1);
                        }
                        numOfPreviousDecreasingElementsWithoutRepetition.set(indexA, max);
                        indexB.incrementAndGet();
                        return max;
                    });
                }).max().orElse(1);
    }

    public int calculate3(List<Integer> nums) {
        if (nums == null || nums.size() == 0)
            return 0;
        int maxLIS = 1;
        int[] dp = new int[nums.size()];
        dp[0] = 1;
        for (int i = 1; i < nums.size(); i++) {
            int max = 1;
            for (int j = 0; j < i; j++) {
                if (nums.get(j) < nums.get(i)) {
                    max = Math.max(max, dp[j] + 1);
                }
            }
            dp[i] = max;
            maxLIS = Math.max(maxLIS, dp[i]);
        }
        return maxLIS;
    }

    public int calculate4(List<Integer> nums) {
        List<Integer> dp = new ArrayList<>(Collections.nCopies(nums.size(), 1));
        return IntStream.range(0, nums.size())
                .map(indexA -> {
                    AtomicInteger max = new AtomicInteger(1);
                    List<Integer> subList = nums.subList(0, indexA);
                    IntStream.range(0, subList.size()).forEach(indexB -> {
                        if (subList.get(indexB) < nums.get(indexA)) {
                            max.set(Math.max(max.get(), dp.get(indexB) + 1));
                        }
                        dp.set(indexA, max.get());
                    });
                    return max.get();
                }).max().orElse(1);
    }

    public int calculate2(List<Integer> sequence) {
        List<Integer> listOfIncreasingPreviousElements = new ArrayList<>(Collections.nCopies(sequence.size(), 1));
        for (int currentSeqIndex = 0; currentSeqIndex < sequence.size(); currentSeqIndex++) {
            List<Integer> previousElements = sequence.subList(0, currentSeqIndex);
            int numOfIncreasingPreviousElements = 1;
            for (int indexPrev = 0; indexPrev < previousElements.size(); indexPrev++) {
                if (sequence.get(currentSeqIndex) > previousElements.get(indexPrev)) {
                    numOfIncreasingPreviousElements = Math.max(numOfIncreasingPreviousElements, listOfIncreasingPreviousElements.get(indexPrev)+1);
                }
                listOfIncreasingPreviousElements.set(currentSeqIndex, numOfIncreasingPreviousElements);
            }
        }
        return listOfIncreasingPreviousElements.stream().mapToInt(i -> i).max().orElse(1);
    }
}
