import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./util/ProtectedRoute";
import Temp from "./admin/Temp";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";
import Home from "./screens/home/Home";
import Courses from "./screens/courses/Courses";
import Team from "./screens/team/Team";
import VideoScreen from "./screens/video/VideoScreen";
import Example from "../src/leaderBoard/leader.js";
import Quiz from "./screens/quiz/Quiz";
import AdminLogin from "./admin/screens/login/AdminLogin";
import NotFound from "./screens/404/NotFound";
import CodeEditor from "./screens/CodeEditor.js";
import Reports from "./screens/report/Reports";
import UploadCourse from "./admin/screens/upload_course/UploadCourse";
import CourseOverview from "./screens/courses/CourseOverview";
import QuestionCard from "./components/quiz/QuestionCard";
import NotesMain from "./screens/notes/NotesMain";

const Routes = (props) => {
  const history = createBrowserHistory();

  
  return (
    <BrowserRouter history={history}>
      <Switch>
        <ProtectedRoute path="/admin" component={Temp} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/register" component={SignUp} exact />
        <ProtectedRoute path="/courses" component={Courses} exact />
        <ProtectedRoute path="/courses/:courseId/quiz" component={Quiz} exact />
        <ProtectedRoute path="/team" component={Team} exact />
        <ProtectedRoute path="/leaderBoard" component={Example} exact />
        <ProtectedRoute path="/courses/:id" component={CourseOverview} exact />
        <ProtectedRoute path="/video/:id" component={VideoScreen} exact />
        <ProtectedRoute
          path="/admin/upload/course"
          component={UploadCourse}
          exact
        />
        <ProtectedRoute path="/editor" exact component={CodeEditor} />
        <ProtectedRoute
          path="/admin/upload_course"
          component={UploadCourse}
          exact
        />
        <ProtectedRoute path="/adminlogin" component={AdminLogin} exact />
        <ProtectedRoute path="/reports" component={Reports} exact />
        <ProtectedRoute path="/editor" exact component={CodeEditor} />
        <ProtectedRoute
          path="/admin/upload_course"
          component={UploadCourse}
          exact
        />
        <ProtectedRoute path="/adminlogin" component={AdminLogin} exact />
        <ProtectedRoute path="/reports" component={Reports} exact />
        <ProtectedRoute path="/notes" component={NotesMain} exact />
        <ProtectedRoute path="/" component={Home} exact />
        <ProtectedRoute path="/:anything" component={NotFound} /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
