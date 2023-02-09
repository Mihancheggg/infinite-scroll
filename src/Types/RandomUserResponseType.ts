/**
 * This type represents response to a request
 */
export type RootObject = {
	results: RootObjectResults[];
	info: RootObjectInfo;
}

/**
 * This type represents users name
 */
export type RootObjectResultsName = {
	title: string;
	first: string;
	last: string;
}

/**
 * This type represents users home address
 */
export type RootObjectResultsLocationStreet = {
	number: number;
	name: string;
}

/**
 * This type represents users coordinates
 */
export type RootObjectResultsLocationCoordinates = {
	latitude: string;
	longitude: string;
}

/**
 * This type represents users timezone
 */
export type RootObjectResultsLocationTimezone = {
	offset: string;
	description: string;
}

/**
 * This type represents users location info
 */
export type RootObjectResultsLocation = {
	street: RootObjectResultsLocationStreet;
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: RootObjectResultsLocationCoordinates;
	timezone: RootObjectResultsLocationTimezone;
}

/**
 * This type represents users auth data
 */
export type RootObjectResultsLogin = {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

/**
 * This type represents users age data
 */
export type RootObjectResultsDob = {
	date: string;
	age: number;
}

/**
 * This type represents users registration data
 */
export type RootObjectResultsRegistered = {
	date: string;
	age: number;
}

/**
 * This type represents users ID data
 */
export type RootObjectResultsId = {
	name: string;
	value: string;
}

/**
 * This type represents users photos data
 */
export type RootObjectResultsPicture = {
	large: string;
	medium: string;
	thumbnail: string;
}

/**
 * This type represents information about user
 */
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

/**
 * This type represents additional information about response
 */
export type RootObjectInfo = {
	seed: string;
	results: number;
	page: number;
	version: string;
}