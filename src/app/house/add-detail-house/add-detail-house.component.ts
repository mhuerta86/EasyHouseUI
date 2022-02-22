import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-detail-house',
  templateUrl: './add-detail-house.component.html',
  styleUrls: ['./add-detail-house.component.css']
})
export class AddDetailHouseComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() house:any;
  HouseId:string="";
  Address:string="";
  city:string="";
  state:string="";
  zipcode:string="";
  contactname:string="";
  contactphone:string="";
  FrontViewPhoto:string="";
  price:number=0;
  FrontViewPhotoFilePath:string="";
  
  ngOnInit(): void {
  }
  loadHouseDetails(item: { HouseId: any; }){
    this.service.getHouseDetail(item.HouseId).subscribe((data:any)=>{

      this.HouseId=this.house.houseId;
      this.Address=this.house.Address;
      this.city=this.house.city;
      this.state=this.house.state;
      this.zipcode=this.house.zipcode;
      this.contactname=this.house.contactname;
      this.FrontViewPhoto=this.house.FrontViewPhoto;
      this.price=this.house.price;
      this.FrontViewPhotoFilePath=this.house.FrontViewPhotoFilePath;
      
    })
  }

  addHouse(){
    let val = {HouseId:this.HouseId,
      Address:this.Address,
      city:this.city,
      state:this.state,
      zipcode:this.zipcode,
      contactname:this.contactname,
      contactphone:this.contactphone,
      FrontViewPhoto:this.FrontViewPhoto,
      price:this.price};

      this.service.addHouse(val).subscribe(res=>{alert(res.toString());
      });

  }


  uploadPhoto(event:any){
    let file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any) =>{
      this.FrontViewPhoto=data.toString();
      this.FrontViewPhotoFilePath=this.service.PhotoUrl+this.FrontViewPhoto;
    })

  }



}


