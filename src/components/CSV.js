const expenses = {
	"expense0": {
		"created": 1494073883000,
		"expenseDate": 1486800461000,
		"amount": 26.1,
		"currency": "GBP",
		"description": "Molestiae consequatur non ut et.",
		"haveReceipt": true,
		"chargeTo": "Swaniawski, Pfeffer and Wehner",
		"lastEditTime": 1494073883000
	},
	"expense1": {
		"created": 1487241650000,
		"expenseDate": 1484663489000,
		"amount": 20.3,
		"currency": "GBP",
		"description": "Suscipit alias similique alias ut tenetur dolores fuga.",
		"haveReceipt": true,
		"chargeTo": "Gorczany and Sons",
		"lastEditTime": 1487241650000
	},
	"expense2": {
		"created": 1494494018000,
		"expenseDate": 1492437315000,
		"amount": 33.34,
		"currency": "GBP",
		"description": "Dolore aspernatur et totam quaerat voluptatem culpa aut sint quod.",
		"haveReceipt": true,
		"chargeTo": "Swift - Erdman",
		"lastEditTime": 1498680060000
	},
	"expense3": {
		"created": 1494510765000,
		"expenseDate": 1484328325000,
		"amount": 42.44,
		"currency": "GBP",
		"description": "Saepe dolores delectus dicta numquam dolores voluptatem eum animi.",
		"haveReceipt": false,
		"chargeTo": "Wehner, Bartoletti and Wiegand",
		"lastEditTime": 1494510765000
	},
	"expense4": {
		"created": 1489153024000,
		"expenseDate": 1494870720000,
		"amount": 35.49,
		"currency": "GBP",
		"description": "Est ut dolore corrupti tenetur aut repudiandae fugit officia.",
		"haveReceipt": true,
		"chargeTo": "Pouros and Sons",
		"lastEditTime": 1489153024000
	}
}

function convertToCSV(obj) {
    
    const jsonObj = JSON.stringify(obj);
    const csv = this.convertToCSV(jsonObj);

    const exportedFile = 'ExpensesCSV' + '.csv' || 'export.csv';

    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, exportedFile);
    }
    else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', exportedFile);
            // link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}