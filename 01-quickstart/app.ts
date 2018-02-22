import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { JokeComponent } from "./script";

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeComponent],
    bootstrap: [JokeComponent]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);