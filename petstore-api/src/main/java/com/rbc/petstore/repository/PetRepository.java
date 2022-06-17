package com.rbc.petstore.repository;

import com.rbc.petstore.model.Pet;
import org.springframework.data.repository.CrudRepository;

/**
 * {@link Pet} CRUD operations
 */
public interface PetRepository extends CrudRepository<Pet, Long> {
}
