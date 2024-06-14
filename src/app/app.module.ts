import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
    providers: [
        { provide: HttpClientModule }
    ]
});
