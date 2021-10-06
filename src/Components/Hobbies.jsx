import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import HobbyPic from "../AvocadoFamyli.jpg";
import HobbyPic2 from "../StitchDoll.jpg";

const Container = styled.div`
  width: 80vw;
  margin: 2rem auto;
`;
const CardsWrap = styled.div`
  display: flex;
`;
const VideoWrap = styled.div``;

const ImgWrap = styled.div`
  width: 250px;
  height: 250px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ButtonWrap = styled.div`
  text-align: center;
`;

function Hobbies() {
  return (
    <>
      <Container>
        <Title>Hobbies</Title>
        <CardsWrap>
          <Card className="card-style-hobby" style={{ width: "18rem" }}>
            <Card.Body>
              <VideoWrap>
                <iframe
                  width="260"
                  height="215"
                  src="https://www.youtube.com/embed/X2IUmRbzqv4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoWrap>
              <Card.Title className="mb-2 mt-4">YouTube Channel</Card.Title>
              <Card.Text>
                Do you want to learn a new hobby? Then you have come to the
                right place. Through videos I teach you how to learn to weave
                beautiful ideas.
              </Card.Text>
              <ButtonWrap>
                <Button
                  variant="outline-danger"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCZFn66hb4QBEwWEtXhaZY9w"
                >
                  Play to watch
                </Button>
              </ButtonWrap>
            </Card.Body>
          </Card>

          <Card className="card-style-hobby" style={{ width: "18rem" }}>
            <Card.Body>
              <ImgWrap>
                <Img src={HobbyPic} />
              </ImgWrap>
              <Card.Title className="mb-2 mt-4">Patterns Blog</Card.Title>
              <Card.Text>
                In Brazil it is not common for people to speak English. For this
                reason I decided to create my 'blog' in 2016 to be able to share
                with Brazilians, the patterns created by me.
              </Card.Text>
              <ButtonWrap>
                <Button
                  variant="outline-danger"
                  target="_blank"
                  href="https://bonekdecroche.com.br/"
                >
                  Click to read more
                </Button>
              </ButtonWrap>
            </Card.Body>
          </Card>

          <Card className="card-style-hobby" style={{ width: "18rem" }}>
            <Card.Body>
              <ImgWrap>
                <Img src={HobbyPic2} />
              </ImgWrap>
              <Card.Title className="mb-2 mt-4">Instagram</Card.Title>
              <Card.Text>
                I really enjoy being in contact with people and sharing with
                them what I have learned. On Instagram you can get to know a
                little more about my hobbies and follow the ideas I'm
                developing.
              </Card.Text>
              <ButtonWrap>
                <Button
                  variant="outline-danger"
                  target="_blank"
                  href="https://www.instagram.com/bonekdecroche/"
                >
                  Instagram
                </Button>
              </ButtonWrap>
            </Card.Body>
          </Card>
        </CardsWrap>
      </Container>
    </>
  );
}

export default Hobbies;
