const colors = {
	'-5': '#C62127',
	'-4': '#F0545D',
	'-3': '#F59192',
	'-2': '#F9BFC0',
	'-1': '#FCE0E3',
	'0': '#D3D3D3',
	'1': '#D1E8C5',
	'2': '#92D1B5',
	'3': '#6CBC99',
	'4': '#00AF6C',
	'5': '#00AF6C'
}

export const sentimentColorMapping = function ( score ) {
	const colorIndex = Math.round(score);
	return colors[colorIndex.toString()];
}