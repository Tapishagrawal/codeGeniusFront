import { Link } from "react-router-dom"


export const Button = ({ text, link, handleClick }) => {
    return (
        <Link to={link} onClick={handleClick} className="bg-indigo-500 hover:bg-indigo-600 py-3 px-4 rounded-md font-bold">{text}</Link>
    )
}
