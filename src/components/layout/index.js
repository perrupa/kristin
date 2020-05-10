/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Header } from ".."
import "./layout.css"

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  padding: 0;
`

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 2em;
`

export const Layout = ({ title, children }) => {
  return (
    <PageWrapper>
      <Header siteTitle={title} />
      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()}, Kristin LeGard</Footer>
    </PageWrapper>
  )
}
