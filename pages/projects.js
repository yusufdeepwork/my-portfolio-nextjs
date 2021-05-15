import styled, { createGlobalStyle } from "styled-components";
import Typical from 'react-typical'
import Head from "next/head";
import React from "react";
export default function projects(){

 return   (
     <>
         <Head>
             <title>Projects</title>
             <meta name="description" content="Projects" />
         </Head>
            <Title><Typical
                steps={['Projects will come soon', 5000]}
                loop={Infinity}
                wrapper="p"
            /></Title>
     </>
 )
}

export const Title = styled.div`
 text-align: center;
 justify-content: center;
 align-items: center;
 display: flex;
 flex: 1;
 height: 100vh;
 color: black;
 font-family: "Fira Code";
 font-size: 3rem;
`
