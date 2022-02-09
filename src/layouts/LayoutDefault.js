import { useRoutes } from "react-router-dom";
import { Company } from "../views/Company/Company";
import { Dapper } from "../views/Dapper/Dapper";
import { Supernode } from "../views/SuperNode/Supernode";

export const LayoutDefault = () => {
  let routes = useRoutes([
    { path: "/", element: <Company /> },
    { path: "/supernode", element: <Supernode /> },
    { path: "/case-studies/dapper", element: <Dapper /> },
    // ...
  ]);
  return routes;
};
