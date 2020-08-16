//
// Scripts
//

"use strict";

/* -------------------------------------------------------------------------------------- //

	Options

	Here you can customize the options for your website

// -------------------------------------------------------------------------------------- */

function modulesInit() {

	// jquery.hover3d
	$(".h3d_wrapper").hover3d({
		selector: ".h3d_card",
		sensitivity: '80'
	});

	// twentytwenty
	$("#container1").twentytwenty();

}
window.onload = modulesInit;