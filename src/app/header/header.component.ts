import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title = "snapface";

  getTitle(): string {
    return this.title;
  }
}
