import { SidebarSections } from '../../model/SidebarItem';
import { UserRole } from '../enum/user.enum';
import { SidebarItem } from '../interface/Sidebar.interface';

const SidebarItems: SidebarItem[] = [
  {
    LEVEL: UserRole.STANDARD,
    URL: 'overview',
    TITLE: 'Overview',
    ICON: 'bi bi-columns-gap',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.OVERVIEW,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'statistics',
    TITLE: 'Statistics',
    ICON: 'bi bi-graph-up',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.OVERVIEW,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'projects',
    TITLE: 'Projects',
    ICON: 'bi bi-files',
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
    CHILDREN: [
      {
        LEVEL: UserRole.STANDARD,
        URL: 'category',
        TITLE: 'Projects',
        ICON: 'bi bi-cast',
        CHILDREN: [],
        STATUS: false,
        SECTION: SidebarSections.PORTFOLIO,
      },
    ],
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'qualifications',
    TITLE: 'Qualifications',
    ICON: 'bi bi-cart-check',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'testimomials',
    TITLE: 'Testimomials',
    ICON: 'bi bi-people',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
  },

  {
    LEVEL: UserRole.PREMIUM,
    URL: 'fallery',
    TITLE: 'Gallery',
    ICON: 'bi bi-images',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'inbox',
    TITLE: 'Inbox',
    ICON: 'bi bi-chat-right-dots',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'skills',
    TITLE: 'skills',
    ICON: 'bi bi-trophy',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.PORTFOLIO,
  },

  {
    LEVEL: UserRole.STANDARD,
    URL: 'settings',
    TITLE: 'Settings',
    ICON: 'bi bi-gear',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.USER_PREF,
  },

  {
    LEVEL: UserRole.ADMIN,
    URL: 'overview',
    TITLE: 'Overview',
    ICON: 'bi bi-columns-gap',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.OVERVIEW,
  },

  {
    LEVEL: UserRole.ADMIN,
    URL: 'stats',
    TITLE: 'Statistics',
    ICON: 'bi bi-graph-up',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.OVERVIEW,
  },

  {
    LEVEL: UserRole.ADMIN,
    URL: 'settings',
    TITLE: 'Settings',
    ICON: 'bi bi-gear',
    CHILDREN: [],
    STATUS: false,
    SECTION: SidebarSections.USER_PREF,
  },
];

export const getSidebarItems = (role: UserRole) => {
  const sidebarItems: SidebarItem[] = SidebarItems.filter((item) => {
    if (role === UserRole.ADMIN) {
      return item.LEVEL === UserRole.ADMIN;
    }
    return item.LEVEL === UserRole.STANDARD || item.LEVEL === UserRole.PREMIUM;
  }).map((item) => ({
    LEVEL: item.LEVEL,
    URL: `secure/${role === UserRole.ADMIN ? 'admin' : 'user'}/${item.URL}`,
    TITLE: item.TITLE,
    ICON: item.ICON,
    CHILDREN: item.CHILDREN,
    STATUS: item.STATUS,
    SECTION: item.SECTION,
  }));

  return sidebarItems;
};
