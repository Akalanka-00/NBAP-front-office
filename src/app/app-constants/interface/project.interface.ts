export interface ReferenceUrl{
    hostname: string;
    url: string;
    icon:string;
  
  }




export interface ProjectFormModel{
    name: string;
    banner: string;
    startDate: Date;
    endDate: Date;
    description: string;
    isOngoing: boolean;
    canRate: boolean;
    isPrivate: boolean;
    mediaFiles: string[];
    referenceUrls: ReferenceUrl[];
}