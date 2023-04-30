import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page-module/home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user',
    pathMatch: 'full',
    loadChildren: () => import('./user-module/user.module').then(m => m.UserModuleModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //UserRoutingModule,
    //CourseRoutingModule,
    //LearningResourcesRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}