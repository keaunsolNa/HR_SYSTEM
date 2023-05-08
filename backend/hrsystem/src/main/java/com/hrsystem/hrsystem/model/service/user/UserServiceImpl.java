package com.hrsystem.hrsystem.model.service.user;

import java.util.List;
import java.util.Optional;

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

	// 사원 정보 가져오기
	@Override
	public Optional<EmpBase> getUser(String userId) {
		
		Optional<EmpBase> employee = userRepositroy.findById(Long.parseLong(userId));
		
		return employee;
	}

	// 사원 정보 수정
	@Override
	public EmpBase updateUser(EmpBase employee) {

		EmpBase updateUser = userRepositroy.findByEmpId(employee.getEmpId());
		
		if(updateUser.getTempYn() == "Y") updateUser.setTempYn("N");
		
		userRepositroy.save(employee);
				
		return updateUser;
	}
}
