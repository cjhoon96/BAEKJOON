```abap
  METHOD customerset_get_entityset.
    DATA: lt_cust TYPE TABLE OF ztcustom_exam.
    SELECT *
      INTO CORRESPONDING FIELDS OF TABLE lt_cust
      FROM ztcustom_exam.

    MOVE-CORRESPONDING lt_cust TO et_entityset.
  ENDMETHOD.
```

```abap
  METHOD customerset_get_entity.
    DATA: ls_cust TYPE ztcustom_exam.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = er_entity                 " Entity Key Values - converted
    ).

    SELECT SINGLE *
      INTO CORRESPONDING FIELDS OF ls_cust
      FROM ztcustom_exam
      WHERE id = er_entity-id.
  ENDMETHOD.
```

```abap
  METHOD bookingset_get_entityset.
    DATA: lt_book TYPE TABLE OF ztbook_exam.
    DATA: lv_source_entity TYPE /iwbep/mgw_tech_name.
    DATA: ls_cust TYPE zcl_zclb23_exam_mpc=>ts_customer.

    lv_source_entity = io_tech_request_context->get_source_entity_type_name( ).

    CASE lv_source_entity.
      WHEN zcl_zclb23_exam_mpc=>gc_customer.
        io_tech_request_context->get_converted_source_keys(
          IMPORTING
            es_key_values = ls_cust                 " Source Entity Key Values - converted
        ).

        SELECT *
          INTO CORRESPONDING FIELDS OF TABLE lt_book
          FROM ztbook_exam
         WHERE customid = ls_cust-id.

      WHEN OTHERS.
        SELECT *
          INTO CORRESPONDING FIELDS OF TABLE lt_book
          FROM ztbook_exam.
    ENDCASE.

    MOVE-CORRESPONDING lt_book TO et_entityset.
  ENDMETHOD.
```

```abap
  METHOD bookingset_get_entity.
    DATA: ls_book TYPE ztbook_exam.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = er_entity                 " Entity Key Values - converted
    ).

    SELECT SINGLE *
      INTO CORRESPONDING FIELDS OF ls_book
      FROM ztbook_exam
     WHERE carrid = er_entity-carrid
       AND connid = er_entity-connid
       AND fldate = er_entity-fldate
       AND bookid = er_entity-bookid.
    MOVE-CORRESPONDING ls_book TO er_entity.
  ENDMETHOD.
```

