import {Reducer, Action} from "redux";

import {GET_CLIENTS_SUCCESS} from "./actions";

interface ClientState {
    isLoading:boolean,
    error:any,
    clients:Object[]
}

const initialState: ClientState = {
    isLoading: false,
    error: null,
    clients: null
};


export const clientReducer: Reducer<ClientState> = (state = initialState, action: Action): ClientState => {
    switch(action.type) {
        case GET_CLIENTS_SUCCESS: {
        }
    }

    return state;
};
