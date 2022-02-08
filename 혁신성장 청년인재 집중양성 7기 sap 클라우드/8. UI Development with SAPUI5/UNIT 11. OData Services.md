# UINIT 11. OData Services





# Lesson 1. Exploring OData Service



http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv

<img src="/img/OData1.png" alt="OData" style="zoom:67%;" />





http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP?$format=json

?$format=json 를 이용해 json으로 변경하여 볼 수 있다.

<img src="/img/OData2.png" alt="OData" style="zoom:67%;" />



http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/UX_C_Carrier_TP?$format=json

<img src="/img/OData3.png" alt="OData" style="zoom:67%;" />





http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/$metadata

$metadata를 이용하여 











```html
<EntityType Name="UX_C_Booking_TPType" sap:content-version="1">
    <Key>
        <PropertyRef Name="Carrid"/>
        <PropertyRef Name="Connid"/>
        <PropertyRef Name="Fldate"/>
        <PropertyRef Name="Bookid"/>
    </Key>
    <Property Name="Carrid" Type="Edm.String" Nullable="false" MaxLength="3" sap:display-format="UpperCase" sap:label="항공사" sap:quickinfo="항공사 코드"/>
    <Property Name="Connid" Type="Edm.String" Nullable="false" MaxLength="4" sap:display-format="NonNegative" sap:label="연결 번호" sap:quickinfo="항공편 연결 번호"/>
    <Property Name="Fldate" Type="Edm.DateTime" Nullable="false" Precision="0" sap:display-format="Date" sap:label="항공편 일자"/>
    <Property Name="Bookid" Type="Edm.String" Nullable="false" MaxLength="8" sap:display-format="NonNegative" sap:label="예약 번호"/>
    <Property Name="Cancelled" Type="Edm.String" MaxLength="1" sap:display-format="UpperCase" sap:label="취소 표시"/>
    <Property Name="Class" Type="Edm.String" MaxLength="1" sap:display-format="UpperCase" sap:label="클래스" sap:quickinfo="항공편 클래스"/>
    <Property Name="Counter" Type="Edm.String" MaxLength="8" sap:display-format="NonNegative" sap:label="영업소" sap:quickinfo="영업소 번호"/>
    <Property Name="Customid" Type="Edm.String" MaxLength="8" sap:display-format="NonNegative" sap:label="고객 번호"/>
    <Property Name="OrderDate" Type="Edm.DateTime" Precision="0" sap:display-format="Date" sap:label="전기일" sap:quickinfo="예약일"/>
    <Property Name="Passname" Type="Edm.String" MaxLength="25" sap:label="Passagiername" sap:quickinfo="Name des Passagiers"/>
    <Property Name="Reserved" Type="Edm.String" MaxLength="1" sap:display-format="UpperCase" sap:label="예약" sap:quickinfo="예약 표시"/>
    <NavigationProperty Name="to_Carrier" Relationship="UX_TRAVEL_SRV.assoc_98618C9B74F59C5AFBC05955311DD231" FromRole="FromRole_assoc_98618C9B74F59C5AFBC05955311DD231" ToRole="ToRole_assoc_98618C9B74F59C5AFBC05955311DD231"/>
    <NavigationProperty Name="to_Connection" Relationship="UX_TRAVEL_SRV.assoc_F5CC155D189E746D91B32855C8FD5132" FromRole="FromRole_assoc_F5CC155D189E746D91B32855C8FD5132" ToRole="ToRole_assoc_F5CC155D189E746D91B32855C8FD5132"/>
    <NavigationProperty Name="to_Flight" Relationship="UX_TRAVEL_SRV.assoc_6B12AB152097077609F41AC46736188C" FromRole="FromRole_assoc_6B12AB152097077609F41AC46736188C" ToRole="ToRole_assoc_6B12AB152097077609F41AC46736188C"/>
</EntityType>
```













| Service Root URL                                            | Resource Path   | Query Option  |
| ----------------------------------------------------------- | --------------- | ------------- |
| http://edu.bgis.co.kr:8001/sap/opu/odata/sap/ux_travel_srv/ | UX_C_Carrier_TP | ?$format=json |



 		