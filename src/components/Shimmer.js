export const Shimmer = () => {
    return (
        <div className="restaurant-list">
       {
        Array(10).fill("").map((e,index) => (
            ( <div key={index} className="shimmer">
            <img />
            <h2> </h2>
            <h3> </h3>
            <h4> </h4>
        </div>)
        ))
        }

    </div>
    )
}