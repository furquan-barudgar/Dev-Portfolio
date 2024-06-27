import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactCard = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 32px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const EmailText = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  text-decoration: none;
  margin-left: 12px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactCard>
          <IconButton href={`mailto:furquanbarudgar0@gmail.com`}>
            <FaEnvelope />
            <EmailText href={`mailto:furquanbarudgar0@gmail.com`}>furquanbarudgar0@gmail.com</EmailText>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/furquan-barudgar/" target="_blank">
            <FaLinkedin />
          </IconButton>
        </ContactCard>
      </Wrapper>
    </Container>
  );
};

export default Contact;