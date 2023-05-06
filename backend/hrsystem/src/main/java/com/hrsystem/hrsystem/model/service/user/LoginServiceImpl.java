package com.hrsystem.hrsystem.model.service.user;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.repository.user.LoginRepository;
import com.hrsystem.hrsystem.model.repository.user.UserRepository;


@Service
public class LoginServiceImpl implements LoginService{

    private final UserRepository userRepository;
    private final LoginRepository loginRepository;
    private final ModelMapper modelMapper;
    
    @Autowired
    public LoginServiceImpl(UserRepository userRepository, ModelMapper modelMapper, LoginRepository loginRepository) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.loginRepository = loginRepository;
    }

	@Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        return loginRepository.findById(Long.parseLong(userId))
                .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    
	}
	

}

