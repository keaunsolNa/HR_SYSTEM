package com.hrsystem.hrsystem.model.service.user;

import java.util.Collection;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hrsystem.hrsystem.model.domain.user.User;
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
		
		User user = userRepository.findByEmpId(Long.parseLong(userId))
				.orElseThrow(() -> new UsernameNotFoundException("userId" + userId + " not found"));
		
	     return new org.springframework.security.core.userdetails.User(user.getEmpId() + "",
	                user.getPassword(), getAuthorities(user));
				
    
	}
	
    private static Collection<? extends GrantedAuthority> getAuthorities(User user){
        String[] userRoles = user.getRoles()
                .stream()
                .map((role) -> role.getAuthorityCode())
                .toArray(String[]::new);

        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
}

