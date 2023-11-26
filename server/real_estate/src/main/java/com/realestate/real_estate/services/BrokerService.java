package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.PropertyRepository;
import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.PropertyDetails;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrokerService {
    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Optional<Property> getProperty(String id){
        return propertyRepository.findById(id);
    }
    public Property addNewProperty(Property property) {
        return propertyRepository.save(property);
    }

    public boolean deleteProperty(String propertyId) {
        if(propertyRepository.existsById(propertyId)) {
            propertyRepository.deleteById(propertyId);
            return true;
        }
        return false;
    }

    public Optional<Property> updateProperty(String propertyId, Property property) {
      return propertyRepository.findById(propertyId).map(i -> {
            Property updatedProperty = i.updateWith(property);
            return propertyRepository.save(updatedProperty);
        });
    }
}
