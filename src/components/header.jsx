import React from 'react';

const Header = () => {
    return (
        <div class="container-fluid text-center bg-dark">
            <div class="row justify-content-center align-items-center">
                <div class="col p-2">
                    <img class="img-fluid" src='https://cdn-icons-png.flaticon.com/512/4345/4345800.png' width={75} alt='toDoLogo'></img>
                    <span class="h4 text-white"> To-Do Tasks</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
