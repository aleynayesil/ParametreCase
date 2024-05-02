import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import Query from "@arcgis/core/rest/support/Query.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

@Injectable()
export class QueryService {

  constructor(private http:HttpClient,
    private featureLayer:FeatureLayer
  ) { }


  getAllQuery(){
 
  }
  
}
