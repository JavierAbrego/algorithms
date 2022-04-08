package com.example.java;

import com.example.java.MajorityElement;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class MajorityElementTests {
    MajorityElement majorityElement = new MajorityElement();

    @Test
    void when_there_is_a_majority_element_returns_element() {
        List<Integer> integerList = new ArrayList<>(List.of(1, 2, 3, 2, 2));
        Integer result = majorityElement.calculate(integerList);
        assertEquals(result, 2);
    }

    @Test
    void when_there_is_two_majority_element_returns_element() {
        List<Integer> integerList = new ArrayList<>(List.of(1, 2, 2, 3, 3, 3, 3));
        Integer result = majorityElement.calculate(integerList);
        assertEquals(result, 3);
    }
}
