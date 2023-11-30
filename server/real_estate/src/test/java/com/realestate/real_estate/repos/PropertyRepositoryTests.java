package com.realestate.real_estate.repos;

import org.bson.types.ObjectId;
import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.TestPropertySource;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;

@DataMongoTest
public class PropertyRepositoryTests {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private PropertyRepository propertyRepository;

    // Arrange
    String id = new String();
    PropertyDetails propertyDetailsSample = PropertyDetails.builder().bedrooms(2).bathrooms(2).build();
    List<String> appointmentIdsSample = new ArrayList<>();
    List<Broker> brokerIdsSample = new ArrayList<>();
    Property propertySample = Property.builder()
            .id("123")
            .address("1455 De Maisonneuve Blvd. W.")
            .details(propertyDetailsSample)
            .appointmentIds(appointmentIdsSample)
            .brokerIds(brokerIdsSample)
            .build();
    @BeforeEach
    public void setUp() {
        // Act
        mongoTemplate.save(propertySample);
    }
    @Test
    public void PropertyRepository_Save_ReturnSavedPropertyById() {
        // Assert
        Optional<Property> savedProperty = propertyRepository.findById("123");
        MatcherAssert.assertThat(propertyRepository.findById("123").isPresent(), equalTo(true));
        MatcherAssert.assertThat(propertyRepository.findById("123").map(i -> i), equalTo(savedProperty));
    }
}
