// Procedures globales du projet
function GESTIONTHREADNAV_LOD(event){try{clWDUtil.Try();{GESTIONTHREADNAV_gp_fermetureAttente=false;}}catch(_E){clWDUtil.xbCatchThrow(_E,event);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GESTIONTHREADNAV_GTNRETOURINFOTHREAD(Vf_valeur){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteAsynchrone20("Communes_Web.ThreadRetourInfoReponce",null,"",0,Vf_valeur);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GTN_CreeChampsThread()
{
	
	if( !$("#CELL_GRISE_GESTION_THREAD").length )
	{
		var l_divGrise = document.createElement("div");
		l_divGrise.id= "CELL_GRISE_GESTION_THREAD";
		l_divGrise.style.zIndex = "2000000";
		l_divGrise.style.position = "absolute";
		l_divGrise.style.left = "0px";
		l_divGrise.style.top = "0px";
		l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
		l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop() + "px";
		l_divGrise.style.background = "rgba(102, 102, 102, 0.55)";
		l_divGrise.style.display = "none";
		
		l_divGrise.appendChild(GTN_CreeChampAttend());
		l_divGrise.appendChild(GTN_CreeChampTrace());
		l_divGrise.appendChild(GTN_CreeChampOuiNon());
		
		$("body").children().first().append(l_divGrise);

		$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").draggable({drag:GTN_CellGriseIFrameScroll});
		$("#CELL_OUINON_GESTION_THREAD").draggable({drag:GTN_CellGriseIFrameScroll});		
		$("#CELL_TRACE_GESTION_THREAD").draggable({drag:GTN_CellGriseIFrameScroll, handle:"#CELL_TRACE_TITRE_GESTION_THREAD"}).resizable({
			minHeight: 200,
			minWidth: 200,
			handles: "n, e, s, w, se"
		});
		$(".ui-icon, .ui-widget-content .ui-icon").css("background-image","url('/" + GNAV_RECUPREPWEB() + "/ext/Style/ui-icons/ui-icons_444444_256x240.png')");
		$(".ui-icon-gripsmall-diagonal-se").css("background-position","-64px -224px");
	}
}
function GTN_CreeChampAttend()
{
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_AFFICHE_ATTEND_GESTION_THREAD";
	l_divPrincipal.classList.add("S900-CELL-POPUP");
	l_divPrincipal.classList.add("padding");
	l_divPrincipal.style.position = "absolute";
	l_divPrincipal.style.width = "500px";
	l_divPrincipal.style.top = ((document.body.clientHeight / 2) - (132 / 2) + $(window).scrollTop()) + "px";
	l_divPrincipal.style.left = ((document.body.clientWidth /2) - (560 / 2) + $(window).scrollLeft()) + "px";
	l_divPrincipal.style.display = "none";
	
	var l_titre = document.createElement("p");
	l_titre.classList.add(GNAV_RECUPSTYLETITREWEB());
	l_titre.style.textAlign = "center";
	l_titre.style.fontSize = "15px";
	
	l_titre.innerText = GNAV_DICTIONNAIRENAV("VEUP");
	
	var l_corp = document.createElement("div");
	l_corp.style.width = "500px";
	l_corp.style.height = "57px";
	l_corp.style.padding = "10px 0px 0px 0px";
	l_corp.style.display = "table-cell";
	l_corp.style.verticalAlign  = "middle";
	
	var l_text = document.createElement("p");
	l_text.id = "TEXT_AFFICHE_ATTEND_GESTION_THREAD";
	l_text.classList.add("S002-TEXT-CENTRE");
	l_text.style.maxHeight = "57px";
	l_text.style.width = "100%";
	l_text.style.overflow = "hidden";
	l_text.style.fontFamily = "OpenSans-SemiBold-oct, Arial, sans-serif";
	l_text.style.fontSize = "14px";
	l_text.innerHTML = "&nbsp;";
	
	l_corp.appendChild(l_text);
	
	l_divPrincipal.appendChild(l_titre);
	l_divPrincipal.appendChild(GTN_CreeChampMessageCalcul());
	l_divPrincipal.appendChild(GTN_CreeChampMessageFerme());
	l_divPrincipal.appendChild(l_corp);
	l_divPrincipal.appendChild(GTN_CreeChampJauge());
	
	return l_divPrincipal;
}

function GTN_CreeChampJauge()
{
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_PRINCIPALE_JAUGE_THREAD";
	l_divPrincipal.style.margin = "15px 0px 0px 0px";
	l_divPrincipal.style.width = "500px";
	l_divPrincipal.style.height = "17px";
	l_divPrincipal.style.backgroundColor = GNAV_RECUPCSTCOULEUR("FondJauge_HEXA");

	var l_jauge = document.createElement("div");
	l_jauge.id = "CELL_JAUGE_THREAD";
	l_jauge.style.position = "absolute";
	l_jauge.style.width = "250px";
	l_jauge.style.height = "17px";
	l_jauge.style.background = GNAV_RECUPCSTCOULEUR("TxtBleuLienS004_HEXA");
	l_jauge.innerHTML = "&nbsp;";
	
	var l_textJauge = document.createElement("p");
	l_textJauge.id = "TEXT_JAUGE_THREAD";
	l_textJauge.classList.add("S002-TEXT-CENTRE");
	l_textJauge.style.position = "absolute";
	l_textJauge.style.width = "500px";
	l_textJauge.style.height = "17px";
	l_textJauge.style.lineHeight = "17px";
	l_textJauge.style.fontFamily = "OpenSans-SemiBold-oct, Arial, sans-serif";
	l_textJauge.style.color = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_textJauge.innerText = "50%";
	
	l_divPrincipal.appendChild(l_jauge);
	l_divPrincipal.appendChild(l_textJauge);
	
	return l_divPrincipal;
}

function GTN_AfficheJauge(f_pourCent, f_couleurJauge)
{
	var l_pourCent;
	
	if(f_pourCent == -1)
	{
		$("#CELL_PRINCIPALE_JAUGE_THREAD").hide();
		$("#CELL_JAUGE_THREAD").width("0px");
		$("#TEXT_JAUGE_THREAD").text("0%"); 
	}
	else
	{
		l_pourCent = parseInt(f_pourCent);
		$("#CELL_JAUGE_THREAD").width((l_pourCent * 5) + "px").css("background-color", f_couleurJauge);
		$("#TEXT_JAUGE_THREAD").text(l_pourCent+"%");
		$("#CELL_PRINCIPALE_JAUGE_THREAD").show();
	}
}

function GTN_MessageAttente(f_message)
{
	$("#TEXT_AFFICHE_ATTEND_GESTION_THREAD").text(f_message).html($("#TEXT_AFFICHE_ATTEND_GESTION_THREAD").html().replace(/\r\n/g,'<br/>'));
}
function GTN_FermeAttente()
{
	$(window).off("scroll", GTN_CellGriseIFrameScroll).off("resize",GTN_CellGriseIFrameScroll);
	$("#CELL_GRISE_GESTION_THREAD").hide();
	$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").hide()
	//GI_ChangeCouleurTourIframe("");
}
function GTN_affiche_attente(f_message, f_afficheBoutonFerme)
{
	$("#CELL_TRACE_GESTION_THREAD").removeData("fonction").removeData("message");
	GTN_MessageAttente(f_message);
	GTN_AfficheJauge(-1);
	if(f_afficheBoutonFerme)
	{
		$("#BOUTON_FERME_GESTION_THREAD").removeData("fonctionClic").removeProp("title").show();
	}
	else
	{
		$("#BOUTON_FERME_GESTION_THREAD").removeData("fonctionClic").removeProp("title").hide();
	}
	$("#TEXT_MESSAGE_CALCUL_GESTION_THREAD").hide();
	$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").css({left:((document.body.clientWidth /2) - (560 / 2) + $(window).scrollLeft()) + "px", top:((document.body.clientHeight / 2) - (132 / 2) + $(window).scrollTop()) + "px"}).show();
	$(window).on("scroll", GTN_CellGriseIFrameScroll).on("resize",GTN_CellGriseIFrameScroll);
	GTN_CellGriseIFrameScroll();
	$("#CELL_GRISE_GESTION_THREAD").show();
}
function GTN_CreeChampOuiNon()
{
	var l_divPrincipale = document.createElement("div");
	l_divPrincipale.id= "CELL_OUINON_GESTION_THREAD";
	l_divPrincipale.classList.add("S900-CELL-POPUP");
	l_divPrincipale.classList.add("padding");
	l_divPrincipale.style.position = "absolute";
	l_divPrincipale.style.left = "0px";
	l_divPrincipale.style.top = "0px";
	l_divPrincipale.style.width = "740px";
	l_divPrincipale.style.height = "208px";
	l_divPrincipale.style.display = "none";
	
	l_divPrincipale.appendChild(GTN_CreeChampOuiNonTitre());
	l_divPrincipale.appendChild(GTN_CreeChampOuiNonMessage());
	l_divPrincipale.appendChild(GTN_CreeChampBoutonOuiNon("OUI", GTN_ClickOui));
	l_divPrincipale.appendChild(GTN_CreeChampBoutonOuiNon("NON", GTN_ClickNon));
	l_divPrincipale.appendChild(GTN_CreeChampBoutonOuiNon("ANNULER", GTN_ClickAnnuler));
	l_divPrincipale.appendChild(GTN_CreeChampBoutonOuiNon("OK", GTN_ClickOK));
	
	return l_divPrincipale;
}
function GTN_CreeChampOuiNonTitre()
{
	var l_textTitreOuiNon = document.createElement("p");
	l_textTitreOuiNon.id= "TEXT_TITRE_OUINON_GESTION_THREAD";
	l_textTitreOuiNon.classList.add("S020-CADRE-TITRE");
	l_textTitreOuiNon.classList.add("padding");
	l_textTitreOuiNon.style.height = "20px";
	l_textTitreOuiNon.innerText = "&nbsp;";
	
	return l_textTitreOuiNon;
}

function GTN_CreeChampOuiNonMessage()
{
	var l_DivMessageOuiNon = document.createElement("div");
	l_DivMessageOuiNon.id = "IMG_OUINON_GESTION_THREAD";
	l_DivMessageOuiNon.style.width = "100%";
	l_DivMessageOuiNon.style.height = "125px";
	l_DivMessageOuiNon.style.background = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_DivMessageOuiNon.style.backgroundImage = "url('/" + GNAV_RECUPREPWEB() + "/ext/pictos-dialogue/Picto-80x80-Question.png')";
	l_DivMessageOuiNon.style.backgroundRepeat = "no-repeat";
	l_DivMessageOuiNon.style.backgroundAttachment = "local";
	l_DivMessageOuiNon.style.backgroundPosition = "15px 31px"; 
	
	var l_corp = document.createElement("div");
	l_corp.classList.add("S002-TEXT-CENTRE");
	l_corp.style.position = "relative";
	l_corp.style.top = "17px";
	l_corp.style.left = "115px";
	l_corp.style.width = "510px";
	l_corp.style.height = "108px";
	l_corp.style.fontFamily = "OpenSans-SemiBold-oct, Arial, sans-serif";
	l_corp.style.fontSize = "14px";
	l_corp.style.boxSizing = "border-box";
	l_corp.style.display = "flex";
	
	var l_text = document.createElement("p");
	l_text.id = "TEXT_MESSAGE_OUINON_GESTION_THREAD";
	l_text.style.width = "100%";
	l_text.style.maxHeight = "100%";
	l_text.style.overflowX = "hidden";
	l_text.style.overflowY = "auto";
	l_text.style.margin = "auto 0px";
	l_text.innerHTML = "&nbsp;";
//	l_text.innerHTML = "esgsdfsdfgsdqdsfg fgdfsdhlb gwsf gklmwg klmsdg klsmgsdfmg kklmsd gklmsdfm klmdqskglmf klmdgklmwf fgsdffhqfdyh sdffsg sdfgdglmdfsgmk dfsfglmsdfgk dsjkfmjgmqsmg fqsd nkglsfjgkl fsdjfmqsjfm fqsdklmfqspm fhgdvhcvxhxgjsdfhsdhgdfshsdg ";
//	l_text.innerHTML += "fdgdfh dhgfg sdfhdghs sdfhsdh hsdhsdghsdg sdfhjdfhj fhks jkdfjsf dykdjx sdujsfuj hgsdhdgsh dfyhsdujh dfhsdh fgjdjksd sdhdjdfj xgfidfyfj dfhdjdhi dfhjdfk xdgjfhkifguo dfhghdj sfgsdfhj fgjkgvk gfjhfk fdhfjxdfujfkcv hdfjchk fgjhkdk ";
//	l_text.innerHTML += "sdfgdfshj gjhfgjfh fgjfhkfgk ghkgolhjp cvhkoguyf wdhdhdrjkdty xdfhxcgjodt xcfgdj lqsmfklmqmfqf fhdfujdfi dfhkfgocf fgxjfgygoi cfhlfuhp cvhkk";
	
	l_corp.appendChild(l_text);
	
	l_DivMessageOuiNon.appendChild(l_corp);
	
	return l_DivMessageOuiNon;
}

function GTN_CreeChampBoutonOuiNon(f_lib, f_fonctionClick)
{

	l_Bouton = document.createElement("div");
	l_Bouton.id = "BOUTON_" + f_lib + "_OUINON_GESTION_THREAD";
	l_Bouton.style.display = "none";
	l_Bouton.classList.add("S100-BOUTON");
	l_Bouton.classList.add("padding");
	l_Bouton.style.position = "absolute";
	switch (f_lib) {
		case "OK":
			l_Bouton.style.width = "21px";
			l_Bouton.innerText = "OK";
			break;
		case "OUI":
			l_Bouton.style.width = "29px";
			l_Bouton.innerText = "Oui";
			break;
		case "NON":
			l_Bouton.style.width = "30px";
			l_Bouton.innerText = "Non";
			break;
		case "ANNULER":
			l_Bouton.style.width = "57px";
			l_Bouton.innerText = "Annuler";
			break;
		default:
			l_Bouton.style.width = "64px";
			l_Bouton.innerText = f_lib;
			break;
	}
	l_Bouton.style.height = "16px";
	l_Bouton.style.lineHeight = "16px";
	l_Bouton.style.cursor = "pointer";
	l_Bouton.onclick = f_fonctionClick;
	
	return l_Bouton;
}
function GTN_ClickOui()
{
	GESTIONTHREADNAV_GTNRETOURINFOTHREAD(1);
	$("#CELL_OUINON_GESTION_THREAD").hide();
	GTN_CellGriseIFrameScroll();
}
function GTN_ClickNon()
{
	GESTIONTHREADNAV_GTNRETOURINFOTHREAD(0);
	$("#CELL_OUINON_GESTION_THREAD").hide();
	GTN_CellGriseIFrameScroll();
}

function GTN_ClickAnnuler()
{
	GESTIONTHREADNAV_GTNRETOURINFOTHREAD(2);
	$("#CELL_OUINON_GESTION_THREAD").hide();
	GTN_CellGriseIFrameScroll();
}

function GTN_ClickOK()
{
	GESTIONTHREADNAV_GTNRETOURINFOTHREAD(1);
	$("#CELL_OUINON_GESTION_THREAD").hide();
	GTN_CellGriseIFrameScroll();
}

function GTN_AfficheOuiNon(f_titre, f_message)
{
	$("#BOUTON_OUI_OUINON_GESTION_THREAD").css("left",332).show();
	$("#BOUTON_NON_OUINON_GESTION_THREAD").css("left",402).show();
	$("#BOUTON_ANNULER_OUINON_GESTION_THREAD").hide();
	$("#BOUTON_OK_OUINON_GESTION_THREAD").hide();
	
	GTN_AfficheOuiNonCell(f_titre, f_message);
}

function GTN_AfficheConfirmer(f_titre, f_message)
{
	$("#BOUTON_OUI_OUINON_GESTION_THREAD").css("left",283).show();
	$("#BOUTON_NON_OUINON_GESTION_THREAD").css("left",353).show();
	$("#BOUTON_ANNULER_OUINON_GESTION_THREAD").css("left",424).show();
	$("#BOUTON_OK_OUINON_GESTION_THREAD").hide();
	
	GTN_AfficheOuiNonCell(f_titre, f_message);
}

function GTN_AfficheInfo(f_titre, f_message)
{
	$("#BOUTON_OUI_OUINON_GESTION_THREAD").hide();
	$("#BOUTON_NON_OUINON_GESTION_THREAD").hide();
	$("#BOUTON_ANNULER_OUINON_GESTION_THREAD").hide();
	$("#BOUTON_OK_OUINON_GESTION_THREAD").css("left",372).show();
	
	GTN_AfficheOuiNonCell(f_titre, f_message);
}
function GTN_AfficheOuiNonCell(f_titre, f_message)
{
	var l_cell = $("#CELL_OUINON_GESTION_THREAD");
	var l_message = $("#TEXT_MESSAGE_OUINON_GESTION_THREAD");
	$("#TEXT_TITRE_OUINON_GESTION_THREAD").text(f_titre);
	l_message.text(f_message).html(l_message.html().replace(/\n/g,'<br/>'));
	
	if(l_cell.css("display") === "none")
	{
		l_cell.css({left: ((document.body.clientWidth /2) - (800 / 2) + $(window).scrollLeft()) + "px", top : ((document.body.clientHeight / 2) - (250 / 2) + $(window).scrollTop()) + "px"}).show();
	}
}
function GTN_CellGriseIFrameScroll()
{
	$("#CELL_GRISE_GESTION_THREAD").width(document.body.clientWidth + $(window).scrollLeft()).height(document.body.clientHeight + $(window).scrollTop());
}
function GTN_CreeChampMessageCalcul()
{
	var l_textCalcul = document.createElement("p");
	l_textCalcul.id= "TEXT_MESSAGE_CALCUL_GESTION_THREAD";
	l_textCalcul.classList.add("S002-TEXT-CENTRE");
	l_textCalcul.style.margin = "2px 0px 0px 0px";
	l_textCalcul.style.overflow = "hidden";
	l_textCalcul.style.fontFamily = "OpenSans-SemiBold-oct, Arial, sans-serif";
	l_textCalcul.style.fontSize = "10px";
	l_textCalcul.style.color = GNAV_RECUPCSTCOULEUR("TxtGriseS100_HEXA");
	l_textCalcul.innerHTML = "&nbsp;";
	l_textCalcul.style.display = "none";
	
	return l_textCalcul;
}

function GTN_ModifiMessageCalcul(f_message)
{
	if(f_message === "")
	{
		$("#TEXT_MESSAGE_CALCUL_GESTION_THREAD").hide();
	}
	else
	{
		$("#TEXT_MESSAGE_CALCUL_GESTION_THREAD").text(f_message).show();
	}
}
function GTN_ModifieImageCellOuiNon(f_type)
{
	switch(f_type) {
		case 1:
			// Info
			$("#IMG_OUINON_GESTION_THREAD").css("background-image","url('/" + GNAV_RECUPREPWEB() + "/ext/pictos-dialogue/Picto-80x80-Alerte.png')");
			break;
		case 2:
			// Erreur
			$("#IMG_OUINON_GESTION_THREAD").css("background-image","url('/" + GNAV_RECUPREPWEB() + "/ext/pictos-dialogue/Picto-80x80-Erreur.png')");
			break;
		default:
			// Question
			$("#IMG_OUINON_GESTION_THREAD").css("background-image","url('/" + GNAV_RECUPREPWEB() + "/ext/pictos-dialogue/Picto-80x80-Question.png')");
			break;
	}
}

function GTN_CreeChampTrace()
{
	var l_divPrincipale = document.createElement("div");
	l_divPrincipale.id= "CELL_TRACE_GESTION_THREAD";
	l_divPrincipale.classList.add("S900-CELL-POPUP");
	l_divPrincipale.style.position = "absolute";
	l_divPrincipale.style.left = "0px";
	l_divPrincipale.style.top = "0px";
	l_divPrincipale.style.width = "400px";
	l_divPrincipale.style.height = "300px";
	l_divPrincipale.style.display = "none";
	
	l_divPrincipale.appendChild(GTN_CreeChampTraceTitre());
	
	var l_divSecondaire = document.createElement("div");
	l_divSecondaire.id= "CELL_TRACE_MESSAGE_GESTION_THREAD";
	l_divSecondaire.style.width = "calc(100% - 18px)";
	l_divSecondaire.style.height = "calc(100% - 49px)";
	l_divSecondaire.style.padding = "5px 9px 5px 9px";
	l_divSecondaire.style.lineHeight = "20px";
	l_divSecondaire.style.fontSize = "14px";
	l_divSecondaire.style.backgroundColor = GNAV_RECUPCSTCOULEUR("FondTrace_HEXA");
	l_divSecondaire.style.overflowY = "scroll";
	
	l_divPrincipale.appendChild(l_divSecondaire);
	
	return l_divPrincipale;
}
function GTN_CreeChampTraceTitre()
{
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_TRACE_TITRE_GESTION_THREAD";
	l_divPrincipal.style.width = "100%";
	l_divPrincipal.style.height = "39px";
	l_divPrincipal.style.cursor = "move";
	
	var l_textTitreTrace = document.createElement("p");
	l_textTitreTrace.classList.add("S020-CADRE-TITRE");
	l_textTitreTrace.classList.add("padding");
	l_textTitreTrace.style.float = "left";
	l_textTitreTrace.style.paddingLeft = "9px";
	l_textTitreTrace.style.fontSize = "16px";
	l_textTitreTrace.style.background = GNAV_RECUPCSTCOULEUR("Blanc_HEXA");
	l_textTitreTrace.innerText = "Trace";
	
	var l_ferme = document.createElement("div");
	l_ferme.classList.add("S101-BOUTON-FERME");
	l_ferme.style.float = "right";
	l_ferme.style.width = "12px";
	l_ferme.style.height = "18px";
	l_ferme.style.margin = "10px 9px 0px 0px";
	l_ferme.style.cursor = "pointer";
	l_ferme.innerHTML = "&nbsp;";	
	l_ferme.onclick = GTN_FermeTraces;
	
	var l_copier = document.createElement("div");
	l_copier.style.float = "right";
	l_copier.style.width = "23px";
	l_copier.style.height = "23px";
	l_copier.style.backgroundImage = "url('/" + GNAV_RECUPREPWEB() + "/ext/picto-pwd-copier/picto-pwd-copier.png')";
	l_copier.style.margin = "7px 11px 0px 0px";
	l_copier.style.cursor = "pointer";
	l_copier.innerHTML = "&nbsp;";	
	l_copier.onclick = GTN_CopiePressePapier;	
	
	l_divPrincipal.appendChild(l_textTitreTrace);
	l_divPrincipal.appendChild(l_ferme);
	l_divPrincipal.appendChild(l_copier);
	
	return l_divPrincipal;
}

function GTN_AjoutTraces(f_traces)
{
	if(f_traces.length > 0)
	{
		var l_divTraces = $("#CELL_TRACE_GESTION_THREAD") 
		l_divTraces.show();
		var l_zoneText = $("#CELL_TRACE_MESSAGE_GESTION_THREAD");
		f_traces.forEach(function(f_trace) {
			var l_text = document.createElement("div");
			l_text.innerText = f_trace.replace(new RegExp(' ', 'g'), String.fromCharCode(160));
			l_zoneText.append(l_text);
		});
		
		if($("#CELL_GRISE_GESTION_THREAD").css("display") === "none")
		{
			l_divTraces.css({left:((document.body.clientWidth /2) - (l_divTraces.width() / 2) + $(window).scrollLeft()) + "px", top:((document.body.clientHeight / 2) - (l_divTraces.height() / 2) + $(window).scrollTop()) + "px"});
			$("#CELL_GRISE_GESTION_THREAD").show();
		}
		l_zoneText.scrollTop(l_zoneText.prop("scrollHeight"));
	}
}
function GTN_FermeTraces()
{
	var l_gestionTraceThread = $("#CELL_TRACE_GESTION_THREAD");
	
	if($("#CELL_AFFICHE_ATTEND_GESTION_THREAD").css("display") === "none" && $("#CELL_OUINON_GESTION_THREAD").css("display") === "none")
	{
		$("#CELL_GRISE_GESTION_THREAD").hide();
	}
	l_gestionTraceThread.hide();
	$("#CELL_TRACE_MESSAGE_GESTION_THREAD").empty();
	
	var l_fonction = l_gestionTraceThread.data("fonction");
	var l_message = l_gestionTraceThread.data("message");
	if(typeof l_fonction != "undefined")
	{
		$("#CELL_GRISE_GESTION_THREAD").hide();
		if(l_fonction != "")
		{
			ExecuteFonctionJavascript(l_fonction, l_message);
		}
		else
		{
			if(typeof l_message != "undefined")
			{
				alert(l_message);
			}
		}
	}
	else
	{
		if(typeof l_message != "undefined")
		{
			$("#CELL_GRISE_GESTION_THREAD").hide();
			alert(l_message);
		}
	}
	$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").hide()
	l_gestionTraceThread.removeData("fonction").removeData("message");
}

function GTN_TracesVisible()
{
	return $("#CELL_TRACE_GESTION_THREAD").css("display") !== "none";
}

function GTN_CopiePressePapier()
{
	var l_element = $("#CELL_TRACE_MESSAGE_GESTION_THREAD").get(0);
	window.getSelection().removeAllRanges(); 
	var range = document.createRange();  
	range.selectNode(l_element);  
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges(); 
}
function GTN_CreeChampMessageFerme()
{
	var l_BoutonFerme = document.createElement("div");
	l_BoutonFerme.id= "BOUTON_FERME_GESTION_THREAD";
	l_BoutonFerme.classList.add("S101-BOUTON-FERME");
	l_BoutonFerme.style.position = "absolute";
	l_BoutonFerme.style.left = "516px";
	l_BoutonFerme.style.top = "21px";
	l_BoutonFerme.style.width = "12px";
	l_BoutonFerme.style.height = "18px";
	l_BoutonFerme.innerHTML = "&nbsp;";
	l_BoutonFerme.style.cursor = "pointer";
	l_BoutonFerme.style.display = "none";
	l_BoutonFerme.onclick = GTN_ClickStop;
	
	return l_BoutonFerme;
}

function GTN_ClickStop()
{
	var l_fonctionClic = $("#BOUTON_FERME_GESTION_THREAD").data("fonctionClic");
	if(l_fonctionClic === undefined || l_fonctionClic == "")
	{
		GESTIONTHREADNAV_GTNRETOURINFOTHREAD(-1);
	}
	else
	{
		ExecuteFonctionJavascript(l_fonctionClic, "");
	}	
	
}

function GTN_AjoutInfoFermeTrace(f_fonction, f_message)
{
	$("#CELL_TRACE_GESTION_THREAD").data("fonction", f_fonction).data("message", f_message);
}

function GTN_MasqueAttente()
{
	$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").hide();
	$("#CELL_OUINON_GESTION_THREAD").hide();
}
function GAA_affiche_attente(f_message)
{
	parent.GAA_affiche_attenteViaParent(f_message);
}
function GAA_FermeAttente()
{
	parent.GAA_FermeAttenteViaParent();
}

function GAA_affiche_attenteViaParent(f_message)
{
	GTN_CreeChampsThread();
	$("#CELL_TRACE_GESTION_THREAD").removeData("fonction").removeData("message");
	GTN_MessageAttente(f_message);
	GTN_AfficheJauge(-1);
	$("#BOUTON_FERME_GESTION_THREAD").removeData("fonctionClic").removeProp("title").hide();
	$("#TEXT_MESSAGE_CALCUL_GESTION_THREAD").hide();
	$("#CELL_AFFICHE_ATTEND_GESTION_THREAD").css({left:((document.body.clientWidth /2) - (560 / 2) + $(window).scrollLeft()) + "px", top:((document.body.clientHeight / 2) - (132 / 2) + $(window).scrollTop()) + "px"}).show();
	$(window).on("scroll", GTN_CellGriseIFrameScroll).on("resize",GTN_CellGriseIFrameScroll);
	GTN_CellGriseIFrameScroll();
	$("#CELL_GRISE_GESTION_THREAD").css("background", "rgba(200, 200, 200, 0.8)").show();
	
	GESTIONTHREADNAV_gp_fermetureAttente = false;
	setTimeout(function() {
		if(GESTIONTHREADNAV_gp_fermetureAttente == true)
		{
			$("#CELL_GRISE_GESTION_THREAD").css("rgba(102, 102, 102, 0.55)");
			GTN_FermeAttente();
		}
		GESTIONTHREADNAV_gp_fermetureAttente = true;
	}, 250);
	
}
function GAA_FermeAttenteViaParent()
{
	$("#BOUTON_FERME_GESTION_THREAD").removeData("fonctionClic").removeProp("title");
	if (GESTIONTHREADNAV_gp_fermetureAttente == true)
	{
		$("#CELL_GRISE_GESTION_THREAD").css("rgba(102, 102, 102, 0.55)");
		GTN_FermeAttente();
	}
	GESTIONTHREADNAV_gp_fermetureAttente = true;
}

function GAA_affiche_attenteAvecCroix(f_fonctionClic, f_message, f_messageBulleFerme)
{
	parent.GAA_affiche_attenteAvecCroixViaParent(f_fonctionClic, f_message, f_messageBulleFerme);
}

function GAA_affiche_attenteAvecCroixViaParent(f_fonctionClic, f_message, f_messageBulleFerme)
{
	GAA_affiche_attenteViaParent(f_message);
	$("#BOUTON_FERME_GESTION_THREAD").data("fonctionClic", f_fonctionClic).show();
	if(f_messageBulleFerme !== undefined)
	{
		$("#BOUTON_FERME_GESTION_THREAD").prop("title", f_messageBulleFerme);
	}
	else
	{
		$("#BOUTON_FERME_GESTION_THREAD").removeProp("title");
	}
}

