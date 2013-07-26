
/*
	CREATE SELF-PROMOTIONAL BADGE
		- ALSO INSERT ASSOCIATED FOXYBOX AND CONTENT
*/

var HireUs = {};

(function() { "use strict";
	
	HireUs = {
		promoText: 	"<h1>Hire Us</h1>" +
		            "<a href=\"https://github.com/denno-secqtinstien\" target=_blank><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 9999\" src=\"check/hire-us/forkme_right_darkblue.png\" alt=\"Fork me on GitHub\"></a>" +
					"<p class=\"hire-intro\">Do you need a freelance HTML5 developer/ Software Testing Professional ? We create elegant web-apps and websites with a keen artistic sense; bringing your ideas to life!</p>" +
					"<p>Our work has been featured in the Famous Museums of Modern Arts, used in schools, and enjoyed being the most popular link on wordpress, Delicious, Digg, and others. Creating intuitive applications is our job, and we love it!</p>" +
					"<h2>Examples of our work include:</h2>" +
					"<ul>" +
						"<li><a href=\"http://erlsindia.co.in/erlsindex.aspx\" target=_blank>Erls Corporation</a></li>" + 
						"<li><a href=\"http://users8.jabry.com/dsfoundation/\" target=_blank>D S Foundation</a></li>" +
						"<li><a href=\"http://erlsindia.co.in/corporate/cprofile.aspx\" target=_blank>Erls Profile</a></li>" +
						"<li><a href=\"http://dennosecqtinstien.wordpress.com/\" target=_blank>D S F Solutions</a></li>" +
						"<li><a href=\"http://dsfoundation.wordpress.com/\" target=_blank>D S F Blogs</a></li>" +
						"<li><a href=\"http://doctorx.erlsindia.co.in/\" target=_blank>Doctor.co.in</a></li>" +
						
						"<li><a href=\"http://chatme.erlsindia.co.in/\" target=_blank>Chat with Doctor</a></li>" +
						"<li><a href=\"http://dashboardx.erlsindia.co.in/\" target=_blank>DashboardX</a></li>" +
						"<li><a href=\"http://dsf.erlsindia.co.in/\" target=_blank>Denno Secqtinstien Foundation</a></li>" +
						"<li><a href=\"http://shop.erlsindia.co.in/\" target=_blank>Shop from Erls</a></li>" +
						"<li><a href=\"http://issues.erlsindia.co.in/\" target=_blank>File a Issue</a></li>" +
						"<li><a href=\"http://Jukebox.erlsindia.co.in/\" target=_blank>JukeBox Music</a></li>" +
						"<li><a href=\"http://erlsians.erlsindia.co.in/\" target=_blank>Meet Erlsians</a></li>" +
						"<li><a href=\"http://career.erlsindia.co.in/\" target=_blank>Erls Career</a></li>" +
						"<li><a href=\"http://blogs.erlsindia.co.in/\" target=_blank>Follow Our Blogs</a></li>" +
						"<li><a href=\"http://alphabet.erlsindia.co.in/\" target=_blank>Alphabet Game</a></li>" +
						"<li><a href=\"http://letter.erlsindia.co.in/\" target=_blank>letters Game</a></li>" +
						
						"<li><a href=\"http://erls.erlsindia.co.in/\" target=_blank>Erls Interior [Coming Soon]</a></li>" +
						"<li><a href=\"http://hugme.erlsindia.co.in/\" target=_blank>HugMe [Coming Soon]</a></li>" +
						"<li><a href=\"http://escalate.erlsindia.co.in/\" target=_blank>Escalate [Coming Soon]</a></li>" +
					"<br class=\"hire-clear\"></ul>" +
					"<a href=\"mailto:erlsindia@erlsindia.co.in\" target=\"_blank\" class=\"hire-contact\"><span class=\"hire-inner\"></span></a>",
		
		init: function(placement) {
			var head = document.getElementsByTagName("head")[0];
			var css = document.createElement("link");
			css.rel = "stylesheet";
			css.type = "text/css";
			css.media = "screen";
			css.href = "/check/hire-us/hire-us.css";
			head.appendChild(css);
			placement = (typeof placement !== 'undefined') ? placement : 'tl';
			// insert link into page
			var link = document.createElement('a');
			link.setAttribute('id', 'hire-us-link');
			link.setAttribute('class', placement);
			document.body.appendChild(link);
			// insert foxybox
			var overlayBG = document.createElement('div');
			overlayBG.setAttribute('id', 'hire-us-bg');
			document.body.appendChild(overlayBG);
			// insert content
			var content = document.createElement('div');
			content.setAttribute('id', 'hire-us-content');
			content.innerHTML = this.promoText;
			overlayBG.appendChild(content);
			// initiate click events
			link.onclick = this.toggleOverlay;
			content.onclick = this.stopPropagation;
			overlayBG.onclick = this.toggleOverlay;
		},
		
		toggleOverlay: function() {
			var bg = document.getElementById('hire-us-bg'),
				current = bg.className;
			bg.className = (current === 'visible') ? '' : 'visible';
		},

		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			} else { // <= IE8
				event.cancelBubble = true;
			}
			return root;
		},
		
		boot: function() {
			// HireUs.init('tr');
			HireUs.init('br');
		}
	}

})();

if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('load', HireUs.boot, false);
} else if(typeof document.addEventListener != 'undefined') {
    document.addEventListener('load', HireUs.boot, false);
} else if(typeof window.attachEvent != 'undefined') {
    window.attachEvent('onload', HireUs.boot);
}