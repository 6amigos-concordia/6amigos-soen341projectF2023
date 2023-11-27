package com.realestate.real_estate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
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
    public ResponseEntity<List<PropertyDetails>> searchProperties(@RequestParam int bedrooms, @RequestParam int bathrooms, @RequestParam int price, @RequestParam String district,
    @RequestParam String cityName, 
    @RequestParam String streetName, 
    @RequestParam String propertyType) {
        return ResponseEntity.ok().body(propertyService.searchProperties(bedrooms, bathrooms, price, district, cityName, streetName, propertyType));
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
