import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRoom from "./components/room/AddRoom";
import { AuthProvider } from "./components/auth/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <main>
          <Router>
            <Routes>
              <Route path="/add-room" element={<AddRoom />} />
            </Routes>
          </Router>
        </main>
      </AuthProvider>
    </>
  );
};

export default App;
