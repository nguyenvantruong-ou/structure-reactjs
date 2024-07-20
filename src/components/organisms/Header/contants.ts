export enum NavigationPath {
    LearnToSwim = "learn-to-swim",
    SwimPrograms = "swim-programs",
    SwimToolkit = "swim-toolkit",
    SuppotAndConnect = "support-and-connect"
}

interface INavigationItem  {
    url: string;
    name: string;
}

export const navigationMenu: INavigationItem[] = [
    {
        url: NavigationPath.LearnToSwim,
        name: "Learn to ABC"
    },
    {
        url: NavigationPath.SwimPrograms,
        name: "Programs"
    },
    {
        url: NavigationPath.SwimToolkit,
        name: "Toolkit"
    },
    {
        url: NavigationPath.SuppotAndConnect,
        name: "Support and Connect"
    }
]