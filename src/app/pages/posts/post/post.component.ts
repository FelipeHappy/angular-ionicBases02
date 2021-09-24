import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //COMPONENTE HIJO
  @Input() mensaje: any;
  //EL MENSAJE SE RETORNA DESDE EL COMPONENTE PADRE
  @Output() clickPost = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.mensaje.id)
    //Emitir evento desde el componente hijo al componente padre
    this.clickPost.emit(this.mensaje.id)
  }

}
