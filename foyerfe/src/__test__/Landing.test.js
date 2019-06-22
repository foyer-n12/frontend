import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {configure, configureEnzyme, mount} from 'enzyme';
// import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';

// Enzyme.configure();

import App from '../App';

const initialState = {
    
};

describe('This is Landing', () => {
    it('Tests connection to the Store', () => {
        const mockSTore = configureStore([]);

        const mountedApp = mount(<Provider store={mockStore()}><App/></Provider>);
    })
});