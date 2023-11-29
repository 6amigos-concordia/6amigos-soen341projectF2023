package com.realestate.real_estate.repos;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends MongoRepository<Property, String> {
    Optional<List<Property>> searchPropertiesByAddress(String address);
}
