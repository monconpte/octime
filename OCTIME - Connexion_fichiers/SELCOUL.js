// Procedures globales du projet
function SELCOUL_LOD(event){try{clWDUtil.Try();{SELCOUL_gp_listeCouleur=clWDTableau.tabCreeTableau([0],"",function(){return clWDUtil.oConversionType(arguments[0],19,0,50,0);},["#660000","#880000","#AA0000","#DD0000","#FF0000","#FF4444","#FF8888","#FFAAAA","#006600","#008800","#00AA00","#00DD00","#00FF00","#44FF44","#88FF88","#AAFFAA","#000066","#000088","#0000AA","#0000DD","#0000FF","#4444FF","#8888FF","#AAAAFF","#006666","#008888","#00AAAA","#00DDDD","#00FFFF","#44FFFF","#88FFFF","#AAFFFF","#660066","#880088","#AA00AA","#DD00DD","#FF00FF","#FF44FF","#FF88FF","#FFAAFF","#666600","#888800","#AAAA00","#DDDD00","#FFFF00","#FFFF44","#FFFF88","#FFFFAA","#000000","#333333","#555555","#777777","#AAAAAA","#CCCCCC","#EEEEEE","#FFFFFF"],false);}}catch(_E){clWDUtil.xbCatchThrow(_E,event);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function SELCOUL_RECUPREPWEBNAV(){try{clWDUtil.Try();{clWDUtil.Renvoyer(gp_repertoire_web);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELCOUL_RECUPLISTECOULFAV(){try{clWDUtil.Try();{clWDUtil.Renvoyer(gp_listeCoulFav);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELCOUL_ENVOICOULEURFAVORITESERVEUR(Vl_couleurs){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteSynchrone20("Communes.ModifiListeCouleurFavoriteServ","",0,Vl_couleurs);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function InitChampCouleur(f_alias, f_defautVisible, f_retourModif, f_actif, f_infoBulle)
{
	var l_debutBG = ""
	var l_champ = $("#"+f_alias);
	var l_list = l_champ.val().split(";");
	
	var l_div = document.createElement("div");
	l_div.id = f_alias+ "CELLULE";
	l_div.style.border = "1px solid #D2D2D2";
	l_div.style.height = "19px";
	l_div.style.lineHeight = "19px";
	l_div.style.whiteSpace = "nowrap";
	l_div.style.paddingLeft = "12px";
	l_div.title = f_infoBulle;
	
	var l_p = document.createElement("p");
	l_p.style.fontSize = "11px";
	l_p.style.color = "#787C80";
	l_p.style.fontFamily = "'Open Sans', Arial, sans-serif";
	l_p.innerHTML = GNAV_DICTIONNAIRENAV("DEF");
	
	l_div.setAttribute("data-retourModif", f_retourModif);
	
	if(f_actif)
	{
		l_div.style.cursor = "pointer";
		l_div.onclick = AfficheSelecteurCouleur;
		l_debutBG = "url('/"+SELCOUL_RECUPREPWEBNAV()+"/ext/picto-couleur/Picto-Palette-Loupe.png') right center no-repeat,";
	}
	
	if(f_defautVisible)
	{
		l_div.setAttribute("data-defaut","O");
		if(l_list[0]=="#000000")
		{
			l_p.style.display="block";
			l_div.style.background = l_debutBG + l_list[1];
		}
		else
		{
			l_p.style.display="none";
			l_div.style.background = l_debutBG + l_list[0];
		}
	}
	else
	{
		l_div.setAttribute("data-defaut","N");
		l_p.style.display="none";
		l_div.style.background = l_debutBG + l_list[0];
	}
	
	l_div.appendChild(l_p);
	l_champ.hide().parent().append(l_div);
}

function AfficheSelecteurCouleur(f_evt)
{
	var l_pasHSV
	var l_idchamp = f_evt.currentTarget.id.substring(0,f_evt.currentTarget.id.length - 7);
	var l_champ = $("#"+l_idchamp);
	var l_list = l_champ.val().split(";");

	var l_position = $(f_evt.currentTarget).offset();
	
	if(l_position.top + 336 > $(window).height())
	{
		l_position.top = $(window).height() - 336
		if(l_position.top < 0)
			l_position.top = 0
	}
	if(l_position.left + 532 > $(window).width())
	{
		l_position.left = $(window).width() - 532
		if(l_position.left < 0)
			l_position.left = 0
	}
	
	if($("#CHAMPSELCOUL").length)
	{
		$("#CHAMPSELCOUL").css(l_position).show();
		l_pasHSV = false;
	}
	else
	{
		var l_divcoul = document.createElement("div");
		l_divcoul.id = "CHAMPSELCOUL";
		l_divcoul.style.position = "absolute";
		l_divcoul.style.top = l_position.top + "px";
		l_divcoul.style.left = l_position.left + "px";
		l_divcoul.style.width = "530px";
		l_divcoul.style.height = "334px";
		l_divcoul.style.border = "1px solid #D2D2D2";
		l_divcoul.style.background = "#ECF0F4";
		l_divcoul.style.fontFamily = '"Open Sans", Arial, sans-serif';
		l_divcoul.style.cursor = "default";
		l_divcoul.style.zIndex = "999994";
		l_divcoul.onclick = ClickOnChampSelCoul;
		l_divcoul.appendChild(CreeTitreSelecteurCouleur());
		l_divcoul.appendChild(CreeDivSelCoul());
		l_divcoul.appendChild(CreeDivRGB());
		l_divcoul.appendChild(CreeDivVisuCoul());
		l_divcoul.appendChild(CreeBoutonSelCoul());
		l_divcoul.appendChild(CreeSelecteurDefaut());
		l_divcoul.appendChild(CreeEditeurHSV());
		l_divcoul.appendChild(CreeDivFavoriCoul());
		l_divcoul.appendChild(CreeDivMovDND());
		
		$("body").children().first().append(l_divcoul);
		init_spectrum("EditeurHSV",l_list[0]);
		$("#CHAMPSELCOUL").css("-moz-user-select","-moz-none").css("-webkit-user-select","none").css("-khtml-user-select","none").css("-o-user-select","none").css("user-select","none")
		l_pasHSV = true;
	}
	
	if(f_evt.currentTarget.getAttribute('data-defaut') == "O")
	{
		$("#DivVisuCoulSelCoul").children().css("background-color", l_list[1])
		if(l_list[0] == "#000000")
			$("#SelecteurDefautCoul").show().children("input").prop('checked', true);
		else
			$("#SelecteurDefautCoul").show().children("input").prop('checked', false);
	}
	else
		$("#SelecteurDefautCoul").hide();
	
	$("#CHAMPSELCOUL").attr("data-idchamp", l_idchamp);
	$(window).on("click",FermeChampSelCoul);
	
	ModifiCouleur(l_list[0], l_pasHSV);
	
	f_evt.stopPropagation();
}
function ClickOnChampSelCoul(f_evt)
{
	f_evt.stopPropagation();
}

function FermeChampSelCoul()
{
	$("#CHAMPSELCOUL").hide();
	$(window).off("click", FermeChampSelCoul);
}

function CreeDivSelCoul()
{
	var l_div = document.createElement("div");
	
	l_div.style.position = "absolute";
	l_div.style.top = "60px";
	l_div.style.left = "29px";
	l_div.style.width = "178px"; 
	l_div.style.height = "156px";
	l_div.style.background = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_div.style.overflowY = "auto";
	
	for(i=0;i<SELCOUL_gp_listeCouleur.length;i++)
		l_div.appendChild(CreeDivCoul(SELCOUL_gp_listeCouleur[i]));
	
	return l_div;
}

function CreeDivCoul(f_coul)
{
	var l_div = document.createElement("div");
	l_div.style.cssFloat = "left";
	l_div.style.width = "20px"; 
	l_div.style.height = "20px";
	l_div.style.margin = "2px 0px 0px 2px";
	l_div.style.background = f_coul;
	l_div.style.cursor = "pointer";
	l_div.onclick = ClickOnCoul;
	l_div.innerHTML = "&nbsp;"
	
	return l_div;
}

function ClickOnCoul(f_evt)
{
	ModifiCouleur(ConversionCouleurFoncRGBVersCharp(f_evt.currentTarget.style.background));
}

function CreeFlecheHaut(f_top, f_left)
{
	var canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.top = f_top + "px";
	canvas.style.left = f_left + "px";
	canvas.style.width = "9px"; 
	canvas.style.height = "7px";
	canvas.style.cursor = "pointer";
	canvas.onclick = OnClickFlecheHautRGB;
	
	var context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
		return;
	}
	context.beginPath();
	context.strokeStyle = "#505050";
	context.fillStyle = "#505050";
	context.moveTo(0, 150);
	context.lineTo(150, 0);
	context.lineTo(300, 150);
	context.lineTo(0, 150);
	context.fill();
	context.closePath();
	
	return canvas;
}

function CreeFlecheBas(f_top, f_left)
{
	var canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.top = f_top + "px";
	canvas.style.left = f_left + "px";
	canvas.style.width = "9px"; 
	canvas.style.height = "7px";
	canvas.style.cursor = "pointer";
	canvas.onclick = OnClickFlecheBasRGB;
	
	var context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
		return;
	}
	context.beginPath();
	context.strokeStyle = "#505050";
	context.fillStyle = "#505050";
	context.moveTo(0, 0);
	context.lineTo(150, 150);
	context.lineTo(300, 0);
	context.lineTo(0, 0);
	context.fill();
	context.closePath();
	
	return canvas;
}

function CreeDivRGB()
{
	var l_div = document.createElement("div");
	l_div.style.position = "absolute";
	l_div.style.top = "69px";
	l_div.style.left = "229px";
	l_div.style.fontSize = "15px";
	l_div.appendChild(CreeSelecUneCoulRGB("SelctionCouleurRouge", "R :",0,0));
	l_div.appendChild(CreeSelecUneCoulRGB("SelctionCouleurVert", "V :",60,0));
	l_div.appendChild(CreeSelecUneCoulRGB("SelctionCouleurBleu", "B :",120,0));
	return l_div;
}

function CreeSelecUneCoulRGB(f_id, f_lib, f_top, f_left)
{
	var l_div = document.createElement("div");
	l_div.style.position = "absolute";
	l_div.style.top = f_top + "px";
	l_div.style.left = f_left + "px";
	l_div.appendChild(CreeParaLib(f_lib));
	l_div.appendChild(CreeFormulaireCoul(f_id));
	l_div.appendChild(CreeFlecheHaut(1,70));
	l_div.appendChild(CreeFlecheBas(13,70));
	return l_div;
}

function CreeParaLib(f_lib)
{
	var l_para = document.createElement("p");
	l_para.style.width = "21px";
	l_para.innerHTML = f_lib;
	return l_para;
}

function CreeFormulaireCoul(f_id)
{
	var l_form = document.createElement("input");
	l_form.classList.add("S003-CHAMP-TEXT");
	l_form.classList.add("padding");
	l_form.maxLength = 3;
	l_form.style.position = "absolute";
	l_form.style.top = "0px";
	l_form.style.left = "23px";
	l_form.id = f_id;
	l_form.style.width = "40px";
	l_form.onkeypress = VerifToucheFormCoul;
	l_form.onblur = SortieChampFormCoul;
	
	return l_form;
}
function ModifiRGB(f_rouge,f_Vert,F_Bleu)
{
	$("#SelctionCouleurRouge").val(parseInt(f_rouge));
	$("#SelctionCouleurVert").val(parseInt(f_Vert));
	$("#SelctionCouleurBleu").val(parseInt(F_Bleu));
}
function CreeDivVisuCoul()
{
	var l_div = document.createElement("div");
	l_div.style.position = "absolute";
	l_div.style.top = "292px";
	l_div.style.left = "230px";
	l_div.style.height = "22px";
	l_div.style.lineHeight = "22px";
	l_div.style.whiteSpace = "nowrap";
	
	var l_p = document.createElement("p");
	l_p.style.width = "165px";
	l_p.style.fontSize = "13px";
	l_p.innerHTML = GNAV_DICTIONNAIRENAV("CSEL");
	
	var l_div2 = document.createElement("div");
	l_div2.id = "DivVisuCoulSelCoul";
	l_div2.style.position = "absolute";
	l_div2.style.top = "0px";
	l_div2.style.left = "130px";
	l_div2.style.width = "45px"; 
	l_div2.style.height = "20px";
	l_div2.style.border = "1px solid #D2D2D2";
	l_div2.style.lineHeight = "20px";
	l_div2.style.whiteSpace = "nowrap";
	l_div2.onmousedown = DebutDNDCoul;
	
	var l_p2 = document.createElement("p");
	l_p2.style.display = "none";
	l_p2.style.fontSize = "13px";
	l_p2.style.backgroundColor = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_p2.innerHTML = GNAV_DICTIONNAIRENAV("DEF");
	
	l_div2.appendChild(l_p2);
	l_div.appendChild(l_p);
	l_div.appendChild(l_div2);
	
	return l_div;
}

function ModifiCouleur(f_couleur,f_pasHSV) //couleur au format #000000 a #FFFFFF
{
	if(f_couleur == "#000000" && $("#SelecteurDefautCoul").css("display") == "block")
	{
		$("#SelecteurDefautCoul").children("input").prop('checked', true);
		$("#DivVisuCoulSelCoul").css("background-color", f_couleur).children().show();
	}
	else
	{
		$("#SelecteurDefautCoul").children("input").prop('checked', false);
		$("#DivVisuCoulSelCoul").css("background-color", f_couleur).children().hide();
	}
	
	if(typeof f_pasHSV == 'undefined' || f_pasHSV == false)
		$("#EditeurHSV").spectrum("set", f_couleur);
		
	ModifiRGB(parseInt(f_couleur.substring(1,3), 16), parseInt(f_couleur.substring(3,5), 16), parseInt(f_couleur.substring(5,7), 16));
}
function CreeBoutonSelCoul()
{
	var l_bouton = document.createElement("div");
	l_bouton.classList.add("S100-PETIT-BOUTON");
	l_bouton.style.position = "absolute";
	l_bouton.style.top = "291px";
	l_bouton.style.left = "413px";
	l_bouton.style.width = "90px";
	l_bouton.style.height = "22px";
	l_bouton.style.paddingTop = "3px";
	l_bouton.style.cursor = "pointer";
	l_bouton.innerHTML = GNAV_DICTIONNAIRENAV("VAL");
	l_bouton.onclick = ClickOnBoutonSelCoul;
	return l_bouton;
}
function ClickOnBoutonSelCoul()
{
	var l_modif = false;
	var l_couleur = ConversionCouleurFoncRGBVersCharp($("#DivVisuCoulSelCoul").css("background-color"));
	var l_champ = $("#CHAMPSELCOUL").attr("data-idchamp");
	var l_retourModif = $("#"+ l_champ + "CELLULE").attr("data-retourModif");
	
	var l_list = $("#" + l_champ).val().split(";");
	
	if(l_list[0] != l_couleur)
		l_modif = true;
		
	$("#" + l_champ).val(l_couleur + ";" + l_list[1]);
	var l_champCel = $("#" + l_champ + "CELLULE")
	if(l_couleur == "#000000" && $("#SelecteurDefautCoul").css("display") == "block")
	{
		l_champCel.css("background-color",l_list[1]).children("p").show();
	}
	else
	{
		l_champCel.css("background-color",l_couleur).children("p").hide();
	}
	FermeChampSelCoul();
	
	if(l_modif && l_retourModif != "")
	{
		window[l_retourModif](l_couleur, l_champ);
	}
	
}

function ConversionCouleurFoncRGBVersCharp(f_coulRGB)
{
	var tab = f_coulRGB.substring(4,f_coulRGB.length - 1).split(", ");
	var rouge = "0" + parseInt(tab[0]).toString(16);
	var vert = "0" + parseInt(tab[1]).toString(16);
	var bleu = "0" + parseInt(tab[2]).toString(16);
	return ("#" + rouge.substr(rouge.length - 2) + vert.substr(vert.length - 2) + bleu.substr(bleu.length - 2)).toUpperCase();
}

function OnClickFlecheHautRGB(f_evt)
{
	l_champForm = f_evt.currentTarget.parentNode.childNodes[1]
	if(f_evt.ctrlKey || f_evt.metaKey)
		l_val = parseInt(l_champForm.value) + 10;
	else
		l_val = parseInt(l_champForm.value) + 1;
		
	if(l_val<0 || isNaN(l_val))
		l_val=0;
	else if(l_val>255)
		l_val=255;
	
	l_champForm.value = l_val;
	AppliqueValeurRGB()
}
function OnClickFlecheBasRGB(f_evt)
{
	l_champForm = f_evt.currentTarget.parentNode.childNodes[1]
	if(f_evt.ctrlKey || f_evt.metaKey)
		l_val = parseInt(l_champForm.value) - 10;
	else
		l_val = parseInt(l_champForm.value) - 1;
	
	if(l_val<0 || isNaN(l_val))
		l_val=0;
	else if(l_val>255)
		l_val=255;
	
	l_champForm.value = l_val;
	AppliqueValeurRGB()
}
function AppliqueValeurRGB()
{
	var l_coul = "rgb(" +  parseInt($("#SelctionCouleurRouge").val())+ ", " + parseInt($("#SelctionCouleurVert").val())+ ", " +  parseInt($("#SelctionCouleurBleu").val()) + ")";
	l_coul = ModifiCouleur(ConversionCouleurFoncRGBVersCharp(l_coul));
	
}
function VerifToucheFormCoul(f_evt)
{
	if(f_evt.which < 48 || f_evt.which > 57)
		return false;

	return true;
}
function SortieChampFormCoul(f_evt)
{
	f_valeur = parseInt(f_evt.target.value);
	if(f_valeur<0 || isNaN(f_valeur))
		f_valeur=0;
	else if(f_valeur>255)
		f_valeur=255;
	
	f_evt.target.value = f_valeur;
	
	AppliqueValeurRGB();
}
function CreeSelecteurDefaut()
{
	var l_div = document.createElement("div");
	l_div.id = "SelecteurDefautCoul";
	l_div.style.position = "absolute";
	l_div.style.top = "293px";
	l_div.style.left = "32px";
	
	
	var l_input = document.createElement("input");
	l_input.id = "SelecteurDefautCoulChechbox";
	l_input.style.cssFloat = "left";
	l_input.style.marginTop = "3px";
	l_input.type = "checkbox";
	l_input.onchange  = ChangementEtatCouleurParDefaut;
	
	
	var l_lib = document.createElement("label");
	l_lib.setAttribute("for", "SelecteurDefautCoulChechbox");
	l_lib.style.fontSize = "13px";
	l_lib.style.cssFloat = "left";
	l_lib.style.margin = "0px 0px 0px 3px";
	l_lib.innerHTML = GNAV_DICTIONNAIRENAV("CDEF"); //"Couleur par défaut";
	
	l_div.appendChild(l_input);
	l_div.appendChild(l_lib);
	return l_div;
}

function CreeTitreSelecteurCouleur()
{
	var l_div = document.createElement("div");
	l_div.classList.add("S901-TITRE");
	l_div.style.textAlign = "center";
	l_div.style.marginTop = "20px";
//	l_div.style.color = "#008DDC";
//	l_div.style.fontSize = "14px";
	l_div.style.height = "30px";
	l_div.style.lineHeight = "30px";
	l_div.innerHTML=GNAV_DICTIONNAIRENAV("CCOUL");
	return l_div;
}

function ChangementEtatCouleurParDefaut(f_evt)
{
	if(f_evt.currentTarget.checked)
		ModifiCouleur("#000000");
}

function CreeDivFavoriCoul()
{
	var l_div = document.createElement("div");
	
	l_div.style.position = "absolute";
	l_div.style.top = "220px";
	l_div.style.left = "29px";
	
	var l_p = document.createElement("p");
	l_p.style.fontSize = "13px";
	l_p.innerHTML = GNAV_DICTIONNAIRENAV("FAV");
	
	var l_div2 = document.createElement("div");	
	l_div2.id = "CELLULEAFFFAVORIE";
	l_div2.style.width = "472px";
	l_div2.style.height = "46px";
	l_div2.style.border = "1px solid #D2D2D2";
	l_div2.style.background = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_div2.style.overflowY = "hidden";
	
	var l_tab = SELCOUL_RECUPLISTECOULFAV().split(";");
	
	for(i=0;i<l_tab.length;i++)
	{
		var l_expnew = RegExp("^#[0-9A-F]{6,6}$","g");
		if(l_expnew.test(l_tab[i]))
			l_div2.appendChild(CreeDivCoulFav(l_tab[i]));
	}
	
	var l_div3 = document.createElement("div");
	l_div3.id = "FANTOME";
	l_div3.style.display = "none";
	l_div3.style.cssFloat = "left";
	l_div3.style.width = "43px";
	l_div3.style.height = "18px";
	l_div3.style.margin = "2px 0px 0px 2px";
	l_div3.style.background = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_div3.style.border = "1px dashed #7EC6EE";
	l_div3.innerHTML = "&nbsp;"
	
	l_div2.appendChild(l_div3)
	l_div.appendChild(l_p);
	l_div.appendChild(l_div2);
		
	return l_div;
}
function CreeDivCoulFav(f_coul)
{
	var l_div = document.createElement("div");
	l_div.style.cssFloat = "left";
	l_div.style.width = "45px";
	l_div.style.height = "20px";
	l_div.style.margin = "2px 0px 0px 2px";
	l_div.style.background = f_coul;
	l_div.style.cursor = "pointer";
	l_div.onclick = ClickOnCoul;
	l_div.onmousedown = DebutDNDCoul2;
	l_div.innerHTML = "&nbsp;"
	
	return l_div;
}

function init_spectrum(f_id, f_couleur)
{
	var l_init = {
		color:f_couleur,
		move:MouvementSelecteurHSV,
		change:MouvementSelecteurHSV,
		flat: true,
		cancelText:'',
		chooseText:'',
	}
	var l_js  = document.getElementById("idSpectrumJS");
	var l_css = document.getElementById("idSpectrumCSS");
	var l_initFn = function () { $('#' + f_id).spectrum(l_init); };
	// Partie JS du plugin
	if (!l_js) {
		//js_log("attention", "Module de gestion de palette couleur non chargé, en cours...");
		l_js      = document.createElement('script'); 
		l_js.id   = 'idSpectrumJS';
		l_js.type = 'text/javascript';
		l_js.src  = '/'+SELCOUL_RECUPREPWEBNAV() + '/ext/Style/spectrum.js';
		document.head.appendChild(l_js);
		//js_log("info", "Module de gestion de palette couleur chargé avec succès.");
	}
	// Partie CSS du plugin
	if (!l_css) {
		l_css      = document.createElement('link');
		l_css.id   = "idSpectrumCSS";
		l_css.rel  = 'stylesheet';
		l_css.href = '/'+SELCOUL_RECUPREPWEBNAV() + '/ext/Style/spectrum.css';
		document.head.appendChild(l_css);
	}
	// on ajoute le init au load de la lib
	if (typeof $.spectrum == "undefined") {
		l_js.addEventListener("load", l_initFn);
	} else {
		l_initFn;
	}
}

function MouvementSelecteurHSV(f_couleur)
{
	ModifiCouleur(f_couleur.toHexString().toUpperCase(), true);
}

function CreeEditeurHSV()
{
	var l_div = document.createElement("div");
	l_div.style.position = "absolute";
	l_div.style.top = "60px";
	l_div.style.left = "319px";	
	
	var l_input = document.createElement("input");
	l_input.id = "EditeurHSV";
	
	l_div.appendChild(l_input);
	
	return l_div;
}
function DebutDNDCoul(f_evt)
{
	if( $('#DivVisuCoulSelCoul').children("p").css("display") == "none" ){
		$("#CELCOULMOVDND").css("background-color", ConversionCouleurFoncRGBVersCharp(f_evt.currentTarget.style.backgroundColor));
		$(window).on("mousemove", MovDNDCoul).on("mouseup", FinDNDCoul);
		$("body").addClass("sp-dragging");
	}
}

function CreeDivMovDND()
{
	var l_div = document.createElement("div");
	l_div.id = "CELCOULMOVDND";
	l_div.style.position = "absolute";
	l_div.style.display = "none";
	l_div.style.top = "0px";
	l_div.style.left = "0px";
	l_div.style.width = "45px";
	l_div.style.height = "20px";
	l_div.style.border = "1px solid #D2D2D2";
	
	return l_div;
}

function MovDNDCoul(f_evt)
{
	var l_position = $("#CHAMPSELCOUL").offset();	
	$("#CELCOULMOVDND").css("left",(f_evt.pageX - l_position.left + 1)+"px").css("top",(f_evt.pageY - l_position.top + 1)+"px").css("display","block");
	
	var l_positionFav = $("#CELLULEAFFFAVORIE").offset();
	
	var l_x = f_evt.pageX - l_positionFav.left;
	var l_y = f_evt.pageY - l_positionFav.top;

	if(l_x < 1 || l_y < 1 || l_x > 471 || l_y > 45)
		$("#FANTOME").css("display", "none");
	else
	{
		var l_pos = Math.ceil(l_x/47) - 1 + (Math.ceil(l_y/23) - 1) * 10;
		var l_nombreFav = $("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").length
		if(l_pos >= l_nombreFav)
		{
			$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").eq(l_nombreFav-1).after($("#FANTOME"));
			$("#FANTOME").css("display", "block");
		}
		else
			$("#FANTOME").css("display", "none");
	}
}
function FinDNDCoul(f_evt)
{
	var l_couleurs = "";
	if($("#FANTOME").css("display") == "block")
	{
		$("#FANTOME").before(CreeDivCoulFav($("#CELCOULMOVDND").css("background-color")));
		if($("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").length > 20)
			$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").eq(20).remove();
			
		$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").each(function(){
			l_couleurs += ConversionCouleurFoncRGBVersCharp($(this).css("background-color")) + ";";
		});
		l_couleurs = l_couleurs.substring(0,l_couleurs.length - 1);
		SELCOUL_ENVOICOULEURFAVORITESERVEUR(l_couleurs);
	}
	else
	{
		var l_positionFav = $("#CELLULEAFFFAVORIE").offset();
		
		var l_x = f_evt.pageX - l_positionFav.left;
		var l_y = f_evt.pageY - l_positionFav.top;
		
		if(l_x > 0 && l_y > 0 && l_x < 472 && l_y < 46)
		{
			var l_pos = Math.ceil(l_x/47) - 1 + (Math.ceil(l_y/23) - 1) * 10;
			var l_nombreFav = $("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").length
			if(l_pos < l_nombreFav)
			{
				$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").eq(l_pos).css("background-color", $("#CELCOULMOVDND").css("background-color"));
				$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").each(function(){
					l_couleurs += ConversionCouleurFoncRGBVersCharp($(this).css("background-color")) + ";";
				});
				l_couleurs = l_couleurs.substring(0,l_couleurs.length - 1);
				SELCOUL_ENVOICOULEURFAVORITESERVEUR(l_couleurs);
			}
			
		}
	}
	$("#FANTOME").css("display", "none");
	$("#CELCOULMOVDND").css("display", "none");
	$(window).off("mousemove", MovDNDCoul).off("mouseup", FinDNDCoul);
	$("body").removeClass("sp-dragging");
}

function DebutDNDCoul2(f_evt)
{
	gf_champADeplaceCoulSel = $(f_evt.currentTarget)
	$("#CELCOULMOVDND").css("background-color", ConversionCouleurFoncRGBVersCharp(f_evt.currentTarget.style.backgroundColor));
	gf_mouveDNDCoul2 = false;
	$(window).on("mousemove", MovDNDCoul2).on("mouseup", FinDNDCoul2);
	$("body").addClass("sp-dragging");
}

function MovDNDCoul2(f_evt)
{
	var l_position = $("#CHAMPSELCOUL").offset();	
	$("#CELCOULMOVDND").css("left",(f_evt.pageX - l_position.left + 1)+"px").css("top",(f_evt.pageY - l_position.top + 1)+"px").css("display","block");
}
function FinDNDCoul2(f_evt)
{
	var l_couleurs = "";

	if($(f_evt.target).parent().attr('id') == "CELLULEAFFFAVORIE")
	{
		if(!$(f_evt.target).is(gf_champADeplaceCoulSel))
		{
			gf_champADeplaceCoulSel.css("background-color", $(f_evt.target).css("background-color"));
			$(f_evt.target).css("background-color", $("#CELCOULMOVDND").css("background-color"));
	
			$("#CELLULEAFFFAVORIE").children(":not(#FANTOME)").each(function(){
				l_couleurs += ConversionCouleurFoncRGBVersCharp($(this).css("background-color")) + ";";
			});
			l_couleurs = l_couleurs.substring(0,l_couleurs.length - 1);
			SELCOUL_ENVOICOULEURFAVORITESERVEUR(l_couleurs);
		}
	}
	$("#CELCOULMOVDND").css("display", "none");
	$(window).off("mousemove", MovDNDCoul2).off("mouseup", FinDNDCoul2);
	$("body").removeClass("sp-dragging");
}

function ModifChampCouleur(f_alias)
{
	var l_champ = $("#"+f_alias);
	var l_list = l_champ.val().split(";");
	
	var l_champCel = $("#" + f_alias + "CELLULE");
	if(l_list[0] == "#000000" && l_champCel.attr("data-defaut") == "O")
	{
		l_champCel.css("background-color", l_list[1]).children("p").show();
	}
	else
	{
		l_champCel.css("background-color", l_list[0]).children("p").hide();
	}
}
function ModifiEtatActifCC(f_alias, f_actif)
{
	var l_div = $("#" + f_alias + "CELLULE");
	
	if(f_actif)
	{
		l_div.css("cursor","pointer");
		l_div.get(0).onclick = AfficheSelecteurCouleur;
		l_div.css("background-image","url('/"+SELCOUL_RECUPREPWEBNAV()+"/ext/picto-couleur/Picto-Palette-Loupe.png')");
	}
	else
	{
		l_div.css("cursor","auto");
		l_div.get(0).onclick = null;
		l_div.css("background-image","");
	}
	
	
}
