import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                 alt=""
                 className="featuredImg"
                 />
                    <div className="featuredTitles">
                        <h1>Wynad</h1>
                        <h2>539</h2>
                    </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1589706951836-47e225117061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                 alt=""
                 className="featuredImg"
                 />
                    <div className="featuredTitles">
                        <h1>Rajasthan</h1>
                        <h2>639</h2>
                    </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1604800011245-fcd0a8f7c2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                 alt=""
                 className="featuredImg"
                 />
                    <div className="featuredTitles">
                        <h1>Puri</h1>
                        <h2>369</h2>
                    </div>
            </div>
        </div>
    )
}

export default Featured