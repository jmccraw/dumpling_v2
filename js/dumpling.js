/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-touch-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:v(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},p.cssanimations=function(){return E("animationName")},p.csstransforms=function(){return!!E("transform")},p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},p.csstransitions=function(){return E("transition")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e}(this,this.document);

(function() {
	"use strict";
	
	/*
	 * Load Spotify if a big enough viewport
	 * @param{Number} width The width of the container
	 */
	function loadSpotify(container) {
		if (container > 500) {
			var width = Math.floor($(".midRightHalf").width());
			var height = 80;
			if ((703 < container) && (container < 944)) {
				height = 370;
			}
			else if (container >= 944) {
				width = 304;// 448;//Math.floor($(".rightHalf").width() / 2.1);
				height = 384;
			}
			$("#spotifyElement").attr({
				//"width": width - 144,
				//"height": width - 60,
				"width": width,// - 144,
				"height": height,
				"src": "https://embed.spotify.com/?uri=spotify:user:justinmccraw:playlist:5232k8BBvXPEGODNO3mBaC"
			});
		}
		else {
			$(".midRightHalf").css("display", "none");
		}
	};
	
	// Load the Facebook icon
	function loadFacebookIcon() {
		
	};
	
	// Load the Twitter icon
	function loadTwitterIcon() {
		
	};
	
	// Load the Mail icon
	function loadMailIcon() {
		
	};
	
	// Load the RSS icon
	function loadRSSIcon() {
		
	};
	
	/*
	 * Load the different social media icons
	 * @param{String} icon A specific icon to load (optional, lowercase)
	 */
	function loadSocialIcons(icon) {
		if (!icon) {
			loadFacebookIcon();
			loadTwitterIcon();
			loadMailIcon();
			loadRSSIcon();
		}
		else if (icon === "facebook") {
			loadFacebookIcon();
		}
		else if (icon === "twitter") {
			loadTwitterIcon();
		}
		else if (icon === "mail") {
			loadMailIcon();
		}
		else if (icon === "rss") {
			loadRSSIcon();
		}
	};
		
	/*
	 * Load menu functionality depending on screen size
	 * @param{Number} width The width of the container
	 */
	function enableMobileMenu(width) {
		// functions for small-screen layouts (mobile)
		if (width < 704) {
			// close menu initially
			$(".floatingNav").addClass("floatingNavClosed");
		}
		// tablet/desktop
		else {
			$(".floatingNav").removeClass("floatingNavClosed floatingNavOpen");
		}
	};
	
	// Enable or disable the slide-down search feature
	function enableDisableSearch() {
		if ($("#searchInputPushdown").hasClass("searchInputInvisible")) {
			$(".searchBarIcon").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NUE5NkEyOEYzREFFMTExQTdBQUE1REU2RUIxOEI4OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMkRENEQ3MDhENjYxMUUyOTY0NUQ2NEUwNkNFMjIyNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMkRENEQ2RjhENjYxMUUyOTY0NUQ2NEUwNkNFMjIyNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTEzRUYxQjM5NEVFMjExOTc1MkJEMEY4QzNBNjNGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NUE5NkEyOEYzREFFMTExQTdBQUE1REU2RUIxOEI4OSIvPiA8L3JkZjpEZXNjcmlwdGlv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");
			$("#searchInputPushdown").removeClass().addClass("searchInputVisible");
			$("#searchInput").focus();
		}
		else {
			$(".searchBarIcon").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NUE5NkEyOEYzREFFMTExQTdBQUE1REU2RUIxOEI4OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGOTlCMjZFMDhBMzkxMUUyQkJBQkM2QkFFMEUwQzMyMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGOTlCMjZERjhBMzkxMUUyQkJBQkM2QkFFMEUwQzMyMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTEzRUYxQjM5NEVFMjExOTc1MkJEMEY4QzNBNjNGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NUE5NkEyOEYzREFFMTExQTdBQUE1REU2RUIxOEI4OSIvPiA8L3JkZjpEZXNjcmlwdGlv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");
			$("#searchInputPushdown").removeClass().addClass("searchInputInvisible");
			$("#searchInput").blur();
		}
	};
	
	/*
	 * Enables mobile/desktop ads
	 * @param{Number} width The width of the container
	 */
	function enableMobileAds(width) {
		if (width < 704) {
			$("#rightHalfAd").attr("src", "http://placehold.it/280x60");
			$(".articleAd300x600").addClass("articleAd300x250").removeClass("articleAd300x600");
		}
		else {
			$("#rightHalfAd").attr("src", "http://placehold.it/304x300");
			$(".articleAd300x250").addClass("articleAd300x600").removeClass("articleAd300x250");
		}
	};
	
	// Load the search field (pushdown for tablet and desktop)
	function loadSearchInputPushdown() {
		$(".header").on("click.searchClick touchend.searchTouch", ".searchBarIcon", function(evt) {
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			enableDisableSearch();
		});
	};
	
	$(window).resize(function() {
		var width = $(".container").width();
		enableMobileMenu(width);
		enableMobileAds(width);
	});
	
	// Drop down menu animation for mobile/mobile-portrait views
	$(".header").click(function(evt) {
		var nav = $(".floatingNav");
		if (nav.hasClass("floatingNavClosed") || nav.hasClass("floatingNavOpen")) {
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			if (nav.hasClass("floatingNavClosed")) {
				nav.removeClass("floatingNavClosed").addClass("floatingNavOpen");
			}
			else {
				nav.removeClass("floatingNavOpen").addClass("floatingNavClosed");
			}
		}
	});
	
	// Functions for the ModalViewer
	var ModalViewer = {
		modalContainer: $(".modalContainer"),
		modalCoverup: $(".modalCoverup"),
		/*
		 * Load a modal for vidoes, other assets
		 * @param{Object} self The clicked on element
		 * @param{String} type The type of the modal to launch
		 * @param{String} src The URL of the file to use
		 */
		launchModal: function(self, type, src) {
			ModalViewer.modalContainer.css("display", "block");
			ModalViewer.modalCoverup.css("display", "block");
			setTimeout(function() {
				ModalViewer.modalContainer.addClass("modalReveal");
				ModalViewer.modalCoverup.addClass("modalReveal");
			}, 10);
			if (type === "youtube") {
				var video = document.createElement("iframe");
				video.className = "modalContent";
				video.src = src;
				video.width = 945;
				video.height = 546;
				video.setAttribute("seamless", "true");
				video.setAttribute("frameborder", 0);
				video.setAttribute("scrolling", "no");
				ModalViewer.modalContainer.append(video);
			}
			console.log("_trackEvent", "Modal", type, self.text());
			_gaq.push(["_trackEvent", "Modal", type, self.text()]);
		},
		// Closes the modal
		closeModal: function() {
			$(".modalContent").remove();
			ModalViewer.modalContainer.removeClass("modalReveal");
			ModalViewer.modalCoverup.removeClass("modalReveal");
			setTimeout(function() {
				ModalViewer.modalContainer.css("display", "none");
				ModalViewer.modalCoverup.css("display", "none");
			}, 600);
		},
		initializeModalControls: function() {
		
			$(".container").on("click.ancillaryClick touchend.ancillaryTouch", ".ancillaryLink", function(evt) {
				if (evt.preventDefault) {
					evt.preventDefault();
				}
				var self = $(this);
				ModalViewer.launchModal(self, self.attr("data-type"), self.attr("data-src"));
			});
			
			// close the modal when you click off the modal and into the black area
			$("body").on("click.modalCoverupClick touchend.modalCoverupTouch", ".modalCoverup", function() {
				ModalViewer.closeModal();
				console.log("_trackEvent", "Modal", "Close In Black");
				_gaq.push(["_trackEvent", "Modal", "Close In Black"]);
			});
			
			$(".modalContainer").on("click.modalClose touchend.modalClose", ".modalCloseButton", function(evt) {
				if (evt.preventDefault) {
					evt.preventDefault();
				}
				ModalViewer.closeModal();
				console.log("_trackEvent", "Modal", "Close Button");
				_gaq.push(["_trackEvent", "Modal", "Close Button"]);
			});
		}
	};
	
	function init() {
		var width = $(".container").width();
		enableMobileMenu(width);
		enableMobileAds(width);
		loadSocialIcons();
		loadSearchInputPushdown();
		loadSpotify(width);
		ModalViewer.initializeModalControls();
	};
	
	init();
})();