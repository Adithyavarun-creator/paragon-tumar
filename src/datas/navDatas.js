export const navDatas = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Portfolio", link: "/services" },
  {
    id: 5,
    name: "Blog",
    link: "/blog",
    sublinks: [
      {
        id: 1,
        subName: "Blog",
      },
      {
        id: 2,
        subName: "Blog Sidebar",
      },
      {
        id: 3,
        subName: "Blog Posts",
      },
    ],
  },
  { id: 6, name: "Contact", link: "/contact" },
];
