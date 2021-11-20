

var lineItems = [
  "Date,Store_ID,Store_Name,Region,Check_Number,Hour,Minute,Item_ID,Long_Name,Qty,Price_Sold,Employee_ID,Employee_Name,Terminal_ID",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,2002,Traditional 16,1,17,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,6198,Jalapeno- SW,1,2,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,6148,Sausage- SW,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,6121,Red Peppers- SW,1,4,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,6103,Pepperoni- SW,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,14001,Water,1,0,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,14001,Water,1,0,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10002,11,34,14062,Raspberry Iced Tea,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10002,11,34,2005,White 16,1,19,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,2002,Traditional 16,1,17,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,6148,Sausage- SW,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,6103,Pepperoni- SW,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,14004,Diet Pepsi,1,3,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,14001,Water,1,0,5485,Marek Wiszowaty,1",
  "4/15/2019,59,Brooklyn,New York,10003,11,35,14054,Hot Chocolate,1,4,5485,Marek Wiszowaty,1"
];

var payments = [
  "Date,Store_ID,Store_Name,Region,Check_Number,Hour,Minute,Subtotal,Tax,Total,Mode",
  "4/15/2019,59,Brooklyn,New York,10001,11,34,29.00,2.99,31.99,Cash",
  "4/15/2019,59,Brooklyn,New York,10002,11,34,22.00,2.20,24.20,Visa",
  "4/15/2019,59,Brooklyn,New York,10003,11,36,30.00,3.00,33.00,Check",
];

//############################################################ Task 1 ############################################################
//Convert above arrays to JSON
//
/*
jsonItemArray = [
  {
    "Date": "4/15/2019",
    "Store_ID": 59,
    "Store_Name": "Brooklyn",
    "Region": "New York",
    "Check_Number": 10001,
    "Hour": 11,
    "Minute": 34,
    "Item_ID": 2002,
    "Long_Name": "Traditional 16",
    "Qty": 1,
    "Price_Sold": 17,
    "Employee_ID": 5485,
    "Employee_Name": "Marek Wiszowaty",
    "Terminal_ID": 1
  },
  {
    "Date": "4/15/2019",
    "Store_ID": 59,
    "Store_Name": "Brooklyn",
    "Region": "New York",
    "Check_Number": 10001,
    "Hour": 11,
    "Day_Part_ID": 2,
    "Item_ID": 6198,
    "Long_Name": "Jalapeno- SW",
    "Qty": 1,
    "Price_Sold": 2,
    "Employee_ID": 5485,
    "Employee_Name": "Marek Wiszowaty",
    "Terminal_ID": 1
  },
  ....
];

var paymentsArray = [
 {
   "Date": "  4/15/2019",
   "Store_ID": 59,
   "Store_Name": "Brooklyn",
   "Region": "New York",
   "Check_Number": 10001,
   "Hour": 11,
   "Minute": 34,
   "Subtotal": 29,
   "Tax": 2.99,
   "Total": 31.99,
   "Mode": "Cash"
 },
 {
   "Date": "  4/15/2019",
   "Store_ID": 59,
   "Store_Name": "Brooklyn",
   "Region": "New York",
   "Check_Number": 10002,
   "Hour": 11,
   "Minute": 34,
   "Subtotal": 22,
   "Tax": 2.2,
   "Total": 24.2,
   "Mode": "Visa"
 },
 {
   "Date": "  4/15/2019",
   "Store_ID": 59,
   "Store_Name": "Brooklyn",
   "Region": "New York",
   "Check_Number": 10003,
   "Hour": 11,
   "Minute": 36,
   "Subtotal": 30,
   "Tax": 3,
   "Total": 33,
   "Mode": "Check"
 }
];
*/
