import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseWidgetDirective } from '../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import { getSidebarItems } from '../../app-constants/constant/SidebarItems';
import { CommonModule } from '@angular/common';
import { SidebarItem } from '../../app-constants/interface/Sidebar.interface';
import { UserRole } from '../../app-constants/enum/user.enum';
import { SidebarSections } from '../../model/SidebarItem';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends BaseWidgetDirective {
  public menuItems: SidebarItem[] = [];
  public userRole: UserRole = UserRole.STANDARD;
  public sections: string[] = Object.values(SidebarSections);
  public activeItem: SidebarItem = this.menuItems.filter((item) =>
    this.currentUrl.includes(item.URL)
  )[0];
  public profile: string =
    'https://static.vecteezy.com/system/resources/previews/027/312/306/large_2x/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png';
  public isSidebarOpen: boolean = true;
  public sidebarClass: string = 'active-sidebar p-4';

  private config: any;

  private currentUrl = this.router.url;

  constructor(toast: HotToastService, private router: Router) {
    super(toast);

  }


  public override onInit(): void {
    this.menuItems = getSidebarItems(this.userRole);
    this.activeItem =
      this.menuItems.filter((item) => this.currentUrl.includes(item.URL))[0] ||
      this.menuItems[0];
    if (this.activeItem.URL === this.menuItems[0].URL)
      this.router.navigate([this.activeItem.URL]);
    this.changeActiveItem(this.activeItem);
  }

  public override ngAfterViewInit(): void {}

  public changeActiveItem(menuItem: SidebarItem): void {
    const index = this.menuItems.indexOf(menuItem);
    this.menuItems.forEach((item, i) => {
      if (i === index) {
        item.STATUS = true;
      } else {
        item.STATUS = false;
      }
    });
    this.activeItem = menuItem;
  }

  public getItemsBySection(section: string): SidebarItem[] {
    return this.menuItems.filter((item) => item.SECTION === section);
  }

  public async toggleSidebar(): Promise<void> {
    console.log('toogleSidebar');
    console.log(this.isSidebarOpen);
    if (this.isSidebarOpen) {
      this.sidebarClass = 'hidden-sidebar';
    } else {
      this.sidebarClass = 'active-sidebar';
    }
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public onNavigate(url: string): void {
    this.router.navigate([url]);
  }
}
