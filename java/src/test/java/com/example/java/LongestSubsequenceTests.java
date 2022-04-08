package com.example.java;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class LongestSubsequenceTests {

    LongestSubSequence longestSubSequence = new LongestSubSequence();

    @Test
    void calculate_returns_6() {
        assertEquals(6,
                longestSubSequence.calculate(null, new ArrayList<>(List.of(0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15)))
        );

    }

    @Test
    void calculate_returns_3() {
        assertEquals(3,
                longestSubSequence.calculate(null, new ArrayList<>(List.of(1, 2, 1, 5)))
        );
    }

    @Test
    void calculate_returns_5() {
        assertEquals(5,
                longestSubSequence.calculate(null, new ArrayList<>(List.of(1, 3, 1, 3, 2, 3, 4, 5)))
        );
    }

    @Test
    void calculate2_returns_6() {
        assertEquals(6,
                longestSubSequence.calculate2( new ArrayList<>(List.of(0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15)))
        );

    }

    @Test
    void calculate2_returns_3() {
        assertEquals(3,
                longestSubSequence.calculate2( new ArrayList<>(List.of(1, 2, 1, 5)))
        );
    }

    @Test
    void calculate2_returns_5() {
        assertEquals(5,
                longestSubSequence.calculate2( new ArrayList<>(List.of(1, 3, 1, 3, 2, 3, 4, 5)))
        );
    }
}
