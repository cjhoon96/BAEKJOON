```json
{
	"_version": "1.32.0",
	"sap.app": {
		"id": "kr.go.iitp.gr5.clb05.zuibrcstk",
		"type": "application",
		"i18n": "i18n/i18n.properties",
		"applicationVersion": {
			"version": "0.0.1"
		},
		"title": "{{appTitle}}",
		"description": "{{appDescription}}",
		"dataSources": {
			"mainService": {
				"uri": "/sap/opu/odata/",
				"type": "OData",
				"settings": {
					"annotations": [],
					"localUri": "localService/metadata.xml",
					"odataVersion": "4.0"
				}
			}
		}
	},


	"sap.ui": {
		"technology": "UI5",
		"icons": {
			"icon": "",
			"favIcon": "",
			"phone": "",
			"phone@2": "",
			"tablet": "",
			"tablet@2": ""
		},
		"deviceTypes": {
			"desktop": true,
			"tablet": true,
			"phone": true
		}
	},


	"sap.ui5": {
		"rootView": {
			"viewName": "kr.go.iitp.gr5.clb05.zuibrcstk.view.App",
			"type": "XML",
			"async": true,
			"id": "App"
		},

		"dependencies": {
			"minUI5Version": "1.98.0",
			"libs": {
				"sap.ui.core": {},
                "sap.m": {},
                "sap.f": {},
                "sap.uxap": {}
			}
            // 사용한 library 목록
		},

        "config": {
            "fullWidth": true
        },

		"routing": {
			"config": {
				"routerClass": "sap.m.routing.Router",
                "type": "View",
				"viewType": "XML",
				"viewPath": "kr.go.iitp.gr5.clb05.zuibrcstk.view",
				"controlId": "app",   
                // 실행중인 View에 있는 Element중 어떤 Element ID밑에 붙을 것인가  FlexibleColumnLayout 태그의 id에 해당
                "transition": "slide",
                "bypassed": {

                },
                // 의미 불명

				"async": true
			},
			"routes": [
				{
					"pattern": ":layout:",
					"name": "main",
					"target": [
						"main",
						"detail"
					]
				},
                // pattern 이 :layout 으로 설정되어 name 을 생략해도 무방하다
                // 아무런 주소없이 호출하면 자동으로 router(master)가 호출되고 
                // 이를 통해 target:( master, detail )이 모두 메모리로 올라오게된다.
				// 그래서, Master.view.xml과 Detail.view.xml이 동시에 실행되게 된다.

				{
					"pattern": "detail/{product}/{layout}",
					"name": "detail",
					"target": [
						"master",
						"detail"
					]
				}
			],
			"targets": {
                "main": {
					"name": "Master",
					"controlAggregation": "beginColumnPages"
				},
				"detail": {
					"name": "Detail",
					"controlAggregation": "midColumnPages"
				}
			}
            // 타겟 지정
		},


		"flexEnabled": true,
		"contentDensities": {
			"compact": true,
			"cozy": true
		},
		"models": {
			"i18n": {
				"type": "sap.ui.model.resource.ResourceModel",
				"settings": {
					"bundleName": "kr.go.iitp.gr5.clb05.zuibrcstk.i18n.i18n"
				}
			},
			"": {
				"dataSource": "mainService",
				"preload": true,
				"settings": {
					"synchronizationMode": "None",
					"operationMode": "Server",
					"autoExpandSelect": true,
					"earlyRequests": true,
					"groupId": "$direct"
				}
			}
		},
		"resources": {
			"css": [
				{
					"uri": "css/style.css"
				}
			]
		}
	}
}

```

```
		<headerTitle>
			<ObjectPageDynamicHeaderTitle>
                <expandedHeading>
                    <m:Title text="Product Detials" wrapping="true" class="sapUiSmallMarginEnd"/>
                </expandedHeading>
				<actions>
                    <m:Button 
                        icon="sap-icon://resize"
                        type="Transparent"
                        press="onFullDetail"/>

					<m:Button
						icon="sap-icon://action"
						type="Transparent"
                        press="onDetailClose"/>
				</actions>
			</ObjectPageDynamicHeaderTitle>
		</headerTitle>

        <headerContent>
            <m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Stretch">
                <m:items>
                    <m:Avatar 
                        displaySize="L"
                        displayShape="Square"
                        class="sapUiSmallMarginEnd"/>
                    <m:VBox id="idNowProd" justifyContent="Center" class="sapUiSmallMarginEnd">
                        <m:ObjectIdentifier title="Main Category" text="제품 분류 바인딩"/>    
                    </m:VBox>
                    <!-- 데이터 바인딩 예정 -->
                    <m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
                        <m:ObjectIdentifier title="Purchase Cost" text="구매 원가 바인딩"/>
                    </m:VBox>
                    <!-- 데이터 바인딩 예정 -->
                    <m:VBox justifyContent="Center" class="sapUiSmallMarginEnd"> 
                        <m:ObjectIdentifier title="Selling Price" text="판매가격 바인딩"/>
                    </m:VBox>
                    <!-- 데이터 바인딩 예정 -->
                </m:items>
            </m:FlexBox>
        </headerContent>

        <sections>

            <!-- 제품 상세 설명 섹션 -->
            <ObjectPageSection title="Product Description">
                <subSections>
                    <ObjectPageSubSection title="Product Description" titleUppercase="false">
                        <blocks>
                            <!-- 제품 정보 -->
                            <form:SimpleForm layout="ResponsiveGridLayout" singleContainerFullSize="false">
                                <form:content>
                                    <m:Title text="Product"/>
                                    <m:Label text="Product Name"/>
                                    <m:Text />
                                    <m:Label text="Product Code"/>
                                    <m:Text />
                                    <m:Label text="Product Color"/>
                                    <m:Text />
                                    <m:Label text="Product Size"/>
                                    <m:Text />
                                    <m:Label text="Product Price"/>
                                    <m:Text />
                                    <m:Label text="Product Material"/>
                                    <m:Text />
                                </form:content>
                            </form:SimpleForm>
                            <!-- 공급 업체 정보 -->
                            <form:SimpleForm layout="ResponsiveGridLayout" singleContainerFullSize="false">
                                <form:content>
                                    <m:Title text="Vendor"/>
                                    <m:Label text="Name"/>
                                    <m:Text />
                                    <m:Label text="Address"/>
                                    <m:Text />
                                    <m:Label text="Tel."/>
                                    <m:Text />
                                </form:content>
                            </form:SimpleForm>
                            <!-- 재고 비율 -->
                            <m:VBox fitContainer="true" >
                                <!-- <m:items> -->
                                    <micro:InteractiveDonutChart>
                                        <micro:segments>
                                            <micro:InteractiveDonutChartSegment color="Good" label="Stock" value="40.0" displayedValue="40.0%"/>
                                            <micro:InteractiveDonutChartSegment color="Critical" label="Safety" value="21.5" displayedValue="21.5%"/>
                                            <micro:InteractiveDonutChartSegment color="Error" label="Pre-Stock" value="38.5" displayedValue="38.5%"/>
                                        </micro:segments>
                                    </micro:InteractiveDonutChart>
                                <!-- </m:items> -->
                            </m:VBox>
                        </blocks>
                    </ObjectPageSubSection>
                </subSections>
            </ObjectPageSection>

            <ObjectPageSection title="Sales Performance">
                <subSections>
                    <ObjectPageSubSection>
                        <blocks>
                            <m:VBox fitContainer="true" >
                                <m:OverflowToolbar class="sapFDynamicPageAlignContent">
                                    <m:DatePicker />
                                    <m:Label text="~"/>
                                    <m:DatePicker />
                                </m:OverflowToolbar>
                                <viz:Popover id="idPopOver"></viz:Popover>
                                <viz:VizFrame id="idVizFrame" uiConfig="{applicationSet:'fiori'}"
                                    height='100%' width="100%" vizType='column'>
                                    <viz:dataset>
                                        <viz.data:FlattenedDataset data="{/milk}">
                                            <viz.data:dimensions>
                                                <viz.data:DimensionDefinition name="Week"
                                                    value="{Week}" />
                                            </viz.data:dimensions>
                                            <viz.data:measures>
                                                <viz.data:MeasureDefinition name="Revenue"
                                                    value="{Revenue}" />
                                                <viz.data:MeasureDefinition name="Cost"
                                                    value="{Cost}" />
                                            </viz.data:measures>
                                        </viz.data:FlattenedDataset>
                                    </viz:dataset>

                                    <viz:feeds>
                                        <viz.feeds:FeedItem id='valueAxisFeed' uid="valueAxis" type="Measure"
                                            values="Revenue" />
                                        <viz.feeds:FeedItem id='categoryAxisFeed' uid="categoryAxis" type="Dimension"
                                            values="Week" />
                                    </viz:feeds>
                                </viz:VizFrame>
                            </m:VBox>
                        </blocks>
                    </ObjectPageSubSection>
                </subSections>
            </ObjectPageSection>
            <!-- https://sapui5.hana.ondemand.com/#/topic/4527729576cb4a4888275b6935aad03a.html -->
        </sections>
```

```
,
        {
			"prodId": "CRS101_GR_95",
			"plant": 1001,
			"stock": 3,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                "prodId": "CRS101_GR_95",
                "prodName": "캐시미어 라운드 스웨터",
                "prodCol": "Gray",
                "prodSize": "95",
                "purCost": 50000,
                "sellPrice": 200000,
                "currency": "won",
                "unit": "EA",
                "vendorId": "V0001"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "CRS101_GR_100",
			"plant": 1001,
			"stock": 3,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_GR_100",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Gray",
                ​      "prodSize": "100",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_GR_105",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_GR_105",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Gray",
                ​      "prodSize": "105",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_GR_110",
			"plant": 1001,
			"stock": 1,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_GR_110",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Gray",
                ​      "prodSize": "110",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_BK_95",
			"plant": 1001,
			"stock": 0,
			"preStock": 3,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_BK_95",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Black",
                ​      "prodSize": "95",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_BK_100",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_BK_100",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Black",
                ​      "prodSize": "100",
                ​      "purCost": 50000,
                      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_BK_105",
			"plant": 1001,
			"stock": 2,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_BK_105",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Black",
                ​      "prodSize": "105",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CRS101_BK_110",
			"plant": 1001,
			"stock": 2,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CRS101_BK_110",
                ​      "prodName": "캐시미어 라운드 스웨터",
                ​      "prodCol": "Black",
                ​      "prodSize": "110",
                ​      "purCost": 50000,
                ​      "sellPrice": 200000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0001"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CDP201_BK_F",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​      "prodId": "CDP201_BK_F",
                ​      "prodName": "코듀로이 팬츠",
                ​      "prodCol": "Black",
                ​      "prodSize": "Free",
                ​      "purCost": 10000,
                ​      "sellPrice": 80000,
                ​      "currency": "won",
                ​      "unit": "EA",
                ​      "vendorId": "V0002"
                ​    },
                "safety": {
                    "storeLevel": 4,
                    "safety": 2
                }
		},
		{
			"prodId": "CDP201_BG_F",
			"plant": 1001,
			"stock": 5,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "CDP201_BG_F",
                ​"prodName": "코듀로이 팬츠",
                ​"prodCol": "Beige",
                ​"prodSize": "Free",
                ​"purCost": 10000,
                ​"sellPrice": 80000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "CDP201_PK_F",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "CDP201_PK_F",
                ​"prodName": "코듀로이 팬츠",
                ​"prodCol": "Pink",
                ​"prodSize": "Free",
                ​"purCost": 10000,
                ​"sellPrice": 80000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            ​},
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "CDP201_WH_F",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "CDP201_WH_F",
                ​"prodName": "코듀로이 팬츠",
                ​"prodCol": "White",
                ​"prodSize": "Free",
                ​"purCost": 10000,
                ​"sellPrice": 80000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "CDP201_KA_F",
			"plant": 1001,
			"stock": 4,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "CDP201_KA_F",
                ​"prodName": "코듀로이 팬츠",
                ​"prodCol": "Kaki",
                ​"prodSize": "Free",
                ​"purCost": 10000,
                ​"sellPrice": 80000,
                ​"currency": "won",
                ​"unit": "EA",
            ​    "vendorId": "V0002"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "WLP202_BK_F",
			"plant": 1001,
			"stock": 5,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                "prodId": "WLP202_BK_F",
                "prodName": "울 팬츠",
                "prodCol": "Black",
                "prodSize": "Free",
                "purCost": 20000,
                "sellPrice": 100000,
                "currency": "won",
                "unit": "EA",
                "vendorId": "V0002"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "WLP202_BG_F",
			"plant": 1001,
			"stock": 3,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "WLP202_BG_F",
                "prodName": "울 팬츠",
                "prodCol": "Beige",
                "prodSize": "Free",
                "purCost": 20000,
                "sellPrice": 100000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            ​},
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "WLP202_PK_F",
			"plant": 1001,
			"stock": 3,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "WLP202_PK_F",
                ​"prodName": "울 팬츠",
                ​"prodCol": "Pink",
                ​"prodSize": "Free",
                ​"purCost": 20000,
                ​"sellPrice": 100000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            ​},
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "WLP202_WH_F",
			"plant": 1001,
			"stock": 3,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "WLP202_WH_F",
                ​"prodName": "울 팬츠",
                ​"prodCol": "White",
                ​"prodSize": "Free",
                ​"purCost": 20000,
                ​"sellPrice": 100000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            },
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		},
		{
			"prodId": "WLP202_GR_F",
			"plant": 1001,
			"stock": 2,
			"preStock": 0,
			"unit": "EA",
            "prodInfo": {
                ​"prodId": "WLP202_GR_F",
                ​"prodName": "울 팬츠",
                ​"prodCol": "Gray",
                ​"prodSize": "Free",
                ​"purCost": 20000,
                ​"sellPrice": 100000,
                ​"currency": "won",
                ​"unit": "EA",
                ​"vendorId": "V0002"
            ​},
            "safety": {
                "storeLevel": 4,
                "safety": 2
            }
		}
```

