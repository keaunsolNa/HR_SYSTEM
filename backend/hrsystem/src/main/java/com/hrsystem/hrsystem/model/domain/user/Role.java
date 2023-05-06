package com.hrsystem.hrsystem.model.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="ROLE")
public class Role {

	@Id
	@Column(name = "AUTHORITY_CODE")
	private Long authorityCode;

	@Column(name = "EMP_NO")
	private String empNo;

}

