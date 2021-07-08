import { TokenExchange } from "../services/AuthService";

export default class Store {
	private _isAuth = false;
	
	getIsAuth(): boolean {
		return this._isAuth;
	}
	
	setIsAuth( value: boolean ) {
		this._isAuth = value;
	}
	
	async login( code: string ) {
		const response = await TokenExchange( code );

		try {
			if ( response.status === 200 ) {
				this.setIsAuth( true );
				sessionStorage.setItem( 'token', response.data.access_token );
				sessionStorage.setItem( 'tokenType', response.data.token_type );
			}
		} catch ( e ) {
			console.log(e);
		}
		return this.getIsAuth();
	}
	
	logout() {
	
	}
}