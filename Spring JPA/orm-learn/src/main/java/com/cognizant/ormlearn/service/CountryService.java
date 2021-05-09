package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.exception.CountryNotFoundException;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {
	@Autowired
	private CountryRepository countryRepo;

	@Transactional
	public List<Country> getAllCountries() {
		List<Country> li = countryRepo.findAll();
		return li;
	}

	@Transactional

	public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
		Optional<Country> result = countryRepo.findById(countryCode);

		if (!result.isPresent()) {
			throw new CountryNotFoundException("Not Found");
		}
		Country country = result.get();
		return country;
	}

	@Transactional

	public void addCountry(Country country) {
		countryRepo.save(country);
	}

	@Transactional
	public void updateCountry(String code, String name) throws CountryNotFoundException {
		Optional<Country> result = countryRepo.findById(code);
		if (!result.isPresent()) {
			throw new CountryNotFoundException("Not Found");
		}
		result.get().setName(name);

	}

	@Transactional
	public void deleteCountry(String id) {
		countryRepo.deleteById(id);
	}
	
	// Day 2: Session 1
	@Transactional
	public List<Country> searchCountryName(String phrase) 
	{
		List<Country> s = countryRepo.findByNameContainingOrderByNameAsc(phrase);
		return s;
	}
	
	
		
	@Transactional
	public List<Country> countrySearchStartingWith(String phrase)
	{
		List<Country> s = countryRepo.findByNameStartingWith(phrase);
		return s;
	}
	
	
	
}
