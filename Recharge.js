
function Recharge() {
  
}
// Proceed the recharge
// 
Recharge.prototype.addValue = function(ammount,userid) {
   
   console.log('previous balance is '+User[userid]['balance']);
   //Global User
   User[userid]['balance']=User[userid]['balance']+ammount;

    console.log('update balance is '+User[userid]['balance']);

};


// 
module.exports = Recharge;
