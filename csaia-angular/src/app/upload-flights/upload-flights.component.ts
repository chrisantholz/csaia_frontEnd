import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-flights',
  templateUrl: './upload-flights.component.html',
  styleUrls: ['./upload-flights.component.css']
})
export class UploadFlightsComponent implements OnInit {
  private files = [];
  public hasFiles = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileChanged(event){
    this.files = event.target.files;
    if (this.files.length > 0){
      this.hasFiles = true;
    } else {
      this.hasFiles = false;
    }
  }


  uploadFlight() {
    // form data object to fill with our POST data
    var formData = new FormData();

    // populate the form data with the selected files
    for (var i = 0; i < this.files.length; i++) {
      formData.append('image', this.files[i]);
    }
  
    formData.append('flight_name', (<HTMLInputElement>document.getElementById('flight-name')).value);
    formData.append('notes',  (<HTMLInputElement>document.getElementById('flight-notes')).value);
    formData.append('field_name',  (<HTMLInputElement>document.getElementById('field-name')).value);
    formData.append('crop',  (<HTMLInputElement>document.getElementById('crop')).value);

    console.log(formData)

    this.http.post('http://127.0.0.1:5000/upload-flight', formData).subscribe(result => {
      console.log(result);
    });
  }

}
