/**
 *
 */
package com.rbc.petstore.service;

import com.rbc.petstore.model.InventoryStatus;
import com.rbc.petstore.model.Pet;
import com.rbc.petstore.repository.PetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

/**
 *
 */
//@Ignore
@ExtendWith(MockitoExtension.class)
class PetServiceTest {

    @InjectMocks
    private PetService petService;

    @Mock
    private PetRepository petRepository;

    private Pet bella;
    private Pet bunny;
    private Pet chocky;

    @BeforeEach
    void setUp() {
        bella = new Pet(1L, "bella", InventoryStatus.AVAILABLE);
        bunny = new Pet(2L, "bunny", InventoryStatus.PENDING);
        chocky = new Pet(3L, "chocky", InventoryStatus.SOLD);
    }

    /**
     * Test {@link PetService#getAllPets()}
     */
    @Test
    void test_getAll() {
        when(petRepository.findAll()).thenReturn(Arrays.asList(bella, bunny, chocky));

        Iterable<Pet> result = petService.getAllPets();
        assertNotNull(result);
        assertEquals(3, result.spliterator().getExactSizeIfKnown());
    }

    /**
     * Test {@link PetService#getPet(Long)}
     */
    @Test
    void test_getById() {
        when(petRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(bella));

        Pet result = petService.getPet(1L);

        assertNotNull(result);
        assertEquals(bella.getName(), result.getName());
    }

    /**
     * Test {@link PetService#createPet(Pet)}
     */
    @Test
    void test_createPet() {
        bella.setId(null);
        when(petRepository.save(bella)).thenReturn(bella);

        Pet result = petService.createPet(bella);

        assertNotNull(result);
        assertEquals(bella.getName(), result.getName());
    }
}
