import { useNavigate, useParams } from "react-router-dom"

const First = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    console.log(id)

    const handleNavigate = () => {
        navigate("/second")
    }

    return (
        <>
            <h1>First</h1>
            <button onClick={handleNavigate}>Navigate !</button>
        </>
    )
}

export default First