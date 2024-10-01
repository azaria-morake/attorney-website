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
  }
`;

export default GlobalStyle;
