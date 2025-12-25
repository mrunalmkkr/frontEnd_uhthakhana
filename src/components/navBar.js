// import { useContext } from "react";
// import { LanguageContext } from "./languageContext";
// import { Link, Route } from "react-router-dom";
// import "./Navbar.css";
// import Philosophy from "../pages/philosophy";
// import { Routes } from "react-router-dom";

// const Navbar = () => {
//   const { lang, setLang } = useContext(LanguageContext);

//   return (
//     <header className="top-navbar">
//       {/* Left */}
//       <div className="nav-left">
//         <h2 className="nav-logo">
//           {lang === "EN"
//             ? "UNTHAKHANA BHIKHU SANGA"
//             : "उठाखाना भिक्षू संघ"}
//         </h2>
//       </div>

//       {/* Center */}
//       <nav className="nav-center">
//         <Link to="/" className="nav-link">
//           {lang === "EN" ? "Home" : "मुख्यपृष्ठ"}
//         </Link>
        
//       </nav>

      

//       {/* Right */}
//       <div className="nav-right">
//         <button
//           className={`lang-btn ${lang === "EN" ? "active" : ""}`}
//           onClick={() => setLang("EN")}
//         >
//           EN
//         </button>
//         <button
//           className={`lang-btn ${lang === "MR" ? "active" : ""}`}
//           onClick={() => setLang("MR")}
//         >
//           MR
//         </button>

//         <Link to="/login" className="nav-btn">
//           Login
//         </Link>
//         <Link to="/register" className="nav-btn outline">
//           Register
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useContext } from "react";
import { LanguageContext } from "./languageContext";
import { AuthContext } from "../pages/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="top-navbar">
      {/* Left */}
      <div className="nav-left">
        <h2 className="nav-logo">
          {lang === "EN"
            ? "UNTHAKHANA BHIKHU SANGA"
            : "उठाखाना भिक्षू संघ"}
        </h2>
      </div>

      {/* Center */}
      <nav className="nav-center">
        <Link to="/" className="nav-link">
          {lang === "EN" ? "Home" : "मुख्यपृष्ठ"}
        </Link>
      </nav>

      {/* Right */}
      <div className="nav-right">
        <button
          className={`lang-btn ${lang === "EN" ? "active" : ""}`}
          onClick={() => setLang("EN")}
        >
          EN
        </button>

        <button
          className={`lang-btn ${lang === "MR" ? "active" : ""}`}
          onClick={() => setLang("MR")}
        >
          MR
        </button>

        {!user ? (
          <>
            <Link to="/login" className="nav-btn">
              Login
            </Link>
            <Link to="/register" className="nav-btn outline">
              Register
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="nav-btn logout">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;


