import Card from "@/components/ui/Card";

export default function ProductList({ products }: { products: typeof import("@/data/product.data").default }) {
  return (
    <div className="grid grid-cols-4 gap-y-[5.5rem]">
      {products.map(prod => (
        <Card key={prod.id} card={prod} />
      ))}
    </div>
  );
}
