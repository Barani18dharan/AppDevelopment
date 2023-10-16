package com.meeting.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meeting.DTO.AuthenticationRequest;
import com.meeting.DTO.AuthenticationResponse;
import com.meeting.DTO.RegisterRequest;
import com.meeting.DTO.UserDTO;
import com.meeting.Modal.User;
import com.meeting.Modal.Enumerate.Role;
import com.meeting.Repository.UserRepository;
import com.meeting.Util.JwtService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	

	
    
    public List<UserDTO> getAllUsers() {
        
    	List<User> user=uRepo.findAll();
    	List<UserDTO> userDTO=new ArrayList<>();
    	for(User u:user)
    	{
    		userDTO.add( UserDTO
    				.builder()
    				.firstName(u.getFirstName())
    				.email(u.getEmail())
    				.build());
    	}
    	return userDTO;
    }

    public User getUserById(int userId) {
        Optional<User> optionalUser = uRepo.findById(userId);
      
            return optionalUser.get();
        
    }

    public User updateUser(int userId, User updatedUser) {
        Optional<User> optionalUser = uRepo.findById(userId);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
//            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
//            existingUser.setFirstName(updatedUser.getFirstName());
//            existingUser.setLastName(updatedUser.getLastName());
            return uRepo.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(int userId) {
        Optional<User> optionalUser = uRepo.findById(userId);
     
            uRepo.delete(optionalUser.get());
        
    }
}
