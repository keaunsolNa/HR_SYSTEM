package com.hrsystem.hrsystem.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/userlogin")
public class LoginController {

	@GetMapping("/userCheck/{empId}")
	public String adminModifyEmployee(@PathVariable int empId, Model mv) {
		System.out.println("로그인 요청");
		System.out.println(empId);
		System.out.println("로그인 요청");
		System.out.println("로그인 요청");
		System.out.println("로그인 요청");
		return "redirect:/main";
	};
	
	
	
}