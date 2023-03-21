# Unit 13. Controller and Context Programming







# Lesson 1. Outlining Controller Methods and Attributes











# Lesson 2. Accessing the Context at Runtime with Controller Methods



* ## Access to Context Nodes and Elements

  ```ABAP
  DATA lo_nd_flights TYPE REF TO if_wd_context_node.
  
  
  lo_nd_flights = wd_context->get_child_node( name = wd_this->wdctx_flights ).
  lo_nd_flights = wd_context->get_child_node( '_Node Name with Uppercase letters' ).
  ```

  





# Lesson 3. Adding New Elements to a Context Node











# Lesson 4. Implementing Supply Functions