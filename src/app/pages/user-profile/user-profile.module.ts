import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NbAuthModule } from '../../auth/auth.module';
NbAuthModule

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAuthModule,
  ],
  declarations: [ChangePasswordComponent],
})
export class UserProfileModule { }
