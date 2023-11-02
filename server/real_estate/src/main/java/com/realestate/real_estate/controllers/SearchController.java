package com.realestate.real_estate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.PropertyDetails;
import com.realestate.real_estate.services.PropertyService;

@RestController
@RequestMapping(value = "/api")
public class SearchController {
    @Autowired
    private PropertyService propertyService;

    // Define the route for property search

    @PostMapping(path = "/search")
    public ResponseEntity<List<PropertyDetails>> searchProperties(@RequestParam int bedrooms, @RequestParam int bathrooms, @RequestParam double minPrice, @RequestParam double maxPrice, @RequestParam String district) {
        return ResponseEntity.ok().body(propertyService.searchProperties(bedrooms, bathrooms, minPrice, maxPrice, district));
    }

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<PropertyDetails>> getAllPropertyDetails() {
        return ResponseEntity.ok().body(propertyService.getAllPropertyDetails());
    }

}
