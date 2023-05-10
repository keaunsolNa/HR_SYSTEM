package com.hrsystem.hrsystem.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class BcryptoConfiguration {

    @Bean
    BCryptPasswordEncoder password() {
		return new BCryptPasswordEncoder();
	}
}
