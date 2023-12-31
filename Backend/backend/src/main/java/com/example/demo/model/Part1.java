package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Part1 {
	@Id
	@GeneratedValue
	private Long id;
	private  String part1Name;
	private  String part1Brand;
	private String part1Price;
	private String part1Detail;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPart1Name() {
		return part1Name;
	}
	public void setPart1Name(String part1Name) {
		this.part1Name = part1Name;
	}
	public String getPart1Brand() {
		return part1Brand;
	}
	public void setPart1Brand(String part1Brand) {
		this.part1Brand = part1Brand;
	}
	public String getPart1Price() {
		return part1Price;
	}
	public void setPart1Price(String part1Price) {
		this.part1Price = part1Price;
	}
	public String getPart1Detail() {
		return part1Detail;
	}
	public void setPart1Detail(String part1Detail) {
		this.part1Detail = part1Detail;
	}
	
	
}
