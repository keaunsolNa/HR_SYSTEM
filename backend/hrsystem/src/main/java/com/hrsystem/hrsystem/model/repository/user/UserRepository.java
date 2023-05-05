package com.hrsystem.hrsystem.model.repository.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hrsystem.hrsystem.model.domain.user.EmpBase;

@Repository
public interface UserRepository extends CrudRepository<EmpBase, String> {

	EmpBase findAllByEmpId(String empId);
	
    @Query(value = "SELECT SEQ_EMP_BASE.NEXTVAL FROM DUAL", nativeQuery = true)
    Long getCurrentSeqValue();
    
}
