package com.hrsystem.hrsystem.model.domain.user;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@Table(name="ROLE")
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Role implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2442439253944382064L;


	@Column(name = "AUTHORITY_CODE")
	private Long authorityCode;

	@Column(name = "EMP_NO")
	private String empNo;

	@ManyToMany(mappedBy="ROLE")
	private List<User> user;
	
	
}

