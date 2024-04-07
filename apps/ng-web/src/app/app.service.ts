import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dataEmitter=new EventEmitter<any>();
  raiseDataEmitterEvent(data:any)
  {
      this.dataEmitter.emit(data)
  }
}