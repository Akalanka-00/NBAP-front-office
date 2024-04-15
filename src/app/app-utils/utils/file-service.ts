import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  // Function to convert file to Base64
  fileToBase64(file: File | null): Promise<string | ArrayBuffer> {
    if(!file) return Promise.resolve('');
    return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Listen for the 'load' event on the FileReader
    reader.onload = () => {
        // Resolve with the result (Base64 string or ArrayBuffer)
        resolve(reader.result as string | ArrayBuffer);
    };

    // Listen for the 'error' event on the FileReader
    reader.onerror = () => {
        // Reject with the error
        reject(reader.error);
    };

      // Read the file as Data URL (Base64)
      reader.readAsDataURL(file);
    });
  }
}
