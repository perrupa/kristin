// import React from "react"
import styled from "@emotion/styled"

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
export const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-position: 0 88%;

    transition: background-size 0.25s ease-in;
    background-size: 100% 0.2em;
    &:hover {
      background-size: 100% 88%;
    }
  }

  blockquote {
    border-left: 1em solid orange;
    font-size: 150%;
  }
`
