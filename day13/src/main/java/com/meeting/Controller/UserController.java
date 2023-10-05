package com.meeting.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.meeting.DTO.AuthenticationResponse;
import com.meeting.DTO.RegisterRequest;
import com.meeting.Modal.User;
import com.meeting.Service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users") // Define the base URL path for user-related operations
public class UserController {

    private final UserService userService; // Inject the UserService

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Endpoint for creating a new user
//    public User createUser(@RequestBody User user) {
//        return userService.createUser(user);
//    }
    
    @PostMapping
public ResponseEntity<AuthenticationResponse> createUser(@RequestBody RegisterRequest request) {
		
		return ResponseEntity.ok(userService.createUser(request));
	}

    // Endpoint for retrieving all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Endpoint for retrieving a specific user by ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int userId) {
        return userService.getUserById(userId);
    }

    // Endpoint for updating an existing user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") int userId, @RequestBody User updatedUser) {
        return userService.updateUser(userId, updatedUser);
    }

    // Endpoint for deleting a user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") int userId) {
        userService.deleteUser(userId);
    }
}
