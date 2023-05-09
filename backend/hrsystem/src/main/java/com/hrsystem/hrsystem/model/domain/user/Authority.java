package com.hrsystem.hrsystem.model.domain.user;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="AUTHORITY")
@Getter
@Setter
public class Authority implements Serializable {

	private static final long serialVersionUID = 6064399222664228433L;

	@Id
	@Column(name = "AUTHORITY_CODE")
	private int AuthorityCode;
	
	@Column(name = "AUTHORITY_NAME", nullable = false, unique = true)
	private String authorityName;
	
	@Column(name = "AUTHORITY_DESC")
	private String authorityDesc;
	
}
