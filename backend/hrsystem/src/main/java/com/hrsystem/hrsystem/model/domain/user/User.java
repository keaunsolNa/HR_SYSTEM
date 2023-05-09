package com.hrsystem.hrsystem.model.domain.user;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="EMP_BASE")
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable {

	private static final long serialVersionUID = -4404887252879696483L;
	
	@Id
	@Column(name = "EMP_ID")
	private Long empId;

	@Column(name = "PASSWORD", nullable = false)
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

    @ManyToMany(cascade=CascadeType.MERGE) 
    @JoinTable(
            name="ROLE",
            joinColumns={@JoinColumn(name="EMP_NO", referencedColumnName="EMP_ID")},
            inverseJoinColumns={@JoinColumn(name="AUTHORITY_CODE", referencedColumnName="AUTHORITY_CODE")})
    private List<Authority> roles;
    

}