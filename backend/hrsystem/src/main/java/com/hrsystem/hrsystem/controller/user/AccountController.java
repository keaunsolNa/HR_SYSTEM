package com.hrsystem.hrsystem.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.service.user.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class AccountController {

	private final UserService userService;
	
	@Autowired
	public AccountController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping("/createTempUser")
	public EmpBase adminModifyEmployee(EmpBase emp ) {
		
		System.out.println(emp);
		System.out.println(emp.getEmpName());
//		System.out.println(empId);
		EmpBase employee = new EmpBase();
		
		return employee;
	};
	
}
