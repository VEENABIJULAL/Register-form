import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    emails:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

  })
  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){

     if(this.registerForm.valid){
       var fname=this.registerForm.value.fname;
       var lname=this.registerForm.value.lname;
       var emails=this.registerForm.value.emails;
       var phone=this.registerForm.value.phone;
       var pswd=this.registerForm.value.pswd;
      const result=this.dataservice.register(fname,lname,emails,phone,pswd)
      if(result){
        
        this.router.navigateByUrl("dashboard");  
       } 

      
     else{
       alert("User exist....please login")
     }
      
     
     }
     else{
       alert("invalid form");
     }
 
 
    }
  }
}
