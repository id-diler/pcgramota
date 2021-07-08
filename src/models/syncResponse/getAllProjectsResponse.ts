export interface GetAllProjectsResponse {
	"projects": [
		{
			"is_archived": number,
			"color": number,
			"shared": boolean,
			"inbox_project": boolean,
			"id": number,
			"collapsed": number,
			"child_order": number,
			"name": string,
			"is_deleted": number,
			"parent_id": number
		}
	],
	"full_sync": boolean,
	"temp_id_mapping": {},
	"sync_token": string
}