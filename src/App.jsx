import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/commons/Background";
import { LayoutHome } from "./layouts";
import ProjectDetailPage from "./pages/ProjectDetail";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LayoutWork from "./layouts/LayoutWork";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/features/appSlice";
import { getDataService } from "./config/services/appService";
import BlogPage from "./pages/blog/BlogPage";
import AlbumPage from "./pages/album/AlbumPage";
import BlogDetailPage from "./pages/blog-detail/BlogDetailPage";
function App() {
  AOS.init({
    duration: 1800,
    offset: 0,
  });

  const routes = [
    {
      path: "/",
      element: <LayoutHome />,
    },
    {
      path: "/work",
      element: <LayoutWork />,
    },
    {
      path: "/work/:slug",
      element: <ProjectDetailPage />,
    },
    {
      path: "/blogs",
      element: <BlogPage />,
    },
    {
      path: "/blog/:slug",
      element: <BlogDetailPage />,
    },
    {
      path: "/album",
      element: <AlbumPage />,
    },
  ];
  const dispath = useDispatch()
  const data    = useSelector((state) => state.get_data.data);
  useEffect(()=>{
    if(!data || data == null){
      // fetch data 
     getDataService().then(res=>{
      if(res.status){
        dispath(setData(res.data))
      }
     })
    }
  },[data])
  // dark mode
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
     document.title = data?.data_info?.name+' Portpolio';
     
  }, [data]);
  return (
    <>
      {/* {useRoutes(routes)} */}
      <BrowserRouter>
        <Routes>
          {
            routes.map((item) => (
              <Route path={item.path} key={item.path} element={item.element} />
            ))
          }
        </Routes>

      </BrowserRouter>
      {/* <LayoutHome></LayoutHome> */}
      <Background />
    </>
  );
}

export default App;
