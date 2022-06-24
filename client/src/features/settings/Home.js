import React from 'react';

function Home() {

    console.log("home is rendering")
    return (
        <div className="home">
            <ul>
                <li>This will eventually have a settings form where app-owners can personalize their site setup.</li>
                <li>They will also have the ability to add people (household members, emoloyees, helpers depending on what type of entity is using the app.) </li>
            </ul>

        </div>
    );
}

export default Home;