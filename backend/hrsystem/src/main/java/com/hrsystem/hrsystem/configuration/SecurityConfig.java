package com.hrsystem.hrsystem.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.hrsystem.hrsystem.component.filter.JwtAuthenticationFilter;
import com.hrsystem.hrsystem.method.common.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig  {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable();
        http
                .authorizeRequests(requests -> requests
                        .antMatchers("/user/**").authenticated()
                        .antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                        .antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
                        .anyRequest().permitAll())
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    
}