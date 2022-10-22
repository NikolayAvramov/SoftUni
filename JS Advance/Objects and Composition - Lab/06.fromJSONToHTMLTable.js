function fromJSONToHTML(json) {
	let parse = JSON.parse(json);
	let keyRow = Object.keys(parse[0]);
	let values = parse.map((obj) => Object.values(obj));
	let result = "<table>\n";
	header(keyRow);
	appValues(values);
	function header(keyRow) {
		result += "    <tr>";
		for (let cowName of keyRow) {
			result += `<th>${escape(cowName)}</th>`;
		}
		result += "</tr>\n";
	}
	function appValues(values) {
		for (let value of values) {
			result += "    <tr>";
			for (let i = 0; i < value.length; i++) {
				result += `<td>${escape(value[i])}</td>`;
			}
			result += "</tr>\n";
		}
	}
	function escape(value) {
		return value
			.toString()
			.replace("&", "&amp;")
			.replace("<", "&lt;")
			.replace(">", "&gt;")
			.replace('"', "&quot;")
			.replace("'", "&#39;")
			.replace("/", "&#x2F;");
	}
	result += "</table>";
	console.log(result);
}

fromJSONToHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
