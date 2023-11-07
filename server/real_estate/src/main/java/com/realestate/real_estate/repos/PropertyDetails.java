package com.realestate.real_estate.repos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized

@Document(collection = "propertyDetails")
public class PropertyDetails {
    @Id
    int id;
    String description;
    int bedrooms;
    int bathrooms;
    int price;
    String district;
    public Property updateWith(Property property) {
        return null;
    }
}
