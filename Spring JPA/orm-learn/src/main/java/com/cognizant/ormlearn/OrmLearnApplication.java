package com.cognizant.ormlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.exception.CountryNotFoundException;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;

import com.cognizant.ormlearn.service.StockService;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.math.BigDecimal;
import java.util.Date;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@SpringBootApplication
public class OrmLearnApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	
	// Day 1: Country
	private static CountryService countryService;
	
	// Day 2: Employee
	private static EmployeeService employeeService;
	private static DepartmentService departmentService;
	private static SkillService skillService;
	//
	
	// Day 2: Stocks
	private static StockService stockService;
	//

	public static void main(String[] args) throws CountryNotFoundException {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);

		// Day 1: Country
		countryService = context.getBean(CountryService.class);
		//getAllCountriesTest(); 
		  //testAddCountry(); 
		  //testUpdateCountry(); 
		  /*try {
		  testDeleteCountry(); 
		  } catch (CountryNotFoundException cnfe) 
		  {
		  LOGGER.debug(cnfe.getMessage()); 
		  }*/
		 //searchCountryLike(); 
		 //searchStartingWith();
		//
		
		// Day 2 - Employee
		employeeService = context.getBean(EmployeeService.class);
		departmentService = context.getBean(DepartmentService.class);
		skillService = context.getBean(SkillService.class);
		//testGetEmployee();
		//testAddEmployee();
		//testUpdateEmployee();
		//testGetDepartment();
		//testAddSkillToEmployee();
		//testGetAllPermanentEmployees();
		//testGetAverageSalaryOfEmployees();
		//testGetAllEmployeesNative();
		//
		
		// Day 2: Stocks
		stockService = context.getBean(StockService.class);
		//testGetAllFbStocksInSep();
		//testGetAllGoogleStocks();
		//testGetTop3Stocks();
		//testGetBottom3Stocks();
		//
}

	// Day 1 : Country Methods
	private static void getAllCountriesTest() throws CountryNotFoundException {

		try {
			Country country = countryService.findCountryByCode("WA");
			LOGGER.debug("Country:{}", country);
		} catch (CountryNotFoundException cnfe) {
			LOGGER.debug(cnfe.getMessage());
			LOGGER.error("Exception found related to invalid country");
		}

		LOGGER.info("End");

	}

	public static void testAddCountry() throws CountryNotFoundException {
		LOGGER.info("Add New Country");
		Country c = new Country();
		c.setCode("WA");
		c.setName("Wakanda");
		countryService.addCountry(c);
		LOGGER.debug(countryService.findCountryByCode("WA").toString());

	}

	public static void testUpdateCountry() throws CountryNotFoundException {
		LOGGER.info("Start Update");
		countryService.updateCountry("US", "America");
		LOGGER.info("End Update");
	}

	public static void testDeleteCountry() throws CountryNotFoundException {
		LOGGER.info("Starting Deletion");
		countryService.deleteCountry("WA");
		LOGGER.info("Country deleted. Searching the deleted Country");
		countryService.findCountryByCode("WA");
		LOGGER.info("Delete Test Successfully done");
	}
	
	public static void searchCountryLike(){ 
	  LOGGER.info("Start");
	  List<Country> c = countryService.searchCountryName("ou");
	  LOGGER.debug("Country : {}",c);
	  LOGGER.info("End"); 
	}	

	public static void searchStartingWith() {
		LOGGER.info("Get List - Starting With ");
		List<Country> country = countryService.countrySearchStartingWith("Z");
		LOGGER.debug("country Starting with : {}", country);
		LOGGER.info("Starting With - List Fetched");
	}
	
	// Day 2 : Employee Methods
	
	private static void testGetEmployee() {
		LOGGER.info("Start");
		Employee employee = employeeService.get(1);
		LOGGER.debug("Employee:{}", employee);
		LOGGER.debug("Department:{}", employee.getDepartment());
		LOGGER.debug("Skills:{}", employee.getSkillList());
		LOGGER.info("End");
	}

	private static void testAddEmployee() {
		LOGGER.info("Start");
		Employee employee= new Employee();
		employee.setName("Vikrant");
		employee.setSalary(18000);
		Department department= departmentService.get(1);
		employee.setDepartment(department);
		employeeService.save(employee);
		LOGGER.debug("Employee:{}", employee);
		LOGGER.info("End");
	}
	
	private static void testUpdateEmployee() {
		LOGGER.info("Start");
		Employee employee= employeeService.get(1);
		Department department = departmentService.get(2);
		employee.setDepartment(department);
		employeeService.save(employee);
		LOGGER.debug("Employee:{}", employee);
		LOGGER.info("End");
	}
	
	private static void testGetDepartment() {
		LOGGER.info("Start");
		Department department = departmentService.get(2);
		LOGGER.info("Name of Department: {}", department);
		LOGGER.debug("Department:{}", department.getEmployeeList());
		LOGGER.info("End");
	}

	private static void testAddSkillToEmployee() {
		LOGGER.info("Start");
		Employee employee = employeeService.get(1);
		Skill skill = skillService.get(3);
		Set<Skill> skillList = employee.getSkillList();
		skillList.add(skill);
		employeeService.save(employee);
		LOGGER.debug(employee.toString());
		LOGGER.info("End");
	}
	
	public static void testGetAllPermanentEmployees() {
		LOGGER.info("Start");
		List<Employee> employees = employeeService.getPermanentEmployee();
		LOGGER.debug("Permanent Employees:{}", employees);
		employees.forEach(e -> LOGGER.debug("Skills:{}", e.getSkillList()));
		LOGGER.info("End");
		}
	
	public static void testGetAverageSalaryOfEmployees() {
		LOGGER.info("Start");
		LOGGER.debug("Average Salary of Employees:{}", employeeService.getAverageSalaryOfEmployee());
		LOGGER.info("End");
		}
	
	private static void testGetAllEmployeesNative() {
		LOGGER.info("Start");
		List<Employee> employee = employeeService.getAllEmployeesNative();
		LOGGER.debug("Employee:{}", employee);
		LOGGER.info("End");
	}
	
	// Day 2: Stock Methods
	
	private static void testGetAllFbStocksInSep()
	{
		LOGGER.info("Test started.");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Date d1 = sdf.parse("2019-09-01");
			Date d2 = sdf.parse("2019-09-30");
			for(Stock stock : stockService.findByCodeAndDateBetween("FB", d1, d2))
			{
				LOGGER.debug(stock.toString());
			}
		}catch(ParseException pe)
		{
			LOGGER.error(pe.getMessage());
		}
		LOGGER.info("Test Ended.");
	}
	
	private static void testGetAllGoogleStocks()
	{
		LOGGER.info("Test Start Google.");
		BigDecimal bd = BigDecimal.valueOf(1250.0);
		for(Stock stock : stockService.findByCloseGreaterThanEqual(bd))
		{
			LOGGER.debug(stock.toString());
		}
		LOGGER.info("Test End Google.");
	}
	
	private static void testGetTop3Stocks()
	{
		LOGGER.info("Start Top 3");
		for(Stock stock : stockService.findTop3ByOrderByVolumeDesc())
		{
			LOGGER.debug(stock.toString());
		}
		LOGGER.info("End Top 3.");
	}
	
	private static void testGetBottom3Stocks()
	{
		LOGGER.info("Start Bottom 3.");
		for(Stock stock : stockService.findTop3ByCodeOrderByCloseAsc("NFLX"))
		{
			LOGGER.debug(stock.toString());
		}
		LOGGER.info("End Bottom 3.");
	}
}
