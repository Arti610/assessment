import dashboardIcon from "../assests/dashboard.svg";
import assesmentIcon from "../assests/note_alt.svg";
import myLibraryIcon from "../assests/quiz.svg";
import roundStatusIcon from "../assests/admin_meds.svg";

export const MenuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboardIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Assesment",
    icon: assesmentIcon,
    path: "/assessment",
  },
  {
    id: 3,
    title: "My Library",
    icon: myLibraryIcon,
    path: "/my_library",
  },
  {
    id: 4,
    title: "Round Status",
    icon: roundStatusIcon,
    path: "/round_status",
  },
];
