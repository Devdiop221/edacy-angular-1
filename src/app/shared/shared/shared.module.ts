import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../search.component';
import { ResuableButtonsComponent } from '../components/resuable-button/resuable-button.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
const MAT_COMPONENTS = [MatInputModule, MatInputModule];

@NgModule({
  declarations: [SearchComponent, ResuableButtonsComponent],
  imports: [CommonModule, FormsModule, ...MAT_COMPONENTS],
  exports: [
    SearchComponent,
    FormsModule,
    ResuableButtonsComponent,
    ...MAT_COMPONENTS,
  ],
})
export class SharedModule {}
