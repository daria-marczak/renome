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
  text-align: ${({ align }) => (align ? 'right' : 'left')};
  margin-top: 20px;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    margin-top: 70px;
  }
`;

export const StyledSectionLink = styled(Link)`
  font-size: 48px;
  line-height: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledColumn = styled.div`
  @media (min-width: 1200px) {
    max-width: ${({ isDescription }) => (isDescription ? '55%' : '100%')};
    order: ${({ left }) => (left ? '1' : '2')};
  }
`;

export const StyledColumnCentered = styled(StyledColumn)`
  align-self: center;
`;

export const StyledThreeColumnGrid = styled.div`
  @media (min-width: 1001px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
  }
`;
