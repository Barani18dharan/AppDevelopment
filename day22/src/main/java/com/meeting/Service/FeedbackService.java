package com.meeting.Service;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.meeting.request.FeedbackRequest;
import com.meeting.response.FeedbackResponse;


@Service
public class FeedbackService {
	
	public ResponseEntity<String> saveFeedback(FeedbackRequest request) {
		
        RestTemplate restTemplate=new RestTemplate();
        return restTemplate.postForEntity("http://localhost:8081/api/v1/feedback/create",request,String.class);
    }
	
	 public List<FeedbackResponse> getAllFeedbacks() {
		 	System.out.println("Entered Get Feedback");
	        ResponseEntity<FeedbackResponse[]> response = new RestTemplate().getForEntity("http://localhost:8081/api/v1/feedback/getfeed",
	        FeedbackResponse[].class);
	        List<FeedbackResponse> feedbackList = Arrays.asList(response.getBody());
	        return feedbackList;	                
	 }

}