import styled, { createGlobalStyle } from "styled-components";
import Typical from 'react-typical'
import Head from "next/head";
import React from "react";
export default function projects(){
   const github = () => {

   }
    setTimeout(github,5000);
 return   (
     <>
         <Head>
             <title>Projects</title>
             <meta name="description" content="Projects" />
         </Head>
            <Title><Typical
                steps={['Projects will come soon', 1000,'You can view my github account.',1000]}
                loop={Infinity}
                wrapper="p"
            />
            <a href="https://github.com/yusufdeepwork"><Typical
                steps={['Go to my github account.', 100000]}
                loop={Infinity}
                wrapper="p"
            /> </a>
            </Title>
     </>
 )
}

export const Title = styled.div`
 text-align: center;
 justify-content: center;
 align-items: center;
 display: flex;
  flex-direction: column;
 flex: 1;
 height: 100vh;
 color: black;
  font-family: 'Fira Code', monospace;
  font-size: 3rem;
`
