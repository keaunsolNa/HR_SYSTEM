package com.hrsystem.hrsystem.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.service.user.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/userlogin")
@RequiredArgsConstructor
public class LoginController {

	private final UserService userService;
	
	@Autowired
	public LoginController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/userCheck/{empId}")
	public EmpBase adminModifyEmployee(@PathVariable String empId, Model mv) {
		
		EmpBase employee = userService.login(empId);
		
		return employee;
	};
	
	
	@PostMapping(value="/")
	public String redirectMain(@AuthenticationPrincipal User userinfo, ModelAndView mv) {
		return "redirect:/";
	}
	
}