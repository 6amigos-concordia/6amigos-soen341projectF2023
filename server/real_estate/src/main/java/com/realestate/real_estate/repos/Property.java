package com.realestate.real_estate.repos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Jacksonized
@Document(collection = "properties")
public class Property {
    @Id
    private String id;
    private String address;
    private PropertyDetails details;
    private List<String> appointmentIds;
    @DocumentReference
    private List<Broker> brokerIds;

    public Property updateWith(Property property) {
        return new Property(
                this.id,
                property.address,
                property.details,
                property.appointmentIds,
                property.brokerIds
        );
    }
}
