import { Component, OnInit } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "app";
  updateAvailable: boolean = false;

  constructor(private update: SwUpdate) {}

  ngOnInit() {
    console.log("🎨", this.update);
    if (this.update.isEnabled) {
      this.update.available.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }

  updateNow() {
    document.location.reload();
    console.log("The app is updating right now");
  }
}
