import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
    // { path: 'forum/:forum/thread/:thread/post/:id', component: CreatePostComponent },

     
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ContentRoutingModule { } export const ContentComponents = [
    //Components you want this module to explose
];