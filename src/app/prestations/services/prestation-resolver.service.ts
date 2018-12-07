import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PrestationService } from './prestation.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<Prestation> {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.ps.getPrestation(id).pipe(
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
