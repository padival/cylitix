import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
  quote?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cylitix';
  heroes: Hero[]=[
    {
      id: 11,
      name: "Thor",
      quote: "The answers you seek shall be yours, once I claim what’s mine."
    },
    {
      id: 12,
      name: "Batman",
      quote: "It’s not who I am underneath, but what I do that defines me."
    },
    {
      id: 13,
      name: "Beta Ray Bill",
      quote:
        "If there is nothing but what we make in this world, brothers…let us make it good."
    },
    {
      id: 14,
      name: "Aldis Hodge",
      quote:
        "What is a superhero? They’re supposed to represent hope, opportunity, and strength for everybody."
    },
    {
      id: 15,
      name: "Dr. Octopus",
      quote:
        "Intelligence is a privilege, and it needs to be used for the greater good of people."
    },
    {
      id: 16,
      name: "Iron Man",
      quote:
        "Heroes are made by the path they choose, not the powers they are graced with."
    },
    {
      id: 17,
      name: "Green Arrow",
      quote:
        "This. This is what I am. This is who I am come hell or high water. If I deny it, I deny everything I’ve ever done. Everything I’ve ever fought for."
    },
    {
      id: 18,
      name: "Spiderman",
      quote: "With great power, comes great responsibility."
    },
    {
      id: 19,
      name: "Iron Man",
      quote:
        "I had my eyes opened. I came to realize that I had more to offer this world than just making things that blow up."
    },
    { id: 20, name: "" }
  ];
}
