package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
@Data
public class AppointmentRequest {
    private String dateTime;
    private String username;
}