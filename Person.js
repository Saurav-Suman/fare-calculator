//  This is a Constructor function taking id and balance 
//  as the paramaters
function Person() {
  
  
  var id='';
  //var User={};

}
// Sets the id
// 
Person.prototype.setId = function(id) {
	this.id=id;
    //Global User
    User={
    	[id]: {
      	'balance': ''
   		}
    }
    //console.log(User);
};
// Sets the balance
Person.prototype.setBalance = function(balance) {
	if(0>=balance)
	{
		return new Error("Recharge Ammount should be more than 0");
	}
  //console.log(this.id);
    User[this.id]['balance'] = balance;

    //console.log(this.User);
};

// 
module.exports = Person;
