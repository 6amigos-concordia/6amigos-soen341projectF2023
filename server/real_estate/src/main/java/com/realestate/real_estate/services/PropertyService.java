package com.realestate.real_estate.services;

import java.util.List;

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

    public List<PropertyDetails> searchProperties(int bedrooms, int bathrooms, double minPrice, double maxPrice, String district){
        return propertyRepository.searchProperties(bedrooms, bathrooms, minPrice, maxPrice, district);

    }
    public List<PropertyDetails> getAllPropertyDetails() {
        return propertyRepository.findAll();
    }
}
