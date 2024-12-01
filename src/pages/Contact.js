import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactContainer = styled.div`
  padding: 2rem 0;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.heading};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.link};
    transform: translateY(-2px);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.link};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.link}33;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.link};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.link}33;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.link};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactContainer>
      <Content>
        <Title>Get in Touch</Title>
        <Description>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Description>

        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
          <SocialLink href="mailto:your.email@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialLinks>

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <TextArea placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </ContactContainer>
  );
};

export default Contact;
