import { FC } from "react";
import { projectsProps } from "../../../services/GetDataFromAPI";


export const LeftMenu: FC<projectsProps[]> = ( projectsProps ) => {
	
	const classNames = ( ...props: string[] ) => {
		return props.filter( Boolean ).join( ' ' );
	};
	
	return (
		<nav className={ "space-y-1" } aria-label="Sidebar">
			{
				projectsProps.map( ( item ) => (
					<a key={ item.id } className={ classNames( item.shared ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md' ) }
					   aria-current={ item.shared ? 'page' : undefined }>
						<span className="truncate">{ item.name }</span>
						{ item.comment_count ? (
							<span className={ classNames( item.shared ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full' ) }>
              { item.comment_count }
            </span>
						) : null }
					</a>
				) )
			}
		</nav>
	);
};
