import React from "react";
import styled from "styled-components";
import PhotoProfile from "../eu.jpeg";

const Container = styled.div`
  height: 70vh;
  width: 80vw;
  margin: 2rem auto;
  display: flex;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

`;

const ImgWrap = styled.div`
  margin-top: 2rem;
`;

const ProfileImg = styled.img`
  width: 25vw;
  border-radius: 5px;
`;

const TextAboutWrap = styled.div`
  padding: 0 4rem;
`;
const TextAbout = styled.p`
  margin-bottom: 2rem;
`;

const LinkTitle = styled(TextAbout)`
font-size: 1rem;
font-weight: bold;
`
const LinkAboutWrap = styled.div``;

const LinkAbout = styled.a`
text-decoration: none;
color: black;

&:hover {
    color: #da666c;
}

`;

function Me() {
    return (
        <>
            <Container>
                <ImgWrap>
                    <ProfileImg src={PhotoProfile}></ProfileImg>
                </ImgWrap>
                <TextAboutWrap>
                    <Title>Alcione Ribeiro</Title>

                    <TextAbout>
                        Web Developer Junior Hello! <br />
                        I'm Alcione from Brazil. I'm an agronomist engineer, amigurumi
                        designer and recently I learn how to become Frontend Web Developer.
                        I am a creative person ho likes creat e learn new things and i'm
                        highly motivated to study and get more skills.
                    </TextAbout>
                    <LinkTitle>Some pages we can know a bit more about me:</LinkTitle>
                    <LinkAboutWrap>
                        <LinkAbout
                            target="_blank"
                            href="https://page-version-2.netlify.app"
                        >
                            Alcione's Portfolio
                        </LinkAbout>
                    </LinkAboutWrap>

                    <LinkAboutWrap>
                        <LinkAbout
                            target="_blank"
                            href="https://alcioneportifolio.netlify.app/"
                        >
                            My first Portfolio
                        </LinkAbout>
                    </LinkAboutWrap>
                    <LinkAboutWrap>
                        <LinkAbout
                            target="_blank"
                            href="https://alcionewebpage.netlify.app/"
                        >
                            Let's learn a new Hobbie with me!
                        </LinkAbout>
                    </LinkAboutWrap>
                </TextAboutWrap>
            </Container>
        </>
    );
}

export default Me;
