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
public class BuyersController {
    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

//    @PostMapping(path = "/users")
//    public ResponseEntity<User> saveUser(@RequestBody User user) {
//        return ResponseEntity.ok(userService.saveUser(user));
//    }
    @GetMapping(path = "/users/broker/{brokerId}")
    public ResponseEntity<Optional<Broker>> returnBrokerProfile(@PathVariable String brokerId){
        return ResponseEntity.ok(userService.getBroker(brokerId));
    }

    //When a user logs in, you can prompt them to select whether they are a broker or a buyer. This can be done through
    // a simple UI or by sending a response to the client and handling it on the front end.
    //When a user sign up: 1) Has to be asked if he is a buyer or broker
    //- if buyer has to be redirected to form filling the following information: - name, password, age and email
    //- if broker has to be redirected to form filling the following information: - name, password, email, phone, agency, licenseNum, experience,
    // I don't know about the image how will it be implemented yet

    @PostMapping("/Buyer-sign-up")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        return new ResponseEntity<>(userService.signUp(user), HttpStatus.CREATED);
    }

    @PostMapping("/Buyer-sign-in")
    public ResponseEntity<String> signIn(@RequestParam String username, @RequestParam String password) {
        Optional<User> user = userService.signIn(username, password);
        return user.map(b -> new ResponseEntity<>("Sign-in successful as Buyer", HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED));
    }
}
