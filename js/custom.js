jQuery(document).ready(function() {
	
	"use strict";
	

});

$('document').ready(function(){
	var typed = new Typed('#typed', {
		strings: ["web developer", "mobile developer", "iT support"],
		backSpeed: 40,
		typeSpeed: 40,
		loop: true,
	})
})

particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":50,"density":{
				"enable":false,"value_area":3046.4829156444935}},
				"color":{"value":"#ffffff"},
				"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
				"polygon":{"nb_sides":4},"image":{"src":"","width":100,"height":100}},
				"opacity":{"value":0.37680183430339786,
				"random":false,"anim":{"enable":false,
				"speed":1,"opacity_min":0.1,"sync":false}},
				"size":{"value":4.008530152163807,"random":true,
				"anim":{"enable":false,
				"speed":43.852169464272635,
				"size_min":0.1,"sync":false}},
				"line_linked":{"enable":true,"distance":150,
				"color":"#ffffff","opacity":0.4,"width":1},
				"move":{"enable":true,"speed":15,"direction":"none","random":true,
				"straight":false,"out_mode":"out","bounce":false,
				"attract":{"enable":false,"rotateX":1200,"rotateY":1200}}},
				"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,
				"mode":"repulse"},"onclick":{"disable":true,"mode":"push"},"resize":true},
				"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
				"bubble":{"distance":1096.304236606816,"size":154.29467033725558,
				"duration":2,"opacity":8,"speed":2},"repulse":{"distance":200,
				"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
				"retina_detect":true});
				var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector
				('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;