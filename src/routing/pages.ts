import { FunctionComponent } from "react"
import { Home } from "../pages/Home"
import { Diurnal } from "../pages/Diurnal"
import { Contact } from "../pages/Contact"

export enum PageName {
    Home = 'Home',
    Diurnal = 'Diurnal',
    Contact = 'Contact',
}

export type PageType = {
    component: FunctionComponent;
    label: string;
    path: string;
}

export const PAGES: Record<PageName, PageType> = {
    [PageName.Home]: {
        component: Home,
        label: 'Accueil',
        path: '/'
    },
    [PageName.Diurnal]: {
        component: Diurnal,
        label: 'Nycthémère',
        path: '/photography'
    },

    [PageName.Contact]: {
        component: Contact,
        label: 'Contact',
        path: '/contact'
    },
}

export function getNavBarPages(): PageType[] {
    return [
        PAGES.Home,
        PAGES.Diurnal,
        PAGES.Contact,
    ]
}
