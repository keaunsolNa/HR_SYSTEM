package com.hrsystem.hrsystem.model.Dto.User;

import java.sql.Date;

public class EmpBaseDTO {
	
	private String empId;
	private String password;
	private String companyCd;
	private String empNo;
	private String empName;
	private String ctzNo;
	private String email;
	private String empKindCd;
	private String hireCd;
	private String inOffYn;
	private String genderCd;
	private java.sql.Date birthYmd;
	private String posGrdCd;
	private String posCd;
	private String yearCd;
	private String ofgCd;
	private String dutyCd;
	private String jobCd;
	private String payOrgCd;
	private java.sql.Date hireYmd;
	private java.sql.Date retireYmd;
	private String retireTypeCd;
	private Integer careerNum;
	private String filePathId;
	private Integer modUserId;
	private java.sql.Date modDate;
	private String tzCd;
	private java.sql.Date tzDate;
	
	public EmpBaseDTO() {
		
	}
	
	public EmpBaseDTO(String empId, String password, String companyCd, String empNo, String empName, String ctzNo,
			String email, String empKindCd, String hireCd, String inOffYn, String genderCd, Date birthYmd,
			String posGrdCd, String posCd, String yearCd, String ofgCd, String dutyCd, String jobCd, String payOrgCd,
			Date hireYmd, Date retireYmd, String retireTypeCd, Integer careerNum, String filePathId, Integer modUserId,
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
		this.ofgCd = ofgCd;
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

	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
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
	public String getEmpNo() {
		return empNo;
	}
	public void setEmpNo(String empNo) {
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
	public String getOfgCd() {
		return ofgCd;
	}
	public void setOfgCd(String ofgCd) {
		this.ofgCd = ofgCd;
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
	public Integer getModUserId() {
		return modUserId;
	}
	public void setModUserId(Integer modUserId) {
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
		return "EmpBaseDTO [empId=" + empId + ", password=" + password + ", companyCd=" + companyCd + ", empNo=" + empNo
				+ ", empName=" + empName + ", ctzNo=" + ctzNo + ", email=" + email + ", empKindCd=" + empKindCd
				+ ", hireCd=" + hireCd + ", inOffYn=" + inOffYn + ", genderCd=" + genderCd + ", birthYmd=" + birthYmd
				+ ", posGrdCd=" + posGrdCd + ", posCd=" + posCd + ", yearCd=" + yearCd + ", ofgCd=" + ofgCd
				+ ", dutyCd=" + dutyCd + ", jobCd=" + jobCd + ", payOrgCd=" + payOrgCd + ", hireYmd=" + hireYmd
				+ ", retireYmd=" + retireYmd + ", retireTypeCd=" + retireTypeCd + ", careerNum=" + careerNum
				+ ", filePathId=" + filePathId + ", modUserId=" + modUserId + ", modDate=" + modDate + ", tzCd=" + tzCd
				+ ", tzDate=" + tzDate + "]";
	}
	
}
