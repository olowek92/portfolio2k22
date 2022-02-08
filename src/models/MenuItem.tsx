export interface MenuItem {
    title: string;
    path: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    submenu?: MenuItem[];
}