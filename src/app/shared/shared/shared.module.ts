import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../search.component';
import { ResuableButtonsComponent } from '../components/resuable-button/resuable-button.component';

@NgModule({
  declarations: [SearchComponent, ResuableButtonsComponent],
  imports: [CommonModule],
  exports: [SearchComponent, ResuableButtonsComponent],
})
export class SharedModule {}
