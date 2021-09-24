import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //COMPONENTE PADRE
  mensajes: any;

  constructor( private postService : DataService) {
    
   }
   //Momento en que carga el aplicativo
  ngOnInit() {
    //Llamar el metodo del servicio
    this.mensajes = this.postService.getData()
    
    // Forma sin operador tap
    //   .subscribe((posts: any[]) => {
    //   console.log(posts)
    //   this.mensajes = posts;
      
    // })
  }
  //Le damos como parametro el evento arrojado desde el componente hijo y extraerlo del html
  // escuchaClick( $event) {
  //   console.log('Click en: ', $event)
  // }
  escuchaClick( id: number) {
    console.log('Click en: ', id)
  }

}
