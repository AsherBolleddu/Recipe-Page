import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Preparation from "../components/Preparation";
import Title from "../components/Title";

export default function RecipePage() {
  return (
    <PageContainer>
      <Header />
      <div className="flex flex-col gap-8">
        <Title />
        <Preparation />
      </div>
    </PageContainer>
  );
}
