import Header from "../components/Header";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import Nutrition from "../components/Nutrition";
import PageContainer from "../components/PageContainer";
import PageLayout from "../components/PageLayout";
import Preparation from "../components/Preparation";
import Title from "../components/Title";

export default function RecipePage() {
  return (
    <PageLayout>
      <PageContainer>
        <Header />
        <div className="flex flex-col gap-8">
          <Title />
          <Preparation />
          <Ingredients />
          <hr className="border-t-stone-150" />
          <Instructions />
          <hr className="border-t-stone-150" />
          <Nutrition />
        </div>
      </PageContainer>
    </PageLayout>
  );
}
