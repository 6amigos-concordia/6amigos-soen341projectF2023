package com.realestate.real_estate.repos;

import org.bson.types.ObjectId;
import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.equalTo;

@DataMongoTest
public class AppointmentRepositoryTests {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Arrange
    ObjectId id = new ObjectId();
    Appointment appointmentSample = Appointment.builder()
            .id(id)
            .username("Kaothar")
            .dateTime("11-06-2023 4:00PM")
            .build();
    @BeforeEach
    public void setUp() {
        // Act
        mongoTemplate.save(appointmentSample);
    }
    @Test
    public void AppointmentRepository_Save_ReturnSavedAppointmentById() {
        // Assert
        Optional<Appointment> savedAppointment = appointmentRepository.findById(id);
        MatcherAssert.assertThat(appointmentRepository.findById(id).isPresent(), equalTo(true));
        MatcherAssert.assertThat(appointmentRepository.findById(id).map(i -> i), equalTo(savedAppointment));
    }
}
