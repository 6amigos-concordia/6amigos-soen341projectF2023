package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.User;

import java.util.Optional;

public interface UserServicI {
    User signUp(User user);
    Optional<User> signIn(String username, String password);
}
