package com.realestate.real_estate.repos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "brokers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Broker {
    @Id
    private ObjectId id;
    private String name;
    private String dob;
    private String education;
    private String experience;
}
