package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Appointment;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.AppointmentService;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/api")
public class AppointmentsController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping(path = "/appointments")
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok().body(appointmentService.getAppointments());
    }
    @PostMapping(path = "/appointments/add")
    public ResponseEntity<Appointment> saveAppointement(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentService.bookAppointment(appointment));
    }

}