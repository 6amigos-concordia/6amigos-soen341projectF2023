package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:1234")
public class BuyersController {
    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
       public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }
    @GetMapping(path = "/users/broker/{brokerId}")
    public ResponseEntity<Optional<Broker>> returnBrokerProfile(@PathVariable String brokerId){
        return ResponseEntity.ok(userService.getBroker(brokerId));
    }

}
