package com.cognizant.flightmanagement;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.cognizant.flightmanagement.model.Flight;
import com.cognizant.flightmanagement.model.Passenger;

//@SpringBootTest
class FlightManagementApplicationTests {
	@Test
	void addVipToEconomy() {
		Flight flight = new Flight();
		flight.setId("3");
		flight.setFlightType("economy");
		//Add customer
		Passenger passenger = new Passenger("Vikrant", true);
		flight.addPassenger(passenger);
		//check whether entered or not
		//Because we will not be adding the vip customers into the economy class flights....
		assertNotEquals(1, flight.getPassengers().size());
		//Remove
		flight.removePassenger(passenger);
		assertEquals(0, flight.getPassengers().size());
	}
	
	@Test
	void addVipToBusiness() {
		Flight flight = new Flight();
		flight.setId("4");
		flight.setFlightType("business");
		//Add customer
		Passenger passenger = new Passenger("Vikrant", true);
		flight.addPassenger(passenger);
		//check whether entered or not
		//Because we will not be adding the vip customers into the economy class flights....
		assertEquals(1, flight.getPassengers().size());
		//Remove
		flight.removePassenger(passenger);
		assertEquals(1, flight.getPassengers().size());
	}
	
	@Test
	void addNonVipToEconomy() {
		Flight flight = new Flight();
		flight.setId("5");
		flight.setFlightType("economy");
		//Add nonVip to list
		Passenger passenger = new Passenger("Jacob", false);
		flight.addPassenger(passenger);
		assertEquals(0, flight.getPassengers().size());
		//Remove
		flight.removePassenger(passenger);
		assertEquals(0, flight.getPassengers().size());
	}
	
	@Test
	void addNonVipToBusiness() {
		Flight flight = new Flight();
		flight.setId("5");
		flight.setFlightType("business");
		//Add nonVip to list
		Passenger passenger = new Passenger("Jacob", false);
		flight.addPassenger(passenger);
		assertEquals(0, flight.getPassengers().size());
		//Remove
		flight.removePassenger(passenger);
		assertEquals(0, flight.getPassengers().size());
	}
	
}
