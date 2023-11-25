package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Jacksonized
@Document(collection = "Accounts")
public class SignIn {
    @Id
    String id;
    String username;
    String password;
    String userType;
}

