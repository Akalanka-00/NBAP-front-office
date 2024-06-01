import { SidebarSections } from "../../model/SidebarItem";
import { UserRole } from "../enum/user.enum";

export interface SidebarItem {

    LEVEL: UserRole;
    ROUTE: string;
    TITLE: string;
    ICON: string;
    STATUS: boolean;
    SECTION: SidebarSections;
    CHILDREN: SidebarItem[];

}
