package com.example.demo.exception;

public class Part1NotFoundException extends RuntimeException{
	public Part1NotFoundException(Long id) {
		super("Could not found the part1 with id " + id);
	}
}
