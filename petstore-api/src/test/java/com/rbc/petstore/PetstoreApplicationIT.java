package com.rbc.petstore;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class PetstoreApplicationIT {

    @Test
    void contextLoads() {
        assertTrue(true, "Context loads");
    }

}
