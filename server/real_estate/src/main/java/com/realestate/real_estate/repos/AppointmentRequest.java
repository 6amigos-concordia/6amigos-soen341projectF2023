package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;

public class AppointmentRequest {
    private String dateTime;
    private String username;

    public String getDateTime() {
        return dateTime;
    }

    public String getUsername() {
        return username;
    }
    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}