package com.hrsystem.hrsystem.configuration;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackages = {"com.hrsystem.hrsystem"})
@EnableJpaRepositories(basePackages = "com.hrsystem.hrsystem")
public class JPAConfiguration {

}
