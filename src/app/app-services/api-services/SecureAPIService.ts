import {RequestHeader} from "../../app-models/app-request/RequestHeader";
import {inject, Injectable} from "@angular/core";
import {BaseApiService} from "./base-api.service";
import {HttpClient} from "@angular/common/http";
import {Request} from "../../app-models/app-request/Request";
import {BaseWidgetDirective} from "../../app-utils/base-widget/base-widget.directive";
import {ConfigService} from "../configService/config.service";

@Injectable({
  providedIn: 'root'
})
export class SecureAPIService {

  private  requestService: BaseApiService = new BaseApiService(inject(HttpClient));
  private config: ConfigService = new ConfigService(inject(HttpClient));
  private ip: string = "";
  private static instance: SecureAPIService;

  public constructor() {
    if(!SecureAPIService.instance || this.ip===""){
      this.config.init().then(()=>{

        this.config.fetchIP().then((res)=>{
          this.ip = res;
          SecureAPIService.instance = this;

        })
      });
    }

    return SecureAPIService.instance;
  }


  public secureRequest(msgGrp:number, msgType: number, data: any){

    const header: RequestHeader = {CL_IP: this.ip, MSG_GRP: msgGrp, MSG_TYP: msgType, VERSION: ""};
    const request:Request = {header, data};
    return new Promise((resolve, reject)=>{
      this.requestService.post('/secure', request).subscribe((res) => {
        try {
          this.requestService.postErrorHandler(res);
          //this.secureErrorHandler(res.body, header);
          resolve(res);
        }
        catch (err){
          reject(err)
        }
      }, (err)=>{
        reject(err)
      });
    })

  }

  private secureErrorHandler(res: any, header: RequestHeader){
    const responseHeader : RequestHeader = res.header;
    const data:any = res.data;
    if(responseHeader.MSG_TYP !== header.MSG_TYP+1000){
      throw new Error("Invalid Response");

    }
    else if(responseHeader.MSG_GRP !== header.MSG_GRP+1000){
      throw new Error("Invalid Response");
    }

    else if(data.err_CODE && data.err_MSG){
      throw new Error(data.data.msg);
    }
  }

}
