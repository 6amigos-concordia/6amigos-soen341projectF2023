package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Jacksonized
@Document(collection = "offers")
public class Offer {
    @Id
    ObjectId id;
    String brokerName;
    String brokerEmail;
    String brokerLicenseNum;
    String Agency;
    String buyerName;
    String buyerAddress;
    String buyerEmail;
    String addressProperty;
    Double priceOffered;
    String deedOfSaleDate;
    String occupancyDate;
}
