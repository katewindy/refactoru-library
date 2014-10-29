// Some templates

// Testing spin-down-right (spin / rotate not doing anything...)

//*

var rotation_array =  [ { x: -90}, {y: -90}, {z: -90} ];

for (var i = 0; i < 5; i++) {
	$.jmpress('template', 'spin-out-' + i, {

		y: 200,
		x: -200 + i*200,
		rotate: rotation_array[i % 3],
		jmpress: 'warp-right after step'
	});
}

/*/
$.jmpress('template', 'spin-down-right', {

	children: function( idx, current_child, children) {
		return {
			y: 200,
			x: -200 + idx * 200,
			template: 'spin-down-right',
			rotateX: -90,
			jmpress: 'warp-right after step do-animated'
		};
	}
});

//*/

