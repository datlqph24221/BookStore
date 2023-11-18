import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUserdata, IUsersignin, IUsersignup } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  signup(User: IUsersignup): Observable<IUserdata> {
    return this.http.post<IUserdata>('http://localhost:3000/register', User);
  }
  // signin(User: IUsersignin): Observable<IUserdata> {
  //   return this.http.post<IUserdata>('http://localhost:8080/api/signin/', User).subscribe();
  // }
  signin(User: any) {
    return this.http.post('http://localhost:3000/signin', User)
      .subscribe((data: any) => {
        localStorage.setItem('id', JSON.stringify(data.user.id))
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
        this.router.navigate(['/', 'home'],).then(() => location.reload());

      })
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/users/${id}`)
  }
  update(id: any, user: any) {
    return this.http.put(`http://localhost:3000/users/${id}`, user)
  }
}
