import {Action} from "redux/index";
export const GET_CLIENTS = "GET_CLIENTS";
export const GET_CLIENTS_SUCCESS = "GET_CLIENTS";

export function getClients(): Action {
    return {
        type: GET_CLIENTS
    };
}
