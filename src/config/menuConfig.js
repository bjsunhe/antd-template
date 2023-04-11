/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  {
    title: "作者博客",
    path: "/doc",
    icon: "file",
    roles:["admin","editor","guest"]
  },
  
  {
    title: "编辑",
    path: "/components",
    icon: "appstore",
    roles:["admin","editor"],
    children: [
      {
        title: "富文本",
        path: "/components/richTextEditor",
        roles:["admin","editor"],
      },
      
    ],
  },
  
  
  {
    title: "表格",
    path: "/table",
    icon: "table",
    roles:["admin","editor"]
  },
 
  
  {
    title: "剪贴板",
    path: "/clipboard",
    icon: "copy",
    roles:["admin","editor"]
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  },
  
];
export default menuList;
