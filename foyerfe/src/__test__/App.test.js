import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';

Enzyme.configure({adapter: new Adapter()});

import App from '../App';

const initialState = {
    favorites: {favoritesArr : []},
    soundcloud: {soundcloudLink: null},
    note: null,
};

describe('This is testing start of Virtual DOM', () => {
    it('Tests connections to login/signup routes', () => {
        const mockStore = configureStore([]);
        const mountedApp = mount(<Provider store={mockStore(initialState)}><App/></Provider>);
        expect(mountedApp.find('BrowserRouter')).toBeTruthy();
        expect(mountedApp.find('login')).toBeTruthy();
        expect(mountedApp.find('signup')).toBeTruthy();
        expect(mountedApp.find('Dashboard')).toBeTruthy();
        expect(mountedApp.contains({AuthLanding})).toBeTruthy();
    })
});