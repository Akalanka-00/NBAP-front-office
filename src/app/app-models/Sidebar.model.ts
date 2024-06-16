import { SidebarSections } from "../app-constants/enum/SidebarItem.enum";
import { UserRole } from "../app-constants/enum/user.enum";

export interface SidebarItem {

    LEVEL: UserRole;
    URL: string;
    TITLE: string;
    ICON: string;
    STATUS: boolean;
    SECTION: SidebarSections;
    CHILDREN: SidebarItem[];

}
