package com.mini.project._1.ppomodoro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TimeController {

  // @Autowired 어노테이션을 이용한 생성자 주입
  @Autowired
  private final TimeRepository timeRepository;

  public TimeController(TimeRepository timeRepository) {
    this.timeRepository = timeRepository;
  }

  @PostMapping("/saveTime")
  public ResponseEntity<Map<String, String>> saveTime(@RequestBody Map<String, String> request) {
    String time = request.get("time");
    Time timeRecord = new Time();
    timeRecord.setTitle(request.get("title"));
    timeRecord.setTime(Integer.parseInt(time));

    String savedDateStr = request.get("savedDate");
    LocalDateTime savedDate = LocalDateTime.parse(savedDateStr, DateTimeFormatter.ISO_DATE_TIME);
    timeRecord.setSavedDate(savedDate);

    // 데이터베이스에 시간 저장
    timeRepository.save(timeRecord);
    System.out.println("Received time: " + time);
    Map<String, String> response = new HashMap<>();
    response.put("message", "시간이 성공적으로 저장되었습니다.");
    return ResponseEntity.ok(response);
  }

  @GetMapping("/getTime")
  public ResponseEntity<List<Time>> getSavedTimes() {
    List<Time> savedTimes = timeRepository.findAll(); // 저장된 시간 목록 반환
    return ResponseEntity.ok(savedTimes);
  }
}