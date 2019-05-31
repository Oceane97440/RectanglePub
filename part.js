//<script>
 var containerARP =  document.getElementById('rectangle-video'); //var recup id
 var videoARP = document.getElementById('rectangle-video-player');
 var videoBtnReload = document.getElementById('rectangle-video-reload');
 var videoBtnLearnMore = document.getElementById('rectangle-video-learnmore');
 var videoBtnVolume = document.getElementById('rectangle-video-volume');
 var videoBtnVolumeSoundOn = document.getElementById('rectangle-video-volume').getElementsByClassName('soundon');
 var videoBtnVolumeSoundOff = document.getElementById('rectangle-video-volume').getElementsByClassName('soundoff');
 
 var minuteur;
	// Affichage de la durée de la vidéo
	videoARP.addEventListener('loadedmetadata', function() { minuteur = videoARP.duration; }); //fonction gère event click vod
	
	// Assume "video" is the video node
	var i = setInterval(function() {
		// Quand la vidéo est fini : on ferme la fenêtre
		if(videoARP.ended) { 
			document.getElementById("rectangle-video-blockend").style.display = "initial";//si la vod se termine alors bloc fin s'affiche
		} else { 
			var percent = ((videoARP.currentTime/minuteur)*100);//sinon barre progress continu
			document.getElementById("rectangle-video-progressbar").style.width = percent + '%'; //calcul de barre progress%
		}
	}, 0);

  var promise = document.querySelector('video').play(); //gère auto play

	if (promise !== undefined) {
	  promise.then(_ => {
		// Autoplay demarre!	
	  }).catch(error => {
		// Autoplay was prevented.
		// Show a "Play" button so that user can start playback. //doit avoir le bouton play
		alert('button show play');
	  });
	}


	function hasClass(element, className) { //hasclass met en var true  hasclass(recup la class dans css)
		if (element.classList) {
			return element.classList.contains(className);
		} 
		else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
		}
	}

	function addClass(element, className) { //ajout class
		if (!hasClass(element, className)) {
			if (element.classList) {
			  element.classList.add(className);
			}
			else {
			  element.className += ' ' + className;
			}
		}
	}

	function removeClass(element, className) { //supprime class css
		if (element.classList) {
			return element.classList.remove(className);
		} 
		else {
			return element.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	function toggleClass(element, className) { //ajout ou sup la class toggleclass swicth entre de class css
		
		if (hasClass(element, className)) {
			removeClass(element, className);
		} 
		else {
			addClass(element, className);
		}
	}
					//addEventListener play video
	videoARP.addEventListener("click", function () { window.open('https://www.linfo.re#click'); });	 //ouvre un onglet de redirect sur LINFO click vod
	
	videoBtnVolume.addEventListener("click", function () { //fonction qui gére event du btn volume
			
			if(hasClass(videoBtnVolume, 'soundon')) { 
				videoARP.muted = true; 
				videoARP.volume = 0; 
				 addClass(videoBtnVolume, "soundoff");  
				 removeClass(videoBtnVolume, "soundon");
			} else { 
				videoARP.muted = false;
				videoARP.volume = 1;
				toggleClass(videoBtnVolume, "soundon");
			}
			
	});	
	
	videoBtnLearnMore.addEventListener("click", function () { 
		window.open('https://www.linfo.re#click'); 
	});	

	videoBtnReload.addEventListener("click", function () { 
		toggleClass(videoBtnVolume, "soundon"); videoARP.muted = false; videoARP.volume = 1; videoARP.load(); 
		document.getElementById("rectangle-video-blockend").style.display = "none";
	});	
//</script>

<div id="demo"></div>
