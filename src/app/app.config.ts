import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProductService } from './product/product.service';
import { AuthService } from './auth/Auth.service';
import { AuthGuard } from './auth/Auth.Guard';
import { TrainingService } from './exercise/traning.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),ProductService,AuthService,AuthGuard,TrainingService]
};
