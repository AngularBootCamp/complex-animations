import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CmsComponent } from './cms.component';

const cmsRoutes: Routes = [{ path: '', component: CmsComponent }];

@NgModule({
  declarations: [CmsComponent],
  imports: [CommonModule, RouterModule.forChild(cmsRoutes)],
  bootstrap: [CmsComponent]
})
export class CmsModule {}
