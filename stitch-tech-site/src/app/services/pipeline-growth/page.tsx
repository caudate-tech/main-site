import ServicePortfolio from '@/components/ServicePortfolio';
import CategoryPageHeader from '@/components/CategoryPageHeader';
import { serviceCategories } from '@/data/service-categories';

const category = serviceCategories.find((c) => c.id === 'pipeline-growth')!;

export default function PipelineGrowthPage() {
  return (
    <>
      <CategoryPageHeader
        eyebrow="Behavioral intelligence"
        title={category.label}
        description={category.description}
        icon={category.icon}
      />
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <ServicePortfolio pillarIds={['pipeline-growth']} showTechnology={false} />
      </div>
    </>
  );
}
