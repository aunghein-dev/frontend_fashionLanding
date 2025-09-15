import type { Stock } from "@/api/hooks/useStocks";
import Card from "@/components/ui/Card";

interface ProductListProps {
  products: Stock[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid gap-6
                    grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-4
                    2xl:grid-cols-5
                    px-2">
      {products.map((prod) => (
        <Card key={prod.groupId} {...prod} />
      ))}
    </div>

  );
}
