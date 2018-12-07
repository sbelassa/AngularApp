import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientResolverService implements Resolve<Client> {

  constructor(
    private ps: ClientService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.ps.getClient(id).pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else { // id not found
          this.router.navigate(['prestations']);
          return EMPTY;
        }
      })
    );
  }
}
