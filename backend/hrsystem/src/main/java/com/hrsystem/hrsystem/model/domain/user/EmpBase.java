package com.hrsystem.hrsystem.model.domain.user;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "EMP_BASE")
@DynamicInsert
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

	@Column(name = "POS_GRD_CD", nullable = true)
	private String posGrdCd;
	
	@Column(name = "POS_CD", nullable = true)
	private String posCd;
	
	@Column(name = "YEAR_CD", nullable = true)
	private String yearCd;
	
	@Column(name = "ORG_CD", nullable = true)
	private String orgCd;
	
	@Column(name = "DUTY_CD", nullable = true)
	private String dutyCd;
	
	@Column(name = "JOB_CD", nullable = true)
	private String jobCd;
	
	@Column(name = "PAY_ORG_CD", nullable = true)
	private String payOrgCd;

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
	
	public EmpBase() {
		super();
	}

	public EmpBase(Long empId, String password, String companyCd, Long empNo, String empName, String ctzNo,
			String email, String empKindCd, String hireCd, String inOffYn, String genderCd, Date birthYmd,
			String posGrdCd, String posCd, String yearCd, String orgCd, String dutyCd, String jobCd, String payOrgCd,
			Date hireYmd, Date retireYmd, String retireTypeCd, Integer careerNum, String filePathId, Long modUserId,
			Date modDate, String tzCd, Date tzDate) {
		super();
		this.empId = empId;
		this.password = password;
		this.companyCd = companyCd;
		this.empNo = empNo;
		this.empName = empName;
		this.ctzNo = ctzNo;
		this.email = email;
		this.empKindCd = empKindCd;
		this.hireCd = hireCd;
		this.inOffYn = inOffYn;
		this.genderCd = genderCd;
		this.birthYmd = birthYmd;
		this.posGrdCd = posGrdCd;
		this.posCd = posCd;
		this.yearCd = yearCd;
		this.orgCd = orgCd;
		this.dutyCd = dutyCd;
		this.jobCd = jobCd;
		this.payOrgCd = payOrgCd;
		this.hireYmd = hireYmd;
		this.retireYmd = retireYmd;
		this.retireTypeCd = retireTypeCd;
		this.careerNum = careerNum;
		this.filePathId = filePathId;
		this.modUserId = modUserId;
		this.modDate = modDate;
		this.tzCd = tzCd;
		this.tzDate = tzDate;
	}

	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCompanyCd() {
		return companyCd;
	}

	public void setCompanyCd(String companyCd) {
		this.companyCd = companyCd;
	}

	public Long getEmpNo() {
		return empNo;
	}

	public void setEmpNo(Long empNo) {
		this.empNo = empNo;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getCtzNo() {
		return ctzNo;
	}

	public void setCtzNo(String ctzNo) {
		this.ctzNo = ctzNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmpKindCd() {
		return empKindCd;
	}

	public void setEmpKindCd(String empKindCd) {
		this.empKindCd = empKindCd;
	}

	public String getHireCd() {
		return hireCd;
	}

	public void setHireCd(String hireCd) {
		this.hireCd = hireCd;
	}

	public String getInOffYn() {
		return inOffYn;
	}

	public void setInOffYn(String inOffYn) {
		this.inOffYn = inOffYn;
	}

	public String getGenderCd() {
		return genderCd;
	}

	public void setGenderCd(String genderCd) {
		this.genderCd = genderCd;
	}

	public java.sql.Date getBirthYmd() {
		return birthYmd;
	}

	public void setBirthYmd(java.sql.Date birthYmd) {
		this.birthYmd = birthYmd;
	}

	public String getPosGrdCd() {
		return posGrdCd;
	}

	public void setPosGrdCd(String posGrdCd) {
		this.posGrdCd = posGrdCd;
	}

	public String getPosCd() {
		return posCd;
	}

	public void setPosCd(String posCd) {
		this.posCd = posCd;
	}

	public String getYearCd() {
		return yearCd;
	}

	public void setYearCd(String yearCd) {
		this.yearCd = yearCd;
	}

	public String getOrgCd() {
		return orgCd;
	}

	public void setOrgCd(String orgCd) {
		this.orgCd = orgCd;
	}

	public String getDutyCd() {
		return dutyCd;
	}

	public void setDutyCd(String dutyCd) {
		this.dutyCd = dutyCd;
	}

	public String getJobCd() {
		return jobCd;
	}

	public void setJobCd(String jobCd) {
		this.jobCd = jobCd;
	}

	public String getPayOrgCd() {
		return payOrgCd;
	}

	public void setPayOrgCd(String payOrgCd) {
		this.payOrgCd = payOrgCd;
	}

	public java.sql.Date getHireYmd() {
		return hireYmd;
	}

	public void setHireYmd(java.sql.Date hireYmd) {
		this.hireYmd = hireYmd;
	}

	public java.sql.Date getRetireYmd() {
		return retireYmd;
	}

	public void setRetireYmd(java.sql.Date retireYmd) {
		this.retireYmd = retireYmd;
	}

	public String getRetireTypeCd() {
		return retireTypeCd;
	}

	public void setRetireTypeCd(String retireTypeCd) {
		this.retireTypeCd = retireTypeCd;
	}

	public Integer getCareerNum() {
		return careerNum;
	}

	public void setCareerNum(Integer careerNum) {
		this.careerNum = careerNum;
	}

	public String getFilePathId() {
		return filePathId;
	}

	public void setFilePathId(String filePathId) {
		this.filePathId = filePathId;
	}

	public Long getModUserId() {
		return modUserId;
	}

	public void setModUserId(Long modUserId) {
		this.modUserId = modUserId;
	}

	public java.sql.Date getModDate() {
		return modDate;
	}

	public void setModDate(java.sql.Date modDate) {
		this.modDate = modDate;
	}

	public String getTzCd() {
		return tzCd;
	}

	public void setTzCd(String tzCd) {
		this.tzCd = tzCd;
	}

	public java.sql.Date getTzDate() {
		return tzDate;
	}

	public void setTzDate(java.sql.Date tzDate) {
		this.tzDate = tzDate;
	}

	@Override
	public String toString() {
		return "EmpBase [empId=" + empId + ", password=" + password + ", companyCd=" + companyCd + ", empNo=" + empNo
				+ ", empName=" + empName + ", ctzNo=" + ctzNo + ", email=" + email + ", empKindCd=" + empKindCd
				+ ", hireCd=" + hireCd + ", inOffYn=" + inOffYn + ", genderCd=" + genderCd + ", birthYmd=" + birthYmd
				+ ", posGrdCd=" + posGrdCd + ", posCd=" + posCd + ", yearCd=" + yearCd + ", orgCd=" + orgCd
				+ ", dutyCd=" + dutyCd + ", jobCd=" + jobCd + ", payOrgCd=" + payOrgCd + ", hireYmd=" + hireYmd
				+ ", retireYmd=" + retireYmd + ", retireTypeCd=" + retireTypeCd + ", careerNum=" + careerNum
				+ ", filePathId=" + filePathId + ", modUserId=" + modUserId + ", modDate=" + modDate + ", tzCd=" + tzCd
				+ ", tzDate=" + tzDate + "]";
	}


}
