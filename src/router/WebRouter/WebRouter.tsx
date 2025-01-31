import { Route, Routes } from "react-router";
import { LayoutSinSup, LayoutClient } from "../../layouts";
import { Home, SignUp, SignIn } from "../../pages";
import { useAuth } from "../../hooks";
import { UserHome } from "../../pages/AuthenticatedClient";
import { useNavigate } from "react-router";
import { NearbyRestaurants } from "../../pages";

export function WebRouter() {
  const { user } = useAuth();

  const navigate = useNavigate();
  
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  }
  
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      {!user ? 
        <>
          <Route path="/signup" element={loadLayout(LayoutSinSup, SignUp)}/>
          <Route path="/signin" element={loadLayout(LayoutSinSup, SignIn)}/>
        </>
        :
        <>
          <Route path="/user/home" element={loadLayout(LayoutClient, UserHome)}/>
          <Route path="/user/nearbyrestaurants" element={loadLayout(LayoutClient, NearbyRestaurants)}/>
          {/* <Route path="/*" element={() => navigate("/user/home")}/> */}
        </>
      }
      <Route path="/*" Component={() => (<h1>PAGE NOT FOUND</h1>)}/>
    </Routes>
  )
}
