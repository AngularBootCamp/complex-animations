import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee-processing', pathMatch: 'full' },
  {
    path: 'employee-processing',
    loadChildren: () =>
      import('./employee-processing/employee.module').then(
        m => m.EmployeeModule
      )
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./cms/cms.module').then(m => m.CmsModule)
  }
];

const config: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
