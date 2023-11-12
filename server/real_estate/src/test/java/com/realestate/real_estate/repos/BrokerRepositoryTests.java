package com.realestate.real_estate.repos;

import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import java.util.Optional;

import static org.hamcrest.Matchers.equalTo;

@DataMongoTest
public class BrokerRepositoryTests {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private BrokerRepository brokerRepository;
    Broker brokerSample = Broker.builder()
            .id("123")
            .name("Jimbo-test")
            .email("jimbo@example.com")
            .phone("04748292827")
            .agency("Jimbo's Agency")
            .licenseNum("vndajvdbnajvn")
            .experience(2)
            .imageUrl("https://i.ibb.co/r0N3Ffb/Jimbo.webp")
            .build();
    @BeforeEach
    public void setUp() {
        // Act
        mongoTemplate.save(brokerSample);
    }
    @Test
    public void BrokerRepository_Save_ReturnSavedBrokerById() {
        // Assert
        Optional<Broker> savedBroker = brokerRepository.findById("123");
        MatcherAssert.assertThat(brokerRepository.findById("123").isPresent(), equalTo(true));
        MatcherAssert.assertThat(brokerRepository.findById("123").map(i -> i), equalTo(savedBroker));
    }
}
