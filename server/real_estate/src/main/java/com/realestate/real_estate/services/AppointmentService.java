package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.AppointmentRepository;
import com.realestate.real_estate.repos.Appointment;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private EmailSenderService emailSenderService;

    public List<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment bookAppointment(Appointment appointment) {
        emailSenderService.sendAppointmentConfirmation(appointment.getUserEmail(),
                    "Hi " + appointment.getUsername() + "\n\n" + "Your upcoming appointment in " + appointment.getAddress() + " is at " + appointment.getDateTime() + "\n\n If you are unable to come to this appointment, please contact our office as soon as possible to reschedule.\n\n We look forward to seeing you!",
                    "Your upcoming appointment");
        return appointmentRepository.save(appointment);
    }

    public Appointment getAppointmentById(ObjectId id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("No appointment by ID: " + id));
    }

    public void cancelAppointment(Appointment appointment) {
        appointmentRepository.delete(appointment);
    }

}