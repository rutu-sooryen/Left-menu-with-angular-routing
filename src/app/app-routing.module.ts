import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubMenuItem1Component } from './components/sub-menu-item1/sub-menu-item1.component';
import { SubMenuItem2Component } from './components/sub-menu-item2/sub-menu-item2.component';
import { NestedMenuItem1Component } from './components/nested-menu-item1/nested-menu-item1.component';
import { NestedMenuItem2Component } from './components/nested-menu-item2/nested-menu-item2.component';

const routes: Routes = [
  { path: 'sub-menu-item1', component: SubMenuItem1Component },
  { path: 'sub-menu-item2', component: SubMenuItem2Component },
  { path: 'nested-menu-item1', component: NestedMenuItem1Component },
  { path: 'nested-menu-item2', component: NestedMenuItem2Component }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
