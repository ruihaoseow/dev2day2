const database = require("./database");

/* database.connection.query(
    "select * from seller",
    (errors, results) => {
        if (errors) {
            console.log("Errors: " + errors);
        } else {
            console.log(results);
        }
    }
); 

// query(what query to run, what to do with the results) -> callback function

database.connection.query(
    "select customer_name from customer where customer_id = 7",
    (errors, results) => {
        if (errors) {
            console.log("Errors: " + errors);
        } else {
            console.log(results);
        }
    }
); 

database.connection.query(
    "insert into seller (seller_name, seller_wallet) values ('Dixant','10000')",
    (errors, results) => {
      if (errors) {
        console.log("Errors: " + errors);
      } else {
        console.log(results);
      }
    }
  ); */
  
var name = "Jon";
var balance = 20000;
database.connection.query(
  `insert into seller (seller_name, seller_wallet) values ('${name}','${balance}')`,
  (errors, results) => {
    if (errors) {
      console.log("Errors: " + errors);
    } else {
      console.log(results);
    }
  }
);
