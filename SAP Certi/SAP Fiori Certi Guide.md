# SAP Fiori Certi Guide

****

****

# 1. SAP Fiori Strategy, Standards, and GuideLines

****



## UX 의 중요성

* 사용자 참여 / 생산성 향상
* 간단한 UI 로 교육 비용 절감, 신규 직원 생산성 향상
* 프로세스 규정 준수 및 효율적인 프로세스 개선을 통한 감사 비용 감소
* 데이터 입력 중 오류 감소, 의사 결정에 도움이 되는 정확한 Report 생성 



## SAP 의 New UX 전략

기존 전략

* ### New

* ### Renew

* ### Empower



## Fiori  Application Types

* ### Transactional

  Task based 이며 business process 를 수행한다.

  CRUD 작업중 하나 이상이 있으며 app 과 back-end 간에 양방향 데이터 이동을 수반한다.

  **SAP HANA DB 가 필수는 아니지만 최적의 성능을 위해 권장한다.**

  

* ### Analytical

  **읽기 전용 앱**으로 일반적으로 SAP HANA 의 기능을 사용하여 숫자 크런칭, 데이터 시각화, 미래 예측 등의 사용 사례를 해결한다.

  SAP 에서 제공되는 KPI Modeler 를 사용하여 프로그래밍 없이 KPI 그래프/차트 를 생성할 수 있다.

  기본 제공되는 KPI 도 존재한다.

  **SAP HANA 가 데이터베이스로 필요하다.**

  

* ### Fact Sheet

  Business object 또는 Business transaction 에 대한 상황별 정보를 표시한다.

  이 앱들은 보통 실행 타일이 없다.

  대신 검색 결과를 클릭하거나 다른 Transactional / Analytical / Fact Sheet App 에서 사용할 수 있는 다양한 드릴다운 링크를 클릭하여 실행된다.

  다른 Transactional app 에 대한 링크도 제공한다.

  (ex. 구매 주문 정보 시트 앱에서 구매 요청을 구매 주문으로 변환하는 트랜잭션 앱으로 이동할 수 있다.)

  **읽기 전용 앱**으로 데이터를 CDS view 로 보며 UI rendering annotation 을 사용한다.

  **SAP HANA 가 데이터베이스로 필요하다.**

  

  

## SAP Fiori 주요 설계 원칙

* ### Role-based apps

* ### Adaptive

* ### Simple

* ### Coherent

* ### Delightful



## UX Design

* ### Visual design

* ### Information archtecture

* ### Interaction Design

* ### Usability

* ### Accesibility

* ### Human-computer interation



## Design Thinking process

### 세가지 요소

* ### Multidisciplinary teams

* ###  Design Thinking workshop

* ### Creative and collaborative space

### 두가지 영역

* ### Problem Space

  * Understand
  * Observe
  * Point of View

* ### Solution Space

  * Ideate
  * Prototype
  * Test



## De-composition and Re-composition

SAP Fiori 애플리케이션은 하나의 크고 복잡한 SAP 트랜잭션의 기능을 여러 Fiori 애플리케이션으로 분해할 수 있다. 이를 **De-composition** 이라 한다. 

여러 SAP 트랜잭션의 기능을 결합하여 전체 비즈니스 트랜잭션을 수행하는 SAP Fiori 애플리케이션을 만들 수도 있다. 이를 **Re-composition** 이라 한다.

SAP Fiori app 을 설계할 때는 system 이 고려 대상이 되는 경우는 거의 없다.오히려 사용자 중심적이다.

* ### Re-composition 

  SAP Fiori app 을 사용하면 GUI 의 여러 Transaction 의 기능을 결합하여 기능을 구축할 수 있다.

  **사용자 탐색의 감소 / 화면 상호 작용의 단순화**

  **=> 사용자 생산성 향상**

* ### De-composition

  다른 Role 을 가진 많은 사용자가 사용하는 일반적인 T-Code 는 각 Role에 대해 여러 앱으로 분할 될 수 있다. 

  SAP Fiori 는 Role-based 이기 때문에 사용자가 업무와 필요에 따라 작업을 수행할 수 있도록 필요한 화면 요소만 제공

  => 사용자 집중력 유지 / 효율적인 작업 



## SAP Build

맞춤형 SAP Fiori app 을 **설계**하고 **프로토타입**을 만들기 위해 구축된 **클라우드 기반 툴**이다.

* ### Inviting a Team

* ### Creating a Persona

* ### Creating a Prototype

* ### Creating a Study

  **Feedback**

  * Annotations
  * Text
  * Multiple choices
  * Perform action
  * prototype 을 직접 수정하지는 않는다. 



## SAP Fiori Stencils

Design stencils allow you to quickly design wireframes for your application. Wireframes and prototypes built with these stencils aren’t as elaborative as those built with SAP Build, but they can meet the need for quick prototypes.
SAP provides stencils in two flavors:

* ###  Design stencils for Axure RP

  Axure RP is a powerful tool for building interactive prototypes. Axure provides its own UI elements to build the prototype. However, if you want the prototype to have an SAP Fiori flavor, then you need to load the stencils provided by SAP into the Axure tool and use the UI elements provided by SAP to build your prototype.

* ###  Design stencils for Microsoft PowerPoint

  These are draft slides provided by SAP as PowerPoint slides. These slides can be edited, and UI elements can be moved to achieve the desired mock-ups. SAP provides only a limited number of controls and layouts as stencils for PowerPoint. Mock-ups created with these stencils don’t represent the SAP Fiori visual design exactly.



## SAP Fiori Design Guideline

* ### Message Handling

  **종류**

  * Error
  * Warning
  * Information
  * Success
  * Confirmation

  ### Message Elements

  * message popover

    서버 쪽 메시지를 자동으로 표시할 수 있다.

    page 하단에 버튼을 클릭시 올라와 여러 메시지 내역을 확인할 수 있는 것

    여러 메시지를 띄울 때 용의

    https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.MessagePopover/sample/sap.m.sample.MessagePopover

  * message box

  * message strip

    내가 개발한 app 에서도 사용한 것 

    특정 위치에 띄운후 끌 수 있는 message strip 을 생성

  * message toast

    시간이 지나면 자동으로 지워지는 message

  * message page

* ## Fiori Elements

  * ### 목표

    * Design consistency

    * Auto update of the apps per the latest design guidelines

      최신 design guidelines 에 따라 자동 update

    * Minimal or no frontend coding

      Front-end Code 의 최소화 

  * ### Floorplans from Back-end Annotation

    * List report
    * Object page
    * Overview page

     :heavy_check_mark:이부분은 ux 책 / Fiori design guideline 참고 하자

  * ### Fllorplans 

    :heavy_check_mark:이부분은 ux 책 / Fiori design guideline 참고 하자

  * ### Draft Handling and Lock Concept

    시스템에서 아직 activate 됮 않은 business object 또는 transaction 의 중간 버전이다.

    **Draft 의 목적 :**

    * 사용자가 언제든지 개체 작업을 중지하고 나중에 계속하도록 허용
    * app 또는 네트워크가 예기치 않게 종료될 경우 데이터 손실을 방지
    * Lock 기능 (동일한 비즈니스 문서를 동시 편집할 수 없도록함)



## Practice

## 1. Which of the following attributes <u>can’t</u> be associated with SAP Build?

 A. <u>***Cloud-based***</u> tool

 B. Used to build **<u>*complete responsive prototypes*</u>**

###  C. Enables writing JavaScript code for data binding in advanced mode

 D. Generates SAPUI5 **<u>*starter code*</u>** for the finalized prototype



## 2. This floorplan can be used to <u>guide the user</u> through the data entry process, one step at a time.

A. Overview page

B. Object page

C. Worklist

### D. Wizard



## 3. Which control is recommended to <u>show multiple messages</u> from the server on a form?

 A. sap.m.Dialog

 B. sap.m.MessageStrip

 C. sap.m.MessageBox

###  D. sap.m.MessagePopover



## 4. In SAP Build, you need to create the following object for getting feedback on the prototype from users.

 A. Feedback

###  B. Study

 C. Team

 D. Dialog



## 5. Which of the following is not an objective of the draft feature within SAP Fiori.

 A. Enable the lock feature.

 B. Allow the user to continue data entry at a later point in time.

 C. Prevent loss of data due to network failure.

###  D. Allow data review by peers.



## 6. Which application type provides information about a business object or a transaction?

 A. Transaction apps

 B. Analytical apps

###  C. Fact sheet apps



## 7. The process of combining the functionality of multiple GUI transactions into one SAP Fiori app is called decomposition.

###  A. True

 B. False



## 8. An overview page is made up of

 A. Tiles

###  B. Cards

 C. Charts

 D. Tables



## 9. SAP-provided SAP Fiori apps represent which part of SAP’s UX strategy?

 A. New

###  B. Renew

 C. Enable

 D. Empower



## 10. Which of these services are not part of SAP UX Design Services?

 A. Design Thinking workshops

 B. Advice on technologies

 C. Train the developers on Design Thinking

###  D. Train the end users on the application



## 11. Which of these key design principle talks about having a single UI language?

 A. Simple

###  B. Coherent

 C. Adaptive

 D. Delightful



## 12. Which apps are usually opened from search results or by clicking drilldown links within other SAP Fiori apps?

###  A. Fact sheet apps

 B. Analytical apps

 C. KPI apps

 D. Transactional apps



## 13. In a Design Thinking process, which of the following tasks belong to the problem space?

###  A. Understand

###  B. Observe

 C. Ideate

 D. Test



## 14. Which of the following is the final converging step in the solution space of Design Thinking process?

###  A. Test

 B. Point-of-view

 C. Prototype

 D. Ideate



## 15. In SAP Build, by using the Invite Team option, you send the study to users for feedback on the prototype. 

 A. True

###  B. False



## 16. What is the limitation of the SAP Build free trial?

 A. Limited time trial

 B. Limited number of team members

 C. Limited number of users

###  D. Limited number of active projects



## 17. In SAP Build, which of the following is not a valid feedback response?

 A. Free text

 B. Multiple-choice options

###  C. Editing the prototype

 D. Annotation on the prototype



## 18. Which of the following tools does not allow you to create responsive prototypes? 

## (응답형 prototype)

###  A. Microsoft PowerPoint stencils

 B. Axure stencils

 C. SAP Build



## 19. A message toast can be used in which of the following scenarios?

###  A. A message indicating a successful update

 B. A message asking the user to confirm an action
 C. A message warning the user
 D. A message informing the user that an action failed



## 20. Overview page can be displayed on the SAP Fiori launchpad.

 A. True

###  B. False

****









****

*****

# 2. SAP Fiori Architecture Overview

****



## Generic Archtecture



## SAP Fiori On-Premise



## SAP S/4 HANA



## SAP Fiori Cloud



## SAP Gateway Deployment Options



## SAP Fiori Launchpad Configuration



## SAP Fiori Theming



## Maintaining Themes

## 

8



****







****

****

# 3. SAPUI5 Foundations

15



****





****

****

# 4. SAP Cloud Platform and SAP Web IDE 

12



****





****

****

# 5. OData and Advanced Data Handling

9 



****





****

****

# 6. Extensibility in SAPUI5

11 



****





****

****

# 7. Deployment

9 



****





****

****

# 8. SAP Hybrid App Toolkit

7 





****





****

****

# 9. Testing

5

