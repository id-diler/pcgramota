import { AxiosResponse } from "axios";
import { $authApi } from "../api/oAuthAPI";
import { AuthResponse } from "../models/apiResponse/authResponse";

export const  TokenExchange = (
	code: string,
	client_id = process.env.REACT_APP_TODOIST_CLIENTID,
	client_secret = process.env.REACT_APP_TODOIST_CLIENT_SECRET,
	redirect_url = process.env.REACT_APP_TODOIST_URL_REDIRECT,
): Promise<AxiosResponse<AuthResponse>> => $authApi.post<AuthResponse>( "/access_token", {client_id, client_secret, code, redirect_url} );