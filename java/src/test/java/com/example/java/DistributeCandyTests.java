package com.example.java;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class DistributeCandyTests {
    DistributeCandy distributeCandy = new DistributeCandy();

    @Test
    void distribute_candy_returns_3() {
        assertEquals(distributeCandy.distribute(List.of(1,2)),3);
    }

    @Test
    void distribute_candy_returns_7() {
        assertEquals(distributeCandy.distribute(List.of(1, 3, 2, 1)),7);
    }

    @Test
    void distribute2_candy_returns_3() {
        assertEquals(distributeCandy.distribute2(List.of(1,2)),3);
    }

    @Test
    void distribute2_candy_returns_7() {
        assertEquals(distributeCandy.distribute2(List.of(1, 3, 2, 1)),7);
    }

    @Test
    void distribute3_candy_returns_3() {
        assertEquals(distributeCandy.distribute3(List.of(1,2)),3);
    }

    @Test
    void distribute3_candy_returns_7() {
        assertEquals(distributeCandy.distribute3(List.of(1, 3, 2, 1)),7);
    }
}
