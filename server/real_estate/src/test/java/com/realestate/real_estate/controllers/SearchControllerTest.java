package com.realestate.real_estate.controllers;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.realestate.real_estate.repos.PropertyDetails;
import com.realestate.real_estate.repos.PropertyRepository;
import com.realestate.real_estate.services.PropertyService;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataMongoTest
public class SearchControllerTest {

     private SearchController searchController;
      @Autowired
    private PropertyService propertyService;

    @BeforeEach
    public void setUp() {
        searchController = new SearchController();
        // Set the property service
        searchController.setPropertyService(propertyService);
    }

    @Test
    void searchProperties() {
        // Create test data
        List<PropertyDetails> propertyDetailsList = new ArrayList<>();
        propertyDetailsList.add(new PropertyDetails(null, "Description 1", 3, 2, 200000, "District 1"));
        propertyDetailsList.add(new PropertyDetails(null, "Description 2", 4, 3, 300000, "District 2"));

        // Test the controller method
        ResponseEntity<List<PropertyDetails>> responseEntity = searchController.searchProperties(3, 2, 200000, 300000, "District 1");

        // Assertions for the response entity
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(propertyDetailsList, responseEntity.getBody());
    }

    @Test
    void getAllPropertyDetails() {
        // Create test data
        List<PropertyDetails> propertyDetailsList = new ArrayList<>();
        propertyDetailsList.add(new PropertyDetails(null, "Description 1", 3, 2, 200000, "District 1"));
        propertyDetailsList.add(new PropertyDetails(null, "Description 2", 4, 3, 300000, "District 2"));

        // Test the controller method
        ResponseEntity<List<PropertyDetails>> responseEntity = searchController.getAllPropertyDetails();

        // Assertions for the response entity
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(propertyDetailsList, responseEntity.getBody());
    }

}