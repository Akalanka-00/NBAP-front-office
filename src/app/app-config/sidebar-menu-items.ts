import { WidgetTypes } from "../app-constants/enum/WidgetTypes.enum";

export const WIDGHET_ITEMS = [
    {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Dashboard,
        title: 'Dashboard',
        icon: 'bi bi-columns-gap',
        url: 'secure/dashboard',
        children: []
    },
    {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Projects,
        title: 'Projects',
        icon: 'bi bi-files',
        url: 'secure/projects',
        children: []
    },
     {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Qualifications,
        title: 'Qualifications',
        icon: 'bi bi-cart-check',
        url: 'secure/qualifications',
        children: []
    },
     {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Testimomials,
        title: 'Testimomials',
        icon: 'bi bi-people',
        url: 'secure/testimomials',
        children: []
    },
     {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Gallery,
        title: 'Gallery',
        icon: 'bi bi-images',
        url: 'secure/gallery',
        children: []
    },
     {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Inbox,
        title: 'Inbox',
        icon: 'bi bi-chat-right-dots',
        url: 'secure/inbox',
        children: []
    },
    {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Skills,
        title: 'Skills',
        icon: 'bi bi-trophy',
        url: 'secure/skills',
        children: []
    },
     {
        parent: WidgetTypes.None,
        id: WidgetTypes.profile,
        title: 'Profile',
        icon: 'bi bi-person',
        url: 'secure/profile',
        children: []
    },
     {
        parent: WidgetTypes.Sidebar,
        id: WidgetTypes.Settings,
        title: 'Settings',
        icon: 'bi bi-gear',
        url: 'secure/settings',
        children: []
    },
     {
        parent: WidgetTypes.BottomSidebar,
        id: WidgetTypes.Logout,
        title: 'Logout',
        icon: 'bi bi-box-arrow-left',
        url: 'secure/logout',
        children: []
    }
];