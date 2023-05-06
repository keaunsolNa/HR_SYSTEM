package com.hrsystem.hrsystem.model.repository.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrsystem.hrsystem.model.domain.user.User;

public interface  LoginRepository extends JpaRepository<User, Long>{

	Optional<User> findById(Long empId);

}
