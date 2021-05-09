package com.cognizant.flightmanagement.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class Flight {
	private String id;
	private String flightType;
	List<Passenger> passengers = new ArrayList<>();
	
	public boolean  addPassenger(Passenger passenger) {
		if(passenger != null) {
			if(flightType.equalsIgnoreCase("economy")) {
				return false;
			}else {
				if(passenger.isVip()) {
					passengers.add(passenger);
					return true;
				}else{
					return false;
				}
			}
		}
		return false;
	}
	public boolean removePassenger(Passenger passenger) {
		if(passenger.isVip()) {
			return false;
		}
		passengers.remove(passenger);
		return true;
	}
}
