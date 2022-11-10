import { FunctionComponent } from "react"
import { Home } from "../pages/Home"
import { Diurnal } from "../pages/Diurnal"
import { Contact } from "../pages/Contact"
import { Sokoban } from "../pages/Sokoban"
import { Labyrinth } from "pages/Labyrinth"

export enum PageName {
    Home = 'Home',
    Diurnal = 'Diurnal',
    Contact = 'Contact',
    Labyrinth = 'Labyrinth',
    Sokoban = 'Sokoban',
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
    [PageName.Sokoban]: {
        component: Sokoban,
        label: 'Sokoban',
        path: '/sokoban'
    },
    [PageName.Labyrinth]: {
        component: Labyrinth,
        label: 'Labyrinth',
        path: '/labyrinth'
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
        PAGES.Sokoban,
        PAGES.Labyrinth,
        PAGES.Contact,
    ]
}
