import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import {
  RouterLink,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TitleCasePipe,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title = "snapface";

  getTitle(): string {
    return this.title;
  }
}
