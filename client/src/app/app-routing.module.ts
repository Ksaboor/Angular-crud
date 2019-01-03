import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarListComponent } from "./car-list/car-list.component";
import { CarEditComponent } from "./car-edit/car-edit.component";
import { OktaCallbackComponent } from "@okta/okta-angular";

const routes: Routes = [
  { path: "", redirectTo: "/car-list", pathMatch: "full" },
  {
    path: "car-list",
    component: CarListComponent
  },
  {
    path: "car-add",
    component: CarEditComponent
  },
  {
    path: "car-edit/:id",
    component: CarEditComponent
  },
  {
    path: "implicit/callback",
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
