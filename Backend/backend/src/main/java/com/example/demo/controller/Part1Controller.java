package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.Part1NotFoundException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Part1;
import com.example.demo.model.User;
import com.example.demo.repository.Part1Repository;

@RestController
@CrossOrigin("http://localhost:3000")
public class Part1Controller {
	@Autowired
	private Part1Repository part1Repository;
	
	// post 
	@PostMapping("/part1")
	Part1 newPart1(@RequestBody Part1 newPart1) {
		return part1Repository.save(newPart1);
	}
	
	
	
	
	// get
	@GetMapping("/part1s")
	List<Part1> getAllPart1s(){
		return part1Repository.findAll();
	}
	
	
	
	
	// get specific part with respect to specific partid
	@GetMapping("/part1/{id}")
	public Part1 getPart1ById(@PathVariable Long id) {
	    Optional<Part1> part1Optional = part1Repository.findById(id);

	    if (part1Optional.isPresent()) {
	        return part1Optional.get();
	    } else {
	        throw new Part1NotFoundException(id);
	    }
	}
	
	
	
	
	// for editing the part1
	@PutMapping("/part1/{id}")
	Part1 updateUser(@RequestBody Part1 newPart1, @PathVariable Long id) {
		return part1Repository.findById(id)
			.map(part1 -> {
				part1.setPart1Name(newPart1.getPart1Name());
				part1.setPart1Brand(newPart1.getPart1Brand());
				part1.setPart1Price(newPart1.getPart1Price());
				part1.setPart1Detail(newPart1.getPart1Detail());
				return part1Repository.save(part1);
			}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	
	
	
	// for deleting the user
	
		@DeleteMapping("/part1/{id}")
		String deletePart1(@PathVariable Long id) {
			if(!part1Repository.existsById(id)) {
				throw new Part1NotFoundException(id);
			}
			part1Repository.deleteById(id);
			return "Part1 with id " + id + " has been deleted successfully.";
		}
}
