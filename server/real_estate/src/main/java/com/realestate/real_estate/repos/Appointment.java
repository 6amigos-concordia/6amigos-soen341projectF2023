package com.realestate.real_estate.repos;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
@Data
@Builder
@Jacksonized
@Document(collection = "appointments")
public class Appointment {
    @Id
    String id;
    String dateTime;
    String username;

    public Appointment(String id, String dateTime, String username) {
        this.id = id;
        this.dateTime = dateTime;
        this.username = username;
    }

    public Appointment(String dateTime, String username) {
        this.dateTime = dateTime;
        this.username = username;
    }

    public String getId() {
        return id;
    }

    public String getDateTime() {
        return dateTime;
    }

    public String getUsername() {
        return username;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}