UNIT 12. OData Model





# Lesson 1. Consuming OData Services with SAPUI5





* ## 실습

  <img src="/img/OData4.png" alt="OData" style="zoom:80%;" />

  <img src="/img/OData5.png" alt="OData" style="zoom:80%;" />

  #### iitp.zclb23_020/webapp/view/View1.view.xml

  ```xml
  <mvc:View
      controllerName="iitp.zclb23020.controller.View1"
      xmlns:mvc="sap.ui.core.mvc"
      displayBlock="true"
      xmlns="sap.m"
  >
      <Shell id="shell">
          <App id="app">
              <pages>
                  <Page id="page" title="{i18n>title}">
                      <content>
                          <Table id="idCarrid" items="{/UX_C_Carrier_TP}">
                              <columns>
                                  <Column id="colCarrid">
                                      <header>
                                          <Text id="txtCarrid" text="Airline Code"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colName">
                                      <header>
                                          <Text id="txtName" text="Airline Name"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colCurrcode">
                                      <header>
                                          <Text id="txtCurrcode" text="Currency Code"/>
                                      </header>
                                  </Column>
                                  
                                  <Column id="colURL">
                                      <header>
                                          <Text id="txtURL" text="URL"/>
                                      </header>
                                  </Column>
                              </columns>
  
                              <items>
                                  <ColumnListItem id="colListCarrier">
                                      <cells>
                                          <Text id="txtCarrCell" text="{Carrid}"/>
                                          <Text id="txtNameCell" text="{Carrname}"/>
                                          <Text id="txtCurrCell" text="{Currcode}"/>
                                          <Text id="txtURLCell" text="{Url}"/>
                                      </cells>
                                  </ColumnListItem>
                              </items>
                          </Table>
                      </content>
                  </Page>
              </pages>
          </App>
      </Shell>
  </mvc:View>
  ```

  <img src="/img/OData6.png" alt="OData" style="zoom:67%;" />
