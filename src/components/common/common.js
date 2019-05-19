import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeading = styled.h1`
  letter-spacing: ;
  margin-bottom: -0.3em;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.header};
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0.1em;
`;

export const StyledSection = styled.section`
  margin-top: 70px;
  text-align: ${({ align }) => (align ? 'right' : 'left')};
`;

export const StyledSectionLink = styled(Link)`
  font-size: 48px;
  line-height: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;
