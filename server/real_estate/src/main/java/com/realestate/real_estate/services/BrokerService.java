package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public boolean deleteProperty(String id) {
        if(brokerRepository.existsById(id)) {
            brokerRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Property> updateProperty(String id, Property property) {
        return brokerRepository.findById(id).map(i -> {
            Property updatedProperty = i.updateWith(property);
            return brokerRepository.save(updatedProperty);
        });
    }
}
