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
    private String id;
    int bedrooms;
    int bathrooms;
    int price;
    String district;
    String cityName;
    String streetName;
    String propertyType;
    String imageUrl;

    public PropertyDetails(
        String id,
        int bedrooms, 
        int bathrooms, 
        int price,
        String district, 
        String cityName, 
        String streetName, 
        String propertyType,
        String imageUrl) {
        this.id = id;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.price = price;
        this.district = district;
        this.cityName = cityName;
        this.streetName = streetName;
        this.propertyType = propertyType;
        this.imageUrl = imageUrl;
    }
}
