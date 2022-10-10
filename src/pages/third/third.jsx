import { Outlet, useNavigate } from "react-router-dom"

const Third = () => {

    const navigate = useNavigate()

    const handleGoToChild = () => {
        navigate("child")
    }

    return (
        <>
            <h1>Third</h1>
            <button onClick={handleGoToChild}>Go to child</button>
            <Outlet/>
        </>
    )
}

export default Third