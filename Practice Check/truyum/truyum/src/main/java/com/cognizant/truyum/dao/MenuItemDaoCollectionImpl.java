package com.cognizant.truyum.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.util.DateUtil;

public class MenuItemDaoCollectionImpl implements MenuItemDao {
	private List<MenuItem> menuItemList;

	public List<MenuItem> getMenuItemList() {
		return menuItemList;
	}

	public void setMenuItemList(List<MenuItem> menuItemList) {
		this.menuItemList = menuItemList;
	}

	public MenuItemDaoCollectionImpl() {
		super();
		if (menuItemList == null) {
			menuItemList = new ArrayList<MenuItem>();
			MenuItem menuItem;

			menuItem = new MenuItem(1, "Sandwich", 99f, "Yes", DateUtil.convertToDate("15/03/2017"), "Main Course",
					"Yes");
			menuItemList.add(menuItem);
			menuItem = new MenuItem(2, "Burger", 129f, "Yes", DateUtil.convertToDate("23/12/2017"), "Main Course",
					"No");
			menuItemList.add(menuItem);
			menuItem = new MenuItem(3, "Pizza", 149f, "Yes", DateUtil.convertToDate("21/08/2018"), "Main Course", "No");
			menuItemList.add(menuItem);
			menuItem = new MenuItem(4, "French Fries", 57f, "No", DateUtil.convertToDate("02/07/2017"), "Starters",
					"Yes");
			menuItemList.add(menuItem);
			menuItem = new MenuItem(5, "Chocolate Brownie", 32f, "Yes", DateUtil.convertToDate("02/11/2022"), "Dessert",
					"Yes");
			menuItemList.add(menuItem);
		}
	}

	@Override
	public List<MenuItem> getMenuItemListAdmin() {
		return menuItemList;
	}

	@Override
	public List<MenuItem> getMenuItemListCustomer() {
		List<MenuItem> customerMenuItemList = new ArrayList<MenuItem>();

		for (int i = 0; i < menuItemList.size(); i++) {
			MenuItem menuItem = menuItemList.get(i);
			if ((menuItem.getDateOfLaunch().equals(new Date()) || menuItem.getDateOfLaunch().before(new Date()))
					&& menuItem.getActive().equalsIgnoreCase("Yes")) {
				customerMenuItemList.add(menuItem);
			}
		}

		return customerMenuItemList;
	}

	@Override
	public void modifyMenuItem(MenuItem menuItem) {
		for (int i = 0; i < menuItemList.size(); i++) {
			if (menuItemList.get(i).equals(menuItem)) {
				menuItemList.set(i, menuItem);
				break;
			}
		}
	}

	@Override
	public MenuItem getMenuItem(long menuItemId) {
		MenuItem menuItem = null;
		for (int i = 0; i < menuItemList.size(); i++) {
			if (menuItemList.get(i).getId() == menuItemId) {
				menuItem = menuItemList.get(i);
				break;
			}
		}
		return menuItem;
	}

}
