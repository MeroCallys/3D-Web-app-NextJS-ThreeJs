import { useLoaderData } from "react-router-dom";
import {
  ContentWrapper,
  Main,
  MainTitle,
  MainTitleContainer,
  Subtitle,
} from "./Home.styled";

function Home() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <Main>
      <ContentWrapper>
        <MainTitleContainer>
          <MainTitle>SolTech, Management App</MainTitle>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            numquam, velit atque vero ipsam tempore dicta natus ad qui cum
            doloremque quam rerum distinctio fugiat? Tempora amet ratione
            aperiam repellendus!
          </Subtitle>
        </MainTitleContainer>
      </ContentWrapper>
    </Main>
  );
}

export default Home;
