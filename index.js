'use strict';
var Person = require('./Person');
var Swipein=require('./Swipein');
var Farecalc = require('./Farecalc');
var Recharge= require('./Recharge');


//NOTE - PLEASE CHANGE VALUE TO CHECK ALL VALIDATION AND FUNCTION


var id_person=1;
var station_count=10;

//Setting person identity

var person = new Person();
person.setId(id_person);
person.setBalance(80);

//Done setting identity

console.log(User);


//First Entry Completed
var swipein= new Swipein();

//if balance is less then 7 then it gives exception for minimum balance
swipein.firstin(id_person);

//Entry done in metro





//Fare Calculate

var farecalc=new Farecalc();

var ammount=farecalc.returnFare(station_count)
console.log("total fare charges- "+ammount);


//After Fare Balance Managment

farecalc.uddateBalance(id_person,ammount)

//End Balance Managment

//End Fare Calculation










//recharge System

var recharge=new Recharge();

recharge.addValue(50,id_person);


//End Recharge System












