package com.realestate.real_estate.controllers;

import java.util.List;
import java.util.Optional;

import com.realestate.real_estate.repos.Broker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.PropertyDetails;
import com.realestate.real_estate.services.PropertyService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:1234")
public class SearchController {
    @Autowired
    private PropertyService propertyService;

    // Define the route for property search

    @PostMapping(path = "/search")
    public ResponseEntity<List<Property>> searchProperties(@RequestBody Property property) {
        Optional<List<Property>> properties = propertyService.searchProperties(property.getAddress());
        return properties.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> {
                    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
                });
    }

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<PropertyDetails>> getAllPropertyDetails() {
        return ResponseEntity.ok().body(propertyService.getAllPropertyDetails());
    }

    @Autowired
    public void setPropertyService(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

}
