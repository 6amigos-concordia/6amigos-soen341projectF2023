package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:1234")
public class UsersController {

    @Autowired
    private UserService userService;

    @PostMapping("/sign-up")
    public User signUp(@RequestBody User user) {
        return userService.signUp(user);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<User> signIn(@RequestParam String name, @RequestParam String password) {
        if (userService.signIn(name,password) != null){
            return ResponseEntity.ok().build();
        }
        else
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }
}
