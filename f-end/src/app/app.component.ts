import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConeccionInfo } from './servicios/coneccion.info';
import { InjectorToken } from './servicios/injectorToken.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(private translate: TranslateService,
                private coneccionInfo: ConeccionInfo,
                private injectorToken: InjectorToken) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|it|fa/) ? browserLang : 'en');
        this.injectorToken.inyectarTokenConeccionInfo();
    }
}
