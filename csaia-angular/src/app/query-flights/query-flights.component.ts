import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-flights',
  templateUrl: './query-flights.component.html',
  styleUrls: ['./query-flights.component.css']
})
export class QueryFlightsComponent implements OnInit {
  public results = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendQuery(){
    var imageIds = (<HTMLInputElement> document.getElementById('image-ids')).value;
    if (imageIds == null || imageIds == '') {imageIds = 'null'}

    var userIds = (<HTMLInputElement> document.getElementById('user-ids')).value;
    if (userIds == null || userIds == '') {userIds = 'null'};

    var flightIds = (<HTMLInputElement> document.getElementById('flight-ids')).value;
    if (flightIds == null || flightIds == '') {flightIds = 'null'};

    var extensions = (<HTMLInputElement> document.getElementById('extensions')).value;
    if (extensions == null || extensions == '') {extensions = 'null'};

    var dateTimeRange = (<HTMLInputElement> document.getElementById('time-range')).value;
    if (dateTimeRange == null || dateTimeRange == '') {dateTimeRange = 'null'};

    var latitudeRange = (<HTMLInputElement> document.getElementById('latitude-range')).value;
    if (latitudeRange == null || latitudeRange == '') {latitudeRange = 'null'};

    var longitudeRange = (<HTMLInputElement> document.getElementById('longitude-range')).value;
    if (longitudeRange == null || longitudeRange == '') {longitudeRange = 'null'};

    var altitudeRange = (<HTMLInputElement> document.getElementById('altitude-range')).value;
    if (altitudeRange == null || altitudeRange == '') {altitudeRange = 'null'};

    var make = (<HTMLInputElement> document.getElementById('make')).value;
    if (make == null || make == '') {make = 'null'};

    var model = (<HTMLInputElement> document.getElementById('model')).value;
    if (model == null || model == '') {model = 'null'};

    this.http.get('http://127.0.0.1:5000/query', {
      params: {
        'image_ids' : imageIds,
        'user_ids' : userIds,
        'flight_ids' : flightIds,
        'extensions' : extensions,
        'datetime_range' : dateTimeRange,
        'latitude_range' : latitudeRange,
        'longitude_range' : longitudeRange,
        'altitude_range' : altitudeRange,
        'make' : make,
        'model' : model
      }
    }).subscribe(result => {
      this.results = [];
      
      let preResults = result['objects'];

      preResults.forEach(result => {
        result['selected'] = false;
        this.results.push(result);
      });
    });
  }

  download(){
    let idsToDownload = [];

    this.results.forEach(result => {
      if (result['selected']){
        idsToDownload.push(result['id'])
      }
    });

    this.http.get('http://127.0.0.1:5000/prepare-zip', {
      params: {
        'image_ids' : idsToDownload.toString()
      }
    }).subscribe(result => {
      // zip is now ready, download now
      window.location.href = 'http://127.0.0.1:5000/download-zip/' + result['zip_name'];
    });
  }
}