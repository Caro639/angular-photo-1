import {
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Component({
  selector: "app-face-snap",
  standalone: true,
  imports: [],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: any;

  // title!: string;
  // description!: string;
  // createdAt!: Date;
  // snaps!: number;
  // imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    // this.title = "Mon premier Ami";
    // this.description =
    //   "Mon premier Ami depuis Angular";
    // this.imageUrl =
    //   "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    // this.createdAt = new Date();
    // this.snaps = 0;
    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = "Oops, unSnap!";
    this.userHasSnapped = true;
  }
}
