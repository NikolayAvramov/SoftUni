function filter(jsonArr, criteria) {
	let employeesArr = JSON.parse(jsonArr);
	for (let person of employeesArr) {
		if (person.hasOwnProperty("gender")) {
			console.log(person.gender);
		}
	}
	console.dir(employeesArr);
	function print() {}
}
filter(
	`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
	"gender-Female"
);
