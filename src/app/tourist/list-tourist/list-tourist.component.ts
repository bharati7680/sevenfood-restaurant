import { Component, OnInit } from '@angular/core';
import { TouristModule } from '../tourist.module';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-list-tourist',
  templateUrl: './list-tourist.component.html',
  styleUrls: ['./list-tourist.component.scss']
})
export class ListTouristComponent implements OnInit {
  touristData: any = null 

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
   this.getTourist()

  }

  getTourist() {
    this.touristService.getTourist(1).subscribe(
      (response: any) => {
        console.log(response)

        this.touristData = response

      },
      (error: any) => {
        console.log(error)
      }
      
    )
  }
}
