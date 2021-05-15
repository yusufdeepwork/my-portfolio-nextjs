import styled, { createGlobalStyle } from "styled-components";
import Typical from 'react-typical'
import Head from "next/head";
import React from "react";
export default function blog(){

    return   (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog" />
            </Head>
            <Title><Typical
                steps={['Blog will come soon', 5000,'You can look my medium account.']}
                loop={Infinity}
                wrapper="p"
            />
                <a href="https://medium.com/@yusuf.deepwork"><Typical
                    steps={['My medium account.', 1000]}
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
  font-family:"Fira Code Medium",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 font-size: 3rem;
`
