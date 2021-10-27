import { PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Photo } from './photo';
import { Router } from '@angular/router';
import { PhotoService } from './photo.service';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform!:FormGroup;
  title = 'Ektaapp';
  id1:any;
  title1:any;
  showdel:boolean=true;
url1:any;
thumbnailUrl1:any;
  photo!: Photo[];
  photoid!:number;
  parr!:any[];
  constructor(private pphoto:PhotoService,private router:Router, private fb:FormBuilder) { 
    this.myform=fb.group({
      thumbnailUrl:[],
      id:[],
      title:[],
      url:[]
    })
  }
  del(id:any){
    this.showdel=true;
  }
  ngOnInit() {
    this.showdel=true;
this.getphoto();
this.id1=this.myform.controls['id'].value;
console.log(this.id1);
this.title=this.myform.controls['title'].value;
this.thumbnailUrl1=this.myform.controls['thumbnailUrl'].value;
this.url1=this.myform.controls['url'].value;
  }
  toggle(id:any){
// this.router.navigate(['/compare', id]);
this.showdel=false;

this.pphoto.getwithId(id).subscribe(response=>{
  console.log(response);
  this.photoid=response.id;
  this.myform.patchValue({
  
    id:response.id,
    thumbnailUrl:response.thumbnailUrl,
    title:response.title,
    url:response.url


  


  })
})

}
  
  getphoto(){
this.pphoto.getPhotos().subscribe(res=>{
this.photo=res;
})
this.photo=[
  {  
  "id": 1,
  "title": "veritatis numquam eius",
  "url": "https://via.placeholder.com/600/eaf2e1",
  "thumbnailUrl": "1.png"
},
{
  
  "id": 2,
  "title": "quia quasi enim voluptatem repellat sit sint",
  "url": "https://via.placeholder.com/600/a19891",
  "thumbnailUrl": "2.png"

},
{
  
"id": 3,
  "title": "aliquam dolorem ut modi ratione ",
  "url": "https://via.placeholder.com/600/b5205d",
  "thumbnailUrl": "3.png"
}
]
  }

}
