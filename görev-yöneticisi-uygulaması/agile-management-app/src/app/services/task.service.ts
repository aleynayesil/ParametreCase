import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private http: HttpClient) { }
  
  private url = "http://localhost:3000/data";

  getTasks():Observable<Task[]> {
      return this.http.get<Task[]>(this.url);
  }

  createTask(task:Task):Observable<Task>{
      return this.http.post<Task>(this.url,task);
  }

  deleteTask(id:number){
      return this.http.delete(this.url +"/"+ id);
  }

  getTaskById(id:number): Observable<Task>{
      return this.http.get<Task>(this.url +"/"+ id);
  }
  updateTaks(task:Task): Observable<Task>{
      return this.http.put<Task>(this.url +"/"+ task.id,task);
  }
}
