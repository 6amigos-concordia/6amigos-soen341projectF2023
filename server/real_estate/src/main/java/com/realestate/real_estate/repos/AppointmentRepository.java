package com.realestate.real_estate.repos;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, ObjectId> {
}