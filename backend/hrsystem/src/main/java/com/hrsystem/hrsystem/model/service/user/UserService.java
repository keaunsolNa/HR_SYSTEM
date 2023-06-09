package com.hrsystem.hrsystem.model.service.user;

import java.util.List;
import java.util.Optional;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.domain.user.User;

public interface UserService {

	EmpBase createAccount(EmpBase request);
	
	Long selectSeqNumber();

	List<EmpBase> selectEmployeeWithEmployeeName(String string);

	Optional<EmpBase> getUser(String userId);

	EmpBase updateUser(EmpBase employee);
}
