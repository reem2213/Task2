import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import AuthorsIcon from "@mui/icons-material/LocalLibrary";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
// import MenuItem from "./MenuItem/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

// const MenuItemss = () => {
//   return (
//     <>
//       <MenuItem
//         icon1={<MenuIcon />}
//         icon2={<CreateIcon />}
//         title={<p>Posts</p>}
//       />
//       <MenuItem
//         icon1={<MenuIcon />}
//         icon2={<AuthorsIcon />}
//         title={<p>Authors</p>}
//       />
//       <MenuItem
//         icon1={<MenuIcon />}
//         icon2={<CategoryIcon />}
//         title={<p>Categories</p>}
//       />
//       <MenuItem
//         icon1={<MenuIcon />}
//         icon2={<HomeIcon />}
//         title={<p>HomePage</p>}
//       />
//       <MenuItem icon1={<SettingsIcon />} title={<p>Settings</p>} />
//     </>
//   );
// };

const MenuItems = [
  {
    title: "Posts",
    icon1:<MenuIcon />,
    icon2: <CreateIcon />,

  },
  {
    title: "Authors",
    icon1:<MenuIcon />,
    icon2: <AuthorsIcon />,

  },
  {
    title: "Categories",
    icon1:<MenuIcon />,
    icon2: <CategoryIcon />,

  },
  {
    title: "HomePage",
    icon1:<MenuIcon />,
    icon2: <HomeIcon />,

  },

  {
    title: "Settings",
    icon2: <SettingsIcon />,

  },
];

// return (
//     <div>
//         <p className={classes.p}>&#8801; &#9997; Posts</p>
//     </div>
// )

export default MenuItems;
