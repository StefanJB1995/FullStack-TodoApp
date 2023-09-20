package com.udemy.projects.basic.auth;
//WE ARE NOT USING BASIC AUTH SO I COMMENTED THE RIGHT PACKAGE NAME

//package com.udemy.projects.todowebservice.basic.auth;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.web.util.matcher.AntPathRequestMatcher.antMatcher;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth{
    
    @SuppressWarnings("removal")
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //1: Response to preflight request doesn't pass access control check
        //2: basic auth
        return 
                http
                    .authorizeHttpRequests(
                        auth -> 
                            auth
                            .requestMatchers(antMatcher(HttpMethod.OPTIONS, "/**")).permitAll() //CHANGED THIS TO antMatcher. Works now!
                            .anyRequest().authenticated()
                        )
                    .httpBasic(Customizer.withDefaults())
                    .sessionManagement(
                        session -> session.sessionCreationPolicy
                        (SessionCreationPolicy.STATELESS))
                    .csrf().disable()
                    .build();
    }
}
