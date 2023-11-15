package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.repos.UserRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private BrokerRepository brokerRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<Broker> getBroker(String id){
        return brokerRepository.findById(id);
    }
}
