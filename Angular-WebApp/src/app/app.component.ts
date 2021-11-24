import { Component , ViewChild} from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-WebApp';
  UserName:Array<any>
  GetUserName:any
  @ViewChild('inputName') inputName:any; 

  constructor(private Service: SharedService) {
    this.UserName = new Array<any>()
   }

  getDataFromAPI(){
    this.Service.getUser().subscribe((data) =>{

      console.log(data);
      this.UserName = data;
      
    }) 
  }
  postdata :any

  addUser(val:any){
    if (val!='') {
      this.postdata = {
        "userName": val
      }
      this.Service.postUser(this.postdata).subscribe()
  
       this.GetUserName = "Hello " + this.postdata.userName + "!!"
       this.inputName.nativeElement.value = '';
    }
  }


}
