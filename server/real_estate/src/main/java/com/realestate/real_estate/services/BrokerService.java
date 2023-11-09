package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.PropertyRepository;
import com.realestate.real_estate.repos.Property;
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
    public Property addNewProperty(Property property) {
        return propertyRepository.save(property);
    }

    public boolean deleteProperty(ObjectId id) {
        if(propertyRepository.existsById(id)) {
            propertyRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Property> updateProperty(ObjectId id, Property property) {
        return propertyRepository.findById(id).map(i -> {
            Property updatedProperty = i.updateWith(property);
            return propertyRepository.save(updatedProperty);
        });
    }
}
