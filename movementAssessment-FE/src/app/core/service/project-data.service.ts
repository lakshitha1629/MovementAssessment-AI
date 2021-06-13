import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ProjectDataRequest } from "./project-data-request.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private http: HttpClient) { }

  addData(data: ProjectDataRequest) {
    return this.http.post<any>(`${environment.apiUrl}/addData`, data);
  }

}
