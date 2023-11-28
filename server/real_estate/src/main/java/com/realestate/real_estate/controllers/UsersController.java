package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public User signIn(@RequestParam String name, @RequestParam String password) {
        return userService.signIn(name, password);
    }
}
