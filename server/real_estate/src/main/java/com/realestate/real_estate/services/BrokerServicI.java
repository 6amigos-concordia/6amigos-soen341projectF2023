package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Broker;

import java.util.Optional;

public interface BrokerServicI {
    Broker signUp(Broker broker);
    Optional<Broker> signIn(String username, String password);
}
