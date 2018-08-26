/*
snippet from dataset
    {
      "body": "Aenean id massa ex. Curabitur euismod erat scelerisque nibh ornare ultricies.",
      "city": "Houston",
      "company": "Apple",
      "country": "United States of America",
      "id": 1,
      "relevance_score": 0.99,
      "sector": "Technology",
      "sentiment_score": 1.05,
      "time_stamp": "7/30/2018 17:12:57"
    } 

sample Graph
	data = [
		{x: 0, y: 8},
		{x: 1, y: 2},
		{x: 2, y: 0}
	]
*/

/* Helper Function */ 
const getPlotPoints = function (plotData, xIsOrdinal) {
	let returnValue = [];


	for (let index in plotData) {
		returnValue.push( { x: ((xIsOrdinal)? index.toString() : (index * 1)) , y: plotData[index] });
	}

	return returnValue;
}



export const getTotals = function (data, datafield) {
	let i = 0;
	let returnValue = [];
	let value;

	for(i = 0; i < data.length; i++) {
		value = data[i][datafield];
		returnValue[value] = (returnValue[value]) ? returnValue[value]+1 : 1; 
	}
	return returnValue;
}

export const getSentimentPlotPoints = function (plotData) {
	const returnValue = getPlotPoints(plotData, false);
	return returnValue.sort((a,b) => { return (a.x < b.x)});
}

export const getRelevancePlotPoints = function (plotData) {
	const returnValue = getPlotPoints(plotData, false);
	return returnValue.sort((a,b) => { return (a.x < b.x)});

}

export const getCompanyPlotPoints = function (plotData) {
	let returnValue = getPlotPoints(plotData, true);
	returnValue = returnValue.sort((a,b) => { return (a.y < b.y)});
	return returnValue;
}

export const getCityPlotPoints = function (plotData) {
	let returnValue = getPlotPoints(plotData, true);
	returnValue = returnValue.sort((a,b) => { return (a.y < b.y)});
	return returnValue;
}

export const getCountryPlotPoints = function (plotData) {
	let returnValue = getPlotPoints(plotData, true);
	returnValue = returnValue.sort((a,b) => { return (a.y < b.y)});
	return returnValue;
}

export const getSectorPlotPoints = function (plotData) {
	let returnValue = getPlotPoints(plotData, true);
	returnValue = returnValue.sort((a,b) => { return (a.y < b.y)});
	return returnValue;
}