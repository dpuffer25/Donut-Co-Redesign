/* mySQL connectivity sample */

var mySQLpointer, connObj;

mySQLpointer = require("mysql");

connObj = mySQLpointer.createConnection( { 
	host:     "sql.wpc-is.online", 
	user:     "teamb01",
	password: "teamb013165",
	database: "db_teamb01"
} );

connObj.connect( function(err) {
	if (err) 
		// throw err; or use the follwowing command
		console.log("Connection Error: " + err.stack);
	else 
		// console.log("Connected to DB. :-)");
		console.log("Connection OK! ID = " + connObj.threadId);
});

let sqlStmt = "SELECT * FROM productService";

connObj.query(sqlStmt, 
	function(err, dataSet, colSet) {
		if (err)
			throw err;
		else {
			console.log("\nDataSet Result: ", dataSet);
			// console.log("\nColSet Result: ", colSet);

			// get the "customer id" column value from all records
			for (i=0; i<dataSet.length; i++) {
				console.log("\nID " + i + ": " + dataSet[i].ID);
			}
		}
	}
);


connObj.end();
