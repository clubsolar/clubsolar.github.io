import { enableProdMode, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mobile = true;

if (window.innerWidth < 500) {
  const mobile = true;
  console.log(mobile);
}
else {
  const mobile = false;
  console.log(mobile);
}

platformBrowserDynamic().bootstrapModule(AppModule, {providers: [{provide: mobile, useValue: mobile}]})
  .catch(err => console.error(err));
