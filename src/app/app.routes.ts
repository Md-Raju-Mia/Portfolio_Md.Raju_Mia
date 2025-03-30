import { Routes } from '@angular/router';
import { Project1ComponentComponent } from './Component/project1-component/project1-component.component';
import { Project2ComponentComponent } from './Component/project2-component/project2-component.component';
import { Project3ComponentComponent } from './Component/project3-component/project3-component.component';
import { Project4ComponentComponent } from './Component/project4-component/project4-component.component';
import { MainComponent } from './Component/main/main.component';
import { Project5Component } from './Component/project5/project5.component';
import { Project6Component } from './Component/project6/project6.component';
import { Project7Component } from './Component/project7/project7.component';



export const routes: Routes = [

    {
        path: "", 
        redirectTo: "main", // Redirect empty path to login page
        pathMatch: "full"
    },
    {
        path:"main",
        component:MainComponent
        
    },
    {
        path:'project1',
        component:Project1ComponentComponent

    },
    {
        path:'project2',
        component:Project2ComponentComponent

    },
    {
        path:'project3',
        component:Project3ComponentComponent

    },
    {
        path:'project4',
        component:Project4ComponentComponent

    },
    {
        path:'project5',
        component:Project5Component

    },
    {
        path:'project6',
        component:Project6Component

    },
    {
        path:'project7',
        component:Project7Component

    },
    {
        path: "**", // Wildcard route for invalid URLs
        redirectTo: "login"
    }
];
