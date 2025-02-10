import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const decodedValue = decodeURIComponent(value);

          return isLast ? (
            <li className="breadcrumb-item active" key={to}>
              {decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1)}
            </li>
          ) : (
            <li className="breadcrumb-item" key={to}>
              <a href={to}>
                {decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1)}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
