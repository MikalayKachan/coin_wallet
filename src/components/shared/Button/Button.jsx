import React from "react"
const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} type="button" className="btn btn-secondary">Add to wallet</button>
    )
}
export default React.memo(Button)