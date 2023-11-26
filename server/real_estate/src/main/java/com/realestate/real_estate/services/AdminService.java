package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.BrokerRepository;
import com.realestate.real_estate.repos.Property;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private BrokerRepository brokerRepository;
    public List<Broker> allBrokers() {
        return brokerRepository.findAll();
    }

    public Optional<Broker> getBroker(String id){
        return brokerRepository.findById(id);
    }
    public Broker addNewBroker(Broker broker) {
        return brokerRepository.save(broker);
    }

    public boolean deleteBroker(String brokerId) {
        if(brokerRepository.existsById(brokerId)) {
            brokerRepository.deleteById(brokerId);
            return true;
        }
        return false;
    }

    public Optional<Broker> updateBrokerProfile(String propertyId, Broker broker) {
        return brokerRepository.findById(propertyId).map(i -> {
            Broker updatedBrokerProfile = i.updateWith(broker);
            return brokerRepository.save(updatedBrokerProfile);
        });
    }
}
