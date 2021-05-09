package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
	
	
	// Day2 : Session 1
	
	//public List<Country> findByNameContainingOrderByNameAsc(String phrase);		
	public List<Country> findByNameStartingWith(String phrase);
	public List<Country> findByNameContainingOrderByNameAsc(String phrase);
	

}