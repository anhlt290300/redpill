import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import Page_404 from "../page/Page_404";
import Home from "../page/Home";
import Blog from "../page/Blog";
import Category from "../page/Category";
import UserLayout from "../UserLayout";
import { getBlogBySlug } from "../json/blogs-all";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />} errorElement={<Page_404 />}>
        <Route index element={<Home />} />
        <Route path="/category/:categorySlug" element={<Category />} />
        <Route
          loader={({ params }) => {
            let blogSlug = params.blogSlug;
            let categorySlug = params.categorySlug;
            let blog = getBlogBySlug(blogSlug);
            return blog;
          }}
          path="/:categorySlug/:blogSlug"
          element={<Blog />}
        />
      </Route>
    </Route>
  )
);

export default router;
