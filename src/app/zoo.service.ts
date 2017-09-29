import { Injectable } from '@angular/core';

@Injectable()
export class ZooService {
  public zooAnimals = [
    {
      name: 'Tom Cruise',
      species: 'Human',
      averageHeight: 68.4,
      averageWeight: 184,
      classification: 'vertabrate',
      description: 'Weird guy, good actor',
      imagePath: 'https://media.gq.com/photos/55958e812ca2759512987314/master/w_704,h_964,c_limit/tom-cruise-hair-06.jpg',
      quantity: 1,
    },
    {
      name: 'Bob',
      species: 'Manticore',
      averageHeight: 120,
      averageWeight: 800,
      classification: 'vertabrate',
      description: 'Based out of Iran. Lion body, Human head, Sometimes Bat wings',
      imagePath: 'http://w.costume-con.org/gallery2/main.php?g2_view=core.DownloadItem&g2_itemId=9883&g2_serialNumber=2',
      quantity: 1,
    },
    {
      name: 'Nessie',
      species: 'Loch ness monster',
      averageHeight: 2000,
      averageWeight: 10000,
      classification: 'non-vertabrate',
      description: 'Weird sea serpent thing. Possibly dinosaur but kinda boring',
      imagePath: 'http://thescienceexplorer.com/sites/thescienceexplorer.com/files/styles/content_image__large/public/blog/1861886927_2adcb7e2c7_z.jpg?itok=jc-RVxv6&timestamp=1453913643',
      quantity: 1,
    },
    {
      name: 'Moondog',
      species: 'Dog',
      averageHeight: 72,
      averageWeight: 205,
      classification: 'vertabrate',
      description: 'This is really a dog.',
      imagePath: 'http://i.cdn.turner.com/drp/nba/cavaliers/sites/default/files/moondog-1150x425.png',
      quantity: 1,
    },

  ]
}
