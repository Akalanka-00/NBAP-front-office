import { AfterViewInit, Directive, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBaseWidget]',
  standalone: true
})
export class BaseWidgetDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit{

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(injector: Injector) { }

  public onInit(): void {

	}

  public onDestroy(): void {
		
	}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onChanges(changes: SimpleChanges): void {

	}

  public onViewAppear(): void {
		// code here
	}


  ngOnChanges(changes: SimpleChanges): void {
		this.onChanges(changes);
  }
  ngOnInit(): void {
		this.onInit();
  }
  ngOnDestroy(): void {
		this.onDestroy();
  }
  
  ngAfterViewInit(): void {
    this.onViewAppear();
  }



}
