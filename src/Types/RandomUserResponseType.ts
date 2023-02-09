export type RootObject = {
	results: RootObjectResults[];
	info: RootObjectInfo;
}
export type RootObjectResultsName = {
	title: string;
	first: string;
	last: string;
}
export type RootObjectResultsLocationStreet = {
	number: number;
	name: string;
}
export type RootObjectResultsLocationCoordinates = {
	latitude: string;
	longitude: string;
}
export type RootObjectResultsLocationTimezone = {
	offset: string;
	description: string;
}
export type RootObjectResultsLocation = {
	street: RootObjectResultsLocationStreet;
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: RootObjectResultsLocationCoordinates;
	timezone: RootObjectResultsLocationTimezone;
}
export type RootObjectResultsLogin = {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}
export type RootObjectResultsDob = {
	date: string;
	age: number;
}
export type RootObjectResultsRegistered = {
	date: string;
	age: number;
}
export type RootObjectResultsId = {
	name: string;
	value: string;
}
export type RootObjectResultsPicture = {
	large: string;
	medium: string;
	thumbnail: string;
}
export type RootObjectResults = {
	gender: string;
	name: RootObjectResultsName;
	location: RootObjectResultsLocation;
	email: string;
	login: RootObjectResultsLogin;
	dob: RootObjectResultsDob;
	registered: RootObjectResultsRegistered;
	phone: string;
	cell: string;
	id: RootObjectResultsId;
	picture: RootObjectResultsPicture;
	nat: string;
}
export type RootObjectInfo = {
	seed: string;
	results: number;
	page: number;
	version: string;
}