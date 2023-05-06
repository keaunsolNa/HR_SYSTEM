package com.hrsystem.hrsystem.method.common;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;

public class ParseInput {

	public static EmpBase parseEmp(EmpBase emp) {
		
		switch(emp.getHireCd()) {
			case "정규직신입" : emp.setHireCd("100"); break;
			case "정규직경력" : emp.setHireCd("200"); break;
			case "인턴" : emp.setHireCd("300"); break;
			case "계약직" : emp.setHireCd("400"); break;
			case "외부파견인재" : emp.setHireCd("500"); break;
		}
		
		switch(emp.getOrgCd()) {
			case "사업1부" : emp.setOrgCd("100"); break;
			case "사업2부" : emp.setOrgCd("200"); break;
			case "사업3부" : emp.setOrgCd("300"); break;
			case "사업4부" : emp.setOrgCd("400"); break;
			case "사업5부" : emp.setOrgCd("500"); break;
		}
		
		switch(emp.getPosCd()) {
			case "외부인원" : emp.setPosCd("100"); break;
			case "인턴" : emp.setPosCd("200"); break;
			case "계약직" : emp.setPosCd("300"); break;
			case "사원" : emp.setPosCd("400"); break;
			case "대리" : emp.setPosCd("500"); break;
			case "과장" : emp.setPosCd("600"); break;
			case "차장" : emp.setPosCd("700"); break;
			case "부장" : emp.setPosCd("800"); break;
			case "이사" : emp.setPosCd("900"); break;
			case "상무" : emp.setPosCd("1000"); break;
			case "전무" : emp.setPosCd("1100"); break;
			case "부사장" : emp.setPosCd("1200"); break;
			case "사장" : emp.setPosCd("1300"); break;
		}
		
		switch(emp.getEmpKindCd()) {
			case "외부인원" : emp.setEmpKindCd("100"); break;
			case "내부인원" : emp.setEmpKindCd("200"); break;
		}
		
		switch(emp.getGenderCd()) {
			case  "남성" : emp.setGenderCd("M"); break;
			case  "여성" : emp.setGenderCd("F"); break;
		}
		return emp;
	}
}
