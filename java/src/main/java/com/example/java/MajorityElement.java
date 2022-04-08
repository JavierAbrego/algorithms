package com.example.java;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class MajorityElement {
    public int calculate(List<Integer> numberList) {
        return numberList.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting())).entrySet()
                .stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .filter(integerLongEntry -> integerLongEntry.getValue() > Math.floor(numberList.size() / 2))
                .toList().stream()
                .findFirst().orElseThrow().getKey();
    }
}
