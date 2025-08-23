import type { Stock } from "@/api/hooks/useStocks";
import Card from "@/components/ui/Card";

interface ProductListProps {
  products: Stock[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-[5.5rem] bg-red-600">
      {products.map((prod) => (
        <Card key={prod.groupId} {...prod} />
      ))}
    </div>
  );
}
