import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";
// import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import {
  Router,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
