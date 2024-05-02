import { Component } from '@angular/core';
import { QueryService } from './services/query.service';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QueryService]
})
export class AppComponent {

  geometryType:any[]=[];
  
  units:any[]=[];

  value1:any;

  value2:any;

  checked: boolean = false;

  constructor(private service:QueryService,
    private featureLayer:FeatureLayer){}


  ngOnInit(){

    //multiselect verileri

    this.units = [
      { name: "Meters" },
      { name: "Miles" },
      { name: "Feet" },
      { name: "Kilometers" },
      { name: "Nautical Miles" },
      { name: "US NauticalMiles" },
    ]

  }
  
  data:any;
  getQuery(where:any,outFields:any,distance:any,value1:any,checked:any) {
    
    const url = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Landscape_Trees/FeatureServer/0";
    this.featureLayer.url = url;
    let query = this.featureLayer.createQuery();
    query.where=where.value;
    query.outFields=outFields.value;
    query.distance=distance.value;
    query.units=value1.value;
    query.returnGeometry=checked.checked;

    console.log(where.value,outFields.value,checked);
    
    this.featureLayer.queryFeatures(query).then(function(res){
      console.log("res",res);
    }).catch((err) =>{
      console.log(err);
    });
    
  }
}
