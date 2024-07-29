package com.mini.project._1.ppomodoro;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

@Repository
public class TimeRepository {

  private final JdbcTemplate jdbcTemplate;

  public TimeRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  // 데이터베이스에 시간을 저장
  public void save(Time time) {
    String sql = "INSERT INTO time (title, time, savedDate) VALUES (?, ?, ?)";
    jdbcTemplate.update(sql, time.getTitle(), time.getTime(), time.getSavedDate());
  }

  // 데이터베이스에서 모든 시간을 조회
  public List<Time> findAll() {
    String sql = "SELECT * FROM time";
    return jdbcTemplate.query(sql, new TimeRowMapper());
  }

  // ResultSet을 Time 객체로 변환
  private static class TimeRowMapper implements RowMapper<Time> {
    @Override
    public Time mapRow(ResultSet rs, int rowNum) throws SQLException {
      Time time = new Time();
      time.setId(rs.getLong("id"));
      time.setTime(rs.getInt("time"));
      time.setTitle(rs.getString("title"));
      Timestamp timestamp = rs.getTimestamp("savedDate");
      if (timestamp != null) {
        time.setSavedDate(timestamp.toLocalDateTime());
      }
      return time;
    }
  }
}