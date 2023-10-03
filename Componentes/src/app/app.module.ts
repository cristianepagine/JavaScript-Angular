import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/menu.component';
import { AppComponent } from './app.component';
import {Button} from './components/button.component';
import { EntryDataComponent }  from './components/entry-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Button,
    EntryDataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
