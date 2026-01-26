// import { Routes, Route } from "react-router-dom";
// import  Navbar from "./components/navBar";
// import Footer from "./components/footer";
// import  SideNav  from "./components/sideNav";
// import Home from "./pages/home";
// import Photos from "./pages/photos";
// import Videos from "./pages/video";
// import Philosophy from "./pages/philosophy";
// import Dhamadeshana from "./pages/dhamadeshana";
// import Login from "./pages/login";
// import Register from "./pages/register";
// import { Container } from "react-bootstrap";
// import React, { useState } from "react";
// import { LanguageProvider } from "./components/languageContext";


// function App() { 
  
//   const [collapsed, setCollapsed] = useState(false);



//   return (
//     <>
//       <LanguageProvider>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <SideNav onClick={setCollapsed}/>
//         <div style={{ padding: "20px", width: "100%",alignItems:"center" }}>
//         <Container className="p-5 m-5">
        
          
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/photos" element={<Photos />} />
//             <Route path="/videos" element={<Videos />} />
//             <Route path="/ambedkar-philosophy" element={<Philosophy />} />
//             <Route path="/dhamadeshana" element={<Dhamadeshana />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
         
//           </Container>
//         </div>
//       </div>
//       <Footer />
//       </LanguageProvider>
//     </>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import SideNav from "./components/sideNav";

import Home from "./pages/home";
import Photos from "./pages/photos";
import Videos from "./pages/video";
import Philosophy from "./pages/philosophy";
import Dhamadeshana from "./pages/dhamadeshana";
import Login from "./pages/login";
import Register from "./pages/register";

import { Container } from "react-bootstrap";
import React, { useState } from "react";

import { LanguageProvider } from "./components/languageContext";
import { AuthProvider } from "./pages/AuthContext";
import ProtectedRoute from "./pages/protectedroute";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <AuthProvider>
        <LanguageProvider>

          <Navbar />

          <div style={{ display: "flex" }}>
            <SideNav onClick={setCollapsed} />

            <div style={{ padding: "20px", width: "100%", alignItems: "center" }}>
              <Container className="p-5 m-5">

                <Routes>
                  {/* PUBLIC ROUTES */}
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/ambedkar-philosophy" element={<Philosophy />} />
                  <Route
                    path="/dhamadeshana"
                    element={
                      
                        <Dhamadeshana />
                    
                    }
                  />
                  {/* PROTECTED ROUTES */}
                  <Route
                    path="/photos"
                    element={
                      <ProtectedRoute>
                        <Photos />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/videos"
                    element={
                      <ProtectedRoute>
                        <Videos />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/dhamadeshana"
                    element={
                      <ProtectedRoute>
                        <Dhamadeshana />
                      </ProtectedRoute>
                    }
                  />
                </Routes>

              </Container>
            </div>
          </div>

          <Footer />

        </LanguageProvider>
      </AuthProvider>
    </>
  );
}

export default App;
