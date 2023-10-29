package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.BrokerService;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class BrokersController {
    @Autowired
    private BrokerService brokerService;
    @GetMapping(path = "/properties")
    public ResponseEntity<List<Property>> getAllProperties() {
        return ResponseEntity.ok().body(brokerService.getAllProperties());
    }
    @PostMapping(path = "/brokers/add")
    public ResponseEntity<Property> saveUser(@RequestBody Property property) {
        return ResponseEntity.ok(brokerService.addNewProperty(property));
    }

    @DeleteMapping(path = "/brokers/delete/{propertyId}")
    public ResponseEntity<Property> deleteProperty(@PathVariable String propertyId) {
        if (brokerService.deleteProperty(propertyId)) {
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
