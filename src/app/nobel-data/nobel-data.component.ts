import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit ,ViewChild} from '@angular/core';
import { NobelService } from 'src/app/services/nobel.service';
import { prize } from 'src/app/model/prize';
import {DataSource} from '@angular/cdk/collections';

import {BehaviorSubject, Observable} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-nobel-data',
  templateUrl: './nobel-data.component.html',
  styleUrls: ['./nobel-data.component.css']
})


export class NobelDataComponent implements OnInit ,AfterViewInit {
  
  @Input("list") list:prize[]=[]
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  dataSource=new MatTableDataSource<prize>(this.list);
  displayedColumns: string[] = ['year', 'category', 'laureates'];
  constructor() {
    
}


ngAfterViewInit() {
  this.dataSource.paginator =  this.paginator;
}

ngOnChanges(changes: SimpleChanges): void {
 
  this.dataSource=new MatTableDataSource<prize>(this.list);
    console.log("length of input list " + this.list.length)

    this.dataSource.paginator =  this.paginator;
}
     
     
     ngOnInit(): void {
     
     }
    }
  

