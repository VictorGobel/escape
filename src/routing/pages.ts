import { FunctionComponent } from "react"
import { Home } from "../pages/Home"
import { Photography } from "../pages/Photography"

export enum PageName {
    Home = 'Home',
    Photography = 'Photography',
    Test = 'Test',
}

export type PageType = {
    component: FunctionComponent;
    label: string;
    path: string;
}

export const PAGES: Record<PageName, PageType> = {
    [PageName.Home]: {
        component: Home,
        label: 'Acceuil',
        path: '/'
    },
    [PageName.Photography]: {
        component: Photography,
        label: 'La photographie',
        path: '/photography'
    },
    [PageName.Test]: {
        component: Photography,
        label: 'Bonjour',
        path: '/test'
    }
}

export function getNavBarPages(): PageType[] {
    return [
        PAGES.Home,
        PAGES.Photography,
        PAGES.Test,
    ]
}