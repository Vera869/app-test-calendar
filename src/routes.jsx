import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "./pages/layoutPage";
import { PropileBox } from "./pages/ProfilePage"
import { ScheduleBox } from "./pages/SchedulePage";
import { SignInBox } from "./pages/SignInPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignInBox />}/>

      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<ScheduleBox />}/>
        <Route path="/profile" element={<PropileBox />}/>
      </Route>
     
    </Routes>);
};