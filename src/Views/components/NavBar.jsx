import './NavBar.css'

function NavBar() {
    
    return (
        <form>
            <div className="navBar">
                <div className="logo">
                    <h1>DebtFlix</h1>
                </div>
                <div className="subheaders">
                    <div className="subheader-items">
                        <h1>Movies</h1>
                    </div>
                    <div className="subheader-items">
                        <h1>TV shows</h1>
                    </div>
                    <div className="subheader-items">
                        <h1>Popular</h1>
                    </div>
                    <div className="subheader-items">
                        <h1>Recent</h1>
                    </div>
                </div>
                <button className="register">Register</button>
            </div>
        </form>
    )
}

export default NavBar