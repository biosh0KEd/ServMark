import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BasicFormComponent } from './pages/basic-form/basic-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/cms/grid',
        pathMatch: 'full'
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'basic-form',
        component: BasicFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
