package com.hrsystem.hrsystem.controller.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrsystem.hrsystem.method.common.JwtTokenProvider;
import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.domain.user.Role;
import com.hrsystem.hrsystem.model.domain.user.User;
import com.hrsystem.hrsystem.model.repository.user.LoginRepository;

@RestController
@RequestMapping("/api/userlogin")
public class LoginController {

	private final JwtTokenProvider jwtTokenProvider;
	private final PasswordEncoder passwordEncoder;
	private final LoginRepository loginRepository;
	
	@Autowired
	public LoginController( PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider, 
							LoginRepository loginRepository) {
		this.jwtTokenProvider = jwtTokenProvider;
		this.passwordEncoder = passwordEncoder;
		this.loginRepository = loginRepository;
	}	
	
    
	@PostMapping("/userCheck")
	public String login(@RequestBody EmpBase user) {
		
		User member = loginRepository.findById(user.getEmpId())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));
		
		System.out.println(member);
//        if (!passwordEncoder.matches(user.getPassword(), member.getPassword())) {
//            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
//        }
        
        List<String> roles = new ArrayList<>();
        for (Role key : member.getRoles()) {
			roles.add(key.getAuthorityCode() +"");
		}
        
        return jwtTokenProvider.createToken(member.getEmpId()+"", roles);
		
	}
	
	@PostMapping("getLoginUser") 
	public String getUserId(@RequestBody Map<String, String> token) {
		
		String userId;
		try {
			userId = jwtTokenProvider.getUserPk(token.get("jwtAuthToken"));
		} catch(io.jsonwebtoken.ExpiredJwtException e) {
			userId = "토큰 기한 만료. 다시 로그인 해 주세요";
		}
		
		return userId;
	}
	

}