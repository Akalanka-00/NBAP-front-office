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

export interface MediaModel{
    id: string;
    url: string;
    date: Date;
}

export interface ProjectResponseModel{
  id: string;
  name: string;
  banner: MediaModel;
  startDate: Date;
  endDate: Date;
  description: string;
  ongoing: boolean;
  canRate: boolean;
  private: boolean;
  mediaFiles: MediaModel[];
  referenceUrls: ReferenceUrl[];
}