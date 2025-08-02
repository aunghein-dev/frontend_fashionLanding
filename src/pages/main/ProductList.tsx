import Card from "@/components/ui/Card"
import Products from "@/data/product.data"
export default function ProductList() {
  return (
    <div className="flex flex-row items-center justify-between gap-4">
      {
        Products.map(prod => (
          <Card key={prod.id} card={prod} />
        ))
      }
    </div>
  )
}