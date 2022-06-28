import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DesignForm from './DesignForm';
import PersonForm from './PersonForm';
import { designAdded } from './designSlice';
import { personAdded } from './peopleSlice';

function Home() {
    const dispatch = useDispatch();

    // const design = useSelector(state => state.design.entities);

    // const handleDesignSubmit = (design) => {
    //     dispatch(designAdded(design))
    // }

    const people = useSelector(state => state.people.entities);

    const handlePersonSubmit = (person) => {
        dispatch(personAdded(person))
    }

    
    return (
        <div className="home">
            <ul>
                <li>This will eventually have a settings form where app-owners can personalize their site setup.</li>
                <li>They will also have the ability to add people (household members, emoloyees, helpers depending on what type of entity is using the app.) </li>
                <DesignForm />
                <PersonForm onPersonSubmit={handlePersonSubmit} />
            </ul>

        </div>
    );
}

export default Home;