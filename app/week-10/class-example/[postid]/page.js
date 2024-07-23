"use client";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { dbGetPost } from "../_services/blog-service";

// params is keyword for getting dynamic routes
export default function BlogPostPage({ params }) {
  //default state of a blank object is fine
  const [blogPost, setBlogPost] = useState();

  const { user } = useUserAuth;

  useEffect(() => {
    if (user) {
      dbGetPost(user.uid, params.postid, setBlogPost);
    }
  }, [user]);

  return (
    <main>
      <header>
        <h1>{blogPost.title}</h1>
      </header>
      <article>{blogPost.contents}</article>
    </main>
  );
}
