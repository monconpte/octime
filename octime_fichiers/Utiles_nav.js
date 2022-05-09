// Procedures globales du projet
function _ECR(c,p,s){c+="";var h = c.substring(0, 50);var n = 0;switch (p){case -2147483645:n = 1;case -2147483648:if (!window.tabExtraitChaine){tabExtraitChaine = new Array();}tabExtraitChaine[h] = 1;return _EC(c,tabExtraitChaine[h],s,n);case -2147483646:n = 1;case -2147483647:if (!window.tabExtraitChaine || !(tabExtraitChaine[h])){return "\b";}(tabExtraitChaine[h])++;var sRes = _EC(c,tabExtraitChaine[h],s,n);if ("\b" == sRes){delete tabExtraitChaine[h];}return sRes;}}
function _EC(c,p,s,n){c=String(c);if ((p >= -2147483648) && (p <= -2147483645)){return _ECR(c,p,s);}var t=new Array();if(typeof(s)!=typeof(t))t[0]=s;else t=s;if (!(n == 1)){var d=0;for(var i=0;i<p-1;i++){var m=-1;var l=0;for(var j=0;j<t.length;j++){s=t[j];var k=c.indexOf(s,d);if((k>-1)&&((m<0)||(k<m))){m=k;l=s.length;}}d=m+l;if(d==-1)return(p==1?c:"\b");}var f=-1;for(var j=0;j<t.length;j++){var k=c.indexOf(t[j],d);if((k>-1)&&((f<0)||(k<f)))f=k;}if(f==-1)f=c.length;return c.substring(d,f);}else{var d = c.length;for(var i=0;i<p-1;i++){var m=-1;for(var j=0;j<t.length;j++){var k=c.lastIndexOf(t[j],d-1);if(k>m)m=k;}d=m;if (d == -1)	return (p==1?c:"\b");}var f=-1;var l=0;for(var j=0;j<t.length;j++){s=t[j];var k=c.lastIndexOf(s,d-1);if(k>f){f=k;l=s.length;}}f+=l;if (f == -1)return c.substr(0, d);return c.substr(f, d - f);}}
function UTILESNAV_INFOAJAXRETOUR(Vf_retour,Vf_id_proc){try{clWDUtil.Try();{if(clWDUtil.bComparaison(_EC(Vf_retour,2,"[ \"OK",0),"\b",true,true,false,false)){js_log("ok",clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("info_ajax_retour (id_proc: ",Vf_id_proc),")"),Vf_retour));}else {js_log("erreur",clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("info_ajax_retour (id_proc: ",Vf_id_proc),")"),Vf_retour));}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function UTILESNAV_PROCEDURENAVVIDE(Vparam1,Vparam2){if(Vparam1===void 0){Vparam1="";}if(Vparam2===void 0){Vparam2="";}try{clWDUtil.Try();{js_log("debug","procedure_nav_vide",clWDUtil.oAddition("proc n°",Vparam2),clWDUtil.oAddition("res=",Vparam1));}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function UTILESNAV_ENCOREHTML(Vf_chaine){try{clWDUtil.Try();{var Vl_chaine=clWDUtil.oConversionType(Vf_chaine,19,0,50,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("\x26").join("\x26amp;"),19,0,31,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("\x3C").join("\x26lt;"),19,0,31,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("\x3E").join("\x26gt;"),19,0,31,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("\"").join("\x26quot;"),19,0,31,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("^").join("\x26circ;"),19,0,31,0);Vl_chaine=clWDUtil.oConversionType(String(Vl_chaine).split("~").join("\x26#126;"),19,0,31,0);clWDUtil.Renvoyer(Vl_chaine);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function UTILESNAV_DATECHAINEFRNAV(Vf_dateSur8){try{clWDUtil.Try();{clWDUtil.Renvoyer(clWDUtil.oConversionType(clWDUtil.sDateVersChaine(Vf_dateSur8,"JJ/MM/AAAA",4),19,0,19,0));return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function UTILESNAV_DATECHAINETRADUITENAV(Vf_dateSur8){try{clWDUtil.Try();{clWDUtil.Renvoyer(clWDUtil.oConversionType(clWDUtil.sDateVersChaine(Vf_dateSur8,_ML15ACAFEC01CA2D91_00000000_,4),19,0,19,0));return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function nav_serialise_JSON(f_objet)
{
	return JSON.stringify(f_objet);
}
function nav_deserialise_JSON(f_chaineJSON)
{
	return JSON.parse(f_chaineJSON);
}
function js_log()
{
	// Si on n'a rien passé en paramètre
	if (!arguments.length)
		return false;

	if (['err', 'error', 'erreur'].indexOf(arguments[0]) > -1) {
		console.error.apply(console, arguments);
	} else if (['info', 'information'].indexOf(arguments[0]) > -1) {
		console.info.apply(console, arguments);
	} else if (['attention', 'warn', 'warning'].indexOf(arguments[0]) > -1) {
		console.warn.apply(console, arguments);
	} else {	
		var l_log;
		// Si on n'est pas sur IE, alors on peut mettre de la couleur :-)
		if (window.navigator.userAgent.indexOf('MSIE ') < 0 && window.navigator.userAgent.indexOf('Trident/') < 0  && window.navigator.userAgent.indexOf('Edge/') < 0) {
			// Pour les types de logs custom ( noir par défaut)
			var l_coul = 'black';
			// Types de logs gérés avec une couleur par défaut (inchangeable)
			switch (arguments[0].toLowerCase()) {
				case 'ok'	  : l_coul = "Green";		break;
				case 'debut'	  : l_coul = "OliveDrab";	break;
				case 'fin'		  : l_coul = "Orchid";		break;
			}
			l_log = ['[ %c' + arguments[0].toUpperCase() + '%c ]', 'color:'+ l_coul + ';font-weight:bold;' , 'color:black;font-weight:normal;'];
		} else {
			l_log = ['[' + arguments[0].toUpperCase() + ']'];
		}
		[].shift.apply(arguments);
		l_log.push.apply(l_log, arguments);
		// Message dans la console JavaScript de la forme "[ <type du log> ] <message>"
		if(console)
			console.log.apply(console, l_log);
	}
	return true;
}
function js_ActiveDesactiveChamp(f_champId, f_active)
{
	var l_champ = document.getElementById(f_champId);
	if(l_champ)
	{
		l_champ.disabled = !f_active;
	}
	
}

function js_qsort(array, begin, end, prop)
{
	if(end-1>begin) {
		var pivot=begin+Math.floor(Math.random()*(end-begin));
		pivot=js_partition(array, begin, end, pivot, prop);	
		js_qsort(array, begin, pivot, prop);
		js_qsort(array, pivot+1, end, prop);
	}
}
function js_partition(array, begin, end, pivot, prop)
{
	var piv=array[pivot];
	js_mySwap(array, pivot, end-1);
	var store=begin;
	var ix;
	for(ix=begin; ix<end-1; ++ix) {
		if(array[ix][prop]<=piv[prop]) {
			js_mySwap(array,store, ix);
			++store;
		}
	}
	js_mySwap(array, end-1, store);
	return store;
}
function js_mySwap(array,a, b)
{
	var tmp=array[a];
	array[a]=array[b];
	array[b]=tmp;
}
function RecupOffsetPlusLargeurHauteur(f_idchamp)
{
	var l_offset = $("#" + f_idchamp).offset();
	
	return (l_offset.left + $("#" + f_idchamp).width()) + "|" + (l_offset.top + $("#" + f_idchamp).height());
}

function ExecuteFonctionJavascript(f_fonction, f_message)
{
	console.log(f_fonction+" : "+f_message);
	window[f_fonction](f_message);
}

function ExecuteFonctionJavascriptParAdresse(f_fonction, f_message)
{
	if(f_fonction)
		f_fonction(f_message)
}

function getCaretCharacterOffsetWithin(f_element) {
	var l_caretOffset = -1;
	var l_element = document.getElementById(f_element)
	if(l_element)
	{
		
		if (typeof window.getSelection != "undefined") {
			var l_range = window.getSelection().getRangeAt(0);
			var l_preCaretRange = l_range.cloneRange();
			l_preCaretRange.selectNodeContents(l_element);
			l_preCaretRange.setEnd(l_range.endContainer, l_range.endOffset);
			l_caretOffset = l_preCaretRange.toString().length;
		} else if (typeof document.selection != "undefined" && document.selection.type != "Control") {
			var l_textRange = document.selection.createRange();
			var l_preCaretTextRange = document.body.createTextRange();
			l_preCaretTextRange.moveToElementText(l_element);
			l_preCaretTextRange.setEndPoint("EndToEnd", l_textRange);
			l_caretOffset = l_preCaretTextRange.text.length;
		}
	}
	return l_caretOffset;
}
