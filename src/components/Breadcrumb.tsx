import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li className="breadcrumb-item active" key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li className="breadcrumb-item" key={to}>
              <Link to={to}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;