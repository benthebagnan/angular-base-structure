import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormService, Post } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.posts$ = this.formService.getPosts();
  }
}
