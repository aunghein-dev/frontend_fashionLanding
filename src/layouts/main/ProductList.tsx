
import Card from "@/components/ui/Card"
import Products from "@/data/product.data"
export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-y-[5.5rem]">
      {
        Products.map(prod => (
          <Card key={prod.id} card={prod} />
        ))
      }
    </div>
  )
}