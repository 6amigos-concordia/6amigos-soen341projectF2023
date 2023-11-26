package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.User;
import com.realestate.real_estate.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserServicI {

    @Autowired
    private UserRepository userRepository;
    private BrokerRepository brokerRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Optional<Broker> getBroker(String id){
        return brokerRepository.findById(id);
    }

    @Override
    public User signUp(User user) {
        // Implement validation logic if needed
        return userRepository.save(user);
    }

    @Override
    public Optional<User> signIn(String name, String password) {
        // Implement sign-in logic
        return userRepository.findByName(name)
                .filter(buyer -> buyer.getPassword().equals(password));
    }

}
