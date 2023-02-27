import { lazy } from "react";

const routerList = [
  {
    path: "/", // 路径
    name: "首页", // 名字
    exact: true, // 精准匹配
    element: lazy(() => import("../pages/Home/index")), // 懒加载方案
  },
  {
    path: "/practice",
    name: "练习",
    exact: true,
    element: lazy(() => import("../pages/Practice_01/index")),
    // routes: [
    //   {
    //     path: "/user/userList",
    //     name: "用户列表",
    //     exact: true,
    //     component: lazy(() => import("../page/user/userList/index")),
    //   },
    // ],
  },
];
export default routerList;
