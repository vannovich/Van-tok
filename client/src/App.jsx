import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import ChatBox from "./pages/ChatBox";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
// user From clerk
import { useUser } from "@clerk/react";
import Layout from "./pages/Layout";
import {Toaster} from 'react-hot-toast'

function App() {
  const { user } = useUser();
  return (
    <>
    <Toaster/>
      <Routes>
        {/* <Route path="/" element={!user ? <Login /> : <Layout />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:userId" element={<ChatBox />} />
          <Route path="/connections" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile:profileId" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
