import { Component, OnInit } from '@angular/core';
import { NobelService } from 'src/app/services/nobel.service';
import { prize } from 'src/app/model/prize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form_with_table';
  yearselected:string="All";
  categoryselected:string="All";
  prizelist:prize[] = []

  constructor(private ns:NobelService) {
    this.ns.getPrizes().subscribe({
      next: (data:any)=>{this.prizelist=data
        
      },

      error: (error:any)=>this.prizelist=[]
    })
}
  ngOnInit(): void {
    this.ns.getPrizes().subscribe({
      next: (data:any)=>{this.prizelist=data
        
      },

      error: (error:any)=>this.prizelist=[]
    })
  }


}
