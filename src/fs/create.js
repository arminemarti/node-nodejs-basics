const create = async () => {
    const fs = require('fs');

	const content = 'I am fresh and young.';

	fs.writeFile('fresh.txt', content, err => {
	  if (err) {
		console.error('FS operation failed.');	
	  }  
	});
	console.log('The file written successfully.');
};

create();
