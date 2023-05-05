package com.hrsystem.hrsystem.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan("com.hrsystem.hrsystem")
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AOPConfiguration {

}
