package com.meeting.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meeting.DTO.AuthenticationRequest;
import com.meeting.DTO.AuthenticationResponse;
import com.meeting.DTO.RegisterRequest;
import com.meeting.Modal.User;
import com.meeting.Modal.Enumerate.Role;
import com.meeting.Repository.UserRepository;
import com.meeting.Util.JwtService;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {

	@Autowired
    private UserRepository userRepository;
    
	@Autowired
    private JwtService jwtService;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public AuthenticationResponse createUser(RegisterRequest request) {
		
		
		var user = User.builder()
				.firstName(request.getFirstName())
				.lastName(request.getLastName())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
		
			
			userRepository.save(user);
			
			var jwtToken = jwtService.generateToken(user);
			
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
	}
    
    public AuthenticationResponse validateUser(AuthenticationRequest request) {
		
		authenticationManager.authenticate(
				
			new UsernamePasswordAuthenticationToken(
					request.getEmail(), request.getPassword()
				)
		);
		
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
		
	}
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
      
            return optionalUser.get();
        
    }

    public User updateUser(int userId, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
//            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
//            existingUser.setFirstName(updatedUser.getFirstName());
//            existingUser.setLastName(updatedUser.getLastName());
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
     
            userRepository.delete(optionalUser.get());
        
    }
}
