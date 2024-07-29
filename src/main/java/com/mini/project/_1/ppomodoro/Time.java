package com.mini.project._1.ppomodoro;

import java.time.LocalDateTime;

public class Time {
  private Long id;
  private String title;
  private int time;
  private LocalDateTime savedDate;

  public Time(Long id, String title, int time, LocalDateTime savedDate) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.savedDate = savedDate;
  }

  public Time() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getTime() {
    return time;
  }

  public void setTime(int time) {
    this.time = time;
  }

  public LocalDateTime getSavedDate() {
    return savedDate;
  }

  public void setSavedDate(LocalDateTime savedDate) {
    this.savedDate = savedDate;
  }
}
