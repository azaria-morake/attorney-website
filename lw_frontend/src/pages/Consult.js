import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: 300px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

const Consult = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/submit-form/', formData);
      console.log(response.data);  // Check the response from the Django backend
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormSection>
      <h1>Consultation Form</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <StyledInput 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <StyledInput 
          type="phone" 
          name="phone" 
          placeholder="Your Phone Number" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <StyledTextarea 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          required 
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormSection>
  );
};

export default Consult;
