package com.hrsystem.hrsystem.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.hrsystem.hrsystem")
public class HrsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrsystemApplication.class, args);
	}

}
