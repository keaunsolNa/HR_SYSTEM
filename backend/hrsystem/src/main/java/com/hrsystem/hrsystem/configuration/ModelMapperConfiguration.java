package com.hrsystem.hrsystem.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.hrsystem.hrsystem")
public class ModelMapperConfiguration {

	@Bean
	ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
