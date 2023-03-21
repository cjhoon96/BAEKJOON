# Unit 4. Organization of Database Updates



# Lesson 1.  Performing Database Changes from Within the Application Program



* ## Database Changes from Within the Application Program

  여러개의 스크린을 사용하는 프로그램의 경우

  스크린이 넘어갈 경우 auto commit이 일어나 데이터 복구를 하지 못하는 상황을 방지하기 위해

  마지막 스크린에서 데이터를 처리하는 경우가 일반적이다.





* ## Direct Updates - Data Flow

  각각의 스크린에서 DATA를 Global program data에 저장 후 

  Last dialog step에서 Global program data 에 할당 되어 있는 값의 DATA를 처리해 준다.





* ## Direct Updates - Locks

  





* ## Subroutines with Deferred Processing

  

  

  * ### PERFROM ON COMMIT - Error Handling

    MESSAGE TYPE A 를 사용해 ROLLBACK

    

  * ### PERFROM ON COMMIT - Data Flow

    

    









# Lesson 2. Performing Database Changes Using the Update Technique





* ## Concept and Technical Implementation of the Update Technique

  



* ## Update Concept and Process Flow

  

  



* ## Write Requests

  

  



* ## Complete Requests

  

  



* ## Transfer Information to Update Program

  

  





* ## Perform Database Updates

  

  





* ## Delete Requests

  

  





* ## Technical Implementation of the Update

  Pass by value에 채크시 Call by value가 된다.

  









* ## Write and Close Requests

  

  





* ## Discard Requests 

  #### Generation Phase

  

  

  #### Processing Phase

  Message A 권장한다.

  





* ## Set Locks in the Update Process

  

  





* ## Update Modes

  

  

  





* ## Synchronous Update

  COMMIT WORK AND WAIT => 

  







* ## Local Update

  

  











# Lesson 3. Applying Further Features of the Update Technique







* ## V1 and V2 Updates

  

  





* ## Generate V1 and V2 Requests

  V1  : 크리티컬한 데이터들

  V2 : 마이너한 데이터들





* ## Set Locks in the Update

  ***_ scope = 2***를 주게 되면 dialog Program 에 설정한 lock은 V1으로 넘어가게 된다.( V2로 넘어가지는 않는다.)

  Update error : 기본적으로 lock이 삭재되지만 안될 수도,,,

  







* ## PERFORM ON COMMIT in the Update

  

  

  







