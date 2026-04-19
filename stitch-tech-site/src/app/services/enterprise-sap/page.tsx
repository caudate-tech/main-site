import ServicePortfolio from '@/components/ServicePortfolio';
import CategoryPageHeader from '@/components/CategoryPageHeader';
import { serviceCategories } from '@/data/service-categories';

const category = serviceCategories.find((c) => c.id === 'enterprise-sap')!;

export default function EnterpriseSapPage() {
  return (
    <>
      <CategoryPageHeader
        eyebrow="Enterprise infrastructure"
        title={category.label}
        description={category.description}
        icon={category.icon}
      />
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <ServicePortfolio pillarIds={['enterprise-sap']} />
      </div>
    </>
  );
}
