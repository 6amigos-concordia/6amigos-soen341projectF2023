package com.realestate.real_estate.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
}