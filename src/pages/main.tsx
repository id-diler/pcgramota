import React, { FC } from "react";

export const Main: FC = () => {
	
	const authBtn = sessionStorage.getItem( "userToken" )
		? (
			<div className="inline-flex rounded-md shadow">
				<a href="#" className="btn-indigo">
					Get started
				</a>
			</div>
		) : (
			<div className="ml-3 inline-flex rounded-md shadow">
				<a href={`https://todoist.com/oauth/authorize?client_id=${process.env.REACT_APP_TODOIST_CLIENTID}&scope=task:add,data:read_write,data:delete&state=${process.env.REACT_APP_TODOIST_STATE_SECRET_STRING}`} className="btn-white">
					Log-in
				</a>
			</div>
		);
	
	return (
		<div className="bg-gray-50">
			<div className="container-max-1280">
				<h2 className="h2-gray-900">
					<span className="block">Ready to dive in?</span>
					<span className="block text-indigo-600">Start your free trial today.</span>
				</h2>
				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
					{ authBtn }
				</div>
			</div>
		</div>
	);
	
};