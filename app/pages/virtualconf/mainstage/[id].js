import Head from 'next/head';
import { useState } from "react";
import { Container, Col, Button } from "react-bootstrap";
import Videostreamer from "../../../components/clientsideonly/videostreamer";
import RocketChat from '../../../components/rocketchat';

export default function ConfMainStage() {
  const [openChat, setOpenChat] = useState(false);

  const handleOpenChat = () => {
    setOpenChat((prevState) => !prevState);
  };

  return (
    <>
      <div className="d-flex">
      <Head>
        <title>Virtual Conference Main Stage</title>
        <meta
          name="description"
          content="Demonstration main stage for a virtual conference"
        />
      </Head>
      <Container
        fluid>
          <Videostreamer poster="/gsocsmall.jpg"  
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
          type='video/mp4'> 
          </Videostreamer> 
          
      </Container>
        {openChat ? <RocketChat closeChat={handleOpenChat} /> : <Button onClick={handleOpenChat}>Open Chat</Button>}
      </div>
    </>
  );
}
