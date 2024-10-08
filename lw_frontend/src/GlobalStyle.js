import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.text};
    }

  // Mobile media queries for responsive layout
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;
