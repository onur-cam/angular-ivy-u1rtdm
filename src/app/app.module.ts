import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MatInputModule } from "@angular/material/input";
import { TestTableComponent } from './test-table/test-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatInputModule],
  declarations: [AppComponent, HelloComponent, TestTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
