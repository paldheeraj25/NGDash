import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NbAuthModule } from '../../auth/auth.module';
import { LoginHistoryComponent } from './login-history/login-history.component';
import { ThemeModule } from '../../@theme/theme.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAuthModule,
    Ng2SmartTableModule,
    ThemeModule,
  ],
  declarations: [ChangePasswordComponent, LoginHistoryComponent, EditProfileComponent],
})
export class UserProfileModule { }
