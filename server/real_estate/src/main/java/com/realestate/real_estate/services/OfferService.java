package com.realestate.real_estate.services;

import com.realestate.real_estate.repos.Offer;
import com.realestate.real_estate.repos.OfferRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    @Autowired
    OfferRepository offerRepository;

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private PropertyService propertyService;

    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    public Offer getOfferById(ObjectId id) {
        return offerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("No appointment by ID: " + id));
    }
    public Offer submitOffer(Offer offer) {
        emailSenderService.sendAppointmentConfirmation(offer.getBuyerEmail(),
                "Hi " + offer.getBuyerName() + "\n\n" + "Your offer on the property: " +
                        offer.getAddressProperty() + " has been submit.  The information regarding the offer: \n" + "Listing Agent: "
                        + offer.getBrokerName() + ", " + offer.getAgency() + ".\n" +
                        "Offered price: $" + offer.getPriceOffered() + ".\n" +
                        "Deed of the sale date: " + offer.getDeedOfSaleDate() + ".\n" +
                        "Occupancy of premises date: " + offer.getOccupancyDate() + ".\n" +
                        "\n\n You will be notified by you listing agent on the follow-up of the property offer.\n\n Feel free to shoot any questions that you have.\n" +
                        "\n",
                "Offer submit on " + offer.getAddressProperty());
        return offerRepository.save(offer);
    }
}
