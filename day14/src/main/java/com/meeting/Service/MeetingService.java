package com.meeting.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meeting.Modal.Meeting;
import com.meeting.Repository.MeetingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;

    @Autowired
    public MeetingService(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    public Meeting createMeeting(Meeting meeting) {
        return meetingRepository.save(meeting);
    }

    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    public Meeting getMeetingById(int meetingId) {
        Optional<Meeting> optionalMeeting = meetingRepository.findById(meetingId);
        return optionalMeeting.get();
    }

    public Meeting updateMeeting(int meetingId, Meeting updatedMeeting) {
        Optional<Meeting> optionalMeeting = meetingRepository.findById(meetingId);
        if (optionalMeeting.isPresent()) {
            Meeting existingMeeting = optionalMeeting.get();
            existingMeeting.setTitle(updatedMeeting.getTitle());
            existingMeeting.setStartTime(updatedMeeting.getStartTime());
            existingMeeting.setEndTime(updatedMeeting.getEndTime());
            existingMeeting.setOrganizer(updatedMeeting.getOrganizer());
            existingMeeting.setLocation(updatedMeeting.getLocation());
            return meetingRepository.save(existingMeeting);
        } else {
            
        	return null;
        }
    }

    public void deleteMeeting(int meetingId) {
        Optional<Meeting> optionalMeeting = meetingRepository.findById(meetingId);
           
        meetingRepository.delete(optionalMeeting.get());
    }
}
