import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap erfolgreich`))
    .catch(error => console.log( error ));