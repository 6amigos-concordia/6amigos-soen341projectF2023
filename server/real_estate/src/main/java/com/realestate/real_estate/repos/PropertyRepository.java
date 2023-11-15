package com.realestate.real_estate.repos;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends MongoRepository<Property, String> {
    @Query("{bedrooms: ?0, bathrooms: ?1, minPrice: ?2, maxPrice: ?3, district: ?4}")                            
    List<PropertyDetails> searchProperties(int bedrooms, int bathrooms, double minPrice, double maxPrice, String district, String cityName, String streetName, String propertyType);
}
