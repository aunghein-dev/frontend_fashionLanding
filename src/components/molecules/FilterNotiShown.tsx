export default function FilterNotiShown() {
  return (
    <div className="cursor-pointer relative text-sm">
      <span className="text-gray-400">Filter by</span>
      <span className="absolute -top-0.5 -right-3 w-2 h-2 bg-blue-800 rounded-full
                       shadow-sm"></span>
    </div>
  )
}