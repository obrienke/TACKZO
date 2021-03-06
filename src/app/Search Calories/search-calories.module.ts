import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchCaloriesPageRoutingModule } from './search-calories-routing.module';
import { SearchCaloriesPage } from './search-calories.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SearchCaloriesPageRoutingModule
  ],
  declarations: [SearchCaloriesPage]
})
export class SearchCaloriesPageModule {}
