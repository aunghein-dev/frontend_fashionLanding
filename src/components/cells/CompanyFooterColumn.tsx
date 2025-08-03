interface CompanyRoute{
  id: number,
  name: string,
  path: string
}

interface Props{
  header: string,
  options: CompanyRoute[]
}
export default function CompanyFooterColumn( props: Props ){
  return (
    <div>
      <ul className="flex flex-col gap-3">
        <span className="mb-3 text-[1.1rem]">{props.header}</span>
        {
          props.options.map(item => (
            <li key={item.id} className="text-gray-300/70 hover:text-white
                                           cursor-pointer transition-all 
                                           duration-200 ease-in-out">
              <a href={item.path}>{item.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}