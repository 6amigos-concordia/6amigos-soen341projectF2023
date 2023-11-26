package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.services.AdminService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/brokers")
@CrossOrigin(origins = "http://localhost:1234")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @GetMapping
    public ResponseEntity<List<Broker>> getAllBrokers() {
        return new ResponseEntity<List<Broker>>(adminService.allBrokers(), HttpStatus.OK);
    }

    @GetMapping(path = "/{brokerId}")
    public ResponseEntity<Broker> getBrokerById(@PathVariable String brokerId) {
        Optional<Broker> broker = adminService.getBroker(brokerId);
        return broker.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> {
                    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
                });
    }

    @PostMapping(path = "/add")
    public ResponseEntity<Broker> saveUser(@RequestBody Broker broker) {
        return ResponseEntity.ok(adminService.addNewBroker(broker));
    }

    @DeleteMapping(path = "/delete/{brokerId}")
    public ResponseEntity<Boolean> deleteProperty(@PathVariable String brokerId) {
        if (adminService.deleteBroker(brokerId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PutMapping(path = "/update/{brokerId}")
    public ResponseEntity<Broker> updateProperty(
            @PathVariable String brokerId, @RequestBody Broker broker) {
        Optional<Broker> updated = adminService.updateBrokerProfile(brokerId, broker);

        return updated.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> {
                    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
                });
    }
}
