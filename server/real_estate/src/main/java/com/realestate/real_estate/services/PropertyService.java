package com.realestate.real_estate.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.Property;
import com.realestate.real_estate.repos.PropertyDetails;
import com.realestate.real_estate.repos.PropertyRepository;

@Service
public class PropertyService {
    
     @Autowired
    private PropertyRepository propertyRepository;
    public PropertyService() {
        // Default constructor
    }
    public void setPropertyRepository(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    

    public Optional<List<Property>> searchProperties(String address){
        if(propertyRepository != null){
            return propertyRepository.searchPropertiesByAddress(address);
        }
        else{
            throw new IllegalStateException("Property repository not initialized");
        }
        
    }

    

    public List<PropertyDetails> getAllPropertyDetails() {
        // This returns a list of properties. You have to implement a method to extract property details from this list for each index.
        if(propertyRepository != null){
            List<Property> properties = propertyRepository.findAll();
            List<PropertyDetails> details = properties.stream()
                                   .map(Property::getDetails)
                                   .collect(Collectors.toList());
            return details;
        } else{
            throw new IllegalStateException("Property repository not initialized");
        }
        
         
    }
}
