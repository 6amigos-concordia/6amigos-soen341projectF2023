package com.realestate.real_estate.repos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized

@Document(collection = "propertyDetails")
public class PropertyDetails {
    @Id
    private ObjectId id;
    String description;
    int bedrooms;
    int bathrooms;
    int price;
    String district;
}
