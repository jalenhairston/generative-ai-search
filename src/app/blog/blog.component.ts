import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {TableViewComponent} from "../table-view/table-view.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css',
    '../../assets/scss/style.scss',
  ],
  imports: [HttpClientModule, NgForOf, TableViewComponent],
  providers: [ServiceblogService]
})
export class BlogComponent /*implements OnInit*/ {
  // blogsDetail: Blog[] = [];
  //
  // constructor(
  //   public service: ServiceblogService,
  //   public router: Router,
  //   public http: HttpClient
  // ) {
  //   this.service.showEdit = false;
  // }
  //
  // ngOnInit(): void {
  //   if (this.service.Blogs.length === 0)
  //     this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  // }
  //
  // loginClick() {
  //   this.router.navigate(['/login']);
  // }
  //
  // newPost() {
  //   this.router.navigate(['/post']);
  // }
  //
  // viewDetail(id: number) {
  //   this.service.detailId = id;
  //
  //   if (this.service.loginStatusService) this.service.showEdit = true;
  //
  //   this.router.navigate(['/blogDetail', id]);
  // }
}
