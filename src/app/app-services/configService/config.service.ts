import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConfigService{

  private _configData: any;
  private config: Subject<any> = new Subject<any>();
  private http: HttpClient;
  private static  instance: ConfigService;

  private ip: string = '';
  private baseUrl: string = '';
  private isSecure: boolean = false;

  constructor(http: HttpClient) {
    this.http = http;
    this.fetchConfig();

  }

  public init(){
    return new Promise((resolve, reject) => {
      this.config.subscribe((data) => {
        resolve(data);
      });
    });
  }

  public getConfig(){
    return this._configData;
  }

  public getIp(){
    return this.ip;
  }

  public getBaseUrl(){
    if(this.baseUrl === ""){
      this.baseUrl = this.isSecure ? 'https://' : 'http://' + this._configData.connectionConfig.url;
    }
    return this.baseUrl;
  }

  private fetchConfig(){
    this.http.get('app-config.json', {headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}}).subscribe((data: any) => {
        this._configData = data;
        this.config.next(this._configData);
        this.isSecure = data.connectionConfig.isSecure;
        this.baseUrl = this.isSecure ? 'https://' : 'http://' + data.connectionConfig.url;

      },
      (error) => {
        console.error('Error loading config file', error);
      });

  }

  public  fetchIP():Promise<string>{
    const ipApiURL = this.baseUrl + '/utils/ipCheck';
    return new Promise((resolve, reject) => {
      if (this.ip === "") {
        this.http.get(ipApiURL).subscribe((data: any) => {
          this.ip = data.ip;
          resolve(data.ip);
        }, error => {
          console.error("Error fetching IP:", error);
          reject(error);
        });
      } else {
        resolve(this.ip);
      }
    });

  }
}
