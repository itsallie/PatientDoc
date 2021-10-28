package com.example.demo.PatientModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "patients")

public class PatientModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long patient_id;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "birth_date")
	private String birthDate;
	
	@Column(name = "reason_for_visit")
	private String reasonVisit;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "phone_number")
	private String phone;
	
	public PatientModel() {
		
	}
	
	public PatientModel(String date, String firstName, String lastName, String birthDate,String reasonVisit, String email, String phone) {
		super();
		this.date = date;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.reasonVisit = reasonVisit;
		this.email = email;
		this.phone = phone;
	}
	
	
	public Long getId() {
		return patient_id;
	}

	public void setId(Long id) {
		this.patient_id = id;
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	public String getReasonVisit() {
		return reasonVisit;
	}
	public void setReasonVisit(String reasonVisit) {
		this.reasonVisit = reasonVisit;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
}
