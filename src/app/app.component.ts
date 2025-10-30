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
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "Mon premier Ami",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      "Mon premier Ami depuis Angular",
      new Date(),
      0
    );
  }
}
