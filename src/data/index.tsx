import { INavItemOptions } from "@/constants";
import {
  HomeIcon,
  DiscoverIcon,
  SpacesIcon,
  LibraryIcon,
} from "@/components/icons";

export const NAV_ITEM_LIST: Array<INavItemOptions> = [
  {
    id: 1,
    text: "Home",
    navigateTo: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    text: "Discover",
    // navigateTo: "/discover",
    icon: <DiscoverIcon />,
  },
  {
    id: 3,
    text: "Spaces",
    icon: <SpacesIcon />,
  },
  {
    id: 4,
    text: "Library",
    icon: <LibraryIcon />,
  },
];
