package com.hrsystem.hrsystem.model.domain.user;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.Data;

@Entity
@Table(name = "EMP_BASE")
@DynamicInsert
@Data
public class EmpBase {
	
	@Id
	@Column(name = "EMP_ID")
	private Long empId;

	@Column(name = "PASSWORD")
	private String password;

	@Column(name = "COMPANY_CD")
	private String companyCd;
	
	@Column(name = "EMP_NO")
	private Long empNo;

	@Column(name = "EMP_NAME")
	private String empName;
	
	@Column(name = "CTZ_NO", nullable = true)
	private String ctzNo;

	@Column(name = "EMAIL", nullable = true)
	private String email;

	@Column(name = "EMP_KIND_CD")
	private String empKindCd;

	@Column(name = "HIRE_CD")
	private String hireCd;
	
	@Column(name = "IN_OFF_YN")
	private String inOffYn;
	
	@Column(name = "GENDER_CD")
	private String genderCd;

	@Column(name = "BIRTH_YMD")
	private java.sql.Date birthYmd;
	
	@Column(name = "POS_CD", nullable = true)
	private String posCd;
	
	@Column(name = "ORG_CD", nullable = true)
	private String orgCd;
	
	@Column(name = "DUTY_CD", nullable = true)
	private String dutyCd;
	
	@Column(name = "JOB_CD", nullable = true)
	private String jobCd;
	
	@Column(name = "PAY_ORG_CD", nullable = true)
	private String payOrgCd;

	@Column(name ="TEMP_YN")
	private String tempYn;
	
	@Column(name = "HIRE_YMD", nullable = true)
	private java.sql.Date hireYmd;

	@Column(name = "RETIRE_YMD", nullable = true)
	private java.sql.Date retireYmd;

	@Column(name = "RETIRE_TYPE_CD", nullable = true)
	private String retireTypeCd;

	@Column(name = "CAREER_NUM", nullable = true)
	private Integer careerNum;

	@Column(name = "FILE_PATH_ID", nullable = true)
	private String filePathId;

	@Column(name = "MOD_USER_ID")
	private Long modUserId;

	@Column(name = "MOD_DATE")
	private java.sql.Date modDate;
	
	@Column(name = "TZ_CD")
	private String tzCd;

	@Column(name = "TZ_DATE")
	private java.sql.Date tzDate;
	

}
