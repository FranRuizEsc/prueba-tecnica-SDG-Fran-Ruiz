import { Router } from '@angular/router';
import { IPopulation } from './../../../core/model/continent-population.interface';
import { Component, inject, input } from '@angular/core';

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

  private router = inject(Router);

  protected dataWithPhoto: IDataWithPhoto[];

  ngOnChanges() {
    this.addPhotoLinkToData();
  }

  protected navigateTo(continent: string) {
    this.router.navigate([`/${continent}`]);
  }

  private addPhotoLinkToData() {
    this.dataWithPhoto = [];
    this.dataInput().forEach((element) => {
      let photoUrl = '';
      switch (element.name) {
        case 'Africa':
          photoUrl = 'assets/africa.png';
          break;
        case 'Antarctica':
          photoUrl = 'assets/antarctic.png';
          break;
        case 'Asia':
          photoUrl = 'assets/asia.png';
          break;
        case 'Europe':
          photoUrl = 'assets/europe.png';
          break;
        case 'North America':
          photoUrl = 'assets/northAmerica.png';
          break;
        case 'Oceania':
          photoUrl = 'assets/oceania.png';
          break;
        case 'South America':
          photoUrl = 'assets/southAmerica.png';
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
