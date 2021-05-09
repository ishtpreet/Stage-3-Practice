package com.cognizant.ormlearn.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repo;
	
	//get method
	@Transactional
	public Employee get(int id) {
		return repo.findById(id).get();
	}

	//save method
	@Transactional
	public void save(Employee employee) {
		repo.save(employee);
	}
	
	@Transactional
	public List<Employee> getPermanentEmployee() {
		List<Employee> e= repo.getAllPermanentEmployees();
		return e;
	}
	
	@Transactional
	public double getAverageSalaryOfEmployee() {
		return repo.getAverageSalary();
	}
	
	@Transactional
	public List<Employee> getAllEmployeesNative(){
		return repo.getAllEmployeesNative();
		}
}