package com.example.demo.PatientController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.PatientException.ResourceNotFoundException;
import com.example.demo.PatientModel.PatientModel;
import com.example.demo.PatientRepository.PatientRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	// get all patients
	@GetMapping("/patients")
	public List<PatientModel> getAllPatients() {
		return patientRepository.findAll();
	}
	
	// add new patient rest api
	@PostMapping("/patients")
	public PatientModel createPatient(@RequestBody PatientModel patient) {
		return patientRepository.save(patient);
	}
	
	// get patient by id rest api
	@GetMapping("/patients/{id}")
	public ResponseEntity<PatientModel> getPatientById(@PathVariable Long id) {
		
		PatientModel patient = patientRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with this id: " + id));
		return ResponseEntity.ok(patient);
	}
	
	
	//update patient rest api
	@PutMapping("/patients/{id}")
	public ResponseEntity<PatientModel> updatePatient(@PathVariable Long id, @RequestBody PatientModel patientDetails) {
		PatientModel patient = patientRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with this id: " + id));
		
		patient.setDate(patientDetails.getDate());
		patient.setFirstName(patientDetails.getFirstName());
		patient.setLastName(patientDetails.getLastName());
		patient.setBirthDate(patientDetails.getBirthDate());
		patient.setReasonVisit(patientDetails.getReasonVisit());
		patient.setEmail(patientDetails.getEmail());
		patient.setPhone(patientDetails.getPhone());
		
		PatientModel updatedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	// delete patient rest api
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long id){
		PatientModel patient = patientRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient does not exist with this id: " + id));
		
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}







