package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
@Data
@Builder
@Jacksonized
@Document(collection = "users")
public class Appointment {
    @Id
    String id;
    String date;
    String time;
    String username;
}