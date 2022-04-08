package com.example.java;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Function;
import java.util.stream.Collectors;

public class DistributeCandy {
    public int distribute(List<Integer> candidateList) {
        AtomicInteger candy = new AtomicInteger(1);
        HashMap<Integer, Integer> candyMap = candidateList.stream()
                .distinct()
                .collect(Collectors.toMap(Function.identity(), (a) -> candy.getAndIncrement(), (a, b) -> a, HashMap::new));
        return candidateList.stream().map(candyMap::get).reduce(Integer::sum).orElseGet(() -> 0);
    }

    public int distribute2(List<Integer> candidateList) {
        AtomicInteger counter = new AtomicInteger(1);
        Map<Integer, Integer> candyMap = candidateList.stream().distinct().collect(Collectors.toMap(Function.identity(), (a) -> counter.getAndIncrement()));
        return candidateList.stream().reduce((acc, val)->acc+candyMap.get(val)).orElseGet(() -> 0);
    }

    public int distribute3(List<Integer> candidateList) {
        Map<Integer, Integer> candyMap = new HashMap<>();
        for (Integer candidate : candidateList) {
            candyMap.put(candidate, 1);
        }
        int counter = 0;
        for (Map.Entry entry : candyMap.entrySet()) {
            entry.setValue(++counter);
        }
        int sum = 0;
        for (Integer candidate : candidateList) {
            sum+= candyMap.get(candidate);
        }
        return sum;
    }
}
