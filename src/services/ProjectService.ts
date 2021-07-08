import { AxiosResponse } from "axios";
import { GetAllProjectsResponse } from "../models/syncResponse/getAllProjectsResponse";
import { $syncApi } from "../api/syncAPI";

export const GetAllProjects = (): Promise<AxiosResponse<GetAllProjectsResponse>> =>
	$syncApi.get<GetAllProjectsResponse, any>( "/sync", {
		data: "sync_token=*&resource_types=['filters']",
	} );