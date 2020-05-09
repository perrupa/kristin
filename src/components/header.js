import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const SiteHeader = styled.header`
  font-size: 1.2rem;
  padding: 1em 0 1em;
  background-color: #333;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-content: center;
  justify-content: space-around;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 5px;
    bottom: -10px;
    left: 0;
    background-color: #b2ffff;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

export const Header = () => (
  <SiteHeader>
    <Content>
      <HomeLink to="/">Home</HomeLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
    </Content>
  </SiteHeader>
)
