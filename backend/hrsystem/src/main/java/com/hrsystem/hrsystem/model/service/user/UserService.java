package com.hrsystem.hrsystem.model.service.user;

import javax.persistence.EntityManager;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.repository.user.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepositroy;
	private final ModelMapper modelMapper;
	private EntityManager entityManager;
	
	@Autowired
	public UserService(UserRepository userRepository, ModelMapper modelMapper, EntityManager entityManager) {
		this.userRepositroy = userRepository;
		this.modelMapper = modelMapper;
		this.entityManager = entityManager;
	}
	
	// 로그인 
	public EmpBase login(String empId) {

		EmpBase empList = userRepositroy.findAllByEmpId(empId);
		
		return modelMapper.map(empList, EmpBase.class);
	}

	// 임시 계정 생성
	public EmpBase createAccount(EmpBase request) {

		EmpBase result = userRepositroy.save(modelMapper.map(request, EmpBase.class));
		
		return result;
	}

	// 시퀸스 번호 가져오기
	public Long selectSeqNumber() {

		return userRepositroy.getCurrentSeqValue();
	}
}
