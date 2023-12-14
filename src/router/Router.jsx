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
        <Route element={<Home />} />
        <Route index path="/category/:categoryId" element={<Category />} />
        <Route
          loader={({ params }) => {
            let blogSlug = params.blogId;
            let categorySlug = params.categoryId;
            let blog = getBlogBySlug(blogSlug);
            return blog;
          }}
          path="/:categoryId/:blogId"
          element={<Blog />}
        />
      </Route>
    </Route>
  )
);

export default router;
