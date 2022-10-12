/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import AddTest from "components/Mock Test/MockTest";
import AddPapers from "components/Past Papers/AddPapers";
import LearningDashboard from "components/Add Material/AddMaterial";
import Profile from "components/Profile/Profile";
import ViewFile from "components/View Files/ViewFiles";
import ViewVideos from "components/View Videos/ViewVideos";
import ViewPaper from "components/View Papers/ViewPapers";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/addTest",
    name: "Add Mock Test",
    icon: "nc-icon nc-chart-pie-35",
    component: AddTest,
    layout: "/admin"
  },
  {
    path: "/addPaper",
    name: "Add Past Papers",
    icon: "nc-icon nc-chart-pie-35",
    component: AddPapers,
    layout: "/admin"
  },
  {
    path: "/viewPaper",
    name: "View Past Papers",
    icon: "nc-icon nc-chart-pie-35",
    component: ViewPaper,
    layout: "/admin"
  },
  {
    path: "/addMaterial",
    name: "Add Material",
    icon: "nc-icon nc-chart-pie-35",
    component: LearningDashboard,
    layout: "/admin"
  },
  {
    path: "/viewFile",
    name: "View File",
    icon: "nc-icon nc-chart-pie-35",
    component: ViewFile,
    layout: "/admin"
  },
  {
    path: "/viewVideos",
    name: "View Videos",
    icon: "nc-icon nc-chart-pie-35",
    component: ViewVideos,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: Profile,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }

];

export default dashboardRoutes;
