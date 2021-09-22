import { createBrowserHistory } from "history";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Temp from "./admin/Temp";
import SignInSide from "./screens/signIn/signIn";
import SignUp from "./screens/signUp/signUp";
import Home from "./screens/home/Home";
import Courses from "./screens/courses/Courses";
import Team from "./screens/team/Team";
import VideoScreen from "./screens/video/VideoScreen";
import Example from "../src/leaderBoard/leader.js";
import QuestionCard from "./components/quiz/QuestionCard";
import UploadScore from "./admin/screens/upload/UploadCourse";
import CourseOverview from "./screens/courses/CourseOverview";

const Routes = (props) => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/admin" component={Temp} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/register" component={SignUp} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/courses" component={Courses} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/leaderBoard" component={Example} exact />
        <Route path="/test" component={QuestionCard} exact />
        <Route path="/course/:id" component={CourseOverview} exact />
        <Route path="/video/:id" component={VideoScreen} exact />
        <Route path="/admin/upload/course" component={UploadScore} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
