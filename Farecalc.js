
function FareCalc() {
  
}
// Calculate the fare
// 
FareCalc.prototype.returnFare = function(stationCount) {
    
    if(stationCount<=0)
	{
		return 0;
	}

    var d = new Date();
	var n = d.getDay();
	 if( n == 6 )
	{
		return 5*stationCount;
	}
	else
	{
		return 7*stationCount;
	}
};

FareCalc.prototype.uddateBalance = function(userid,ammount) {
console.log("previous Balance is "+User[userid]['balance']);
	if(ammount>User[userid]['balance'])
	{
		throw new Error("inSufficient Balance");
	}

	//Global User

	User[userid]['balance']=User[userid]['balance']-ammount;
	

console.log("update Balance is "+User[userid]['balance']);
    
};

// 
module.exports = FareCalc;
