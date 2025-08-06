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
    <div className="tracking-[0.2rem] text-gray-white">
      <ul className="flex flex-col gap-3">
        <span className="mb-3">{props.header}</span>
        {
          props.options.map(item => (
            <li key={item.id} className="text-gray-white hover:text-white font-[200]
                                         cursor-pointer transition-all text-[0.8rem]
                                         duration-200 ease-in-out">
              <a href={item.path}>{item.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}