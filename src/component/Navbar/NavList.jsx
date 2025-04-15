import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
        <div className="nav d-md-flex d-none justify-content-end">
                <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    `navLink me-md-4 font-18 ${isPending ? "pending" : isActive ? "active" : ""}`
  }
>
  Home
</NavLink>
<NavLink
  to="/about-us"
  className={({ isActive, isPending }) =>
    `navLink me-md-4 font-18 ${isPending ? "pending" : isActive ? "active" : ""}`
  }
>
  About
</NavLink>
<NavLink
  to="/services"
  className={({ isActive, isPending }) =>
    `navLink me-md-4 font-18 ${isPending ? "pending" : isActive ? "active" : ""}`
  }
>
  Services
</NavLink>
<NavLink
  to="/contact-us"
  className={({ isActive, isPending }) =>
    `navLink font-18 ${isPending ? "pending" : isActive ? "active" : ""}`
  }
>
  Contact Us
</NavLink>
                    </div>
    </>
  );
};

export default NavList;