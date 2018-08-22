import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,

} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MAT_MODULES = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
];

@NgModule({

  imports: [
    BrowserAnimationsModule,
    ...MAT_MODULES
  ],
  exports: MAT_MODULES,
})
export class MaterialModule {
}
