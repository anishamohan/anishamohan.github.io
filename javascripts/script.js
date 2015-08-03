      $(document).ready(function () {
				$('a.nav-bar').each(function(){
					$(this).click(function(){
						$('a.nav-bar').removeClass('selected');
						$(this).addClass('selected');
					})
				});
			});
			
			var startNavBarPos=-1;
			window.onscroll=function(){
				var bar = document.getElementById('nav');
				if(startNavBarPos<0)startNavBarPos=findPosY(bar);
				if(pageYOffset>startNavBarPos){
					bar.style.position='fixed';
					bar.style.background='#666666';
					bar.style.top=0;
					document.getElementById('space').style.height='2.5em';
				}else{
					bar.style.position='absolute';
					bar.style.background='transparent';
					bar.style.top='94.1%';
					document.getElementById('space').style.height='0em';
				}
			};
			
			function findPosY(obj) {
				var curtop = 0;
				if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
					while (obj.offsetParent) {
						curtop += obj.offsetTop;
						obj = obj.offsetParent;
					}
					curtop += obj.offsetTop;
				} else if (obj.y) {
					curtop += obj.y;
				}
				return curtop;
			}

			/*
			navigator.sayswho= (function(){
				var N= navigator.appName, ua= navigator.userAgent, tem,
					M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
				if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				M = M? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
				return M.join(' ');
			})();
			console.log(navigator.sayswho);
			*/
			$(document).ready(function(){
				$(".project-header").click(function (){
					$header = $(this);
					$content = $header.next();
					$content.slideToggle(500);
				});
			});

			/*$(document).ready(function(){
				$("#resume").load("resume-html.html");
				document.getElementById("resume-html").addEventListener('click', function() {
    				$("#resume").load("resume-html.html");
				}, false);
   				document.getElementById('resume-pdf').addEventListener('click', function() {
    				$("#resume").load("resume-pdf.html");
				}, false);
			});*/
