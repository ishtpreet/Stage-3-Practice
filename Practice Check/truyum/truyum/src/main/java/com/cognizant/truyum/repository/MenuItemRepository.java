package com.cognizant.truyum.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.truyum.model.MenuItem;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Integer>{
	
	@Query("SELECT m FROM MenuItem m WHERE active='Yes' AND dateOfLaunch <= sysdate()")
	public List<MenuItem> getFilteredItems();

}
