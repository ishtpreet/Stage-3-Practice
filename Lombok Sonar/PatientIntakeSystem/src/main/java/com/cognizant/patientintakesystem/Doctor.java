package com.cognizant.patientintakesystem;

public enum Doctor {
	Vikrant("Vikrant Tufani"),
	sam("Sam Wilson"),
	barnes("Bucky Barnes"),
	jasper("Jasper Cillesen");
	
	private String doctorName;
	
	private Doctor(String doctorName) {
		this.doctorName = doctorName;
	}
}
