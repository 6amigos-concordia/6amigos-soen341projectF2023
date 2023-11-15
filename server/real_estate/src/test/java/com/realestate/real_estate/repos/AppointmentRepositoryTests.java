package com.realestate.real_estate.repos;

import org.bson.types.ObjectId;
import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.*;

import static org.hamcrest.Matchers.equalTo;

@DataMongoTest
public class AppointmentRepositoryTests {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Arrange
    ObjectId idAppointment = new ObjectId();
    Appointment appointmentSample = Appointment.builder()
            .id(idAppointment)
            .dateTime("2023-11-08")
            .username("Kaothar")
            .userEmail("kaotharr97@gmail.com")
            .address("2334 Rue Richard")
            .build();
    @BeforeEach
    public void setUp() {
        // Act
        mongoTemplate.save(appointmentSample);
    }
    @Test
    public void AppointmentRepository_Save_ReturnSavedAppointmentById() {
        // Assert
        Optional<Appointment> savedAppointment = appointmentRepository.findById(idAppointment);
        MatcherAssert.assertThat(appointmentRepository.findById(idAppointment).isPresent(), equalTo(true));
        MatcherAssert.assertThat(appointmentRepository.findById(idAppointment).map(i -> i), equalTo(savedAppointment));
    }
}
