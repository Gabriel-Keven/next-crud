import Titulo from "../pages/Titulo"

interface LayoutProps{
  titulo: string
  children: string
}

export default function Layout(props){
  return(
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800
    `}>
      <div>
        <Titulo>{props.titulo}</Titulo>
        <div className="p-6">
          {props.children}
        </div>
      </div>
    </div>
  )
}
