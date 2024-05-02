import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../models/card";
import { Observable, filter, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CardService{
    private url = "http://localhost:3000/cards";

    val = Math.floor(Math.random() * 4);
    constructor(
        private http:HttpClient
    ){}

    getCards():Observable<Card[]>{
        return this.http.get<Card[]>(this.url);
    }
}