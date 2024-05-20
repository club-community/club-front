import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainPage from "./main/MainPage";
import CreateNotice from "./club/master/CreateNotice";
import MemberRecruitment from "./club/common/MemberRecruitment";
import MemberRecruitmentDetail from "./club/common/MemberRecruitmentDetail";
import CreateClub from "./club/master/CreateClub"; 
import NoticeList from "./club/common/noticeList";
import Notice from "./club/common/Notice";
import { RecoilRoot } from "recoil";
import NoticeDetail from "./club/master/NoticeDetail";
import Video from "./club/common/Video";
import CreateVideo from "./club/master/CreateVideo"; 



function App() {
  return (
    <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/clubNotice" element={<CreateNotice/>}></Route>
        <Route path="/MemberRecruitment" element={<MemberRecruitment/>}></Route>
        <Route path="/MemberRecruitmentDetail/:id" element={<MemberRecruitmentDetail />} />
        <Route path="/CreateClub" element={<CreateClub/>} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/CreateNotice" element={<CreateNotice />} />
        <Route path="/UpdateNotice/:id" element={<CreateNotice />} />
        <Route path="/NoticeDetail/:id" element={<NoticeDetail />} />
        <Route path="/CreateVideo" element={<CreateVideo />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </Router>
    </RecoilRoot>
  );
}

export default App;
