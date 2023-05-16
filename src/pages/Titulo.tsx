export default function Titulo(props){
    return(
        <div className="flex flex-col justify-center font-bold">
            <h1 className="p-7">{props.children}</h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}