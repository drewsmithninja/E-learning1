import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./On_Bording/UserLogin";
import { MyProfile } from "./userInterface/MyProfile/MyProfile";
import { Setting } from "./userInterface/Setting/Setting";
import { UserHome } from "./userInterface/UserHome/UserHome";
import UserProfile from "./userInterface/userProfile/UserProfile";
import Confirmation from "./User/Confirmation/Confirmation";
import DateTime from "./User/DateTime/DateTime";
import Article from "./Pages/Article/Article";
import ArticleList from "./Pages/ArticleList/ArticleList";
import ArticleDetails from "./Pages/Component/ArticleDetails/ArticleDetails";
import NoArticle from "./Pages/Component/Noarticle/NoArticle";
import Support from "./Pages/Component/sopport/Support";
import TermCondition from "./Pages/Component/TermCondition/TermCondition";
import SearchResult from "./userInterface/common-component/SearchResult";
import MyPost from "./userInterface/MyProfile/Component/MyPost";
import MyFavourite from "./userInterface/MyProfile/Component/MyFavourite";
import MyMedia from "./userInterface/MyProfile/Component/MyMedia";
import MyVideos from "./userInterface/MyProfile/Component/MyVideos";
import FaqDetails from "./Pages/Component/Faq/FaqDetails";
import { Session } from "./Pages/Session/Session";
import GroupSessionDetails from "./Pages/groupsessiondetails/GroupSessionDetails";
import GruopSession from "./Pages/GroupSession/GruopSession";
import MySession from "./Pages/mysession/MySession";
import MessageLearner from "./Pages/Messages/MessageLearner";

import MessageMentor from "./Pages/Messages/MessageMentor";
import Notification from "./Pages/Notification/Notification";
import Learner from "./ProfileForLearner/Learner";

const Home = lazy(() => import("./Pages/Home"));
const SearchMentors = lazy(() => import("./Pages/SearchMentors"));
const Booking = lazy(() => import("./Pages/Booking"));
const Mentor = lazy(() => import("./Pages/Component/Booking/Mentor"));
const Dummy = lazy(() => import("./On_Bording/steps/Dummy"));
const Step1 = lazy(() => import("./On_Bording/steps/Step1"));
const Step2 = lazy(() => import("./On_Bording/steps/Step2"));
const Step3 = lazy(() => import("./On_Bording/steps/Step3"));
const Step4 = lazy(() => import("./On_Bording/steps/Step4"));
const Step4_1 = lazy(() => import("./On_Bording/steps/Step4_1"));
const Step5 = lazy(() => import("./On_Bording/steps/Step5"));
const Step6 = lazy(() => import("./On_Bording/steps/Step6"));
const Step7 = lazy(() => import("./On_Bording/steps/Step7"));
const Step8 = lazy(() => import("./On_Bording/steps/Step8"));
const Step9 = lazy(() => import("./On_Bording/steps/Step9"));


function App() {
  return (
    <Routes>
      <Route index element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
      <Route path='search-mentors' element={<Suspense fallback={<>...</>}><SearchMentors /></Suspense>} />
      <Route path="Booking" element={<Suspense fallback={<>...</>}><Booking /></Suspense>} />
      <Route path="Mentor" element={<Suspense fallback={<>...</>}><Mentor /></Suspense>} />
      <Route path="dummy" element={<Suspense fallback={<>...</>}><Dummy /></Suspense>} />
      <Route path="signup" element={<Suspense fallback={<>...</>}><Step1 /></Suspense>} />
      <Route path="email" element={<Suspense fallback={<>...</>}><Step2 /></Suspense>} />
      <Route path="address" element={<Suspense fallback={<>...</>}><Step3 /></Suspense>} />
      <Route path="employement" element={<Step4 />} />
      <Route path="education" element={<Step4_1 />} />
      <Route path="otp-varification" element={<Step5 />} />
      <Route path="mentee-topics" element={<Step6 />} />
      <Route path="mentor-topics" element={<Step7 />} />
      <Route path="add-connection" element={<Step8 />} />
      <Route path="add-connection-mentor" element={<Step9 />} />
      <Route path="datetime" element={<DateTime />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="userlogin" element={<Login />} />
      <Route path="userprofile" element={<UserProfile />} />
      <Route path="mypost" element={<MyPost />} />
      <Route path="myfavourite" element={<MyFavourite />} />
      <Route path="mymedia" element={<MyMedia />} />
      <Route path="myvideo" element={<MyVideos />} />
      <Route path="Home-page" element={<UserHome />} />
      <Route path="setting" element={<Setting />} />
      <Route path="session" element={<Session />} />
      <Route path="groupsession" element={<GruopSession />} />
      <Route path="mysession" element={<MySession />} />
      <Route path="messagelearner" element={<MessageLearner />} />
      <Route path="messagementor" element={<MessageMentor />} />
      <Route path="notification" element={<Notification />} />
      <Route path="groupsessiondetails" element={<GroupSessionDetails />} />
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="article" element={<Article />} />
      <Route path="articleList" element={<ArticleList />} />
      <Route path="noArticle" element={<NoArticle />} />
      <Route path="support" element={<Support />} />
      <Route path="term-and-condtion" element={<TermCondition />} />
      <Route path="faqs" element={<FaqDetails />} />
      <Route path="articledetails" element={<ArticleDetails />} />
      <Route path="search-Result" element={<SearchResult />} />
      <Route path="Learner" element={<Learner />} />
    </Routes>
  );
}

export default App;
