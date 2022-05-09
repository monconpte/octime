// Procedures globales du projet
function MENUFAVORIS_MFAFFGESTIONFAV(){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteAsynchrone20("GestionMenu.Menu_InitialisationFavoris",MENUFAVORIS_MFRETOURFONCTIONAFF,"",0,MF_Page());}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function MENUFAVORIS_MFRETOURFONCTIONAFF(Vf_infos){try{clWDUtil.Try();{MF_AffFenetreGestionFav(Vf_infos);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function MENUFAVORIS_MFAJOUTFAVORISAJAX(Vf_prog_lib,Vf_rep,Vf_rep_lib){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteAsynchrone20("GestionMenu.MENU_Ajout_Favoris",MENUFAVORIS_MFRETOURMODIF,"",0,MF_Page(),Vf_prog_lib,Vf_rep,Vf_rep_lib);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function MENUFAVORIS_MFRETOURMODIF(Vf_infos){try{clWDUtil.Try();{MF_JSRetourModif(Vf_infos);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function MENUFAVORIS_MFSUPPRFAVORISAJAX(){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteAsynchrone20("GestionMenu.MENU_Suppression_Favoris",MENUFAVORIS_MFRETOURMODIF,"",0,MF_Page());}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function MF_AffFav(f_evt)
{
	
	if($("#CHAMPFAVORIS").length)
	{
		if( $("#CHAMPFAVORIS").css("display") === "none")
		{
			$("#dzZONEENTETE").on("mousemove", MF_DepSansFermeture);
			$("#CH_DATEETCDF").on("mousemove", MF_DepSansFermeture);
			$(document).on("mousemove", MF_DepSurCorp);
			$("#CHAMPFAVORIS").show();
		}
		
	}
	else
	{
		$("#dzZONEENTETE").on("mousemove", MF_DepSansFermeture);
		$("#CH_DATEETCDF").on("mousemove", MF_DepSansFermeture);
		$(document).on("mousemove", MF_DepSurCorp);
		MF_GeneMenuFav();
	}
	
	
	
}

function MF_DepSansFermeture(f_evt)
{
//	console.log("test1");
	f_evt.stopPropagation();
}

function MF_DepSurCorp(f_evt)
{
	$("#CHAMPFAVORIS").hide();
	$("#dzZONEENTETE").off("mousemove", MF_DepSansFermeture);
	$("#CH_DATEETCDF").off("mousemove", MF_DepSansFermeture);
	$(document).off("mousemove", MF_DepSurCorp);
	//console.log("test2");
}

function MF_GeneMenuFav()
{
	if(typeof(gf_mfMenuFavInfos) === 'undefined')
		return;
	
	if(gf_mfMenuFavInfos === null)
		return;
		
	console.log(gf_mfMenuFavInfos);
	
	var l_divfav = document.createElement("div");
	l_divfav.id = "CHAMPFAVORIS";
	if(typeof(gf_masqueEntete) !== 'undefined')
	{
		if(gf_masqueEntete)
		{
			l_divfav.style.top = "33px";
		}
	}
	l_divfav.onmousemove = MF_DepSansFermeture;
	
	for (var l_i = 0; l_i < gf_mfMenuFavInfos.length; l_i++) {
		l_divfav.appendChild(MF_GeneContenuMenuFav(gf_mfMenuFavInfos[l_i]));
	}
	
	$("body").children().first().append(l_divfav);
}

function MF_GeneContenuMenuFav(f_info)
{
	var l_lu = document.createElement("lu");
	
	var l_li = document.createElement("li");
	l_li.innerText = f_info.nom;
	
	l_lu.appendChild(l_li);
	
	for (var l_i = 0; l_i < f_info.menu.length; l_i++) {
		l_lu.appendChild(MF_GeneLigneMenuFav(f_info.menu[l_i]));
	}

	return l_lu;
}

function MF_InitVarFav(f_menuFavJson)
{
	if(f_menuFavJson != "")
		gf_mfMenuFavInfos = JSON.parse(f_menuFavJson);
}
function MF_GeneLigneMenuFav(f_info)
{
	var l_li = document.createElement("li");
	l_li.innerText = f_info.nom;
	l_li.onclick = function() {ClickFavNav(f_info.id, f_info.nom)};
	return l_li;
}

function MF_AffFenetreGestionFav(f_infos)
{
	
	var l_infos = JSON.parse(f_infos);
	
	var l_divGrise = document.createElement("div");
	l_divGrise.id = "CELL_GRISE_GESTION_FAVORIS";
	l_divGrise.style.zIndex = "2000000";
	l_divGrise.style.position = "absolute";
	l_divGrise.style.left = "0px";
	l_divGrise.style.top = "0px";
	l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
	l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop() + "px";
	l_divGrise.style.background = "rgba(102, 102, 102, 0.55)";
	
	l_divGrise.appendChild(MF_AffDivGestionFav(l_infos));
	
	$("body").children().first().append(l_divGrise);
}

function MF_AffDivGestionFav(f_infos)
{

	var l_div = document.createElement("div");
	l_div.id = "GESTIONFAVORIS";
	l_div.classList.add("S900-CELL-POPUP");
	l_div.classList.add("padding");
	l_div.style.top = ((document.body.clientHeight / 2) - (240 / 2) + $(window).scrollTop()) + "px";
	l_div.style.left = ((document.body.clientWidth /2) - (450 / 2) + $(window).scrollLeft()) + "px";
	
	var l_divTitre = document.createElement("div");
	l_divTitre.classList.add("S901-TITRE");
	l_divTitre.innerText = GNAV_DICTIONNAIRENAV("GDF");
	l_divTitre.style.float="left";
	
	var l_divFerme = document.createElement("div");
	l_divFerme.id = "FERMEGESTIONFAVORIS";
	l_divFerme.classList.add("S101-BOUTON-FERME");
	l_divFerme.onclick = MF_FermeGestionFav;
	
	l_div.appendChild(l_divTitre);
	l_div.appendChild(l_divFerme);
	l_div.appendChild(MF_AffChampLibPage(f_infos.favorisLib));
	l_div.appendChild(MF_AffChampDossier(f_infos.listeMenu, f_infos.dossier));
	l_div.appendChild(MF_AffChampLibDossier(f_infos.listeMenu[f_infos.dossier - 1]));
	l_div.appendChild(MF_AffChampBoutonValide());
	if(f_infos.supprVisible)
		l_div.appendChild(MF_AffChampBoutonSupprimer());
	
	return l_div;
}
function MF_FermeGestionFav()
{
	$("#CELL_GRISE_GESTION_FAVORIS").remove();
}

function MF_AffChampLibPage(f_lib)
{
	var l_divlib = document.createElement("div");
	l_divlib.id = "CHAMPFAVORISLIB";
	
	var l_p = document.createElement("p");
	
	l_p.classList.add("S001-TEXT");
	l_p.innerText = GNAV_DICTIONNAIRENAV("NDF");
	
	var l_input = document.createElement("input");
	
	l_input.classList.add("S003-CHAMP-TEXT");
	l_input.classList.add("padding");
	l_input.maxLength = 30;
	l_input.value = f_lib;
	
	l_divlib.appendChild(l_p);
	l_divlib.appendChild(l_input);
	
	return l_divlib;
}
function MF_AffChampDossier(f_listeMenu, f_selection)
{
	var l_divlib = document.createElement("div");
	l_divlib.id = "CHAMPFAVORISDOSSIER";
	
	var l_p = document.createElement("p");
	
	l_p.classList.add("S001-TEXT");
	l_p.innerText = GNAV_DICTIONNAIRENAV("DOS");
	
	var l_input = document.createElement("select");
	
	l_input.classList.add("S003-CHAMP-TEXT");

	
	for (var l_i = 0; l_i < f_listeMenu.length ; l_i++) {
		var l_option = document.createElement("option");
		l_option.value = l_i + 1;
		l_option.innerText =f_listeMenu[l_i];
		l_input.appendChild(l_option);
	}
	
	l_input.value = f_selection;
	l_input.onchange = function(f_evt) {
		$("#CHAMPFAVORISLIBDOSSIER > input").val($("#CHAMPFAVORISDOSSIER > select option:selected").text());
	};
	
	l_divlib.appendChild(l_p);
	l_divlib.appendChild(l_input);
	
	return l_divlib;
}

function MF_AffChampLibDossier(f_lib)
{
	var l_divlib = document.createElement("div");
	l_divlib.id = "CHAMPFAVORISLIBDOSSIER";
	
	var l_p = document.createElement("p");
	
	l_p.classList.add("S001-TEXT");
	l_p.innerText = GNAV_DICTIONNAIRENAV("NDD");
	
	var l_input = document.createElement("input");
	
	l_input.classList.add("S003-CHAMP-TEXT");
	l_input.classList.add("padding");
	
	l_input.maxLength = 30;
	l_input.value = f_lib;
	
	l_divlib.appendChild(l_p);
	l_divlib.appendChild(l_input);
	
	return l_divlib;
}

function MF_AffChampBoutonValide()
{
	var l_button = document.createElement("div");
	l_button.id = "CHAMPFAVORISVALIDER";
	l_button.classList.add("S100-BOUTON");
	l_button.classList.add("padding");
	l_button.innerText = GNAV_DICTIONNAIRENAV("VAL");
	l_button.onclick = MF_AjoutFavoris;
	
	return l_button;
	
}

function MF_AffChampBoutonSupprimer()
{
	var l_button = document.createElement("div");
	l_button.id = "CHAMPFAVORISSUPPRIMER";
	l_button.classList.add("S100-BOUTON");
	l_button.classList.add("padding");
	l_button.innerText = GNAV_DICTIONNAIRENAV("SUPP");
	l_button.onclick = MF_SupprFavoris;
	
	return l_button;
}

function MF_Page()
{
	if(typeof(gf_pageAide) === "undefined")
	{
		return "";
	}
	else
	{
		return gf_pageAide;
	}
}
function MF_AjoutFavoris()
{
	var l_prog_lib = $("#CHAMPFAVORISLIB > input").val();
	var l_rep = $("#CHAMPFAVORISDOSSIER > select").val();
	var l_rep_lib = $("#CHAMPFAVORISLIBDOSSIER > input").val();
	
	MENUFAVORIS_MFAJOUTFAVORISAJAX(l_prog_lib, l_rep, l_rep_lib);
}

function MF_JSRetourModif(f_infos)
{
	var l_infos = JSON.parse(f_infos);
	
	$("#CHAMPFAVORIS").remove();
	MF_FermeGestionFav();
	
	var l_background = $(".MENUFAVETOILE").css("background-image");
	
	if(l_infos.ajout)
	{
		$(".MENUFAVETOILE").attr("title",GNAV_DICTIONNAIRENAV("SMF")).css("background-image", l_background.replace("Picto-Menu-Favori-1.png", "Picto-Menu-Favori-2.png"));
	}
	
	if(l_infos.suppr)
	{
		$(".MENUFAVETOILE").attr("title",GNAV_DICTIONNAIRENAV("AF")).css("background-image", l_background.replace("Picto-Menu-Favori-2.png", "Picto-Menu-Favori-1.png"));
	}
	
	gf_mfMenuFavInfos = l_infos.infos;
	
	if(l_infos.message != "")
		alert(l_infos.message);
	
}

function MF_SupprFavoris()
{
	MENUFAVORIS_MFSUPPRFAVORISAJAX();
}

