const casesRef = database.ref("cases");

casesRef.on("value", (snapshot) => {
	const casesData = snapshot.val();
	console.log(casesData); // This will log the entire "cases" object to the console
});

casesRef.on("value", (snapshot) => {
	const casesData = snapshot.val();

	for (const caseId in casesData) {
		const caseDetails = casesData[caseId];
		console.log(`Case ID: ${caseDetails.caseId}`);
	}
});
