import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { Ng5DemoComponent } from './ng5-demo.component';
import { RequestsComponent } from './requests.component';

import { AppRoutingModule } from './app-routing.module';

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/requests") || url.toString() == "/"
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

declare var angular: any;

angular.module('cxApp')
  .directive(
  'ng5Demo',
  downgradeComponent({ component: Ng5DemoComponent })
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng5DemoComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  entryComponents: [
    Ng5DemoComponent // Don't forget this!!!
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
   bootstrap: [AppComponent]
})
export class AppModule {
  // Remove code for bootstrapping hybrid app manually !!!
  /*
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['cxApp'], { strictDi: false });
  }
  */
}


