package com.hrsystem.hrsystem.model.service.user;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.repository.user.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	private final UserRepository userRepositroy;
	private final ModelMapper modelMapper;
	
	@Autowired
	public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
		this.userRepositroy = userRepository;
		this.modelMapper = modelMapper;
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

	// 사원 이름으로 사원 계정 검색
	@Override
	public List<EmpBase> selectEmployeeWithEmployeeName(String string) {
		
		List<EmpBase> empList = userRepositroy.findAllByTempYnAndEmpNameLike("Y", string);
		return empList;
	}
}
