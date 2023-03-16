import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [CommonModule, SocialMediaRoutingModule, CoreModule],
})
export class SocialMediaModule {}
