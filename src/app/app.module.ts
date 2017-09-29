import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalBlocksComponent } from './animal-blocks/animal-blocks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ZooService} from './zoo.service';
import { SortByPipe } from './sort-by.pipe'
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: AnimalFormComponent },
  { path: 'animal-blocks',      component: AnimalBlocksComponent },
  { path: 'animal-list',      component: AnimalListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalBlocksComponent,
    PageNotFoundComponent,
    SortByPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [ZooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
