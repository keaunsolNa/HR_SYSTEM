package com.hrsystem.hrsystem.controller.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrsystem.hrsystem.method.common.JwtTokenProvider;
import com.hrsystem.hrsystem.model.domain.user.Authority;
import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.domain.user.User;
import com.hrsystem.hrsystem.model.repository.user.LoginRepository;
import com.hrsystem.hrsystem.model.service.user.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/userlogin")
@RequiredArgsConstructor
public class LoginController {

	private final JwtTokenProvider jwtTokenProvider;
	private final PasswordEncoder passwordEncoder;
	private final LoginRepository loginRepository;
	private final UserService userService;
	
    // 로그인
	@PostMapping("/userCheck")
	public String login(@RequestBody EmpBase user) {
		
		System.out.println("로그인 요청 컨트롤러 ");
		User member = loginRepository.findById(user.getEmpId())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));
		
        if (!passwordEncoder.matches(user.getPassword(), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        
        List<Authority> roles = member.getRoles();
        System.out.println(roles);

        return jwtTokenProvider.createToken(member.getEmpId()+"", roles);
		
	}
	
	// 토큰 정보로 유저 객체 가져오기
	@PostMapping("getLoginUser") 
	public Object getUserId(@RequestBody String token) {

		System.out.println("GetLoginUser");
		Map<String, String> userId = new HashMap<>();
		
		System.out.println(token);

		try {
			
			String id = jwtTokenProvider.getUserPk(token);
			userId.put("SUCCESS", id);
			
		} catch(io.jsonwebtoken.ExpiredJwtException e) {
			
			userId.put("ERROR", "토큰 기한 만료. 다시 로그인 해 주세요");
			
		} catch(Exception e) {
			
			e.printStackTrace();
			userId.put("ERROR", e.toString());
			
		}
		
		if(userId.containsKey("SUCCESS")) {
			
			Optional<EmpBase> employee = userService.getUser(userId.get("SUCCESS"));
			
			return employee;
			
		}
		
		return userId;
	}
	

}