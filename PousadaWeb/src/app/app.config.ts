import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n'; // Internacionalização
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Animações
import { provideHttpClient } from '@angular/common/http';

// Importe o DemoNgZorroAntdModule
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideNzI18n(en_US), // Configuração de idioma
    importProvidersFrom(FormsModule),
    importProvidersFrom(DemoNgZorroAntdModule), 
    provideAnimationsAsync(), // Animações do NG-ZORRO
    provideHttpClient(),
    ReactiveFormsModule
  ]
};