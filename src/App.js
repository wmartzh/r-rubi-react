import "./App.css";
import "ka-table/style.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { verify } from "./services/authService";
import { UserContext } from "./context";

function App() {
  const [authKey, setAuthKey] = useState(localStorage.getItem("authKey"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authKey) {
      verify(authKey)
        .then((res) => {
          setAuthKey(localStorage.getItem("authKey"));
          setUser(res.user);
        })
        .catch((_err) => {
          localStorage.removeItem("authKey");
          setAuthKey(null);
          setUser(null);
          window.location.replace("/");
        });
    }
  }, [setAuthKey, authKey]);

  return (
    <>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            {authKey !== null ? (
              <Route element={<MainLayout />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
              </Route>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
