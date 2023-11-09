package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.PropertyDetails;
import com.realestate.real_estate.services.BrokerService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:1234")
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
    public ResponseEntity<Property> deleteProperty(@PathVariable ObjectId propertyId) {
        if (brokerService.deleteProperty(propertyId)) {
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PutMapping(path = "/brokers/update/{propertyId}")
    public ResponseEntity<Property> updateProperty(
                @PathVariable ObjectId propertyId, @RequestBody Property property) {
        Optional<Property> updated = brokerService.updateProperty(propertyId, property);

        return updated.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> {
                    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
                });
    }
}
