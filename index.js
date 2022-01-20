//because we declared the library in index.html, we now have a global variable ReactDOM with a render method. which allows us to render something on the screen
/*ReactDOM.render(<p>Hi, my name is Bob!</p>, document.getElementById("root")); */ //the firs parameter is what I want to render to the screen. the second parameter, document.getElementById, is where I want to render it.
//this "root" is the div in the body of the html file. It is the root of the entire application. It is the container for the entire website that we will build in React.

/*
ReactDOM.render(
    <ul>
        <li>Lucycan Ly</li>
        <li>Sheng Yang</li>
        <li>Pang Xiong</li>
        <li>Bruce Lee</li>
    </ul>,
document.getElementById("root")
);
*/


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


function ToDoList  () {
    return(
        <div> {/*i had to put this div here to avoid error, because of the h1 tag below. I could of put it in the other div to avoid error*/}
            <h1>To Do List</h1>
            <div className = "container"> {/*everything will be in this div for this to do list */}
                <input className = "inputField" type = "text" autoFocus/><button>+</button>
                <div className = "to-dos" id = "toDoContainer"> {/*all of the to dos will appear here */}

                </div>
            </div>

        </div>
    )
};


ReactDOM.render(
    <div>
        <Navbar />
        <ToDoList />
    </div>,
    document.getElementById("root")
);