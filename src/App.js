import React from "react"
import styled from "styled-components/macro"
import { Header } from "./Header"
import { maxWidth } from "./constants"
import { About } from "./About"
import { WorkExperience } from "./WorkExperience"
import { Footer } from "./Footer"
import { Education } from "./Education"
import { Language } from "./Language"

export const App = () => (
  <Page>
    <Header />
    <About />
    <WorkExperience />
    <Education />
    <Language />
    <Footer />
  </Page>
)

const Page = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`
