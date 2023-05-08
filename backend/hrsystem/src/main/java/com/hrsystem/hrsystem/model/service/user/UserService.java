package com.hrsystem.hrsystem.model.service.user;

import java.util.List;
import java.util.Optional;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;

public interface UserService {

	EmpBase createAccount(EmpBase request);
	
	Long selectSeqNumber();

	List<EmpBase> selectEmployeeWithEmployeeName(String string);

	Optional<EmpBase> getUser(String userId);

	Optional<EmpBase> updateUser(EmpBase employee);
}
