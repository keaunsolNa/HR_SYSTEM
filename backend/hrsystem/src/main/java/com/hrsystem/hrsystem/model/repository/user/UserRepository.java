package com.hrsystem.hrsystem.model.repository.user;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;

@Transactional
public interface UserRepository extends JpaRepository<EmpBase, Long> {

	// 시퀸스 생성
    @Query(value = "SELECT SEQ_EMP_BASE.NEXTVAL FROM DUAL", nativeQuery = true)
    Long getCurrentSeqValue();

    // Emp 계정 조회
	List<EmpBase> findAllByTempYnAndEmpNameLike(String temp, String string);

}
