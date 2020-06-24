export interface List {
  id:number;
  name:string;
  price:number;
  discount:number;
  img_url:string
}



    // <div *ngFor="let item of lists">
	// 	<div class="col col-example">
	// 		<div class="card" >
	// 			<div class="card-body">
    //       <img src="{{item.img_url}}">
	// 				<h5 class="card-title">{{item.name}}</h5>
	// 				<p class="card-text">{{item.price}}</p>
	// 				<p class="card-text">{{item.discount}}</p>
	// 				<a href="#" class="btn btn-primary">Go somewhere</a>
	// 			</div>
	// 		</div>
	// 	</div>