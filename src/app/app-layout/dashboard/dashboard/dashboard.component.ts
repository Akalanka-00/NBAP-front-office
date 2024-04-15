import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';
import { WIDGHET_ITEMS } from '../../../app-config/sidebar-menu-items';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule, FontAwesomeModule ],
  providers: [Router],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends BaseWidgetDirective{

  public menuItems: Array<any> = [];

  constructor(private router: Router) {
    super(inject(HotToastService));
    console.log(router.url)

  }

  public override onInit(): void {
    this.setMenuItems();
  }

  public activeSidebarItem(menu: any): string{
    return (this.router.url).includes(menu.url) ? '-active' : '';
  }

  private setMenuItems(): void {
    this.menuItems = WIDGHET_ITEMS;
  }

  public onNavigate(url: string): void {
    this.router.navigate([url]);
  }

}
