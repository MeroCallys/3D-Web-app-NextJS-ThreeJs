import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

export const Main = styled.section`
  width: 100% !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  overflow-x: hidden;

  @media ${device.xs} {
  }
  @media ${device.sm} {
  }
  @media ${device.md} {
  }
  @media ${device.lg} {
  }
  @media ${device.xl} {
  }
  @media ${device.xxl} {
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.orange.main};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.orange.main} 0%,
    ${({ theme }) => theme.colors.orange.orange3} 50%,
    ${({ theme }) => theme.colors.yellow.yellow5} 100%
  );
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

export const MainTitleContainer = styled.section`
  border: 1px dashed red;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.xxl} {
    padding: 1rem 6rem !important;
  }
  @media ${device.xl} {
    padding: 1rem 6rem !important;
  }
  @media ${device.lg} {
    padding: 1rem 6rem !important;
  }
  @media ${device.md} {
    padding: 1rem 3rem !important;
  }
  @media ${device.sm} {
    padding: 1rem 2rem !important;
  }
  @media ${device.xs} {
    padding: 1rem 0.5rem !important;
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  border: 1px solid blue;
  font-size: ${({ theme }) => theme.fonts.size.h1};
  text-align: left;
  font-weight: 800;
`;
export const Subtitle = styled.p`
  border: 1px solid green;
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.p};
  line-height: ${({ theme }) => theme.fonts.lineHeight};
`;
