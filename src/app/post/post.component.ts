import { Component, OnInit } from '@angular/core';
import { cars } from '../model/Cars';
import { PstService } from '../services/pst.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listCars:cars[];
  Cars : cars = new cars();
  url="./assets/bayouma.jpg"
 
  

  constructor(private ps: PstService) { }

  ngOnInit(): void {
    
  }
  onselectFile(e){
    if(e.target.files){
    var reader = new FileReader(); 
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
    this.url=event.target.result;
    }
    }
    }
  AddCar(){
    console.log(this.Cars)
    this.ps.addCar(this.Cars).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.listCars=res));
  }

}
