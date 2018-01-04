import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { Ng5DemoComponent } from './ng5-demo.component';

declare var angular: any;

angular.module('cxApp')
  .directive(
  'ng5Demo',
  downgradeComponent({ component: Ng5DemoComponent })
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng5DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    Ng5DemoComponent // Don't forget this!!!
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
