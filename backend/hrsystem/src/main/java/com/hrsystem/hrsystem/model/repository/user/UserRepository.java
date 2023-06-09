package com.hrsystem.hrsystem.model.repository.user;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;
import com.hrsystem.hrsystem.model.domain.user.User;

@Transactional
public interface UserRepository extends JpaRepository<EmpBase, Long> {

	// 시퀸스 생성
    @Query(value = "SELECT SEQ_EMP_BASE.NEXTVAL FROM DUAL", nativeQuery = true)
    Long getCurrentSeqValue();

    // Emp 계정 조회
	List<EmpBase> findAllByTempYnAndEmpNameLike(String temp, String string);

	// EmpBase 객체 조회
	Optional<User> findByEmpId(Long empId);

}
