import { IPopulation } from './../../../core/model/continent-population.interface';
import { Component, input } from '@angular/core';

interface IDataWithPhoto {
  name: string;
  population: number;
  photoLink: string;
}

@Component({
  selector: 'card-info',
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  dataInput = input<IPopulation[]>([]);

  protected dataWithPhoto: IDataWithPhoto[];

  ngOnChanges() {
    this.addPhotoLinkToData();
  }

  private addPhotoLinkToData() {
    this.dataWithPhoto = [];
    this.dataInput().forEach((element) => {
      let photoUrl = '';
      switch (element.name) {
        case 'Africa':
          photoUrl = '/africa.png';
          break;
        case 'Antarctica':
          photoUrl = '/antarctic.png';
          break;
        case 'Asia':
          photoUrl = '/asia.png';
          break;
        case 'Europe':
          photoUrl = '/europe.png';
          break;
        case 'North America':
          photoUrl = '/northAmerica.png';
          break;
        case 'Oceania':
          photoUrl = '/oceania.png';
          break;
        case 'South America':
          photoUrl = '/southAmerica.png';
          break;
      }

      if (photoUrl) {
        this.dataWithPhoto.push({
          name: element.name,
          population: element.value,
          photoLink: photoUrl,
        });
      }
    });
  }
}
