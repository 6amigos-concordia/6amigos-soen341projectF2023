package com.realestate.real_estate;

import com.realestate.real_estate.repos.Appointment;
import com.realestate.real_estate.repos.AppointmentRepository;
import com.realestate.real_estate.services.AppointmentService;
import com.realestate.real_estate.services.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.util.Date;


@SpringBootApplication
public class RealEstateApplication {


	public static void main(String[] args) {
		SpringApplication.run(RealEstateApplication.class, args);
	}

}




