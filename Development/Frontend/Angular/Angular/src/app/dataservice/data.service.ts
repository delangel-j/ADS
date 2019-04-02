import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Employee} from './employee';

@Injectable()

export class dataService {
    constructor(private http: Http){}
        private headers = new Headers({'Content-Type': 'application/json'});

         async getEmployees(): Promise<Employee[]> {
            const response = await this.http.get('http://localhost:8000/employees?format=json', { headers: this.headers })
                 .toPromise();
             return response.json() as Employee[];
        }   
       
        async deleteEmployee(employee_key: string): Promise<void> {
			const url = `${"http://127.0.0.1:8000/employees"}/${employee_key}`;
			await this.http.delete(url, { headers: this.headers })
                .toPromise();
            return null;
        }
    
        async createEmployee(e: Employee): Promise<Employee>{
            const res = await this.http
                .post("http://127.0.0.1:8000/employees", JSON.stringify(e), { headers: this.headers })
                .toPromise();
            return res.json() as Employee;
        }
    
}