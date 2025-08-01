import NavbarData from "@/data/navbar.data"

export default function Navbar() {
  return (
    <nav className="bg-blue-500 h-16 max-w-4xl mx-auto">
      <div className="between flex-row">
        <span>Mo Mo Clothing</span>

        <ul className="flex gap-4">
           {
             NavbarData.map((item) => (
               <li key={item.id}>
                 <a href={item.path}>{item.name}</a>
               </li>
             ))
           }
        </ul>
      </div>
    </nav>
  )
}