import {
  createCampaign,
  dashboard,
  logout,
  workspace,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    link: "/dashboard",
  },
  {
    name: "Notification",
    imgUrl: createCampaign,
    link: "/notification-page",
  },
  {
    name: "Workspace",
    imgUrl: workspace,
    link: "/workspace-page",
  },
  // {
  //   name: "withdraw",
  //   imgUrl: withdraw,
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "profile",
  //   imgUrl: profile,
  //   link: "/profile-page",
  // },
  // {
  //   name: "logout",
  //   imgUrl: logout,
  //   link: "/",
  //   disabled: true,
  // },
];
