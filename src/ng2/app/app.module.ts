import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

declare var angular: any;

angular.module('cxApp')
  .directive(
    'appRoot',
    downgradeComponent({component: AppComponent})
  );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent // Don't forget this!!!
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['cxApp'], { strictDi: false });
  }
}
