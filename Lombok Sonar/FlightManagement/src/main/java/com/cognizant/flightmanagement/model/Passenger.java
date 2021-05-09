package com.cognizant.flightmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Passenger {
	private String name;
	private boolean vip;
	
	public boolean isVip() {
		return vip;
	}
}
