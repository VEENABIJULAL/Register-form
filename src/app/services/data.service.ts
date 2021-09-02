import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentfname="";
  currentlname="";
  currentemail="";
  currentphone="";
  currentpswd="";
  accountdetails:any={
    1000: { firstname:"userone", lastname:"userone",emails:"useroner01@gmail.com",phone:9875348442, password:"userone"}
   
}
  constructor() {
    this.getDetails();
   }
   saveDetails(){
    localStorage.setItem("accountdetails",JSON.stringify(this.accountdetails));
    if(this.currentfname){
      localStorage.setItem("currentfname",JSON.stringify(this.currentfname));
    }
    if(this.currentlname){
      localStorage.setItem("currentlname",JSON.stringify(this.currentlname));
    }
    if(this.currentemail){
      localStorage.setItem("currentemail",JSON.stringify(this.currentemail));
    }
    if(this.currentphone){
      localStorage.setItem("currentphone",JSON.stringify(this.currentphone));
    }
    if(this.currentpswd){
      localStorage.setItem("currentpswd",JSON.stringify(this.currentpswd));
    }
  }
  getDetails(){
    
    if(localStorage.getItem("currentfname")){
      this.currentfname=JSON.parse(localStorage.getItem("currentfname") || '')
  }
  if(localStorage.getItem("currentlname")){
    this.currentlname=JSON.parse(localStorage.getItem("currentlname") || '')
}
if(localStorage.getItem("currentemail")){
  this.currentemail=JSON.parse(localStorage.getItem("currentemail") || '')
}
if(localStorage.getItem("currentphone")){
  this.currentphone=JSON.parse(localStorage.getItem("currentphone") || '')
}
if(localStorage.getItem("currentpswd")){
  this.currentpswd=JSON.parse(localStorage.getItem("currentpswd") || '')
}
  
}
//register function
register(fname:any,lname:any,emails:any,phone:any,pswd:any){

  let user=this.accountdetails;
  if(phone in user){//check for the user exit or not using phone
    return false;
  }
  else{//if no particular user then register it
    user[phone]={
      firstname:fname,
      lastname:lname,
      emails,
      phone,
      password:pswd
    }
    this.currentfname=user[phone]["firstname"];
    this.currentlname=user[phone]["lastname"]
    this.currentemail=user[phone]["emails"]
    this.currentphone=user[phone]["phone"]
    this.currentpswd=user[phone]["password"]
    this.saveDetails();//save to local storage of browser
    return true;
  }
 
}
}
