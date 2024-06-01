import { SidebarSections } from "../../model/SidebarItem";
import { UserRole } from "../enum/user.enum";
import { SidebarItem } from "../interface/Sidebar.interface";

 const SidebarItems: SidebarItem[] = [
    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "overview",
        TITLE: "Overview",
        ICON: "bi bi-columns-gap",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.OVERVIEW
    },
    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "projects",
        TITLE: "Projects",
        ICON: "bi bi-files",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "qualifications",
        TITLE: "Qualifications",
        ICON: "bi bi-cart-check",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "testimomials",
        TITLE: "Testimomials",
        ICON: "bi bi-people",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.PREMIUM,
        ROUTE: "fallery",
        TITLE: "Gallery",
        ICON: "bi bi-images",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "inbox",
        TITLE: "Inbox",
        ICON: "bi bi-chat-right-dots",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "skills",
        TITLE: "skills",
        ICON: "bi bi-trophy",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO
    },

    {
        LEVEL: UserRole.STANDARD,
        ROUTE: "settings",
        TITLE: "Settings",
        ICON: "bi bi-gear",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.USER_PREF
    },

    {
        LEVEL: UserRole.ADMIN,
        ROUTE: "settings",
        TITLE: "Settings",
        ICON: "bi bi-gear",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.USER_PREF
    },

    {
        LEVEL: UserRole.ADMIN,
        ROUTE: "dashSkillsboard",
        TITLE: "Dashboard",
        ICON: "bi bi-columns-gap",
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.OVERVIEW
    },
    
];

export const getSidebarItems = (role: UserRole) => {

    const sidebarItems: SidebarItem[] = SidebarItems.filter(item => {
        if(role === UserRole.ADMIN){
            return item.LEVEL === UserRole.ADMIN;
        }
        return item.LEVEL === UserRole.STANDARD || item.LEVEL === UserRole.PREMIUM;
    
    }).map(item => ({
        LEVEL: item.LEVEL,
        ROUTE: `secure/${role === UserRole.ADMIN ? "admin" : "user" }/${item.ROUTE}`,
        TITLE: item.TITLE,
        ICON: item.ICON,
        CHILDREN: item.CHILDREN,
        STATUS: item.STATUS,
        SECTION: item.SECTION
    }));

    sidebarItems[0].STATUS = true;
    return sidebarItems;
};