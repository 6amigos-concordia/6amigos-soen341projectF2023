package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.services.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/brokers")
public class AdminController {
    private AdminService adminService;
    @GetMapping
    public ResponseEntity<List<Broker>> getAllBrokers() {
        return new ResponseEntity<List<Broker>>(adminService.allBrokers(), HttpStatus.OK);
    }
}
