import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from "./models/face-snap";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FaceSnapComponent],
  // imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        "Mon premier Ami",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        "Mon premier Ami depuis Angular",
        new Date(),
        0
      ),
      new FaceSnap(
        "Three Rock Mountain",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        "Un endroit magnifique pour les randonnées.",
        new Date(),
        6
      ),
      new FaceSnap(
        "Un bon repas",
        "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "Mmmh que c'est bon !",
        new Date(),
        156
      ),
    ];
    this.faceSnaps[1].setLocation(
      "à la montagne"
    );
  }
}
