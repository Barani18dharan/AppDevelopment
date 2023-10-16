package com.meeting.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.meeting.Modal.Meeting;
import com.meeting.Service.MeetingService;

import java.util.List;



@CrossOrigin
@RestController
@RequestMapping("/api/meetings") // Define the base URL path for meeting-related operations
public class MeetingController {

    private final MeetingService meetingService; // Inject the MeetingService

    @Autowired
    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    // Endpoint for creating a new meeting
    @PostMapping("/create")
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        return meetingService.createMeeting(meeting);
    }

    // Endpoint for retrieving all meetings
    @GetMapping("/get") 
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    // Endpoint for retrieving a specific meeting by ID
    @GetMapping("/{id}")
    public Meeting getMeetingById(@PathVariable("id") int meetingId) {
        return meetingService.getMeetingById(meetingId);
    }

    // Endpoint for updating an existing meeting
    @PutMapping("/{id}")
    public Meeting updateMeeting(@PathVariable("id") int meetingId, @RequestBody Meeting updatedMeeting) {
        return meetingService.updateMeeting(meetingId, updatedMeeting);
    }

    // Endpoint for deleting a meeting by ID
    @DeleteMapping("/{id}")
    public void deleteMeeting(@PathVariable("id") int meetingId) {
        meetingService.deleteMeeting(meetingId);
    }
}
