import React from "react";
import Section_left_Create_Post from "./Section_left_Create_Post/CreatePost";
import SectionLeft from "./Section_left/SectionLeft";
import SectionRight from "./Section_right/SectionRight";
import { Routes, Route } from "react-router-dom";
import Comment from "../Comment/Comment";
import RedactPost from "../Redact_post/RedactPost";
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
