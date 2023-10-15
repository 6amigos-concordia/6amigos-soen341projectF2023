package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrokerService {
    @Autowired
    private BrokerRepository brokerRepository;

    public List<Property> getAllProperties() {
        return brokerRepository.findAll();
    }
    public Property addNewProperty(Property property) {
        return brokerRepository.save(property);
    }
}
