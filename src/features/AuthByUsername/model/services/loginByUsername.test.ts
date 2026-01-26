import { StateSchema } from "app/providers/StoreProvider"
import { loginByUsername } from "./loginByUsername"
import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true); // helper for ts


describe('loginByUsername.test', () => {

    // mock dispatch and getState for action on each test case
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn()

    });

    test('success login', async () => {
        const userData = {username: 'user', id: '1'};

        mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'user', password: 'qwerty'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('error login', async () => {

        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'user', password: 'qwerty'})

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('LoginForm.errors.invalidCreds');
    });

})