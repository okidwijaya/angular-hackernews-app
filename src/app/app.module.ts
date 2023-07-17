import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { ThreadCardComponent } from './content-section/thread-card/thread-card.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './content-section/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { ModalCardDetailComponent } from './content-section/modal-card-detail/modal-card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSectionComponent,
    ThreadCardComponent,
    SpinnerComponent,
    ModalCardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
