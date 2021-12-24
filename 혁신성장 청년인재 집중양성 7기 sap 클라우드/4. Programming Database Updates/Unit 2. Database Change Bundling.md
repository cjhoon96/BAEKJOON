# Unit 2. Database Change Bundling







# Lesson 1. Grouping Database Changes











* ## Implicit Database Commits

  SCREEN 1에서 SCREEN 2로 넘어갈때는 자동으로 DB COMMIT 이 이루어진다.

  

  SCREEN 1에서 INSERT, UPDATE, DELETE, MODIFY 등의 구문을 수행 후 COMMIT을 안한상태로 SCREEN 2로 넘어가도 자동으로 COMMIT을 수행한다.

  

  이렇게 자동으로 COMMIT이 일어나는 구간을 ***DATABASE LUW***라고 부른다.