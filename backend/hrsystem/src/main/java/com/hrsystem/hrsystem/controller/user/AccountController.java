package com.hrsystem.hrsystem.controller.user;

import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrsystem.hrsystem.method.common.CommonInput;
import com.hrsystem.hrsystem.method.common.JwtTokenProvider;
import com.hrsystem.hrsystem.method.common.ParseInput;
import com.hrsystem.hrsystem.method.common.RandomPasswordGenerator;
import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.domain.user.User;
import com.hrsystem.hrsystem.model.service.user.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {

	private final UserService userService;
	private final JwtTokenProvider jwtTokenProvider;
	
	// 임시 계정 생성
	@PostMapping("/createTempUser")
	public EmpBase adminModifyEmployee(@RequestBody EmpBase request) {
		
		System.out.println(request);
		EmpBase employee = ParseInput.parseEmp(request);
		
		System.out.println(employee);
		long seq = userService.selectSeqNumber();
		long currentYear = Year.now().getValue();
		
		long Id = Long.parseLong(currentYear + "" + seq);
		employee.setEmpId(Id);
		
		String password = RandomPasswordGenerator.generateRandomString(6);
		employee.setPassword(password);

		// 추후 세션에서 CompanyCd 받아오기
		String companyCd = "01";
		employee.setCompanyCd(companyCd);
		
		// 사원번호 Set
		employee.setEmpNo(Id);
		
		// 재직 여부 Set
		employee.setInOffYn("Y");
		
		// 임시 계정 여부 Set
		employee.setTempYn("Y");
		
		// modUserId, modDate, TzCd, tzDate Setting
		employee = CommonInput.inputMMTT(employee);
		
		employee = userService.createAccount(employee);
		
		System.out.println(employee);
		return request;
	};

	// 임시 계정 검색
	@PostMapping("/searchUser")
	public List<EmpBase> searchTempEmp(@RequestBody Map<String, String> empName) {
		
		String parameter = empName.get("empName");
		if(parameter.equals("")) parameter ="%";
		else parameter += "%";
		
		List<EmpBase> empBaseList = new ArrayList<>();
		
		empBaseList = userService.selectEmployeeWithEmployeeName(parameter);
		
		return empBaseList;
	}
	
	// 사원 정보 가져오기 
	@PostMapping("getUser") 
	public Optional<EmpBase> getUser(@RequestBody String userId) {
		
		userId = jwtTokenProvider.getUserPk(userId);
		
		Optional<EmpBase> employee = userService.getUser(userId);
		
		System.out.println(employee);
		
		return employee;
	}
	
	@PostMapping("updateUser") 
	public Optional<User> updateUser(@RequestBody EmpBase employee) {
		
		System.out.println(employee);
		
		Optional<User> updateEmployee = userService.updateUser(employee);
		
		return updateEmployee;
		
	}
}
