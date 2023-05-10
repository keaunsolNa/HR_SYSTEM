DROP TABLE EMP_BASE;
DROP TABLE AUTHORITY;
DROP TABLE ROLE;
DROP SEQUENCE SEQ_EMP_BASE;

CREATE SEQUENCE SEQ_EMP_BASE;
CREATE TABLE EMP_BASE 
( EMP_ID NUMBER PRIMARY KEY,
  PASSWORD VARCHAR2(100) NOT NULL,
  COMPANY_CD VARCHAR2(10) NOT NULL,
  EMP_NO NUMBER NOT NULL,
  EMP_NAME VARCHAR2(100) NOT NULL,
  CTZ_NO VARCHAR2(100),
  EMAIL VARCHAR2(100),
  EMP_KIND_CD VARCHAR2(10) NOT NULL,
  HIRE_CD VARCHAR2(10) NOT NULL,
  IN_OFF_YN CHAR(1) NOT NULL,
  GENDER_CD CHAR(1) NOT NULL,
  BIRTH_YMD DATE,
  POS_CD VARCHAR2(10),
  ORG_CD VARCHAR2(10),
  DUTY_CD VARCHAR2(10),
  JOB_CD VARCHAR2(10),
  PAY_ORG_CD VARCHAR2(10),
  TEMP_YN CHAR(1) NOT NULL,
  HIRE_YMD DATE,
  RETIRE_YMD DATE,
  RETIRE_TYPE_CD VARCHAR2(10),
  CAREER_NUM NUMBER,
  FILE_PATH_ID VARCHAR2(100),
  MOD_USER_ID NUMBER,
  MOD_DATE DATE,
  TZ_CD  VARCHAR2(10), 
  TZ_DATE DATE
);

COMMENT ON COLUMN EMP_BASE.EMP_ID IS '사원 아이디';
COMMENT ON COLUMN EMP_BASE.PASSWORD IS '비밀번호';
COMMENT ON COLUMN EMP_BASE.COMPANY_CD IS '회사 코드';
COMMENT ON COLUMN EMP_BASE.EMP_NAME IS '이름';
COMMENT ON COLUMN EMP_BASE.EMP_NO IS '사번';
COMMENT ON COLUMN EMP_BASE.CTZ_NO IS '주민번호';
COMMENT ON COLUMN EMP_BASE.EMAIL IS '이메일';
COMMENT ON COLUMN EMP_BASE.EMP_KIND_CD IS '직원 구분 코드';
COMMENT ON COLUMN EMP_BASE.HIRE_CD IS '입사 구분 코드';
COMMENT ON COLUMN EMP_BASE.IN_OFF_YN IS '재직 여부';
COMMENT ON COLUMN EMP_BASE.GENDER_CD IS '성별';
COMMENT ON COLUMN EMP_BASE.BIRTH_YMD IS '생년월일';
COMMENT ON COLUMN EMP_BASE.POS_CD IS '직위 코드';
COMMENT ON COLUMN EMP_BASE.ORG_CD IS '부서 코드';
COMMENT ON COLUMN EMP_BASE.DUTY_CD IS '직책 코드';
COMMENT ON COLUMN EMP_BASE.JOB_CD IS '직무 코드';
COMMENT ON COLUMN EMP_BASE.PAY_ORG_CD IS '급여 코드';
COMMENT ON COLUMN EMP_BASE.TEMP_YN IS '임시 계정 여부';
COMMENT ON COLUMN EMP_BASE.HIRE_YMD IS '입사일';
COMMENT ON COLUMN EMP_BASE.RETIRE_YMD IS '퇴사일';
COMMENT ON COLUMN EMP_BASE.RETIRE_TYPE_CD IS '퇴사 구분 코드';
COMMENT ON COLUMN EMP_BASE.CAREER_NUM IS '경력 인정 개월 수';
COMMENT ON COLUMN EMP_BASE.FILE_PATH_ID IS '파일 패스 ID';
COMMENT ON COLUMN EMP_BASE.MOD_USER_ID IS '수정자';
COMMENT ON COLUMN EMP_BASE.MOD_DATE IS '수정일';
COMMENT ON COLUMN EMP_BASE.TZ_CD IS '타임존코드';
COMMENT ON COLUMN EMP_BASE.TZ_DATE IS '타임존일시';



CREATE TABLE AUTHORITY (
  AUTHORITY_CODE NUMBER PRIMARY KEY,
  AUTHORITY_NAME NVARCHAR2(30) NOT NULL,
  AUTHORITY_DESC NVARCHAR2(255) NOT NULL
 );

COMMENT ON COLUMN AUTHORITY.AUTHORITY_CODE IS '권한코드';
COMMENT ON COLUMN AUTHORITY.AUTHORITY_NAME IS '권한 명';
COMMENT ON COLUMN AUTHORITY.AUTHORITY_DESC IS '권한 설명';

 CREATE TABLE ROLE (
  AUTHORITY_CODE NUMBER NOT NULL,
  EMP_NO NUMBER NULL
 );

COMMENT ON COLUMN ROLE.AUTHORITY_CODE IS '권한코드';
COMMENT ON COLUMN ROLE.EMP_NO IS '직원번호';

COMMIT;
CREATE OR REPLACE TRIGGER TRG_ROLE AFTER
  INSERT ON EMP_BASE
  FOR EACH ROW
BEGIN
  IF :NEW.JOB_CD = '100'
    THEN 
      INSERT 
        INTO ROLE 
             (AUTHORITY_CODE, EMP_NO) 
      VALUES (1,  EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);  
  END IF;        
  IF :NEW.JOB_CD = '200'
    THEN 
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (1,  EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (2, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
  END IF;
  IF :NEW.JOB_CD = '300'
    THEN 
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (1, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
        VALUES (3, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
  END IF;  
  IF :NEW.JOB_CD = '400'
    THEN 
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (1, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)      
      VALUES (4, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
  END IF;  
  IF :NEW.JOB_CD = '500'
    THEN 
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (1, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (2, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);      
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (3, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (4, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL); 
      INSERT
        INTO ROLE
             (AUTHORITY_CODE, EMP_NO)
      VALUES (5, EXTRACT (YEAR FROM SYSDATE)|| SEQ_EMP_BASE.CURRVAL);
  END IF;  
END;
/
