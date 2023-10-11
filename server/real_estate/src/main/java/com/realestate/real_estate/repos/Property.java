package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;

@Data
@Builder
@Jacksonized
public class Property {
    @Id
    String id;
    String address;
    PropertyDetails details;
    String[] appointmentIds;
}
