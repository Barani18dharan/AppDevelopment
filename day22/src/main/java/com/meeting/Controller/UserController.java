package com.meeting.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.meeting.DTO.AuthenticationResponse;
import com.meeting.DTO.RegisterRequest;
import com.meeting.DTO.UserDTO;
import com.meeting.Modal.User;
import com.meeting.Service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users") 
public class UserController {

	@Autowired
	private UserService userService; 
	
	
	@GetMapping("/get")
	public List<UserDTO> getAllUsers() {
		return userService.getAllUsers();
	}

	
	@GetMapping("/get/{id}")
	public User getUserById(@PathVariable("id") int userId) {
		return userService.getUserById(userId);
	}

	
	
	@PutMapping("/put/{id}")
	public User updateUser(@PathVariable("id") int userId, @RequestBody User updatedUser) {
		return userService.updateUser(userId, updatedUser);
	}

	
	
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable("id") int userId) {
		userService.deleteUser(userId);
	}
	
	
}
