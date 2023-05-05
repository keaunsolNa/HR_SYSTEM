package com.hrsystem.hrsystem.method.common;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.TimeZone;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;

public class CommonInput {

	public static EmpBase inputMMTT(EmpBase emp) {
		
		Date currentDate =  Date.valueOf(LocalDate.now());
		String timeZone = TimeZone.getDefault().getID();
		ZonedDateTime now = ZonedDateTime.now();
		java.sql.Date tzDate = java.sql.Date.valueOf(now.toLocalDate());
		
		emp.setModDate(currentDate);
		
		// 추후 세션에서 가져올 ID
		emp.setModUserId(20230101L);

		emp.setTzCd(timeZone);
		emp.setTzDate(tzDate);
		
		return emp;
		
	}
}
