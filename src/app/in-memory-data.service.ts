import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './profile/models/person';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles = [
      { id: 1,
        picUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Will Byers",
        occupation: "Developer",
        city: "Chicago",
        state: "IL",
        bio: "Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived.",
        socialProfiles: [
          "facebook",
          "twitter",
          "instagram",
          "linkedin",
          "google"
        ]
      },
      { "id": 2,
        "picUrl": "https://randomuser.me/api/portraits/women/44.jpg",
        "name": "Kimberly Montgomery",
        "occupation": "Hair stylist",
        "city": "Phoenix",
        "state": "AR",
        "bio": "Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced.",
        "socialProfiles": [
          "facebook",
          "linkedin",
          "google"
        ]
      },
      { "id": 3,
        "picUrl": "https://randomuser.me/api/portraits/men/12.jpg",
        "name": "Andrew Carter",
        "occupation": "Skydiver",
        "city": "Seattle",
        "state": "WA",
        "bio": "Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent.",
        "socialProfiles": [
          "facebook",
          "twitter",
          "google"
        ]
      },
      { "id": 4,
        "picUrl": "https://randomuser.me/api/portraits/women/14.jpg",
        "name": "Joyce Harvey",
        "occupation": "Front-End Developer",
        "city": "Manhattan",
        "state": "NY ",
        "bio": "Performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment.",
        "socialProfiles": [
          "facebook",
          "twitter",
          "instagram",
          "linkedin"
        ]
      },
      { "id": 5,
        "picUrl": "https://randomuser.me/api/portraits/women/20.jpg",
        "name": "Margaret Ortiz",
        "occupation": "Creative Director",
        "city": "Miami",
        "state": "FL",
        "bio": "Is thought or pointed hearing he.",
        "socialProfiles": [
          "twitter",
          "instagram",
          "linkedin",
          "google"
        ]
      },
      { "id": 6,
        "picUrl": "https://randomuser.me/api/portraits/men/33.jpg",
        "name": "Matthew Lewis",
        "occupation": "Writer",
        "city": "Indianapolis",
        "state": "IN",
        "bio": "Proposal indulged no do do sociable he throwing settling.",
        "socialProfiles": [
          "twitter",
          "instagram",
          "google"
        ]
      },
      { "id": 7,
        "picUrl": "https://randomuser.me/api/portraits/women/10.jpg",
        "name": "Susan Greene",
        "occupation": "Dog Walker",
        "city": "Chicago",
        "state": "IL",
        "bio": "Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity.",
        "socialProfiles": [
          "linkedin",
          "google"
        ]
      },
      { "id": 8,
        "picUrl": "https://randomuser.me/api/portraits/women/34.jpg",
        "name": "Debra Ford",
        "occupation": "Small Business Owner",
        "city": "New Orleans",
        "state": "LA",
        "bio": " Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.",
        "socialProfiles": [
          "facebook",
          "twitter",
          "google"
        ]
      },
      { "id": 9,
        "picUrl": "https://randomuser.me/api/portraits/men/23.jpg",
        "name": "Ralph Ramos",
        "occupation": "Lawyer",
        "city": "Los Angeles",
        "state": "CA",
        "bio": "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
        "socialProfiles": [
          "instagram",
          "linkedin"
        ]
      },
      { "id": 10,
        "picUrl": "https://randomuser.me/api/portraits/women/21.jpg",
        "name": "Carol Woods",
        "occupation": "Graphic Designer",
        "city": "San Francisco",
        "state": "CA",
        "bio": "",
        "socialProfiles": []
      }
    ];
   
    return {profiles};
  }

  genId(profiles: Person[]): number {
      return profiles.length > 0 ? Math.max(...profiles.map(person => person.id)) + 1 : 1;
  }
}
