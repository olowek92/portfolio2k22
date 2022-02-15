export interface MenuItem {
    title: string;
    path: string;
    icon: any;
    background: string;
    iconOpened?: any;
    iconClosed?: any;
    submenu?: MenuItem[];
}