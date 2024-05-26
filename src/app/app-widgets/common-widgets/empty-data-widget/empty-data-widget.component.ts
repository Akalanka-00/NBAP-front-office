import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-data-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-data-widget.component.html',
  styleUrl: './empty-data-widget.component.scss'
})
export class EmptyDataWidgetComponent {

  @Input() public message: string = 'No data available';
  @Input() public action: () => void = () => {};
  @Input() public actionText: string = '';
  @Input() public showAction: boolean = false;

  constructor(private router: Router) {}
}
