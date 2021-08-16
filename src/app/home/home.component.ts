import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { postsAnimation } from 'src/animations';
import { WordpressService } from '../core/wordpress.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [postsAnimation]
})
export class HomeComponent implements OnInit {

  posts$ = this.wordpressService.getPosts();

  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {
  }

}
