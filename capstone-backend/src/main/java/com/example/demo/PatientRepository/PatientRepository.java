package com.example.demo.PatientRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.PatientModel.PatientModel;

@Repository
public interface PatientRepository extends JpaRepository<PatientModel, Long>{

}
