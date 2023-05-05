package com.hrsystem.hrsystem.model.service.user;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;


@Service
public class LoginServiceImpl implements LoginService{

	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

		EmpBase user = new EmpBase();
		return (UserDetails)user;
			
		
	}

}

