package com.realestate.real_estate.controllers;

import com.realestate.real_estate.repos.Offer;
import com.realestate.real_estate.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:1234")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @PostMapping(path = "/offers/add")
    public ResponseEntity<Offer> submitOffer(@RequestBody Offer offer) {
        return ResponseEntity.ok(offerService.submitOffer(offer));
    }
}
