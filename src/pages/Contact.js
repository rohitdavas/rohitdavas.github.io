import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import homeContent from '../data/home-content.json';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.text}50;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.text}50;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.link};
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.link}dd;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.text}50;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  color: ${({ theme, success }) => success ? theme.success : theme.error};
  background-color: ${({ theme, success }) => success ? theme.success + '15' : theme.error + '15'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const { socialLinks } = homeContent.profile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('https://formspree.io/f/xqakoary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          info: { error: false, msg: 'Thanks for your message and time. ! I will get back to you soon.' }
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          info: { error: true, msg: result.error || 'Something went wrong. Please try again.' }
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: { error: true, msg: 'Network error. Please try again.' }
      });
    }
  };

  return (
    <ContactContainer>
      <SocialLinks>
        {socialLinks.linkedin && (
          <SocialLink href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        )}
        {socialLinks.github && (
          <SocialLink href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
        )}
        {socialLinks.instagram && (
          <SocialLink href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialLink>
        )}
        {socialLinks.email && (
          <SocialLink href={`mailto:${socialLinks.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        )}
      </SocialLinks>

      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton 
          type="submit" 
          disabled={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
        
        {status.info.msg && (
          <StatusMessage success={!status.info.error}>
            {status.info.msg}
          </StatusMessage>
        )}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
