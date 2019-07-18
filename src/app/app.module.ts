import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'multilanguage' }),
    AppRoutingModule,
    HttpClientModule
  ],
    providers: [
      TranslateService,
    {  provide: APP_INITIALIZER,
       useFactory: setupTranslateFactory,
       deps: [ TranslateService ],
       multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
