import {RequestHeader} from "./RequestHeader";

export interface Request {
  header: RequestHeader,
  data: any
}
