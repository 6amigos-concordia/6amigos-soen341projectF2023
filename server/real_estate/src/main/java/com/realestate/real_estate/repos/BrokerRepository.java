package com.realestate.real_estate.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface BrokerRepository extends MongoRepository<Broker, String> {
    Optional<Broker> findByName(String name);
}
