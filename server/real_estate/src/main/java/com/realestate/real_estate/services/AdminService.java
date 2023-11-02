package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;
import com.realestate.real_estate.repos.BrokerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private BrokerRepository brokerRepository;
    public List<Broker> allBrokers() {
        return brokerRepository.findAll();
    }
}
