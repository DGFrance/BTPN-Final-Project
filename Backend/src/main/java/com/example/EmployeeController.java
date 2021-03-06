package com.example;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(value="/employee")
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private ObjectMapper mapper;
	
	
	@CrossOrigin(origins = "http://localhost:3080")
	@PostMapping("/add")
	@ResponseBody
	public Employee saveEmployee(@RequestBody Employee emp){
		return this.repository.save(emp);
	}
	
	@CrossOrigin(origins = "http://localhost:3080")
	@PostMapping("/update/{id}")
	@ResponseBody
	public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee emp){
		emp.setEmpId(id);
		return this.repository.save(emp);
	}
	
	@CrossOrigin(origins = "http://localhost:3080")
	@GetMapping("/findByName")
	@ResponseBody
	public List<Employee> findByName(@RequestParam() String name)
	{
		return this.repository.findByLastNameContainingOrFirstNameContainingAllIgnoreCase(name, name);
	}
	
	@GetMapping("/filterGender")
	@CrossOrigin(origins = "http://localhost:3080")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByGender(@RequestParam() String gender)
	{
			return this.repository.findByGenderAllIgnoreCase(gender);
	}
	
	@GetMapping("/filterLocation")
	@CrossOrigin(origins = "http://localhost:3080")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByLocation(@RequestParam() String location)
	{
			return this.repository.findByLocationCityAllIgnoreCase(location);
	}
	@GetMapping("/filterLocationAndGender")
	@CrossOrigin(origins = "http://localhost:3080")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByLocationAndGender(@RequestParam() String location, 
			@RequestParam() String gender)
	{
		System.out.println(location);
		System.out.println(gender);
			return this.repository.findByLocationCityAndGenderAllIgnoreCase(location, gender);
	}
	
	
	@GetMapping("/getAll")
	@CrossOrigin(origins = "http://localhost:3080")
	@ResponseBody
	public Iterable<Employee> getAllEmployee()
	{
		Sort.Order sorting = new Sort.Order(Sort.Direction.ASC, "firstName").ignoreCase();
		return this.repository.findAll(new Sort(sorting));

	}
	
	
	@CrossOrigin(origins = "http://localhost:3080")
	@DeleteMapping("/delete/{id}")
	public Long deleteEmployeeById(@PathVariable Long id) {
		this.repository.delete(id);
		return id;
	}
	
	@CrossOrigin(origins = "http://localhost:3080")
	@GetMapping("/getById/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return this.repository.findOne(id);
	}
	
	
	@CrossOrigin(origins = "http://localhost:3080")
	@GetMapping("/sortBy/{sort}")
	public  Iterable<Employee> sortingEmployee(@PathVariable String sort) {
		if(sort.equalsIgnoreCase("asc")){
			Sort.Order sorting = new Sort.Order(Sort.Direction.ASC, "lastName").ignoreCase();
			return this.repository.findAll(new Sort(sorting));
		}
		else if(sort.equalsIgnoreCase("desc")){
			Sort.Order sorting = new Sort.Order(Sort.Direction.DESC, "lastName").ignoreCase();
			return this.repository.findAll(new Sort(sorting));
		}
		
		return this.repository.findAll();
		
	}

}
