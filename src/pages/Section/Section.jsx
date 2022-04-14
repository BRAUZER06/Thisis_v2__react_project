import React from "react";
import { Routes, Route } from "react-router-dom";
import RedactPost from "../RedactPost/RedactPost";
import SectionRight from "./Section_right_All_Posts/Section_right_All_Posts";
import Comment from "./Section_left_Post_Comment/Section_left_Post_Comment.jsx";
import SectionLeft from "./Section_left_MyInformation/Section_left_MyInformation";
import Section_left_Create_Post from "./Section_left_Create_Post/Section_left_Create_Post";

const Section = () => {
  return (
    <section style={{ display: "flex" }}>
      <Routes>
        <Route path="/home" element={<SectionLeft />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<SectionRight />} />
      </Routes>
      <Routes>
        <Route path="/create_post" element={<Section_left_Create_Post />} />
      </Routes>
      <Routes>
        <Route path="/create_post" element={<SectionRight />} />
      </Routes>
      <Routes>
        <Route path="/check_post_and_comment/:id" element={<Comment />} />
      </Routes>
      <Routes>
        <Route path="/check_post_and_comment/:id" element={<SectionRight />} />
      </Routes>
      <Routes>
        <Route path="/redact_post/:id" element={<RedactPost />} />
      </Routes>
    </section>
  );
};

export default Section;
