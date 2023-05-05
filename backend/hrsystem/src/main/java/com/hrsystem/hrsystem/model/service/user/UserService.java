package com.hrsystem.hrsystem.model.service.user;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.repository.user.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepositroy;
	private final ModelMapper modelMapper;
	
	@Autowired
	public UserService(UserRepository userRepository, ModelMapper modelMapper) {
		this.userRepositroy = userRepository;
		this.modelMapper = modelMapper;
	}
	
	public EmpBase login(String empId) {

		EmpBase empList = userRepositroy.findAllByEmpId(empId);
		
		return modelMapper.map(empList, EmpBase.class);
	}
}
