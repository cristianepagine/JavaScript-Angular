import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponents } from './components/menu.components';
import { Button } from './components/button.components';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuComponents,
    Button,
    EntryDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}