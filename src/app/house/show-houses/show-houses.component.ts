import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-houses',
  templateUrl: './show-houses.component.html',
  styleUrls: ['./show-houses.component.css']
})
export class ShowHousesComponent implements OnInit {

  constructor(private service:SharedService) { }

  HouseList:any=[];
  ModalTitle:string="";
  ActivateAddDetailHouseCom:boolean=false;
  house:any;



 /* @ViewChild('AddDetailHouseComponent', { static: false })child:any;

ngAfterViewInit() {
   console.log('only after THIS EVENT "child" is usable!!');
   this.child.loadHouseDetails(this.house.houseId);
}*/
  

  ngOnInit(): void {
    this.refreshHouseList();
  }

  addClick(){
    this.house={
      houseId:0,
      Address:"",
      city:"",
      state:"",
      zipcode:"",
      contactname:"",
      contactphone:"",
      FrontView:"NoAvailable.png",
      kitchen:"NoAvailable.png",
      livingroom:"NoAvailable.png",
      price:""
    }
    this.ModalTitle="Add House";
    this.ActivateAddDetailHouseCom=true;
  }

  detailClick(item: any){
    this.house=item;
    this.ModalTitle="Details House";
    this.ActivateAddDetailHouseCom=true;
  }




  closeClick(){
    this.ActivateAddDetailHouseCom=false;
    this.refreshHouseList();
    console.log('closing modal');
  }
  
  
  refreshHouseList(){
    this.service.getHouseList().subscribe(data=>{
      this.HouseList=data;
    })
  }

}




