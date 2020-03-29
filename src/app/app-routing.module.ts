import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { GetOneComponent } from './features/get-one/get-one.component';
import { GetAllComponent } from './features/get-all/get-all.component';
import { CreateComponent } from './features/create/create.component';
import { DeleteComponent } from './features/delete/delete.component';
import { UpdateComponent } from './features/update/update.component';
import { WelcomeComponent } from './features/welcome/welcome.component';


const routes: Routes = [
    { path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: '', component: WelcomeComponent, canActivate: [AuthGuardService]},
            {path: 'create', component: CreateComponent, canActivate: [AuthGuardService]},
            {path: 'delete', component: DeleteComponent, canActivate: [AuthGuardService]},
            {path: 'get-all', component: GetAllComponent, canActivate: [AuthGuardService]},
            {path: 'get-one', component: GetOneComponent, canActivate: [AuthGuardService]},
            {path: 'update', component: UpdateComponent, canActivate: [AuthGuardService]},
        ]
    },
    { path: 'features', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: '**', component: HomeComponent, data: { error: 'Not found' }}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
