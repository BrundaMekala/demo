export class User {

	id: number;
	cName: string;
	cDescription: string;
	email: string;
	cAddress: {
		cBuildingNo: string;
		cLocation: string;
		cCity: string;
		cState: string;
		cPin: string;
	};
	gender: string;
	cdate: string;

	constructor(values: Object = {}) {
		//Constructor initialization
		Object.assign(this, values);
	}

}
