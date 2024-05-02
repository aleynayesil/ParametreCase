import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class CustomerService {
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