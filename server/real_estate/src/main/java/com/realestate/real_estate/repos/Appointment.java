package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Getter
@Setter
@Data
@Builder
@Jacksonized
@Document(collection = "appointments")
public class Appointment {
    @Id
    String id;
    String dateTime;
    String username;
}
