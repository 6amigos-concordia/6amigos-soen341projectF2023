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
    private String id;
    String address;
    PropertyDetails details;
    String[] appointmentIds;

    public Property updateWith(Property item) {
        return new Property(
                this.id,
                item.address,
                item.details,
                item.appointmentIds
        );
    }
}
