package com.meeting.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.meeting.Modal.Meeting;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
}
