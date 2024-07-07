package com.example.javabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.javabackend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}

