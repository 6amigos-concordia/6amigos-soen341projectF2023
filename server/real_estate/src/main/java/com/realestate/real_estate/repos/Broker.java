package com.realestate.real_estate.repos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "brokers")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Broker {
    @Id
    private String id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String agency;
    private String licenseNum;
    private int experience;
    private String imageUrl;

    public Broker updateWith(Broker broker) {
        return new Broker(
                this.id,
                broker.name,
                this.password,
                broker.email,
                broker.phone,
                broker.agency,
                broker.licenseNum,
                broker.experience,
                broker.imageUrl
        );
    }
}
