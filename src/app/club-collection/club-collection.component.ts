import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-club-collection',
  templateUrl: './club-collection.component.html',
  styleUrls: ['./club-collection.component.css']
})
export class ClubCollectionComponent implements OnInit {

  clubCollection;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.getDiscogsClubCollection((result) => {
      this.clubCollection = result;
    });
  }

}
