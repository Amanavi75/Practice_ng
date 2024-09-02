import { Routes } from '@angular/router';
import { EmpComponent } from './components/emp/emp.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { AttributedirComponent } from './components/attributedir/attributedir.component';

export const routes: Routes = [
    {
        path:"add-emp",
        component:EmpComponent

    },
    {
        path:'data-binding',
        component:DataBindingComponent

    },
    {
        path:"structural directive",
        component:StructuralDirComponent
    },

    {
        path:"attributal directive",
        component:AttributedirComponent
    }
];
