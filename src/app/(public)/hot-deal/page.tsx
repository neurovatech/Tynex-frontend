import Breadcrumb from "@/components/share/Breadcrumb";
import ShowcaseProductGrid from "@/components/share/ShowcaseProductGrid";
import { fetchShowcaseProducts } from "@/lib/fetchShowcaseProducts";

export default async function HotDealPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Hot Deal", href: "/hot-deal" },
  ];

  const { products, totalPages } = await fetchShowcaseProducts("hot-deal", 1, 50);

  return (
    <div className="flex flex-col flex-1 max-w-355 mx-auto">
      <div className="md:px-12.5 px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="mt-6 md:px-12.5 px-4">
        <h1 className="md:text-[32px] text-[20px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#000000_0%,#d1a77d_46.15%,#000000_100%)] dark:text-white mb-6">
          Hot Deal of the Day
        </h1>
        <ShowcaseProductGrid
          showcaseSlug="hot-deal"
          initialProducts={products}
          initialTotalPages={totalPages}
          cols={5}
        />
      </div>
    </div>
  );
}
