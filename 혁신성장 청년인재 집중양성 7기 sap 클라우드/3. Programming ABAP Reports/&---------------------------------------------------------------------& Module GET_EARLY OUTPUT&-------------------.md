```ABAP
*&---------------------------------------------------------------------*
*& Module GET_EARLY OUTPUT
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
MODULE GET_EARLY OUTPUT.

  DATA: LV_FNAME TYPE STRING.

  FIELD-SYMBOLS: <FS_COMP> TYPE ANY.

  LOOP AT GT_DATA INTO GS_DATA TO 5.
    LV_FNAME = 'GS_CUSTOM-ID' && SY-TABIX.
    ASSIGN (LV_FNAME) TO <FS_COMP>.
    <FS_COMP> = GS_DATA-CUSTOMID.

    CLEAR: LV_FNAME.
    LV_FNAME = 'GS_CUSTOM-NAME' && SY-TABIX.
    ASSIGN (LV_FNAME) TO <FS_COMP>.
    <FS_COMP> = GS_DATA-NAME.

    LV_FNAME = 'GS_CUSTOM-DAYS' && SY-TABIX.
    ASSIGN (LV_FNAME) TO <FS_COMP>.
    <FS_COMP> = GS_DATA-DAYS.
  ENDLOOP.

*  LOOP AT GT_DATA INTO GS_DATA FROM 1 TO 5.
*    CASE SY-TABIX.
*      WHEN 1.
*        GS_CUSTOM-ID1   = GS_DATA-CUSTOMID.
*        GS_CUSTOM-NAME1 = GS_DATA-NAME.
*        GS_CUSTOM-DAYS1 = GS_DATA-DAYS.
*      WHEN 2.
*        GS_CUSTOM-ID2   = GS_DATA-CUSTOMID.
*        GS_CUSTOM-NAME2 = GS_DATA-NAME.
*        GS_CUSTOM-DAYS2 = GS_DATA-DAYS.
*      WHEN 3.
*        GS_CUSTOM-ID3   = GS_DATA-CUSTOMID.
*        GS_CUSTOM-NAME3 = GS_DATA-NAME.
*        GS_CUSTOM-DAYS3 = GS_DATA-DAYS.
*      WHEN 4.
*        GS_CUSTOM-ID4   = GS_DATA-CUSTOMID.
*        GS_CUSTOM-NAME4 = GS_DATA-NAME.
*        GS_CUSTOM-DAYS4 = GS_DATA-DAYS.
*      WHEN 5.
*        GS_CUSTOM-ID5   = GS_DATA-CUSTOMID.
*        GS_CUSTOM-NAME5 = GS_DATA-NAME.
*        GS_CUSTOM-DAYS5 = GS_DATA-DAYS.
*    ENDCASE.
*
*  ENDLOOP.

ENDMODULE.
```

