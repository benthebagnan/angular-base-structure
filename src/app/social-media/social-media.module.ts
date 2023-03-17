import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CoreModule } from '../core/core.module';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SocialMediaComponent, PostListItemComponent],
  imports: [CommonModule, SocialMediaRoutingModule, CoreModule, SharedModule],
})
export class SocialMediaModule {}
