// Имеется база клиентов по типу имя - номер.

// Написать функцию, которая приведет это данные к следующему виду:

// { '333': [Vasya, Anton], 
//   '444': [Kirill, Anatoliy] }

const clients = [
	{name: 'Vasya', phone: '333'},
	{name: 'Kirill', phone: '444'},
	{name: 'Ivan', phone: '555'},
	{name: 'Anton', phone: '333'},
	{name: 'Anatoliy', phone: '444'},
	{name: 'Arseniy', phone: '666'}
];

function parsePhones (clients) {
	const res = {};

	for (const {name, phone} of clients) {
		if (!Object.prototype.hasOwnProperty.call(res, phone)) {
			res[phone] = [name]
		} else {
			res[phone].push(name);
		}
	}

	const filtedRes = Object.entries(res).filter(([key, value]) => value.length > 1);

	return Object.fromEntries(filtedRes);
}

console.log(parsePhones(clients));


// Level 2

const clients2 = [
	[
		{name: 'Vasya', phone: '333'},
		{name: 'Kirill', phone: '444'},
		{name: 'Ivan', phone: '555'},
	],
	[
		{name: 'Anton', phone: '333'},
		{name: 'Anatoliy', phone: '444'},
		{name: 'Arseniy', phone: '666'}
	]
];

function myReduce(collection, callback, init) {
	let acc = init;
	for (const item of collection) {
		acc = callback(acc, item);
	}
	return acc;
}

function parsePhones2 (clients) {
	const parsedObj = myReduce(clients.flat(), (acc, {name, phone}) => {
		if (!Object.prototype.hasOwnProperty.call(acc, phone)) {
			acc[phone] = [name];
		} else {
			acc[phone].push(name);
		}
		return acc;
	}, {});

	return Object.fromEntries(Object.entries(parsedObj).filter(([_, usrs]) => usrs.length > 1));
}

console.log(parsePhones2(clients2));