import { Route, Routes } from "react-router";
import { LayoutSinSup } from "../../layouts/LayoutSinSup";
import { Home, SignUp, SignIn } from "../../pages";
import { useAuth } from "../../hooks";

export function WebRouter() {
  const { user } = useAuth();
  
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
          <Route path="/user/home" Component={() => <h1>USER / HOME</h1>}/>
        </>
      }
      <Route path="/*" Component={() => (<h1>PAGE NOT FOUND</h1>)}/>
    </Routes>
  )
}
