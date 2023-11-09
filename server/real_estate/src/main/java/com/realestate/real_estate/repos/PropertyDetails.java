package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class PropertyDetails {
    String description;
    int bedrooms;
    int bathrooms;
}
