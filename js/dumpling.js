;(function() {
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
			$(".searchBarIcon").attr("src", "stylesheets/images/close_icon.png");
			$("#searchInputPushdown").removeClass().addClass("searchInputVisible");
			$("#searchInput").focus();
		}
		else {
			$(".searchBarIcon").attr("src", "stylesheets/images/search_icon.png");
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
		}
		else {
			$("#rightHalfAd").attr("src", "http://placehold.it/304x300");
		}
	};
	
	// Load the search field (pushdown for tablet and desktop)
	function loadSearchInputPushdown() {
		// clicks
		$(".searchBarIcon").click(function(evt) {
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			enableDisableSearch();
		});
		// touches
		$(".container").on("touchend", ".searchBarIcon", function(evt) {
			// prevent the 300ms click delay for touch
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
		if ($(nav).hasClass("floatingNavClosed") || $(nav).hasClass("floatingNavOpen")) {
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			if ($(".floatingNav").hasClass("floatingNavClosed")) {
				$(".floatingNav").removeClass("floatingNavClosed").addClass("floatingNavOpen");
			}
			else {
				$(".floatingNav").removeClass("floatingNavOpen").addClass("floatingNavClosed");
			}
		}
	});
	
	function kickoff() {
		var width = $(".container").width();
		enableMobileMenu(width);
		enableMobileAds(width);
		loadSocialIcons();
		loadSearchInputPushdown();
		loadSpotify(width);
	};
	
	kickoff();
	
})();