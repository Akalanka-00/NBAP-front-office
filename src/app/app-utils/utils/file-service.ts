import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  // Function to convert file to Base64
  fileToBase64(file: File | null): Promise<string | ArrayBuffer> {
    if(!file) return Promise.resolve('');
    
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result || ''); 
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }



}
