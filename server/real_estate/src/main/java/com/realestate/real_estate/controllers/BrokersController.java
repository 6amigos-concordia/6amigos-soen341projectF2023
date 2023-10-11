package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.BrokerService;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class BrokersController {
    @Autowired
    private BrokerService brokerService;
    @PostMapping(path = "/brokers/add")
    public ResponseEntity<Property> saveUser(@RequestBody Property property) {
        return ResponseEntity.ok(brokerService.addNewProperty(property));
    }
}
