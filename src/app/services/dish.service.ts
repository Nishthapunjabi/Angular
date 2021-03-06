import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable} from 'rxjs'
import { delay } from 'rxjs/operators';

import { of } from 'rxjs';



@Injectable()
export class DishService {

  constructor() { }
  getDishIds(): Observable<number[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
