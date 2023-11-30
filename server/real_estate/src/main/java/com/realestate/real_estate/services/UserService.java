package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BrokerRepository brokerRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Optional<Broker> getBroker(String id){
        return brokerRepository.findById(id);
    }

    public User signUp(User user) {
        // Check if user already exists
        if (userRepository.findByName(user.getName()) != null){
            throw new DataIntegrityViolationException("The account with username: " + user.getName() + " already exists");
        }
        return userRepository.save(user);
    }

    public User signIn(String name, String password) {
        User user = userRepository.findByName(name);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            return null; // Authentication failed
        }

    }

}
