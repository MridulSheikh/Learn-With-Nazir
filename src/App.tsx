import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration';
import Login from './pages/Login';
import Support from './pages/Support';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Ratting from './pages/Ratting';
import PageNotFound from './pages/PageNotFound';
import Myclass from './pages/Myclass';
import Week from './pages/Week';
import Discription from './pages/Discription';
import Play from './pages/Play';
import Dahsboard from './pages/Dashboard/Dahsboard';
import CourseManagement from './pages/Dashboard/CourseManagement';
import AddCourse from './pages/Dashboard/AddCourse';
import ManageWeek from './pages/Dashboard/ManageWeek';
import EditWeek from './pages/Dashboard/EditWeek';
import AddWeek from './pages/Dashboard/AddWeek';
import ManageBlog from './pages/Dashboard/ManageBlog';
import UpdateBlog from './components/dashboard/UpdateBlog';
import AddBlog from './pages/Dashboard/AddBlog';
import ManageVideo from './pages/Dashboard/ManageVideo';
import UpdateVideo from './components/dashboard/UpdateVideo';
import AddVideo from './components/dashboard/AddVideo';
import PrivateRoute from './private/PrivateRoute';

function App() {
  return (
    <div className="App bg-thinfor">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/suport" element={<PrivateRoute><Support /></PrivateRoute>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path= "/feedback" element={<PrivateRoute><Ratting /></PrivateRoute>} />
            <Route path= "/myclass" element={<Myclass />} />
            <Route path= "/week/:id" element={<PrivateRoute><Week /></PrivateRoute>} />
            <Route path= "/video/:id" element={<PrivateRoute><Discription /></PrivateRoute>} />
            <Route path= "/video/:id/:play" element={<PrivateRoute><Play /></PrivateRoute>} />
            <Route path= "/dashboard" element={<Dahsboard />} />
            <Route path= "/dashboard/course" element={<CourseManagement />} />
            <Route path= "/dashboard/course/add" element={<AddCourse />} />
            <Route path="/dashboard/week" element={<ManageWeek />} />
            <Route path="/dashboard/week/edit/:id" element={<EditWeek />} />
            <Route path="/dashboard/week/add" element={<AddWeek />} />
            <Route path="/dashboard/blog" element={<ManageBlog />} />
            <Route path="/dashboard/blog/:id" element={<UpdateBlog />} />
            <Route path="/dashboard/blog/add" element={<AddBlog />} />
            <Route path="/dashboard/video" element={<ManageVideo />} />
            <Route path="/dashboard/video/:id" element={<UpdateVideo />} />
            <Route path="/dashboard/video/add" element={<AddVideo />} />
            <Route path='*' element = {<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
