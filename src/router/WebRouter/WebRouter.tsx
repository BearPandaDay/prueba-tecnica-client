import { Route, Routes } from "react-router";
import { LayoutSinSup } from "../../layouts/LayoutSinSup";
import { Home, SignUp, SignIn } from "../../pages";

export function WebRouter() {
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
      <Route path="/signup" element={loadLayout(LayoutSinSup, SignUp)}/>
      <Route path="/signin" element={loadLayout(LayoutSinSup, SignIn)}/>
      <Route path="/user/home" element={loadLayout(LayoutSinSup, SignIn)}/>
      <Route path="/*" Component={() => (<h1>PAGE NOT FOUND</h1>)}/>
    </Routes>
  )
}
