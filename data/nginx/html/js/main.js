(function(){

	var MapHref = "https://pandorabox.io/map/#-1782.25/493.5/10";

	var ForumButton = m("a", {class:"btn btn-primary btn-block",href:"https://pandorabox.io/forum"}, "Forum");
	var HighscoreButton = m("a", {class:"btn btn-primary btn-block",href:"https://pandorabox.io/highscore"}, "Highscore");

	var MapButton = m("a", {class:"btn btn-primary btn-block",href:MapHref}, "Open map");
	var MapIframe = m("iframe", {src:MapHref, width:"100%", height:"450px", style:"border: 0px solid"});

	var Intro = m("div", {class:"card"}, [
		m("div", {class:"card-body"}, [
			m("h3", "Pandorabox minetest server"),
			m("p", "Trains, currency, monsters, space, moon, spaceships and more..."),
			ForumButton,
			HighscoreButton
		])
	]);

	var MapRow = m("div", {class:"row"}, [
		m("div", {class:"col-md-6"}, Intro),
		m("div", {class:"col-md-6"}, [MapButton, MapIframe])
	]);

	var Nav = m("nav", {class:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"}, m("a", {class:"navbar-brand", href:"#"}, "Pandorabox"));

	var Screenshots = m("div", {class:"col-md-12"}, [
		m("div", {class:"card"}, [
			m("div", {class:"card-body"}, [
				m("h4", "Screenshots"),
				m("img", {src:"img/screenshot_20180615_181459.png"}),
				m("img", {src:"img/screenshot_20180615_181414.png"}),
				m("img", {src:"img/screenshot_20180615_181421.png"}),
				m("img", {src:"img/screenshot_20180615_181441.png"}),
				m("img", {src:"img/screenshot_20180615_181519.png"}),
				m("img", {src:"img/screenshot_20180615_181728.png"}),
				m("img", {src:"img/screenshot_20180615_182026.png"}),
			])
		])
	]);


	m.render(document.getElementById("app"), [
		Nav,
		m("br"), m("br"), m("br"), m("br"),
		MapRow,
		m("br"), m("br"),
		m("div", {class:"row"}, Screenshots)
	]);


})();