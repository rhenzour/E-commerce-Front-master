import { Component, OnInit } from '@angular/core';
import { Icategorie } from '../domain/icategorie';
import { Subscription } from '../../../node_modules/rxjs';
import { CategorieService } from '../categorie.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  category: Icategorie;
  code1: string;
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: CategorieService) { }

  ngOnInit() {
    this.subscription = this._route.paramMap.subscribe(res => {this.code1 = res.get('id');


    //  this.code =  this._route.snapshot.paramMap.get('id');
  });
  this._service.getCategorieById(this.code1).subscribe(res => {
    this.category = res;
  });
  }

    navigateToList() {
      this._router.navigate(['/list']);
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }


  }
