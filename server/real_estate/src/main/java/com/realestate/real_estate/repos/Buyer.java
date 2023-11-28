package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Jacksonized
@Document(collection = "Buyers")
public class Buyer {
    @Id
    String id;
    String name;
    String email;
    String password;

    public Buyer updateWith(Buyer buyer) {
        return new Buyer(
                this.id,
                this.password,
                buyer.name,
                buyer.email
        );
    }
}
