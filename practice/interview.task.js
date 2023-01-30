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