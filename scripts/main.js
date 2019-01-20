require.config({
	baseUrl: "./js",
	paths: {
		'skrollr' : "skrollr.min"
	},
	waitSeconds: 15
});

require(['skrollr'], function(skrollr) {
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		var s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	}
});

// $(function skrollrInit() {
//   // initialize skrollr if the window width is large enough
// 	alert('pizzarino')
//   if ($(window).width() > 767) {
// 		var s = skrollr.init({
// 			edgeStrategy: 'set',
// 			easing: {
// 				WTF: Math.random,
// 				inverted: function(p) {
// 					return 1-p;
// 				}
// 			}
// 		});
//   }
//
//   // disable skrollr if the window is resized below 768px wide
//   $(window).on('resize', function () {
//     if ($(window).width() <= 767) {
//       skrollr.init().destroy(); // skrollr.init() returns the singleton created above
//     }
//   });
// });

skrollrInit();
