import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
fname=this.dataservice.currentfname;
lname=this.dataservice.currentlname;
email=this.dataservice.currentemail;
phone=this.dataservice.currentphone;
pswd=this.dataservice.currentpswd;

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
 
  
}
