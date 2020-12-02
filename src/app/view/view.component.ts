import { Component, OnInit } from '@angular/core';
import { cars } from '../model/Cars';
import { PstService } from '../services/pst.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listCars:cars[];
  tabcars : cars[];
  searchCar : cars[];
  Cars : cars = new cars();

  constructor(private ps:PstService) { }

  ngOnInit(): void {
    this.ps.getCarsJson().subscribe(res=>{this.searchCar=this.tabcars=res})
  }

  search(query : any){
    this.searchCar = (query) ? this.tabcars.filter(car=>car.name.toLowerCase().includes(query.toLowerCase()) ||car.puissance.toLowerCase().includes(query.toLowerCase())) : this.tabcars;
  }
  delete(c:cars){
    this.ps.deleteCar(c).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.listCars=res));
  }

  updateCar(list:cars[]){
    this.listCars=list;
      }
  

}
