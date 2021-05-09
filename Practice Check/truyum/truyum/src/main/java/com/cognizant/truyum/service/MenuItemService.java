package com.cognizant.truyum.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.truyum.App;
import com.cognizant.truyum.dao.MenuItemDao;
import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.repository.MenuItemRepository;

@Service
public class MenuItemService {

	@Autowired
	MenuItemRepository menuItemRepository;

	private static final Logger LOGGER = LoggerFactory.getLogger(App.class);

	@Transactional
	public List<MenuItem> getMenuItemListAdmin() {
		// return menuItemDao.getMenuItemListAdmin();
		return menuItemRepository.findAll();
	}

	@Transactional
	public List<MenuItem> getMenuItemListCustomer() {
		// return menuItemDao.getMenuItemListCustomer();
		return menuItemRepository.getFilteredItems();
	}

	@Transactional
	public MenuItem getMenuItem(int menuItemId) {
		// return menuItemDao.getMenuItem(menuItemId);
		return menuItemRepository.getOne(menuItemId);
	}

	@Transactional
	public void editMenuItem(MenuItem menuItem) {
		// menuItemDao.modifyMenuItem(menuItem);
		LOGGER.info("Start");
		
		MenuItem item = menuItemRepository.getOne(menuItem.getId());
		item.setName(menuItem.getName());
		item.setPrice(menuItem.getPrice());
		item.setActive(menuItem.getActive());
		item.setDateOfLaunch(menuItem.getDateOfLaunch());
		item.setCategory(menuItem.getCategory());
		item.setFreeDelivery(menuItem.isFreeDelivery());
		
		menuItemRepository.save(item);
		
		LOGGER.debug("Menu Item:", item);
		LOGGER.info("End");
	}

}
