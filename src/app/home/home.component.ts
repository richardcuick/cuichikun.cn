import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  data: any[];

  counter: string;

  a: string;

  constructor(public dataService : DataService, private httpClient: HttpClient) {}

  private InjectData(category: string){
      this.dataService.getNews(category).subscribe(data => {

        this.httpClient.post(`https://cuichikun.cn/news?category=${category}`,(data as any)).subscribe(news=>{
        });

      });
  }

  ngOnInit(): void {


    //this.a = 'Hello, World!';

    try{

      //this.InjectData("sustainability");

      //this.dataService.getNews().subscribe((data)=>{
      //  console.log(data);
      //  this.data = (data as any)['articles'];
      //  this.a = "ok1";
      //  this.httpClient.post(`https://cuichikun.cn/news`,(data as any)).subscribe(news=>{
      //    this.a = "ok2";
      //  }, error=>{
      //    this.a = JSON.stringify(error);
      //  });
      //}, serviceError =>{
        //this.a = serviceError.status;
        //if(serviceError.status==426||serviceError.status=="426")
        //{
            this.httpClient.get(`https://cuichikun.cn/news`).subscribe(news=>{
              this.data = (news as any);
          });
        //}
      //});


    //this.httpClient.post(`https://cuichikun.cn/counter?stat=cuichikun.cn`,{}).subscribe(counter=>{
    //  this.a = counter.toString();
    //  this.a = (counter as any)["quantity"];
    //}, error=>{
    //  this.a = JSON.stringify(error);
    //});
    }catch(err: any)
    {
      this.a = err;
    }
  }

}