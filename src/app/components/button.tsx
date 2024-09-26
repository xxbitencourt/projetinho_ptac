/*
export default function Button({}){
    return <div><h1>Info 6B</h1></div>
}
*/


type ButtonProp = {
     name: string;
}

const Button: React.FC<ButtonProp> = ({name}) =>{
    return <div><h1>{name}</h1></div>
}

export default Button
