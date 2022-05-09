// Procedures globales du projet
function PINAV_pi_datelie(){this.gs_cod=0;this.gs_lib="";this.gs_selectionne=false;};PINAV_pi_datelie.prototype=new WDTypeAvance();PINAV_pi_datelie.prototype.constructor=PINAV_pi_datelie;
function PINAV_pi_tricol(){this.gs_cod=0;this.gs_lib="";this.gs_numTri=0;this.gs_ordreTri="";this.gs_ordreCol=0;};PINAV_pi_tricol.prototype=new WDTypeAvance();PINAV_pi_tricol.prototype.constructor=PINAV_pi_tricol;
function pi_valInf(){this.cod=0;this.valeur="";this.borneDebut="";this.borneFin="";};pi_valInf.prototype=new WDTypeAvance();pi_valInf.prototype.constructor=pi_valInf;
function pi_ligneEvt(){this.ind=0;this.vals=clWDTableau.tabCreeTableau([0],pi_valInf,function(){return arguments[0];},void 0,false);this.doc_idevtPI="";this.tri1="";this.tri2="";this.tri3="";this.tri4="";this.tri5="";};pi_ligneEvt.prototype=new WDTypeAvance();pi_ligneEvt.prototype.constructor=pi_ligneEvt;
function PINAV_LOD(event){try{clWDUtil.Try();{PINAV_gf_ficCalImg=(("/"+gp_repertoire_web)+"/ext/picto-calendrier/picto-calendrier.png");PINAV_gf_sourisXDebut=0;PINAV_gf_numChamp=0;PINAV_gf_champXDebut=0;PINAV_gf_formXDebut=0;PINAV_gf_formLDebut=0;PINAV_gf_typeChamp=0;}}catch(_E){clWDUtil.xbCatchThrow(_E,event);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function PINAV_PIWMREDIMONGLET(Vf_teCour){try{clWDUtil.Try();{js_log("debug","pi_wm_redim_onglet",("evt = "+Vf_teCour));if((Vf_teCour=="")){return;}var Vl_hMax=0;Vl_hMax=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(js_pi_hMax(Vf_teCour),Pi_js_FormTop()),20),8,0,50,0);$("#CH_PI_VALS_ENREGISTRE").parent().css("top",Vl_hMax);$("#CH_PI_EVT_VALS_AJOUT").parent().css("top",Vl_hMax);$("#CH_PI_EVT_VALS_ANNUL").parent().css("top",Vl_hMax);Vl_hMax=clWDUtil.oAddition(Vl_hMax,clWDUtil.oAddition($("#CH_PI_VALS_ENREGISTRE").parent().height(),11));Vl_hMax=clWDUtil.oConversionType(clWDUtil.oMax(Vl_hMax,360),8,0,31,0);$("#CH_ONGLET_PI").css("height",Vl_hMax);$("#CH_CELL_BOUTON").parent().css("top",(Vl_hMax+40));Vl_hMax=clWDUtil.oConversionType(clWDUtil.oSoustraction(clWDUtil.oSoustraction($("#CH_ONGLET_PI").height(),Pi_js_FormTop()),5),8,0,50,0);$("#CH_PI_FORM_HTML").height(Vl_hMax);delai(js_pi_modif_style_titre_tableau,"50");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function PINAV_PIWEREDIM(Vf_teCour){try{clWDUtil.Try();{if((Vf_teCour=="")){return;}var Vl_hMax=0;Vl_hMax=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(js_pi_hMax(Vf_teCour),Pi_js_FormTop()),20),8,0,50,0);$("#CH_PI_VALS_ENREGISTRE").parent().css("top",Vl_hMax);$("#CH_PI_EVT_VALS_AJOUT").parent().css("top",Vl_hMax);$("#CH_PI_EVT_VALS_ANNUL").parent().css("top",Vl_hMax);Vl_hMax=clWDUtil.oAddition(Vl_hMax,clWDUtil.oAddition($("#CH_PI_VALS_ENREGISTRE").parent().height(),11));Vl_hMax=clWDUtil.oConversionType(clWDUtil.oMax(Vl_hMax,360),8,0,31,0);$("#CH_PI_PARCOURS").height(Vl_hMax);Vl_hMax=clWDUtil.oConversionType(clWDUtil.oSoustraction(clWDUtil.oSoustraction($("#CH_PI_PARCOURS").height(),Pi_js_FormTop()),5),8,0,50,0);$("#CH_PI_FORM_HTML").height(Vl_hMax);delai(js_pi_modif_style_titre_tableau,"50");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function PINAV_PIRECUPGFFICCALIMG(){try{clWDUtil.Try();{clWDUtil.Renvoyer(PINAV_gf_ficCalImg);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function PINAV_PINAVINITHTMLACTIONS(){try{clWDUtil.Try();{$(" .editableChamp \x3E input").each(pi_js_chp_format);$(".thm, .evt").each(pi_js_tabindices);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function PINAV_PINAVRECHERCHEVALS(Vl_vals,Vl_cod){try{clWDUtil.Try();{var Vl_i=1;var Vl_occurence=clWDUtil.oConversionType(Vl_vals.length,8,0,8,0);while((Vl_i<=Vl_occurence)){if((clWDTableau.oCreeGetIndice(pi_ligneEvt,Vl_vals,Vl_i).ind==Vl_cod)){clWDUtil.Renvoyer(Vl_i);return;}Vl_i=Vl_i+1;}clWDUtil.Renvoyer(-1);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
// Gestion de l'événement lancé lorsque l'utilisateur appuie sur une touche dans un champ numérique.
//
function js_pi_chp_numKeyPress(f_evt) 
{ 
	switch (document.documentElement.lang) {
		case 'fr':
		case 'es':
			l_sep = ',';
			break;
		default:
			l_sep = '.';
	}
	// //////////////////////////////////////////////// //
	// On lance la vérification de saisie               //
	// //////////////////////////////////////////////// //
	
	// Comportement normal gardé pour [cmd/Ctrl, les flèches, Suppr. et Retour Arrière ('<-')]
	if (f_evt.metaKey || f_evt.which <= 0 || f_evt.which == 8) { return true; }

	// Initialisation des variables (raccourci syntaxique)
	var l_format  = f_evt.target.getAttribute('data-format').split(',');
	var l_posCurs = f_evt.target.selectionStart;
	var l_val     = f_evt.target.value;
	var l_saisie  = String.fromCharCode(f_evt.which);
	
	js_log("info",l_format[0] + " : " + l_format[1]);
	
	// //////////////////////////////////////////////// //
	// On ajoute la virgule à la place de l'utilisateur //
	// //////////////////////////////////////////////// //
	
	if (l_val.indexOf(l_sep) < 0) {
		if (0 <= parseInt(l_saisie) && parseInt(l_saisie) <= 9) {
			if (l_posCurs === parseInt(l_format[0])) {
				l_saisie = l_sep + l_saisie;
				++l_posCurs;
			}
		} else {
			l_saisie = l_sep;
		}
	}
			
	// //////////////////////////////////////////////// //
	// On altère la valeur du champ selon la saisie     //
	// //////////////////////////////////////////////// //
	
	// On vérifie le format en tenant compte de la saisie
	l_val = l_val.substring(0, l_posCurs) + l_saisie + l_val.substring(l_posCurs);
	// Le navigateur ne prend pas la touche, mais plutôt la nouvelle valeur (si validée)
	if (pi_js_ctrl_num(l_val, l_format, l_sep)) { f_evt.target.value = l_val; }
	
	// //////////////////////////////////////////////// //
	// On met le curseur d'écriture à la bonne place    //
	// //////////////////////////////////////////////// //
	++l_posCurs;
	f_evt.target.setSelectionRange(l_posCurs, l_posCurs);
	
	// On empêche l'écriture directe car on vient de la faire.
	return false;
}
// Récupère la hauteur maximale des fils d'un élément, puis la retourne
// f_id: chaine -- l'identifiant HTML (Alias) du champ dont on calcule la hauteur
function js_pi_hMax(f_id)
{
	var l_hMax = 0;
	var l_estMax = function (f_ind, f_elt) {
		l_hMax = Math.max(l_hMax, $(f_elt).height() + $(f_elt).position().top);
	};
	// Pour tout les champs dans le thème/événement en cours de consultation
	$("#" + f_id).children().each(l_estMax);
	return l_hMax;
}

function js_pi_verif_depasse_chp(f_pas)
{
	f_pas = f_pas || 20;
	var l_hauteurForms = $("#forms").parent().height() - f_pas;
	var l_depasse = false;
	$("#forms").parent().find("div:visible > div:visible > div.editable").each( 
		function (indice, element) { 
			if($(element).height() + $(element).position().top > l_hauteurForms) {
				l_depasse = true;
				return false;
			} 
		}
	);
	return l_depasse;
}

// Validation du formulaire d'ajout de champ
// qui implique la création de ce dernier
// TODO : les commentaires par 3 lignes représentent des sous-fonctions (pas encore facto)
function pi_js_chp_modele_ajoute(f_form, f_parent, f_listes, f_codChp) {
	f_form.cType = parseInt(f_form.cType);
	
	if( (f_form.cType > 0 && f_form.cType < 5) || f_form.cType == 6 || f_form.cType == 8)
	{
		// ///////////////////// //
		// Création des éléments //
		// ///////////////////// //
		var l_champLabel    	= document.createElement('div');
		var l_conteneurLabel	= document.createElement('div');
		var l_label         	= document.createElement('label');
		var l_conteneurChamp	= document.createElement('div');
		var l_divG			= document.createElement('div');
		var l_divM			= document.createElement('div');
		var l_divD			= document.createElement('div');
		
		
		var l_champ = false;
		if ((f_form.cType > 0 && f_form.cType < 4) || (f_form.cType == 6) || (f_form.cType == 8) ) {
			l_champ = document.createElement('input');
			// Compatibilité HTML5 navigateurs incomplète ...
			l_champ.type = 'text';
		} else if (f_form.cType == 4)
			l_champ = document.createElement('select');
		else	
			js_log("erreur", "Type de champ inconnu.");
		
		// ////////////////////////////////////// //
		// Ajout des id sur les éléments          //
		// ////////////////////////////////////// //
		
		l_champLabel.id		= f_codChp + 'P';
		l_conteneurLabel.id	= f_codChp + 'L';
		l_conteneurChamp.id	= f_codChp + 'C';
		l_champ.id			= f_codChp;
		l_champ.name			= f_codChp;
		l_divG.id				= f_codChp + 'G';
		l_divM.id				= f_codChp + 'M';
		l_divD.id				= f_codChp + 'D';
		l_champLabel.title		= 'Code du champ : ' + f_codChp;
		
		l_label.setAttribute("for", f_codChp);
		
		// ////////////////////////////////////// //
		// Ajout des classes permettant l'édition //
		// ////////////////////////////////////// //
		l_champLabel.className     = 'editable';
		l_conteneurLabel.className = 'editableLabel';
		l_conteneurChamp.className = 'editableChamp';
		
		l_divG.className = 'divresize';
		l_divD.className = 'divresize';
		l_divM.className = 'divresize';
		
		l_divG.innerHTML = '&nbsp;';
		l_divD.innerHTML = '&nbsp;';
		l_divM.innerHTML = '&nbsp;';
		
		// //////////////////////////////////////////// //
		// Style commun (par défaut et position de BDD) //
		// //////////////////////////////////////////// //
		// Le texte du label ne dépasse pas
		l_conteneurLabel.style.overflow      = 'hidden';
		l_conteneurLabel.style.textOverflow  = 'ellipsis';
		l_conteneurLabel.style.OTextOverflow = 'ellipsis';
		l_conteneurLabel.style.whiteSpace    = 'nowrap';
		// Position/taille du label
	//	l_conteneurLabel.style.left   = ((f_form.lX) ? f_form.lX : '01')+'%';
	//	l_conteneurLabel.style.top    = ((f_form.lY) ? f_form.lY : '10')+'%';
	//	l_conteneurLabel.style.width  = ((f_form.lL) ? f_form.lL : '30')+'%';
	//	l_conteneurLabel.style.height = ((f_form.lH) ? f_form.lH : '80')+'%';
		l_conteneurLabel.style.left   = '3px';
		l_conteneurLabel.style.top    = '0px';
		l_conteneurLabel.style.width  = '130px';
		l_conteneurLabel.style.height = '21px';
		
		
		// Position/taille du champ
	//	l_conteneurChamp.style.left   = ((f_form.cX) ? f_form.cX : '50')+'%';
	//	l_conteneurChamp.style.top    = ((f_form.cY) ? f_form.cY : '10')+'%';
	//	l_conteneurChamp.style.width  = ((f_form.cL) ? f_form.cL : '50')+'%';
	//	l_conteneurChamp.style.height = ((f_form.cH) ? f_form.cH : '80')+'%';
		l_conteneurChamp.style.left   = '136px';
		l_conteneurChamp.style.top    = '0px';
		l_conteneurChamp.style.width  = '140px';
		l_conteneurChamp.style.height = '21px';
		// Position/taille du couple label/champ
	//	l_champLabel.style.left   = (f_form.X) ? f_form.X : '05px';
	//	l_champLabel.style.top    = (f_form.Y) ? f_form.Y : '05px';
	//	l_champLabel.style.width  = (f_form.L) ? f_form.L : '209px';
	//	l_champLabel.style.height = (f_form.H) ? f_form.H : '23px';
		l_champLabel.style.left   = '5px';
		l_champLabel.style.top    = f_form.Y + 'px';
		l_champLabel.style.width  = '281px';
		l_champLabel.style.height = '23px';
	
		if(!f_form.vis)	
			l_champLabel.style.opacity = '0.4';
		
		// position des divs de redimensionnement.
		
		l_divG.style.left   = '0px';
		l_divG.style.width  = '3px';
		l_divG.style.height = '21px';
		
		l_divM.style.left   = '133px';
		l_divM.style.width  = '3px';
		l_divM.style.height = '21px';
		
		l_divD.style.left   = '278px';
		l_divD.style.width  = '3px';
		l_divD.style.height = '21px';
		
		// Positions absolues pour le glisser/redimmensionner
		l_conteneurChamp.style.position = 'absolute';
		l_conteneurLabel.style.position = 'absolute';
		l_champLabel.style.position     = 'absolute';
		l_champ.style.width = l_champ.style.height = '100%';
		l_label.style.width = l_label.style.height = '100%';
		
		// ///////////////////////////////////////////// //
		// Personnalisations demandées par le formulaire //
		// ///////////////////////////////////////////// //
		// Sur le label
		l_label.innerHTML        = UTILESNAV_ENCOREHTML(f_form.lib);
		l_label.style.color      = f_form.cLib;
		l_label.style.fontWeight = (f_form.gLib) ? 'bold' : 'normal';
		
		l_champ.style.backgroundColor = f_form.cFSai;
		l_champ.style.color           = f_form.cSai;
		l_champ.style.fontWeight      = (f_form.gSai) ? 'bold' : 'normal';
		// On peut utiliser l_champ.dataset.type (dans l'esprit JS), 
		// mais compatibilité IE<11 ...
		l_champ.setAttribute("data-type", f_form.cType);
		l_champ.setAttribute("data-format", f_form.format);
		if(f_form.cType == 3)
		{
			l_champ.setAttribute("data-datelieed", f_form.datelieed);
			l_champ.setAttribute("data-datelieef", f_form.datelieef);
		}
		if(f_form.cType == 4)
		{
			l_champ.setAttribute("data-liste", f_form.liste);
		}
		if(f_form.dansTab)
		{
			l_champ.setAttribute("data-postab", f_form.posTab);
			l_champ.setAttribute("data-ptab", f_form.pTab);
		}
		
		if (f_form.obli) {
			l_label.innerHTML += '<span style="color:red">*</span>';
			l_champ.setAttribute('required','true');
		}
		
		l_champ.setAttribute("data-donper", (f_form.donper) ? 'O' : 'N');

		
		// ///////////////////////////////////// //
		// Création du composant DOM label/champ //
		// ///////////////////////////////////// //
		l_conteneurLabel.appendChild(l_label);
		l_conteneurChamp.appendChild(l_champ);
		
		l_champLabel.appendChild(l_divG);
		l_champLabel.appendChild(l_conteneurLabel);
		l_champLabel.appendChild(l_divM);
		l_champLabel.appendChild(l_conteneurChamp);
		l_champLabel.appendChild(l_divD);
		
		// //////////////////////////////////////////////// //
		// Ajout du composant label/champ dans la page HTML //
		// //////////////////////////////////////////////// //
		document.getElementById(f_parent).appendChild(l_champLabel);
		
		// Application du formatage particulier ou de la liste associée //
		if (l_champ.tagName === 'INPUT')
			pi_js_chp_format(l_champ);
		else if (l_champ.tagName === 'SELECT')
			pi_js_chp_liste_html(l_champ, f_listes, f_form.liste);
		
		// Centrage vertical du label après toute la création pour tenir compte de la taille du parent
		l_label.style.lineHeight = $(l_conteneurLabel).height() + 'px';
	}
	else if(f_form.cType == 5)
	{
		// ///////////////////// //
		// Création des éléments //
		// ///////////////////// //
		var l_champLabel    	= document.createElement('div');
		var l_conteneurLabel	= document.createElement('div');
		var l_label         	= document.createElement('p');
		var l_divG			= document.createElement('div');
		var l_divD			= document.createElement('div');

		
		// ////////////////////////////////////// //
		// Ajout des id sur les éléments          //
		// ////////////////////////////////////// //
		
		l_champLabel.id		= f_codChp + 'P';
		l_conteneurLabel.id	= f_codChp + 'L';
		l_divG.id				= f_codChp + 'G';
		l_divD.id				= f_codChp + 'D';
		l_champLabel.title		= 'Code du champ : ' + f_codChp;
		
		// ////////////////////////////////////// //
		// Ajout des classes permettant l'édition //
		// ////////////////////////////////////// //
		l_champLabel.className     = 'editable';
		l_conteneurLabel.className = 'editableLabel';
		
		l_divG.className = 'divresize';
		l_divD.className = 'divresize';
		
		l_divG.innerHTML = '&nbsp;';
		l_divD.innerHTML = '&nbsp;';
		
		// //////////////////////////////////////////// //
		// Style commun (par défaut et position de BDD) //
		// //////////////////////////////////////////// //
		// Le texte du label ne dépasse pas
		l_conteneurLabel.style.overflow      = 'hidden';
		l_conteneurLabel.style.textOverflow  = 'ellipsis';
		l_conteneurLabel.style.OTextOverflow = 'ellipsis';
		l_conteneurLabel.style.whiteSpace    = 'nowrap';

		l_conteneurLabel.style.left   = '3px';
		l_conteneurLabel.style.top    = '0px';
		l_conteneurLabel.style.width  = '275px';
		l_conteneurLabel.style.height = '21px';

		// Position/taille du couple label/champ
		l_champLabel.style.left   = '5px';
		l_champLabel.style.top    = f_form.Y + 'px';
		l_champLabel.style.width  = '281px';
		l_champLabel.style.height = '23px';
		
		if(!f_form.vis)	
			l_champLabel.style.opacity = '0.4';
		
		// position des divs de redimensionnement.
		
		l_divG.style.left   = '0px';
		l_divG.style.width  = '3px';
		l_divG.style.height = '21px';
		
		l_divD.style.left   = '278px';
		l_divD.style.width  = '3px';
		l_divD.style.height = '21px';
		
		// Positions absolues pour le glisser/redimmensionner
		l_conteneurLabel.style.position = 'absolute';
		l_champLabel.style.position     = 'absolute';
		l_label.style.width = l_label.style.height = '100%';
		
		// ///////////////////////////////////////////// //
		// Personnalisations demandées par le formulaire //
		// ///////////////////////////////////////////// //
		// Sur le label
		l_label.innerHTML        = UTILESNAV_ENCOREHTML(f_form.lib);
		l_label.style.color      = f_form.cLib;
		l_label.style.fontWeight = (f_form.gLib) ? 'bold' : 'normal';
				
		// ///////////////////////////////////// //
		// Création du composant DOM label/champ //
		// ///////////////////////////////////// //
		l_conteneurLabel.appendChild(l_label);

		
		l_champLabel.appendChild(l_divG);
		l_champLabel.appendChild(l_conteneurLabel);
		l_champLabel.appendChild(l_divD);
		
		// //////////////////////////////////////////////// //
		// Ajout du composant label/champ dans la page HTML //
		// //////////////////////////////////////////////// //
		document.getElementById(f_parent).appendChild(l_champLabel);
		
		
		// Centrage vertical du label après toute la création pour tenir compte de la taille du parent
		l_label.style.lineHeight = $(l_conteneurLabel).height() + 'px';
	}
	else if(f_form.cType == 7)
	{
		// ///////////////////// //
		// Création des éléments //
		// ///////////////////// //
		var l_champLabel    	= document.createElement('div');
		var l_conteneurLabel	= document.createElement('div');
		var l_label         	= document.createElement('p');
		var l_conteneurChamp	= document.createElement('div');
		var l_divG			= document.createElement('div');
		var l_divM			= document.createElement('div');
		var l_divD			= document.createElement('div');
		
		
		// ////////////////////////////////////// //
		// Ajout des id sur les éléments          //
		// ////////////////////////////////////// //
		
		l_champLabel.id		= f_codChp + 'P';
		l_conteneurLabel.id	= f_codChp + 'L';
		l_conteneurChamp.id	= f_codChp + 'C';
		l_divG.id				= f_codChp + 'G';
		l_divM.id				= f_codChp + 'M';
		l_divD.id				= f_codChp + 'D';
		l_champLabel.title		= 'Code du champ : ' + f_codChp;
		
		// ////////////////////////////////////// //
		// Ajout des classes permettant l'édition //
		// ////////////////////////////////////// //
		l_champLabel.className     = 'editable';
		l_conteneurLabel.className = 'editableLabel';
		
		l_divG.className = 'divresize';
		l_divD.className = 'divresize';
		l_divM.className = 'divresize';
		
		l_divG.innerHTML = '&nbsp;';
		l_divD.innerHTML = '&nbsp;';
		l_divM.innerHTML = '&nbsp;';
		
		// //////////////////////////////////////////// //
		// Style commun (par défaut et position de BDD) //
		// //////////////////////////////////////////// //
		// Le texte du label ne dépasse pas
		l_conteneurLabel.style.overflow      = 'hidden';
		l_conteneurLabel.style.textOverflow  = 'ellipsis';
		l_conteneurLabel.style.OTextOverflow = 'ellipsis';
		l_conteneurLabel.style.whiteSpace    = 'nowrap';
		
		// Position/taille du label
		l_conteneurLabel.style.left   = '3px';
		l_conteneurLabel.style.top    = '0px';
		l_conteneurLabel.style.width  = '130px';
		l_conteneurLabel.style.height = '21px';
		
		
		// Position/taille du champ
		l_conteneurChamp.style.overflow      = 'hidden';
		l_conteneurChamp.style.left   = '136px';
		l_conteneurChamp.style.top    = '0px';
		l_conteneurChamp.style.width  = '140px';
		l_conteneurChamp.style.height = '21px';
		
		// Position/taille du couple label/champ
		l_champLabel.style.left   = '5px';
		l_champLabel.style.top    = f_form.Y + 'px';
		l_champLabel.style.width  = '281px';
		l_champLabel.style.height = '23px';
		
		if(!f_form.vis)	
			l_champLabel.style.opacity = '0.4';
		
		// position des divs de redimensionnement.
		
		l_divG.style.left   = '0px';
		l_divG.style.width  = '3px';
		l_divG.style.height = '21px';
		
		l_divM.style.left   = '133px';
		l_divM.style.width  = '3px';
		l_divM.style.height = '21px';
		
		l_divD.style.left   = '278px';
		l_divD.style.width  = '3px';
		l_divD.style.height = '21px';
		
		// Positions absolues pour le glisser/redimmensionner
		l_conteneurChamp.style.position = 'absolute';
		l_conteneurLabel.style.position = 'absolute';
		l_champLabel.style.position     = 'absolute';
		l_label.style.width = l_label.style.height = '100%';
		
		l_conteneurChamp.setAttribute("data-donper", (f_form.donper) ? 'O' : 'N');
		
		if(f_form.dansTab)
		{
			l_conteneurChamp.setAttribute("data-postab", f_form.posTab);
			l_conteneurChamp.setAttribute("data-ptab", f_form.pTab);
		}
		
		l_conteneurChamp.style.color           = f_form.cSai;
		l_conteneurChamp.style.fontWeight      = (f_form.gSai) ? 'bold' : 'normal';
		
		// ///////////////////////////////////////////// //
		// Personnalisations demandées par le formulaire //
		// ///////////////////////////////////////////// //
		// Sur le label
		l_label.innerHTML        = UTILESNAV_ENCOREHTML(f_form.lib);
		l_label.style.color      = f_form.cLib;
		l_label.style.fontWeight = (f_form.gLib) ? 'bold' : 'normal';
		
		var l_champOui 			= document.createElement('input');
		var l_labelOui         	= document.createElement('label');
		var l_champNon 			= document.createElement('input');
		var l_labelNon         	= document.createElement('label');
		var l_divOui				= document.createElement('div');
		var l_divNon				= document.createElement('div');
		
		l_divOui.style.position		= 'absolute';
		l_divNon.style.position		= 'absolute';
		
		l_divOui.style.width			= '45px';
		l_divOui.style.left			= '3px';
		l_divOui.style.top				= '3px';
		l_divNon.style.width			= '45px';
		l_divNon.style.left			= '90px';
		l_divNon.style.top				= '3px';
		
		l_champOui.id			= f_codChp + 'Oui';
		l_champOui.name		= f_codChp;
		l_champNon.id			= f_codChp + 'Non';
		l_champNon.name		= f_codChp;
		
		l_labelOui.innerHTML	= 'Oui';
		l_labelNon.innerHTML	= 'Non';
		
		l_labelOui.setAttribute("for", f_codChp + 'Oui');
		l_labelNon.setAttribute("for", f_codChp + 'Non');
		
		l_labelOui.style.marginLeft      = '5px';
		l_labelNon.style.marginLeft      = '5px';
		
		l_champOui.type = 'radio';
		l_champNon.type = 'radio';
		l_champOui.value = 'Oui';
		l_champNon.value = 'Non';
		
		if (f_form.obli) {
			l_label.innerHTML += '<span style="color:red">*</span>';
			l_champOui.setAttribute('required','true');
		}
		
		// ///////////////////////////////////// //
		// Création du composant DOM label/champ //
		// ///////////////////////////////////// //
		l_divOui.appendChild(l_champOui);
		l_divOui.appendChild(l_labelOui);
		l_divNon.appendChild(l_champNon);
		l_divNon.appendChild(l_labelNon);

		l_conteneurLabel.appendChild(l_label);
		l_conteneurChamp.appendChild(l_divOui);
		l_conteneurChamp.appendChild(l_divNon);
		
		l_champLabel.appendChild(l_divG);
		l_champLabel.appendChild(l_conteneurLabel);
		l_champLabel.appendChild(l_divM);
		l_champLabel.appendChild(l_conteneurChamp);
		l_champLabel.appendChild(l_divD);
		
		// //////////////////////////////////////////////// //
		// Ajout du composant label/champ dans la page HTML //
		// //////////////////////////////////////////////// //
		document.getElementById(f_parent).appendChild(l_champLabel);
				
		// Centrage vertical du label après toute la création pour tenir compte de la taille du parent
		l_label.style.lineHeight = $(l_conteneurLabel).height() + 'px';
//		l_champOui.style.lineHeight = $(l_conteneurLabel).height() + 'px';
//		l_champNon.style.lineHeight = $(l_conteneurLabel).height() + 'px';
//		l_conteneurChamp.style.lineHeight = $(l_conteneurLabel).height() + 'px';
	}
	else
	{
		return false;
	}

	return true;
}

function pi_js_te_recup_vals(f_idTE)
{
	var namepre = '0';
	// Si on ne fourni pas d'identifiant
	if (!f_idTE) return '';
	// D'un champ de saisie, on retourne un couple [piinf_cod, valeur], '[[]]' pour donner un tableau de tableau
	var l_recupChpVal = function (f_ind, f_elt) {
		return [[parseInt(f_elt.name, 10), $(f_elt).val()]];
	};
	// On sélectionne les champs de saisie qui nous intéressent et on récupère les valeurs 
	var l_vals = $("#" + f_idTE + " > .editable > .editableChamp").children("input, select").map(l_recupChpVal).get(); // récupération des valeurs des champs sauf les Oui Non.
	
	l_vals = l_vals.concat($("#" + f_idTE + " > .editable").find("input:checked").map(l_recupChpVal).get());  // Récupération des valeurs des Oui Non.
	
	l_recupChpVal = function (f_ind, f_elt) {
		if(namepre == f_elt.name)
		{
			return [[parseInt(f_elt.name, 10), '']];
		}
		namepre = f_elt.name
	};
	
	l_vals = l_vals.concat($("#" + f_idTE + " > .editable").find("input:radio:not(:checked)").map(l_recupChpVal).get()); // Récupération des Oui Non dont la case n'est éventuellement pas coché.
	
	// On retourne le tout au format JSON pour l'envoyer en ajax
	return JSON.stringify(l_vals);
}
function pi_js_mode_edition(f_idTE)
{
	// VERIFICATION QUE LES PARAMETRES PASSES SONT UN MINIMUM COHERENTS
	if (!f_idTE) {
		js_log("erreur", "pi_js_mode_edition", "L'identifiant HTML du thème ou événement est vide.");return false;
	} else if (!document.getElementById(f_idTE)) {
		js_log("erreur", "pi_js_mode_edition", "L'identifiant HTML du thème ou événement ne renvoie pas sur un élément HTML.");return false;
	}
	
	// VARIABLES
	var l_te = $("#" + f_idTE);
	// Conteneur seulement: objets contenant resp. le lib et le sai
	var l_label; var l_champ;
	// Limites du redimensionnement en cours
	var l_limite = {};
	// Position/Taille précédente
//	var l_precedent = {};
	var l_redimDir = 'n, e, s, w, ne, se, sw, nw';
	// FONCTIONS PARTICULIERES POUR LE CONTENEUR 
	// Fonctions locales / comportement spécial
	var l_conteneurDragResizeStart = function(f_evt, f_ui) {
		js_log("info","l_conteneurDragResizeStart");
		l_label = f_ui.helper.children('.editableLabel:first');
		l_champ = f_ui.helper.children('.editableChamp:first');
		
		l_limite.gauche = 5;
		l_limite.haut   = 5;
		l_limite.droite = f_ui.helper.parent().width() + 10;
//		l_precedent.gauche = f_ui.position.left;
//		l_precedent.haut   = f_ui.position.top;
//		if (f_ui.size) {
//			l_precedent.largeur = f_ui.size.width;
//			l_precedent.hauteur = f_ui.size.height;
//		}
	};
	var l_conteneurDrag = function(f_evt,f_ui) {
		js_log("info","l_conteneurDrag");
		if (f_ui.position.top + f_ui.helper.height() + 20 > f_ui.helper.parent().height()) {
//			PINAV_PIWMPARAMREDIMONGLET();
			PINAV_PIWMREDIMONGLET(CH_ONGLET_PI_PI_RECUP_GF_TECOUR());
			l_limite.bas = l_limite.haut + f_ui.helper.parent().height() + 10;
		}
		
//		if (f_ui.position.top < 5 || f_ui.position.left < 5 || f_ui.position.left + f_ui.helper.width() > f_ui.helper.parent().width()) {
//			f_ui.position.top = l_precedent.haut;
//			f_ui.position.left = l_precedent.gauche;
//		} else {
//			l_precedent.haut = f_ui.position.top;
//			l_precedent.gauche = f_ui.position.left;
//		}
		
		if (f_ui.position.top < 5)
			f_ui.position.top = 5;
		if (f_ui.position.left < 5)
			f_ui.position.left = 5;
		if (f_ui.position.left + f_ui.helper.width() > f_ui.helper.parent().width())
			f_ui.position.left = f_ui.helper.parent().width() - f_ui.helper.width() - 9;
		
	};
	// OPTIONS DES ELEMENTS POUR LE GLISSER/DEPOSER/REDIMENSIONNER
	// Options de redimensionnement
	var l_optConteneurResize = { 
		minHeight: 20, minWidth: 50, containment: 'parent', grid: 2, handles: l_redimDir, 
		start: l_conteneurDragResizeStart, 
		resize: function (f_evt,f_ui) { pi_js_resize_conteneur(f_evt, f_ui, l_label, l_champ, l_precedent); }, 
		cancel: null };
	var l_optLibResize = { 
		minWidth: 0, containment: 'parent', grid: 2, handles: l_redimDir, 
		start:  function (f_evt,f_ui) { pi_js_drag_resize_start(l_limite, l_precedent, f_ui, f_ui.element.siblings('.editableChamp:first')); }, 
		resize: function (f_evt,f_ui) { pi_js_drag_resize_limit(f_ui, l_limite, l_precedent, true); }, 
		cancel: null };
	var l_optSaiResize = { 
		minWidth: 15, containment: 'parent', grid: 2, handles: l_redimDir, 
		start: function (f_evt,f_ui) { pi_js_drag_resize_start(l_limite, l_precedent, f_ui, f_ui.element.siblings('.editableLabel:first')); }, 
		resize: function (f_evt,f_ui) { pi_js_drag_resize_limit(f_ui, l_limite, l_precedent);}, 
		cancel: null };	
	// Options de glisser/déposer
	var l_optConteneurDrag = { 
		start: l_conteneurDragResizeStart,
		drag: l_conteneurDrag, 
		stop: function (f_evt,f_ui) { js_log("info","STOP"); },
		cancel: null,
		grid : [10 , 10] };
	var l_optLibDrag = { 
		containment: 'parent', 
		start: function (f_evt,f_ui) { pi_js_drag_resize_start(l_limite, l_precedent, f_ui, f_ui.helper.siblings(".editableChamp:first")); }, 
		drag:  function (f_evt,f_ui) { pi_js_drag_resize_limit(f_ui, l_limite, l_precedent); }, 
		cancel: null };	
	var l_optSaiDrag = { 
		containment: 'parent', 
		start: function (f_evt,f_ui) { pi_js_drag_resize_start(l_limite, l_precedent, f_ui, f_ui.helper.siblings(".editableLabel:first")); }, 
		drag:  function (f_evt,f_ui) { pi_js_drag_resize_limit(f_ui, l_limite, l_precedent); }, 
		cancel: null };
	// APPLICATION SUR LE CORPS HTML - INITIALISATION
//	l_te.children('.editable').addClass('edition').dblclick({formID: f_formModID}, pi_js_modifier_chp).resizable(l_optConteneurResize).draggable(l_optConteneurDrag);
	l_te.children('.editable').addClass('edition').dblclick(pi_js_modifier_chp).draggable(l_optConteneurDrag);
//	l_te.find('.editableLabel').resizable(l_optLibResize).draggable(l_optLibDrag);
//	l_te.find('.editableChamp').resizable(l_optSaiResize).draggable(l_optSaiDrag);

	$('.divresize').addClass('drON').mousedown(js_pi_onclic_div_resize);
	
	// OK
	js_log("info", "pi_js_mode_edition", "Vous êtes en mode édition.");
	return true;
}

function pi_js_ch_mod_obli(f_evt, f_lib, f_sai) 
{
	// SI le champ est obligatoire
	if (f_evt.target.checked) {
		f_sai.setAttribute('required', 'true');
		// SI l'astérisque rouge n'existe pas ALORS on l'ajoute
		if (f_lib.lastChild.tagName !== "SPAN") {
			f_lib.innerHTML += '<span style="color:red">*</span>';
		} else if (f_lib.lastChild.innerHTML == "!") {
			f_lib.lastChild.innerHTML = "* !";
		}
	} else {
		// SI le champ était obligatoire, ALORS on le rend facultatif
		if (f_sai.hasAttribute('required'))
			f_sai.removeAttribute('required');
		// SI l'astérisque rouge existe ALORS on la supprime
		if (f_lib.lastChild.tagName === "SPAN" && f_lib.lastChild.innerHTML == "*") {
			f_lib.removeChild(f_lib.lastChild);
		} else if (f_lib.lastChild.tagName === "SPAN" && f_lib.lastChild.innerHTML == "* !") {
			f_lib.lastChild.innerHTML = "!";
		}
	}
}

function pi_js_fte_html_ajoute(f_type, f_idFam, f_idTE)
{	
	var l_parent = document.getElementById("forms").parentNode;
	var l_type;
	var l_element = document.createElement("div");
	if (f_type == 1) {
		l_element.id = "fam" + f_idFam;
		l_type = "fam";
	} else if (f_type == 2) {
		l_element.id = "thm" + f_idTE;
		l_type = "thm";
		l_parent = document.getElementById("fam"+f_idFam);
	} else if (f_type == 3) {
		l_element.id = "evt" + f_idTE;
		l_type = "evt";
		l_parent = document.getElementById("fam"+f_idFam);
	} else {
		return "";
	}
	l_element.className     = l_type;
	l_element.style.width   = '100%';
	l_element.style.height  = '100%';
	l_element.style.display = 'none';
	
	l_parent.appendChild(l_element);
	
	return l_element.id;
}
// Vérifie si la valeur de la cible de l'event respecte le format
// TODO : voir les optimisations possibles.
// Param1 : f_valeur : Valeur à tester
// Param2 : f_format : Format numérique demandé [0: taille de la partie entière, 1: taille de la partie décimale (= 0 si entier)]
// Retourne vrai si le format est respecté dans la valeur
function pi_js_ctrl_num(f_val, f_format)
{
	var l_motifs, l_motif, l_regexp;
	l_motifs = {
		pEntiere: "^[0-9]{0,"+ f_format[0] +"}", 
		separateur: "[,|\.]", 
		pDecimale: "[0-9]{0,"+ f_format[1] +"}" };
	
	l_motif = l_motifs.pEntiere;
	// Cas nombre réel
	if (f_format.length === 2 && f_format[1] > 0) {
		l_motif += l_motifs.separateur;
		// Un séparateur a déjà été saisi ?
		if (f_val.indexOf('.') > -1 || f_val.indexOf(',') > -1) 
		// oui - on attend une partie décimale 
		l_motif += l_motifs.pDecimale;
		else
		// non - on a le droit de saisir un séparateur
		l_motif += "?";
	}
	l_motif += "$";
	// Mise en oeuvre de la regexp
	l_regexp = new RegExp(l_motif);
	
	return l_regexp.test(f_val);
}

function pi_js_tabindices(f_ind, f_TE)
{
	// On prend tous les fils du thème ou de l'événement sous forme de tableau à trier dans l'ordre de création
	var l_chps = $("#" + f_TE.id).children().toArray();
	// Méthode de tri
	//  SI a.bas au dessus de b.haut OU [b.haut entre a.haut ET a.bas ET a.gauche à gauche de b.gauche] ALORS 
	// 		a est avant b dans le chemin de tabulation
	//  SINON 
	//		b est avant a
//	l_chps = l_chps.sort(function(f_a, f_b) {
//		var l_aX = parseInt(f_a.style.left, 10);
//		var l_bX = parseInt(f_b.style.left, 10);
//		var l_aY = parseInt(f_a.style.top, 10); 
//		var l_bY = parseInt(f_b.style.top, 10);
//		var l_aH = parseInt(f_a.style.height, 10);
//		// Opération ternaire représentant la méthode de tri expliquée au dessus (a.bas = l_aY + l_aH)
//		return ((l_aY+l_aH < l_bY || (l_aY < l_bY && l_bY < l_aY+l_aH && l_aX < l_bX) ) ? -1 : 1 );
//	});
	l_chps = l_chps.sort(function(f_a, f_b) {
		var l_aX = parseInt(f_a.style.left, 10);
		var l_bX = parseInt(f_b.style.left, 10);
		var l_aY = parseInt(f_a.style.top, 10); 
		var l_bY = parseInt(f_b.style.top, 10);
		// Opération ternaire représentant la méthode de tri expliquée au dessus (a.bas = l_aY + l_aH)
		
		if (l_aY<l_bY)
			return -1;
		else if (l_aY>l_bY)
			return 1;
		else if(l_aX<l_bX)
			return -1;
		else
			return 1;
	});
	// On applique le tabIndex (+3 pour laisser les 3 boutons : menu/paramétrage/validationForm)
	for (var i=0;i<l_chps.length;++i)
	$(l_chps[i]).find("input, select").attr('tabindex', i+1000);
}
// Ajoute les valeurs de la liste au champ de ce type
// f_elt : le champ liste
// f_listes  : les listes disponibles
// f_idListe : l'identifiant de la liste à ajouter
function pi_js_chp_liste_html(f_elt, f_listes, f_codListe)
{
	// On récupère la liste à ajouter
	var l_liste = (f_listes).filter(function (f_liste) {return f_liste.cod==f_codListe;})[0];
	var l_html = '';
	
	// On concatène les valeurs de la liste choisie au format html
	l_liste.vals.forEach( function (f_val, f_ind) {l_html += '<option value="' + f_val.tCh[0] + '" >' + f_val.tCh[1] + '</option>';});
	
	// On les met dans le champ liste
	f_elt.innerHTML = l_html;
}
// Applique le format du champ selon son type (et le format, évidemment).
// Le type et le format sont stockés dans des attributs data-* du champ (IE > 5)
// f_elt     : élément sur lequel on applique le format
// f_eltEach : élément sur lequel on applique le format si on est dans un $.each() jQuery

function pi_js_chp_format(f_elt, f_eltEach)
{
	
	// HTML5 ou HTML4
	var l_langue = document.documentElement.lang.substring(0,2) || document.getElementsByName("keywords")[0].lang.substring(0,2);
	// /////////////////////////////////////////////////////////////// //
	// On change de séparateur décimal et de message  selon la langue  //
	// /////////////////////////////////////////////////////////////// //
	var l_errMsg = {
		'fr': "La valeur saisie est incorrecte.",
		'en': "Invalid input."
	};
	var l_sep; 
	switch (l_langue) {
		case "fr":
		case "es":
			l_sep = ",";
			break;
		default:
			l_sep = ".";
	}
	// On récupère l'élément, appel jQuery ou appel normal (dans cet ordre)
	var l_elt = f_eltEach || f_elt;
	
	// //////////////////////////////////// //
	// Application du formatage particulier //
	// //////////////////////////////////// //
	switch (l_elt.getAttribute("data-type")) {
		// Format chaine de caractères
		case '1':

			l_elt.onkeypress = function(f_evt) {
				if (f_evt.metaKey || f_evt.which <= 0 || f_evt.which == 8) { return true; }
				var l_format = f_evt.target.getAttribute("data-format")//.substring(1);
				l_format = parseInt(l_format);
				if (l_format < 1) { l_format = 256; }
				return (l_format > f_evt.target.value.length);
			};
			l_elt.onblur = function(f_evt) {
				var l_format = f_evt.target.getAttribute("data-format")//.substring(1);
				l_format = parseInt(l_format);
				if (l_format < 1) { l_format = 256; }
				if (l_format < f_evt.target.value.length) {
					alert(l_errMsg[l_langue]);
					l_elt.focus();
					l_elt.select();
				}
			};
		break;
		// Format numérique
		case '2':
			l_elt.onkeypress = js_pi_chp_numKeyPress;
			l_elt.onblur = function(f_evt) { 
				var l_format = f_evt.target.getAttribute("data-format").split(',');
				// L'utilisateur ne quitte pas le champ si la valeur saisie est fausse
				if (!pi_js_ctrl_num(f_evt.target.value, l_format)) {
					alert(l_errMsg[l_langue]);
					l_elt.focus();
					l_elt.select();
				}
				
				// si le nombre est trop grande on lance un alerte et on ne quitte pas le champ.
				var l_valeur;
				var l_valeurMaximal;
				var l_targetValue;
				var l_valeurMessage;
			
				l_targetValue = f_evt.target.value.toString();
				
				switch(l_format[1]){
					case '0':
						l_valeurMessage = '2147483647'
						l_valeurMaximal = parseInt(l_valeurMessage);
						l_valeur =  parseInt(l_targetValue) * 1000;
						break;
					case '1':
						l_valeurMessage = '214748364.7'
						l_valeurMaximal = parseFloat(l_valeurMessage) * 10;
						l_valeur =  parseFloat(l_targetValue.replace(',','.')) * 1000;
						break;
					case '2':
						l_valeurMessage = '21474836.47'
						l_valeurMaximal = parseFloat(l_valeurMessage) * 100;
						l_valeur =  parseFloat(l_targetValue.replace(',','.')) * 1000;
						break;
					case '3':
						l_valeurMessage = '2147483.647'
						l_valeurMaximal = parseFloat(l_valeurMessage) * 1000;
						l_valeur =  parseFloat(l_targetValue.replace(',','.')) * 1000;
						break;
					default:			
						l_valeurMessage = '2147483647'
						l_valeurMaximal = parseInt(l_valeurMessage);
						l_valeur =  parseInt(l_targetValue) * 1000;
				}
				
				if (l_valeur > l_valeurMaximal) {
									
					l_errMsg = {
						'fr': "Le nombre saisie est trop grand. ",
						'en': "Number out of range."
					};
					
					alert(l_errMsg[l_langue]);
					
					var element = document.getElementById(f_evt.target.id);										
					element.value =  '';
					
					l_elt.focus();
					l_elt.select();
				}
			};
		break;
		// Format date
		case '3':
			var l_format, l_regExp;
			if (l_langue === 'fr') {
				l_format = 'JJ/MM/AAAA';
				l_regExp = '^([1-9]|[0-2]\\d|3[0-1])\\/((0){0,1}[1-9]|1[0-2])\\/\\d{1,4}$';
			} else {
				l_format = 'MM/DD/YYYY';
				l_regExp = '^((0){0,1}[1-9]|1[0-2])\\/([1-9]|[0-2]\\d|3[0-1])\\/\\d{1,4}$';
			}
			
			// Icône calendrier
			var l_cal = document.createElement('a');
			l_cal.id = 'cal' + l_elt.id;
			l_cal.className = 'cal';
			l_cal.style.position = 'absolute';
			l_cal.style.right    = '0px';
			l_cal.style.top      = '-1px';
			l_cal.href           = 'javascript:{}';
			l_cal.innerHTML      = '<img style="vertical-align:top;" src="' + PINAV_PIRECUPGFFICCALIMG() + '"/>';
			l_elt.parentNode.insertBefore(l_cal, l_elt);
			
			// Copié/collé du code généré par WebDev (par événement JS)
			l_elt.onkeypress = function (f_evt) { return JJMMAA(f_evt, l_format); };
			l_elt.onblur = function (f_evt) {
				reinit(f_evt, l_format);
				VerifRegExp(this,l_regExp);
//				js_pi_control_date_liee(f_evt);
			};
			l_elt.onfocus = function (f_evt) {
				var b=(this.value.length==0);
				init(f_evt,l_format);
				var s=this.value;
				if(b=(b&&(s.length>0)))
					this.value='';
				if(b&&(this.value.length==0)){
					this.value=s;
					SetPositionCaret(this,0);
				} 
			};
			break;
			
		// Format date
		case '6':
			var l_format, l_regExp;

			l_format = 'HH:MM';
//			l_regExp = '^[0-9]{2,2}[:][0-9]{2,2}$'; 
			l_regExp = '^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$';
			
			
			// Copié/collé du code généré par WebDev (par événement JS)
			l_elt.onkeypress = function (f_evt) { 
			return HHMM(f_evt, l_format);
			 };
			 
			l_elt.onblur = function (f_evt) {
				reinit(f_evt, l_format);
				VerifRegExp(this,l_regExp);
				//				js_pi_control_date_liee(f_evt);
			};
			
			l_elt.onfocus = function (f_evt) {
				var b=(this.value.length==0);
				init(f_evt,l_format);
				var s=this.value;
				if(b=(b&&(s.length>0)))
					this.value='';
				if(b&&(this.value.length==0)){
					this.value=s;
					SetPositionCaret(this,0);
				} 
			};
			break;
		// Format Durée en Heures
		case '8':
			var l_format, l_regExp, l_size;
			l_format = 'HH:MM';
			l_regExp = '';			
			
			// Copié/collé du code généré par WebDev (par événement JS)
			l_elt.onkeypress = function (f_evt) { 
				l_size = f_evt.target.getAttribute("data-format");
				l_format = FormatDureeEnHeures(l_size);
				jsValidationDureeEnHeures(f_evt, f_evt.target.id, l_size);
//				return HHMM(f_evt, l_format);
				 };
			
			l_elt.onblur = function (f_evt) {
				// le format doit changer selon le choix du combo 
				l_format =  FormatDureeEnHeures( f_evt.target.getAttribute("data-format"));
				reinit(f_evt, l_format);
				VerifRegExp(this,l_regExp);
				//				js_pi_control_date_liee(f_evt);
			};
			
//			l_elt.onfocus = function (f_evt) {
//			
//				// le format doit changer selon le choix du combo 
//				l_format =  FormatDureeEnHeures( f_evt.target.getAttribute("data-format"));
//				
//				var b=(this.value.length==0);
//				init(f_evt,l_format);
//				var s=this.value;
//				if(b=(b&&(s.length>0)))
//					this.value='';
//				if(b&&(this.value.length==0)){
//					this.value=s;
//					SetPositionCaret(this,0);
//				} 
//			};
			break;
		
		// TYPE inconnu, on n'applique donc pas de format, mais on laisse une erreur dans la console.
		default:
			js_log("erreur", "pi_js_chp_format", 'Type de champ inconnu.');
	}
}


// Lie le formulaire de modification de champ au champ visé par le double clic.
// Puis place le formulaire juste sous le champ à modifier (expérience utilisateur)
// f_evt : l'événement JavaScript lancé par le double-clic
//       currentTarget : le div contenant le champ à modifier
//       data.formID   : contient les ID des éléments du formulaire de modification
//                        (lancé dans la PROCEDURE js_mode_edition)

function pi_js_modifier_chp(f_evt) {

	var l_codChamp;
	var l_type;
	var l_format = '';
	var l_liste = 0;
	var l_lib;
	var l_grasLib;
	var l_coulLib;
	var l_grasChamp = false;
	var l_coulChamp = '';
	var l_coulFondChamp='';
	var l_obligatoir = false;
	var l_visible;
	var l_dateLieeDebut = 0;
	var l_dateLieeFin = 0;
	var l_visibleDansTableau = false;
	var l_positionDansTableau = 0;
	var l_tailleDansTableau = 0;
	var l_donper = false;

	// Couple label/champ ciblés par la modification
	var l_labelChamp = f_evt.currentTarget;
	var l_label = f_evt.currentTarget.getElementsByTagName('label')[0];
	var l_listeChamp = f_evt.currentTarget.querySelectorAll('input, select');
	
	// On initialise la valeur du champ de saisie
	l_codChamp = parseInt(l_labelChamp.id.substring(0,l_labelChamp.id.length-1), 10);
	
	if(l_listeChamp.length == 1)
	{
	
		var l_champ = l_listeChamp[0];
		

		
		l_type = parseInt(l_champ.getAttribute("data-type"), 10);
		l_donper = l_champ.getAttribute("data-donper") == "O";
		l_format = l_champ.getAttribute("data-format");
		l_liste = parseInt(l_champ.getAttribute("data-liste"), 10);
		
		// ////////////////////////////////////////////////////////////////////// //
		// COULEURS: Affectations des couleurs du champ au formulaire
		// ////////////////////////////////////////////////////////////////////// //
		
		// /////////////////////////////// //
		// lTCoul: couleur texte libellé
		// cTCoul: couleur texte champ
		// cFCoul: couleur fond champ
		// /////////////////////////////// //
		l_label.style.color = l_label.style.color || '#000000';
		l_champ.style.color = l_champ.style.color || '#000000';
		l_champ.style.backgroundColor = l_champ.style.backgroundColor || '#ffffff';
			
		js_log("debug", "clib", l_label.style.color, "csai", l_champ.style.color, "cfsai", l_champ.style.backgroundColor);
		l_coulLib = l_label.style.color;
		l_coulChamp = l_champ.style.color;
		l_coulFondChamp = l_champ.style.backgroundColor;
		
		// ////////////////////////////////////////////////////////////////////// //
		// TEXTE LIBELLÉ: Initialisation du libellé du champ
		// ////////////////////////////////////////////////////////////////////// //
		
		l_lib = (l_label.firstChild && l_label.firstChild.nodeType === 3) ? l_label.firstChild.nodeValue : "";
	
		
		// ////////////////////////////////////////////////////////////////////// //
		// GRAS : Initialisation des gras (lGras: label, cGras: champ)
		// ////////////////////////////////////////////////////////////////////// //
		
		l_grasLib = (l_label.style.fontWeight === 'bold');
		l_grasChamp = (l_champ.style.fontWeight === 'bold');
	
		
		// ////////////////////////////////////////////////////////////////////// //
		// CHAMP OBLIGATOIRE: Changement de l'obligation de remplir le champ
		// ////////////////////////////////////////////////////////////////////// //
		
		l_obligatoir  = l_champ.required;
	
		// ////////////////////////////////////////////////////////////////////// //
		// CHAMP VISIBLE: Changement de visibilité
		// ////////////////////////////////////////////////////////////////////// //
		
		l_visible  = l_labelChamp.style.opacity != "0.4";
		
		l_dateLieeDebut = parseInt(l_champ.getAttribute("data-datelieed", 10));
		l_dateLieeFin = parseInt(l_champ.getAttribute("data-datelieef", 10));
		l_positionDansTableau = parseInt(l_champ.getAttribute("data-postab"), 10);
		if(l_positionDansTableau > 0)
			l_visibleDansTableau = true;
		l_tailleDansTableau = parseInt(l_champ.getAttribute("data-ptab"), 10);
	
	}
	else if(l_listeChamp.length == 0)
	{
		
		l_type = 5;
		
		l_label = f_evt.currentTarget.getElementsByTagName('p')[0];
		
		// ////////////////////////////////////////////////////////////////////// //
		// COULEURS: Affectations des couleurs du champ au formulaire
		// ////////////////////////////////////////////////////////////////////// //
		
		// /////////////////////////////// //
		// lTCoul: couleur texte libellé
		// cTCoul: couleur texte champ
		// cFCoul: couleur fond champ
		// /////////////////////////////// //
		l_label.style.color = l_label.style.color || '#000000';
		
		js_log("debug", "clib", l_label.style.color);
		l_coulLib = l_label.style.color;
		
		// ////////////////////////////////////////////////////////////////////// //
		// TEXTE LIBELLÉ: Initialisation du libellé du champ
		// ////////////////////////////////////////////////////////////////////// //
		
		l_lib = (l_label.firstChild && l_label.firstChild.nodeType === 3) ? l_label.firstChild.nodeValue : "";
		
		
		// ////////////////////////////////////////////////////////////////////// //
		// GRAS : Initialisation des gras (lGras: label, cGras: champ)
		// ////////////////////////////////////////////////////////////////////// //
		
		l_grasLib = (l_label.style.fontWeight === 'bold');
		
		
		// ////////////////////////////////////////////////////////////////////// //
		// CHAMP VISIBLE: Changement de visibilité
		// ////////////////////////////////////////////////////////////////////// //
		
		l_visible  = l_labelChamp.style.opacity != "0.4";
		

	}
	else
	{
		l_type = 7;
		
		l_label = f_evt.currentTarget.getElementsByTagName('p')[0];
		
		var l_champ = l_listeChamp[0];
		var l_divChampOuiNon = l_champ.parentNode.parentNode;
		
		l_donper = l_divChampOuiNon.getAttribute("data-donper") == "O";
		
		// ////////////////////////////////////////////////////////////////////// //
		// COULEURS: Affectations des couleurs du champ au formulaire
		// ////////////////////////////////////////////////////////////////////// //
		
		// /////////////////////////////// //
		// lTCoul: couleur texte libellé
		// cTCoul: couleur texte champ
		// cFCoul: couleur fond champ
		// /////////////////////////////// //
		l_label.style.color = l_label.style.color || '#000000';
		l_divChampOuiNon.style.color = l_divChampOuiNon.style.color || '#000000';
		
		js_log("debug", "clib", l_label.style.color, "csai", l_champ.style.color, "cfsai", l_champ.style.backgroundColor);
		l_coulLib = l_label.style.color;
		l_coulChamp = l_divChampOuiNon.style.color;
		
		// ////////////////////////////////////////////////////////////////////// //
		// TEXTE LIBELLÉ: Initialisation du libellé du champ
		// ////////////////////////////////////////////////////////////////////// //
		
		l_lib = (l_label.firstChild && l_label.firstChild.nodeType === 3) ? l_label.firstChild.nodeValue : "";
		
		
		// ////////////////////////////////////////////////////////////////////// //
		// GRAS : Initialisation des gras (lGras: label, cGras: champ)
		// ////////////////////////////////////////////////////////////////////// //
		
		l_grasLib = (l_label.style.fontWeight === 'bold');
		l_grasChamp = (l_divChampOuiNon.style.fontWeight === 'bold');
		
		
		// ////////////////////////////////////////////////////////////////////// //
		// CHAMP OBLIGATOIRE: Changement de l'obligation de remplir le champ
		// ////////////////////////////////////////////////////////////////////// //
		
		l_obligatoir  = l_champ.required;
		
		// ////////////////////////////////////////////////////////////////////// //
		// CHAMP VISIBLE: Changement de visibilité
		// ////////////////////////////////////////////////////////////////////// //
		
		l_visible  = l_labelChamp.style.opacity != "0.4";
		
		l_positionDansTableau = parseInt(l_divChampOuiNon.getAttribute("data-postab"), 10);
		if(l_positionDansTableau > 0)
			l_visibleDansTableau = true;
		l_tailleDansTableau = parseInt(l_divChampOuiNon.getAttribute("data-ptab"), 10);
		
	}
	
	affiche_fen_ajout_modif_champ(false,
								l_codChamp,
								l_type,
								l_format,
								l_liste,
								l_lib,
								l_grasLib,
								l_coulLib,
								l_grasChamp,
								l_coulChamp,
								l_coulFondChamp,
								l_obligatoir,
								l_visible,
								l_dateLieeDebut,
								l_dateLieeFin,
								l_visibleDansTableau,
								l_positionDansTableau,
								l_tailleDansTableau,
								l_donper)
}


function pi_js_resize_conteneur(f_evt, f_ui, f_label, f_champ, f_precedent) 
{
	var l_mouv = {haut: (f_ui.position.top - f_precedent.haut), gauche: (f_ui.position.left - f_precedent.gauche), 
		hauteur: (f_ui.size.height - f_precedent.hauteur), largeur: (f_ui.size.width - f_precedent.largeur)};
	var l_bloqueL = false;
	var l_bloqueH = false;
	
	f_ui.element.find('label:first').css('line-height', f_label.height() + 'px');
	
	// ///////////////////////////////////////////////////////////////// //
	// DEPLACEMENT DU CONTOUR VERS LE LABEL ET LE CHAMP SANS LES TOUCHER //
	// (modification du comportement de base)
	
	// Depuis gauche vers gauche
	if (l_mouv.gauche < 0) {
		f_label.css("left", f_label.position().left - l_mouv.gauche);
		f_champ.css("left", f_champ.position().left - l_mouv.gauche);
		// Depuis la gauche vers la droite
	} else if (l_mouv.gauche > 0) {
		// on va décaler vers la droite si on a déjà "touché" le bord du lib ou sai
		if ( 5 < f_label.position().left - l_mouv.gauche && 5 < f_champ.position().left - l_mouv.gauche) {
			f_label.css("left", f_label.position().left - l_mouv.gauche);
			f_champ.css("left", f_champ.position().left - l_mouv.gauche);
		} else {
			l_bloqueL = true;
		}
		// Depuis la droite
	} else {
		// ... vers la gauche
		if (l_mouv.largeur < 0) {
			// On ajuste la taille du champ et du libelle, ou on bloque le redimensionnement si trop petit
			if (l_mouv.largeur < (f_label.position().left + f_label.width() - f_ui.size.width)) {
				if (20 < (f_label.width() + l_mouv.largeur)) {
					f_label.width( "+=" + l_mouv.largeur);
				} else {
					l_bloqueL = true;
				}
			}
			if (l_mouv.largeur < (f_champ.position().left + f_champ.width() - f_ui.size.width)) {
				if (20 < (f_champ.width() + l_mouv.largeur)) {
					f_champ.width( "+=" + l_mouv.largeur);
				} else {
					l_bloqueL = true;
				}
			}
		}// ... vers la droite => aucune action
	}
	
	// REDIMENSIONNEMENT VERTICAL
	// Depuis le haut vers le haut
	if (l_mouv.haut < 0) {
		f_label.css("top", f_label.position().top - l_mouv.haut);
		f_champ.css("top", f_champ.position().top - l_mouv.haut);
		// Depuis le haut vers le bas
	} else if (l_mouv.haut > 0) {
		if ( 5 < f_label.position().top - l_mouv.haut && 5 < f_champ.position().top - l_mouv.haut) {
			f_label.css("top", f_label.position().top - l_mouv.haut);
			f_champ.css("top", f_champ.position().top - l_mouv.haut);
		} else {
			l_bloqueH = true;
		}
		// Depuis le bas ...
	} else {
		// ... vers le haut
		if (l_mouv.hauteur < 0) {
			// On ajuste la taille du champ et du libelle, ou on bloque le redimensionnement si trop petit
			if (l_mouv.hauteur < (f_label.position().top + f_label.height() - f_ui.size.height)) {
				if (20 < (f_label.height() + l_mouv.hauteur)) {
					f_label.height( "+=" + l_mouv.hauteur);
				} else {
					l_bloqueH = true;
				}
			}
			if (l_mouv.hauteur < (f_champ.position().top + f_champ.height() - f_ui.size.height)) {
				if (20 < (f_champ.height() + l_mouv.hauteur)) {
					f_champ.height( "+=" + l_mouv.hauteur);
				} else {
					l_bloqueH = true;
				}
			}
		}
	}
	
	// MODIFICATION DE LA TAILLE ET DE LA POSITION EN CONSEQUENCE		
	if (l_bloqueH) {
		f_ui.element.css("top", f_precedent.haut);
		f_ui.element.height(f_precedent.hauteur);		
	} else {
		f_precedent.haut = f_ui.position.top;
		f_precedent.hauteur = f_ui.size.height;
	}
	if (l_bloqueL) {
		f_ui.element.css("left", f_precedent.gauche);
		f_ui.element.width(f_precedent.largeur);
	} else {
		f_precedent.gauche = f_ui.position.left;
		f_precedent.largeur = f_ui.size.width;
	}
}

// Cette fonction créé une chaîne HTML représentant un champ éditable.
// Le gros champ éditable est composé de :
// - un conteneur qui contient
//   - un conteneur de label qui contient
//		- un label
//	 - un conteneur de champ qui contient
//      - un champ
//
// Params:
//   f_chp : objet contenant les informations du champ à créer
//   f_listes : les listes de référence pour la création d'une combo
// Retourne: la chaîne HTML représentant le champ
//

// On concatène le code HTML de la forme
// <div conteneur>
//		<div conteneurLabel>
//			<label></label>
//		</div>
//		<div conteneurChamp>
//			[<input> ou <select>] 
//		</div>
// </div>
function pi_js_html_chp(f_chp, f_listes, f_modeEditeur, f_val)
{

	if (!f_chp) {
		js_log("erreur", "pi_js_html_chp", "Le champ à créer n'existe pas.");
		return "";
	}
	
	if ((f_modeEditeur != 1) && f_chp.vis == false) { return ""; }
	
	if (!f_listes) {
		js_log("erreur", "pi_js_html_chp", "Les listes du parcours individuel n'ont pas été fournies.");
		return "";
	}
	
	if((f_chp.cType > 0 && f_chp.cType < 5) || f_chp.cType == 6 || f_chp.cType == 8)
	{
		var l_langue = document.documentElement.lang.substring(0,2) || document.getElementsByName("keywords")[0].lang.substring(0,2);
		// /////////////////////////////////////////////////////////////// //
		// On change de séparateur décimal et de message  selon la langue  //
		// /////////////////////////////////////////////////////////////// //
	
		var l_sep; 
		switch (l_langue) {
			case "fr":
			case "es":
				l_sep = ",";
				break;
			default:
				l_sep = ".";
		}
		
		if (f_chp.cType == 2) {
			if(f_val) {
				f_val = f_val.replace(".", l_sep);
			}
		}

		// On commence la génération du code HTML :
		// div = élément générique
		// id = <code_champ + lettre_marqueur> avec lettre_marqueur P pour le parent du couple, L pour le label et C pour le champ
		// classe CSS pour les retrouver facilement grâce aux sélecteurs jQuery
		var l_champLabel     = '<div id="' + f_chp.cod + 'P" class="editable"' ;
		var l_conteneurLabel = '<div id="' + f_chp.cod + 'L" class="editableLabel" ';
		var l_conteneurChamp = '<div id="' + f_chp.cod + 'C" class="editableChamp" ';
		var l_divG = '<div id="' + f_chp.cod + 'G" class="divresize" ';
		var l_divM = '<div id="' + f_chp.cod + 'M" class="divresize" ';
		var l_divD = '<div id="' + f_chp.cod + 'D" class="divresize" ';
		// Création du label pour le champ
		var l_label = '<label for="' + f_chp.cod + '" ';
		var l_champ = '';
		
		if(f_modeEditeur == 1)
		{
			l_champLabel += ' title="Code du champ : ' + f_chp.cod + '"';
		}
		
		// Si le champ est de type texte/nombre/monnaie/date alors on créé un <input type="text" >
		if ((f_chp.cType > 0 && f_chp.cType < 4) || f_chp.cType == 6 || f_chp.cType == 8) {
			l_champ = '<input type="text" ';
		// Si le champ est de type Combo alors on créé un <select> (combo en HTML)
		} else if (f_chp.cType == 4) {
			l_champ = '<select ';
		// Sinon on retourne faux (type inconnu)
		 } else {
			return '';
		}
		// Le champ reçoit le code du champ comme nom et identifiant (facilite la validation du formulaire)
		l_champ += 'id="' + f_chp.cod + '" name="' + f_chp.cod + '" ';
		/////////////////////////////////////////////////////////////////////////
		//  PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		// On va remplir l'attribut style
		l_champLabel		+= 'style="';
		l_conteneurLabel	+= 'style="';
		l_conteneurChamp	+= 'style="';
		l_label			+= 'style="';
		l_champ			+= 'style="';
		l_divG			+= 'style="';
		l_divM 			+= 'style="';
		l_divD 			+= 'style="';
		
		// Le texte du label ne dépasse pas du label
		l_conteneurLabel += 'overflow:hidden;textOverflow:ellipsis;OtextOverflow:ellipsis;whiteSpace:nowrap;';
		
		// POSITION ET TAILLE
		// Mise en place des positions 
		// -gauche	= X; 
		// -haut		= Y; 
		// -largeur 	= L; 
		// -hauteur 	= H
		// -la position est absolue pour le glisser/redimmensionner, et on ferme les balises
	//	l_conteneurLabel += 'left:'	+ parseInt(f_chp.lX*f_chp.L/100) + 'px;'
	//	+ 'top:'	    + parseInt(f_chp.lY*f_chp.H/100) + 'px;'
	//	+ 'width:' 	+ parseInt(f_chp.lL*f_chp.L/100) + 'px;'
	//	+ 'height:'	+ parseInt(f_chp.lH*f_chp.H/100) + 'px;'
	//	+ 'position:absolute;" > ';
	//	
	//	l_conteneurChamp += 'left:'	+ parseInt(f_chp.cX*f_chp.L/100) + 'px;'
	//	+ 'top:' 	+ parseInt(f_chp.cY*f_chp.H/100) + 'px;'
	//	+ 'width:' 	+ parseInt(f_chp.cL*f_chp.L/100) + 'px;'
	//	+ 'height:'	+ parseInt(f_chp.cH*f_chp.H/100) + 'px;'
	//	+ 'position:absolute;"   >';
	
		l_conteneurLabel += 'left:'	+ f_chp.lX + 'px;'
		+ 'top:'	    + f_chp.lY + 'px;'
		+ 'width:' 	+ f_chp.lL + 'px;'
		+ 'height:'	+ f_chp.lH + 'px;'
		+ 'position:absolute;" > ';
		
		l_conteneurChamp += 'left:'	+ f_chp.cX + 'px;'
		+ 'top:' 	+ f_chp.cY + 'px;'
		+ 'width:' 	+ f_chp.cL + 'px;'
		+ 'height:'	+ f_chp.cH + 'px;'
		+ 'position:absolute;"   >';
		
		l_champLabel     += 'left:'	+ f_chp.X + 'px;'
		+ 'top:'		+ f_chp.Y + 'px;'
		+ 'width:'	+ f_chp.L + 'px;'
		+ 'height:'	+ f_chp.H + 'px;'
		+ 'position:absolute;'
		
		if(!f_chp.vis)
			l_champLabel += 'opacity:0.4;'
		
		l_champLabel += '" >';
		
		l_divG += 'left:0px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
	
		l_divM += 'left:'+(f_chp.cX-3)+'px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		l_divD += 'left:'+(f_chp.cX + f_chp.cL + 2)+'px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		
		
	//	js_log("info",l_champLabel)
	//	js_log("info",l_conteneurLabel)
	//	js_log("info",l_conteneurChamp)
	//	js_log("info",l_divG)
	//	js_log("info",l_divM)
	//	js_log("info",l_divD)
		
		// COULEURS : La couleur du texte et pour le champ la couleur du fond
		l_label += 'width:100%;height:100%;color:' + f_chp.cLib + ';';
		l_champ += 'width:100%;height:100%;color:' + f_chp.cSai + ';background-color:' + f_chp.cFSai + ';';
		// GRAS : Le gras
		if (f_chp.gLib) { l_label += 'font-weight:bold;'; }
		if (f_chp.gSai) { l_champ += 'font-weight:bold;'; }
		
		// Alignement vertical du texte dans le label
		// et on en a fini avec l'attribut style
	//	l_label += 'line-height:' + (f_chp.H*f_chp.lH/100) + 'px;"';
		l_label += 'line-height: '+f_chp.lH+'px; vertical-align:middle;"';
		l_champ += '"';
		/////////////////////////////////////////////////////////////////////////
		//  FIN PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		
		// TYPE ET FORMAT : Ajout des données concernant le type et le format du champ
		l_champ += 'data-type="' + f_chp.cType + '" data-format="' + f_chp.format + '" data-donper="' + ((f_chp.donper) ? 'O' : 'N') + '" ' ;
		
		if(f_chp.cType == 3)
		{
			l_champ += 'data-datelieed="' + f_chp.datelieed + '" data-datelieef="' + f_chp.datelieef + '" ';
		}
		
		if(f_chp.cType == 4)
		{
			l_champ += 'data-liste="' + f_chp.liste + '" ';
		}
		
		if(f_chp.dansTab)
		{
			l_champ += 'data-postab="' + f_chp.posTab + '" data-ptab="' + f_chp.pTab + '" ';
		}
		
		if(f_chp.tri>0)
		{
			l_champ += 'data-tri="' + f_chp.tri + '" data-ordretri="' + f_chp.ordreTri + '" ';
		}
		
		// On ferme la balise label et on ajoute le texte
		l_label += '">' + UTILESNAV_ENCOREHTML(f_chp.lib);
		// CHAMP OBLIGATOIRE : Si le champ est obligatoire ('*' rouge au label, attribut requis au champ)
		// CHAMP AVEC ALERTE : SI le champ est lier a une alerte ('!' rouge au label, attribut requis au champ)
		if (f_chp.codeal > 0 && f_chp.obli) {
			l_label += '<span style="color:red">* !</span>';
			l_champ += 'required="true" ';
		} else if (f_chp.codeal > 0) {
			l_label += '<span style="color:red">!</span>';
		} else if (f_chp.obli) {
			l_label += '<span style="color:red">*</span>';
			l_champ += 'required="true" ';
		}
		// CHAMP CONSULTABLE SEULEMENT <=> pas éditable : grisé
		if (!f_chp.editable || (f_modeEditeur == 2 && f_chp.piabs_val != "")) { l_champ += 'disabled '; }
		// Fini, on ferme les éléments HTML
		l_label += '</label>';
		if (f_val && f_chp.cType != 4) { l_champ += 'value="' + f_val + '" '; }
		l_champ += '>';
		
		// COMBO : Cas particulier pour les listes
		if (f_chp.cType == 4) {
			// On cherche la liste correspondant à l'id dans les infos du champ
			var l_liste = f_listes.filter(function (liste) {return liste.cod==f_chp.liste;})[0];
			// Si la liste existe alors on ajoute les choix dans la combo du champ
			var js_list_opt_html = function(f_valL, f_ind) {
				l_champ += '<option value="' + f_valL.tCh[0] + '"';
				if (f_val && f_val == f_valL.tCh[0]) { l_champ += ' selected'; }
				l_champ += ' >' + f_valL.tCh[1] + '</option>';
			}; 
			if (l_liste && l_liste.vals) {
				l_liste.vals.forEach( js_list_opt_html );
			} else {
				js_log("erreur", "pi_js_html_chp", "Liste liée à ce champ introuvable. (id_chp:" + f_chp.cod + ", id_liste_err:"+f_chp.liste+")");
			}
			// On ferme le code HTML de la combo
			l_champ += '</select>';
		}
	
		return (l_champLabel + l_divG + l_conteneurLabel + l_label + '</div>' + l_divM + l_conteneurChamp + l_champ + '</div>' + l_divD + '</div>');
	}
	else if(f_chp.cType == 5)
	{
		
		// On commence la génération du code HTML :
		// div = élément générique
		// id = <code_champ + lettre_marqueur> avec lettre_marqueur P pour le parent du couple, L pour le label et C pour le champ
		// classe CSS pour les retrouver facilement grâce aux sélecteurs jQuery
		var l_champLabel     = '<div id="' + f_chp.cod + 'P" class="editable"' ;
		var l_conteneurLabel = '<div id="' + f_chp.cod + 'L" class="editableLabel" ';
		var l_divG = '<div id="' + f_chp.cod + 'G" class="divresize" ';
		var l_divD = '<div id="' + f_chp.cod + 'D" class="divresize" ';
		// Création du label pour le champ
		var l_label = '<p ';
		
		if(f_modeEditeur == 1)
		{
			l_champLabel += ' title="Code du champ : ' + f_chp.cod + '"';
		}
		
		/////////////////////////////////////////////////////////////////////////
		//  PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		// On va remplir l'attribut style
		l_champLabel		+= 'style="';
		l_conteneurLabel	+= 'style="';
		l_label			+= 'style="';
		l_divG			+= 'style="';
		l_divD 			+= 'style="';
		
		// Le texte du label ne dépasse pas du label
		l_conteneurLabel += 'overflow:hidden;textOverflow:ellipsis;OtextOverflow:ellipsis;whiteSpace:nowrap;';
		
		l_conteneurLabel += 'left:'	+ f_chp.lX + 'px;'
		+ 'top:'	    + f_chp.lY + 'px;'
		+ 'width:' 	+ f_chp.lL + 'px;'
		+ 'height:'	+ f_chp.lH + 'px;'
		+ 'position:absolute;" > ';
		
		l_champLabel     += 'left:'	+ f_chp.X + 'px;'
		+ 'top:'		+ f_chp.Y + 'px;'
		+ 'width:'	+ f_chp.L + 'px;'
		+ 'height:'	+ f_chp.H + 'px;'
		+ 'position:absolute;'
		
		if(!f_chp.vis)
			l_champLabel += 'opacity:0.4;'
		
		l_champLabel += '" >';
		
		l_divG += 'left:0px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		
		l_divD += 'left:'+(f_chp.lX + f_chp.lL)+'px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		
		// COULEURS : La couleur du texte et pour le champ la couleur du fond
		l_label += 'width:100%;height:100%;color:' + f_chp.cLib + ';';

		// GRAS : Le gras
		if (f_chp.gLib) { l_label += 'font-weight:bold;'; }
		
		// Alignement vertical du texte dans le label
		// et on en a fini avec l'attribut style
		//	l_label += 'line-height:' + (f_chp.H*f_chp.lH/100) + 'px;"';
		l_label += 'line-height: '+f_chp.lH+'px; vertical-align:middle;"';
		/////////////////////////////////////////////////////////////////////////
		//  FIN PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		
		
		// On ferme la balise label et on ajoute le texte
		l_label += '>' + UTILESNAV_ENCOREHTML(f_chp.lib);

		// Fini, on ferme les éléments HTML
		l_label += '</p>';
		
		return (l_champLabel + l_divG + l_conteneurLabel + l_label + '</div>' + l_divD + '</div>');
	}
	else if(f_chp.cType == 7)
	{
		var l_champLabel     = '<div id="' + f_chp.cod + 'P" class="editable"' ;
		var l_conteneurLabel = '<div id="' + f_chp.cod + 'L" class="editableLabel" ';
		var l_conteneurChamp = '<div id="' + f_chp.cod + 'C" ';
		var l_divG = '<div id="' + f_chp.cod + 'G" class="divresize" ';
		var l_divM = '<div id="' + f_chp.cod + 'M" class="divresize" ';
		var l_divD = '<div id="' + f_chp.cod + 'D" class="divresize" ';
		// Création du label pour le champ
		var l_label = '<p ';
		
		if(f_modeEditeur == 1)
		{
			l_champLabel += ' title="Code du champ : ' + f_chp.cod + '"';
		}
		

		/////////////////////////////////////////////////////////////////////////
		//  PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		// On va remplir l'attribut style
		l_champLabel		+= 'style="';
		l_conteneurLabel	+= 'style="';
		l_conteneurChamp	+= 'style="';
		l_label			+= 'style="';
		l_divG			+= 'style="';
		l_divM 			+= 'style="';
		l_divD 			+= 'style="';
		
		// Le texte du label ne dépasse pas du label
		l_conteneurLabel += 'overflow:hidden;textOverflow:ellipsis;OtextOverflow:ellipsis;whiteSpace:nowrap;';
		
		l_conteneurLabel += 'left:'	+ f_chp.lX + 'px;'
		+ 'top:'	    + f_chp.lY + 'px;'
		+ 'width:' 	+ f_chp.lL + 'px;'
		+ 'height:'	+ f_chp.lH + 'px;'
		+ 'position:absolute;" > ';
		
		l_conteneurChamp += 'left:'	+ f_chp.cX + 'px;'
		+ 'top:' 	+ f_chp.cY + 'px;'
		+ 'width:' 	+ f_chp.cL + 'px;'
		+ 'height:'	+ f_chp.cH + 'px;'
		+ 'position:absolute;'
		+ 'color:' + f_chp.cSai + ';'
		+ 'fontWeight:' + ((f_chp.gSai) ? 'bold' : 'normal') + ';" '
		+ 'data-donper="' + ((f_chp.donper) ? 'O' : 'N') + '" ';
		
		if(f_chp.dansTab)
		{
			l_conteneurChamp += 'data-postab="' + f_chp.posTab + '" data-ptab="' + f_chp.pTab + '" ';
		}
		
		if(f_chp.tri>0)
		{
			l_conteneurChamp += 'data-tri="' + f_chp.tri + '" data-ordretri="' + f_chp.ordreTri + '" ';
		}
		
		l_conteneurChamp +='>'	
		
		l_champLabel     += 'left:'	+ f_chp.X + 'px;'
		+ 'top:'		+ f_chp.Y + 'px;'
		+ 'width:'	+ f_chp.L + 'px;'
		+ 'height:'	+ f_chp.H + 'px;'
		+ 'position:absolute;';
		
		
		if(!f_chp.vis)
			l_champLabel += 'opacity:0.4;'
		
		l_champLabel += '" >';
		
		l_divG += 'left:0px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		l_divM += 'left:'+(f_chp.cX-3)+'px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		l_divD += 'left:'+(f_chp.cX + f_chp.cL + 2)+'px;'
		+ 'width:3px;'
		+ 'height:21px;" > &nbsp; </div>';
		
		var l_champOui 	= "<input id='" + f_chp.cod + "Oui' name='" + f_chp.cod + "' type='radio' value='Oui' ";
		var l_labelOui	= "<label for='" + f_chp.cod + "Oui' style='margin-left:5px;' for='"+f_chp.cod + "Oui'>Oui</label>";
		var l_champNon	= "<input id='" + f_chp.cod + "Non' name='" + f_chp.cod + "' type='radio' value='Non' ";
		var l_labelNon	= "<label for='" + f_chp.cod + "Non' style='margin-left:5px;' for='"+f_chp.cod + "Non'>Non</label>";
		var l_divOui		= "<div style='position:absolute;width:45px;left:3px;top:3px;'>";
		var l_divNon		= "<div style='position:absolute;width:45px;left:90px;top:3px;'>";
		
		// COULEURS : La couleur du texte et pour le champ la couleur du fond
		l_label += 'width:100%;height:100%;color:' + f_chp.cLib + ';';
		// GRAS : Le gras
		if (f_chp.gLib) { l_label += 'font-weight:bold;'; }
		
		// Alignement vertical du texte dans le label
		// et on en a fini avec l'attribut style
		//	l_label += 'line-height:' + (f_chp.H*f_chp.lH/100) + 'px;"';
		l_label += 'line-height: '+f_chp.lH+'px; vertical-align:middle;"';
		/////////////////////////////////////////////////////////////////////////
		//  FIN PARTIE STYLE
		/////////////////////////////////////////////////////////////////////////
		
		
		// On ferme la balise label et on ajoute le texte
		l_label += '>' + UTILESNAV_ENCOREHTML(f_chp.lib);
		// CHAMP OBLIGATOIRE : Si le champ est obligatoire ('*' rouge au label, attribut requis au champ)
		// CHAMP AVEC ALERTE : SI le champ est lier a une alerte ('!' rouge au label, attribut requis au champ)
		if (f_chp.obli) {
			l_label += '<span style="color:red">*</span>';
			l_champOui += 'required="true" ';
		}
		// CHAMP CONSULTABLE SEULEMENT <=> pas éditable : grisé
		if (!f_chp.editable || (f_modeEditeur == 2 && f_chp.piabs_val != "")) { l_champOui += 'disabled '; l_champNon += 'disabled '; }
		// Fini, on ferme les éléments HTML
		l_label += '</p>';
		console.log(f_val);
		if (f_val == "Oui") { l_champOui += 'checked'; }
		if (f_val == "Non") { l_champNon += 'checked'; }
		l_champOui += '>';
		l_champNon += '>';
		
		l_divOui	+= l_champOui + l_labelOui + "</div>";
		l_divNon	+= l_champNon + l_labelNon + "</div>";
		
		return (l_champLabel + l_divG + l_conteneurLabel + l_label + '</div>' + l_divM + l_conteneurChamp + l_divOui + l_divNon + '</div>' + l_divD + '</div>');
	}
	else
	{
		return '';
	}
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// pi_js_html_evt ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_html_evt (f_evt, f_listes, f_modeEditeur)
{ 
	var l_html = "";
	if (f_evt && f_listes) {
		l_html = '<div id="evt' + f_evt.cod + '" class="evt" style="width:100%;height:100%;display:none;" >';
		f_evt.tabChp.forEach(function (f_chp) {l_html += pi_js_html_chp(f_chp, f_listes, f_modeEditeur); });
		l_html += '</div>';
	} else if (!f_listes) {
		js_log("erreur", "pi_js_html_evt", "Les listes du parcours individuel n'ont pas été fournies.");
	} else {
		js_log("erreur", "pi_js_html_evt", "L'événement à construire en html n'existe pas.");
	}
	return l_html;
}

// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// pi_js_html_thm ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_html_thm (f_thm, f_listes, f_modeEditeur)
{
	var l_html = '';
	if (f_thm && f_listes) {
		l_html = '<div id="thm' + f_thm.cod + '" class= "thm" style="width:100%;height:100%;display:none;" >';
		// Génération des champs
		if(f_modeEditeur != 1)
		{
			f_thm.tabChp.forEach(function (f_chp, ind) {l_html += pi_js_html_chp(f_chp, f_listes, f_modeEditeur, f_thm.tabVals[ind]); });
		}
		else
		{
			f_thm.tabChp.forEach(function (f_chp, ind) {l_html += pi_js_html_chp(f_chp, f_listes, f_modeEditeur); });
		}
		l_html += '</div>';
	} else if (!f_listes) {
		js_log("erreur", "pi_js_html_thm", "Les listes du parcours individuel n'ont pas été fournies.");
	} else {
		js_log("erreur", "pi_js_html_thm", "Le thème à construire en html n'existe pas.");
	}
	return l_html;
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// pi_js_html_fam ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_html_fam (f_fam, f_listes, f_modeEditeur) 
{
	var l_html = '';
	if (f_fam && f_listes) {
		l_html += '<div id="fam' + f_fam.cod + '" class="fam" style="width:100%;height:100%;display:none;" >';
		// Génération des thèmes puis des événements
		f_fam.tabThm.forEach(function (f_thm) { l_html += pi_js_html_thm(f_thm, f_listes, f_modeEditeur); });
		f_fam.tabEvt.forEach(function (f_evt) { l_html += pi_js_html_evt(f_evt, f_listes, f_modeEditeur); });
		l_html += '</div>';
	} else if (!f_listes) {
		js_log("erreur", "pi_js_html_fam", "Les listes du parcours individuel n'ont pas été fournies.");
	} else {
		js_log("erreur", "pi_js_html_fam", "La famille à construire n'existe pas.");
	}
	return l_html;
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
//pi_js_html (<f_pi>, <f_listes>, <f_frere>)
//
// Paramètres :
// 	f_pi : <indiquez ici le rôle de f_pi>
// 	f_listes : <indiquez ici le rôle de f_listes>
// 	f_frere : <indiquez ici le rôle de f_frere>
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_html(f_pi, f_listes, f_frere, f_modeEditeur)
{
	var l_elt  = document.getElementById(f_frere);
	// On va créer l'arborescence HTML famille par famille
	if (f_pi && f_listes && l_elt && l_elt.parentNode) {
		var l_html = '';
		f_pi.forEach(function (f_fam) { l_html += pi_js_html_fam(f_fam, f_listes, f_modeEditeur); });
		// On ajoute les formulaires du parcours i. à la page.
		l_elt.parentNode.innerHTML += l_html;
		js_log("info", "pi_js_init_html", "Partie HTML du parcours individuel générée.");
	} else if (!f_pi) {
		js_log("erreur", "pi_js_init_html", "Le modèle de parcours individuel est vide.");
	} else if (!f_listes) {
		js_log("erreur", "pi_js_init_html", "Les listes du parcours individuel n'ont pas pu être chargées.");
	} else if (!l_elt) {
		js_log("erreur", "pi_js_init_html", "L'élément frère de référence pour la construction du parcours individuel n'a pas été trouvé");
	} else if (!l_elt.parentNote) {
		js_log("erreur", "pi_js_init_html", "L'élément parent de référence pour la construction du parcours individuel n'a pas été trouvé");
	}		
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// pi_js_drag_resize_start ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_drag_resize_start (f_limite, f_precedent, f_ui, f_elt)
{
	if (f_limite && f_precedent && f_ui && f_elt) {
		f_limite.gauche = f_elt.position().left - 5;
		f_limite.droite = f_limite.gauche + f_elt.width() + 10;
		f_limite.haut   = f_elt.position().top - 5;
		f_limite.bas    = f_limite.haut + f_elt.height() + 10;
		f_precedent.gauche = f_ui.position.left;
		f_precedent.haut   = f_ui.position.top;
		if (f_ui.size) {
			f_precedent.droite = f_ui.position.left + f_ui.size.width;
			f_precedent.haut   = f_ui.position.top + f_ui.size.height;
		}
	} 
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// pi_js_drag_resize_limit ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
function pi_js_drag_resize_limit (f_ui, f_limite, f_precedent, f_estLabel)
{
	if (f_ui && f_ui.position && f_ui.element && f_limite && f_precedent) {
		var l_horsLimite = (f_ui.position.left <= f_limite.droite && f_ui.position.top <= f_limite.bas);
		if (f_ui.size) {
			l_horsLimite &= f_limite.gauche <= f_ui.position.left + f_ui.size.width;
			l_horsLimite &= f_limite.haut <= f_ui.position.top + f_ui.size.height;
		} else {
			l_horsLimite &= f_limite.gauche <= f_ui.position.left + f_ui.helper.width();
			l_horsLimite &= f_limite.haut <= f_ui.position.top + f_ui.helper.height();
		}
		// SI l'élément que l'on déplace chevauche la zone limite ALORS on reste à la position précédente
		// SINON la position courante devient la nouvelle précédente pour l'appel suivant
		if (l_horsLimite) {
			f_ui.position.left = f_precedent.gauche;
			f_ui.position.top = f_precedent.haut;
			if (f_ui.size) {
				f_ui.size.width = f_precedent.largeur;
				f_ui.size.height = f_precedent.hauteur;
			}
		} else {
			f_precedent.gauche = f_ui.position.left;
			f_precedent.haut = f_ui.position.top;
			if (f_ui.size) {
				f_precedent.largeur = f_ui.size.width;
				f_precedent.hauteur = f_ui.size.height;
				// SI on redimensionne le label ALORS on le recentre verticalement
				if (f_estLabel) {
					f_ui.element.children('label:first').css('line-height', f_ui.size.height + 'px');
				}
			}
		}
	}
}
function js_pi_onclic_div_resize(f_evt)
{
	var l_id = f_evt.currentTarget.id;
	
	PINAV_gf_sourisXDebut = f_evt.pageX;
	
	PINAV_gf_numChamp = l_id.substring(0,l_id.length-1);
	PINAV_gf_champXDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'P').style.left);
	
	
	var l_listeChamp = document.getElementById(PINAV_gf_numChamp+'P').querySelectorAll('input, select');

	switch(l_listeChamp.length)
	{
		case 0 :
			PINAV_gf_typeChamp = 5;
			PINAV_gf_formLDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'L').style.width); // il n'y a pas de formulaire mais on a besoin de la taille initiale du champ libellé
			break;
		
		case 1 :
			var l_champ = l_listeChamp[0];
			PINAV_gf_typeChamp = parseInt(l_champ.getAttribute("data-type"), 10);
			
			PINAV_gf_formXDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'C').style.left);
			PINAV_gf_formLDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'C').style.width);
			break;
			
		case 2 :
			PINAV_gf_typeChamp = 7;
			
			PINAV_gf_formXDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'C').style.left);
			PINAV_gf_formLDebut = parseInt(document.getElementById(PINAV_gf_numChamp+'C').style.width);
			break;
		default :
			break;	
	}
	
	switch(l_id.substring(l_id.length-1))
	{
		case 'G' :
			$(document).on('mousemove', js_pi_resize_gauche);
			break;
		case 'M' :
			$(document).on('mousemove', js_pi_resize_milieu);
			break;
		case 'D' :
			$(document).on('mousemove', js_pi_resize_droite);
			break;
		default :
			break;
	}
	
	f_evt.stopPropagation();
	return false;	
}

function js_pi_fin_resize(f_evt)
{
	$(document).off('mousemove');
}

function js_pi_resize_gauche(f_evt)
{
	var l_posDif = Math.round((f_evt.pageX - PINAV_gf_sourisXDebut) /10) * 10;
	
	var l_champ = document.getElementById(PINAV_gf_numChamp+'P');
	var l_lib = document.getElementById(PINAV_gf_numChamp+'L');
	var l_form = document.getElementById(PINAV_gf_numChamp+'C');
	var l_divM = document.getElementById(PINAV_gf_numChamp+'M');
	var l_divD = document.getElementById(PINAV_gf_numChamp+'D');
	var l_libL;
	var l_champG;
	
	if(PINAV_gf_typeChamp != 5)
	{
		
		l_libL = (PINAV_gf_formXDebut - 6 - l_posDif);
		if(l_libL < 10)
		{
			l_libL = 10;
			l_posDif = PINAV_gf_formXDebut - 16;
		}
		
		l_champG = (PINAV_gf_champXDebut + l_posDif);
		if(l_champG < 5)
		{
			l_champG = 5;
			l_posDif = 5 - PINAV_gf_champXDebut;
			l_libL = PINAV_gf_formXDebut - 6 - l_posDif;
		}
	
		l_champ.style.left = l_champG + 'px';
		l_champ.style.width = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 5 - l_posDif) + 'px';
		l_lib.style.width = l_libL + 'px';
		l_form.style.left = (PINAV_gf_formXDebut - l_posDif) + 'px';
		l_divM.style.left = (PINAV_gf_formXDebut - 3 - l_posDif) + 'px';
		l_divD.style.left = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 2 - l_posDif) + 'px';
	}
	else
	{
		l_libL = (PINAV_gf_formLDebut - l_posDif);
		if(l_libL < 15)
		{
			l_libL = 15;
			l_posDif = PINAV_gf_formLDebut - 15;
		}
		l_champG = (PINAV_gf_champXDebut + l_posDif);
		if(l_champG < 5)
		{
			l_champG = 5;
			l_posDif = 5 - PINAV_gf_champXDebut;
			l_libL = PINAV_gf_formLDebut - l_posDif;
		}
		
		l_champ.style.left = l_champG + 'px';
		l_champ.style.width = (PINAV_gf_formLDebut + 6 - l_posDif) + 'px';
		l_lib.style.width = l_libL + 'px';
		l_divD.style.left = (PINAV_gf_formLDebut + 3 - l_posDif) + 'px';
	}
	return false;	
}

function js_pi_resize_droite(f_evt)
{
	var l_posDif = Math.round((f_evt.pageX - PINAV_gf_sourisXDebut) /10) * 10;
	
	var l_champ = document.getElementById(PINAV_gf_numChamp+'P');
	var l_form = document.getElementById(PINAV_gf_numChamp+'C');
	var l_divD = document.getElementById(PINAV_gf_numChamp+'D');
	var l_divM = document.getElementById(PINAV_gf_numChamp+'M');
	var l_lib = document.getElementById(PINAV_gf_numChamp+'L');
	
	var l_formL;
	var l_champL;
	var l_champD;
	
	switch(PINAV_gf_typeChamp)
	{
		case 1 :
		case 2 :
		case 3 :
		case 4 :
		case 6 :
		
			l_formL = (PINAV_gf_formLDebut + l_posDif);
			if(l_formL < 20)
			{
				l_formL = 20;
				l_posDif = 20 - PINAV_gf_formLDebut;
			}
			
			l_champL = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 5 + l_posDif);
			l_champD = PINAV_gf_champXDebut + l_champL;
			if(l_champD > 866)
			{
				l_champD = 866;
				l_champL = l_champD - PINAV_gf_champXDebut;
				l_posDif = l_champL - PINAV_gf_formXDebut - PINAV_gf_formLDebut - 5;
				l_formL = PINAV_gf_formLDebut + l_posDif;
			}
			
			l_champ.style.width = l_champL + 'px';
			l_form.style.width = l_formL + 'px';
			l_divD.style.left = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 2 + l_posDif) + 'px';
		
			break;

		case 5 :
			
			l_formL = (PINAV_gf_formLDebut + l_posDif);
			if(l_formL < 15)
			{
				l_formL = 15;
				l_posDif = 15 - PINAV_gf_formLDebut;
			}
			
			l_champL = (PINAV_gf_formLDebut + 6 + l_posDif);
			l_champD = PINAV_gf_champXDebut + l_champL;
			if(l_champD > 866)
			{
				l_champD = 866;
				l_champL = l_champD - PINAV_gf_champXDebut;
				l_posDif = l_champL - PINAV_gf_formLDebut - 5;
				l_formL = PINAV_gf_formLDebut + l_posDif;
			}
			
			l_champ.style.width = l_champL + 'px';
			l_lib.style.width = l_formL + 'px';
			l_divD.style.left = (PINAV_gf_formLDebut + 3 + l_posDif) + 'px';
			
			break;
		case 7 :
			
			l_formL = (PINAV_gf_formXDebut - 6 + l_posDif);
			if(l_formL < 10)
			{
				l_formL = 10;
				l_posDif = 10 + 6 - PINAV_gf_formXDebut;
			}
			
			l_champL = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 5 + l_posDif);
			l_champD = PINAV_gf_champXDebut + l_champL;
			if(l_champD > 866)
			{
				l_champD = 866;
				l_champL = l_champD - PINAV_gf_champXDebut;
				l_posDif = l_champL - PINAV_gf_formXDebut - PINAV_gf_formLDebut - 5;
				l_formL = (PINAV_gf_formXDebut - 6 + l_posDif);
			}
			
			l_champ.style.width = l_champL + 'px';
			l_lib.style.width = l_formL + 'px'
			l_form.style.left = (PINAV_gf_formXDebut + l_posDif) + 'px';
			l_divD.style.left = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 2 + l_posDif) + 'px';
			l_divM.style.left = (PINAV_gf_formXDebut - 3 + l_posDif) + 'px';
			
			break;
		default :
			break;
	}

	return false;	
}

function js_pi_resize_milieu(f_evt)
{
	var l_posDif = Math.round((f_evt.pageX - PINAV_gf_sourisXDebut) /10) * 10;
	
	var l_champ = document.getElementById(PINAV_gf_numChamp+'P');
	var l_form = document.getElementById(PINAV_gf_numChamp+'C');
	var l_divD = document.getElementById(PINAV_gf_numChamp+'D');
	var l_divM = document.getElementById(PINAV_gf_numChamp+'M');
	var l_lib = document.getElementById(PINAV_gf_numChamp+'L');
	
	var l_libL
	var l_formL
	
	switch(PINAV_gf_typeChamp)
	{
		case 1 :
		case 2 :
		case 3 :
		case 4 :
		case 6 :
		
			l_libL = (PINAV_gf_formXDebut - 6 + l_posDif);
			if(l_libL < 10)
			{
				l_libL = 10;
				l_posDif = 16 - PINAV_gf_formXDebut;
			}
		
			l_formL = (PINAV_gf_formLDebut - l_posDif);
			if(l_formL < 20)
			{
				l_formL = 20;
				l_posDif = PINAV_gf_formLDebut - 20;
				l_libL = PINAV_gf_formXDebut - 6 + l_posDif;
			}
		
			l_lib.style.width = l_libL + 'px';
			l_form.style.left = (PINAV_gf_formXDebut + l_posDif) + 'px';
			l_form.style.width = l_formL + 'px';
			l_divM.style.left = (PINAV_gf_formXDebut - 3 + l_posDif) + 'px';
			
			break;
		case 7 :
			
			l_formL = (PINAV_gf_formXDebut - 6 + l_posDif);
			if(l_formL < 10)
			{
				l_formL = 10;
				l_posDif = 10 + 6 - PINAV_gf_formXDebut;
			}
			
			l_champL = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 5 + l_posDif);
			l_champD = PINAV_gf_champXDebut + l_champL;
			if(l_champD > 866)
			{
				l_champD = 866;
				l_champL = l_champD - PINAV_gf_champXDebut;
				l_posDif = l_champL - PINAV_gf_formXDebut - PINAV_gf_formLDebut - 5;
				l_formL = (PINAV_gf_formXDebut - 6 + l_posDif);
			}
			
			l_champ.style.width = l_champL + 'px';
			l_lib.style.width = l_formL + 'px'
			l_form.style.left = (PINAV_gf_formXDebut + l_posDif) + 'px';
			l_divD.style.left = (PINAV_gf_formXDebut + PINAV_gf_formLDebut + 2 + l_posDif) + 'px';
			l_divM.style.left = (PINAV_gf_formXDebut - 3 + l_posDif) + 'px';
				
			break;
		case 5 :
			break;
		default :
			break;
	}
	
	return false;	
}

function js_pi_lenseEvenement()
{
	$(document).mouseup(js_pi_fin_resize);
}

function pi_js_ch_mod_vis(f_evt, f_labelChamp) 
{
	// SI le champ est visible
	if (f_evt.target.checked) {
		 f_labelChamp.style.opacity = "1";
	} else {
		 f_labelChamp.style.opacity = "0.4";
	}
}

function pi_js_ch_mod_al(f_champ)
{
	var l_champLib = document.getElementById(f_champ + "L").lastChild;
	
	if (l_champLib.lastChild.tagName !== "SPAN") {
		l_champLib.innerHTML += '<span style="color:red">!</span>';
	} else if (l_champLib.lastChild.innerHTML == "*") {
		l_champLib.lastChild.innerHTML = "* !";
	}
}

function pi_js_VerifieDateLiee(f_code, f_CodeDateLieeFin, f_teCour)
{
	if (f_code == f_CodeDateLieeFin)
		return false;
		
	var l_champCible = document.getElementById(f_CodeDateLieeFin + "C");
	if( l_champCible )
	{
		if( l_champCible.parentNode.parentNode.id == f_teCour )
		{
			l_champCible = l_champCible.lastChild;
			if( parseInt(l_champCible.getAttribute("data-type")) == 3 )
			{
				var l_champDebut = parseInt(l_champCible.getAttribute("data-datelieed"));
				var l_champFin = parseInt(l_champCible.getAttribute("data-datelieef"));
				
				if( l_champFin == 0 && (l_champDebut == 0 || l_champDebut == f_code) )
				{
					return true;
				}
			}
		}
		
	}

	return false;
}

function pi_js_applique_dateLiee_nav(f_teCour, f_id, f_idliee)
{
	var l_input = $("#"+f_id+"C").find("input");
	
	if(parseInt( l_input.attr('data-type') ) == 3 && parseInt( l_input.attr('data-datelieed') ) == 0)
	{
		$("#"+f_teCour).find("input").each(function( index ) {
	
			if(parseInt( $( this ).attr('data-datelieed') ) == f_id)
				$( this ).attr('data-datelieed', "0");
			
			if(parseInt( $( this ).attr('data-datelieef') ) == f_id)
				$( this ).attr('data-datelieef', "0");
				
		});
		l_input.attr('data-datelieef', "0");
		
		if(f_idliee != 0)
		{
			$("#"+f_idliee+"C").find("input").attr('data-datelieed', f_id);
			l_input.attr('data-datelieef', f_idliee);
		}
	}
}

function pi_js_raz_evt_vals(f_idTE)
{
	(f_idTE)
	{
		// On sélectionne les champs de saisie qui nous intéressent et on récupère les valeurs 
		$("#" + f_idTE + " > .editable > .editableChamp").children("input, select").val("");
		$("#" + f_idTE + " > .editable").find("input:checked").prop("checked", false);
	}
}

function pi_js_Decal_Position_Tableau(f_idTE, f_position)
{
	(f_idTE)
	{
		var l_champ = $("#" + f_idTE + " > .editable > .editableChamp").children("input[data-postab='"+f_position+"'], select[data-postab='"+f_position+"']");
		if(l_champ.length > 0)
		{
			if(f_position < 10)
			{
				pi_js_Decal_Position_Tableau(f_idTE, f_position + 1);
				l_champ.attr("data-postab", f_position + 1 );
			}
			else
			{
				l_champ.removeAttr("data-postab");
				l_champ.removeAttr("data-ptab");
			}
		}
	}
}

function pi_gere_js_suppr_position_tableau(f_idTE, f_codchamp)
{
	(f_idTE)
	{
		var l_poschamp = parseInt($("#" + f_codchamp).attr("data-postab"), 10)
		
		if(l_poschamp > 0)
		{
			for (var i = l_poschamp + 1; i <= 10; i++) {
				var l_champ = $("#" + f_idTE + " > .editable > .editableChamp").children("input[data-postab='"+i+"'], select[data-postab='"+i+"']");
				if(l_champ.length > 0)
				{
					l_champ.attr("data-postab", i - 1 );
				}
			}
		}
	}
}

function pi_js_applique_modif_chp(f_idTE, f_codchamp, f_format, f_liste,  f_tableauliste, f_lib,  f_gLib, f_gSai, f_cLib, f_cSai, f_cFSai, f_obli, f_vis, f_dateLiee, f_visTable, f_posTable, f_tailleTable, f_donper)
{
	(f_idTE)
	{
		var l_champ = $("#" + f_codchamp + "P");
		var l_saisichamp = l_champ.find("#" + f_codchamp);
		
		var l_type = parseInt(l_saisichamp.attr("data-type"), 10);
		
		if(!isNaN(l_type))
		{
			l_saisichamp.attr("data-format", f_format);
	
			if (l_type == 4)
			{
				l_saisichamp.attr("data-liste", f_liste);
				pi_js_chp_liste_html( l_saisichamp.get(0), f_tableauliste, f_liste);
			}
			
			var l_label = l_champ.find("label");
			var l_lib = UTILESNAV_ENCOREHTML(f_lib);
			
			if(l_label.children().first().prop('tagName') == "SPAN")
			{
				var l_textSpan = l_label.children().first().text();
				if(l_textSpan == "!" || l_textSpan == "* !")
				{
					if(f_obli)
					{
						l_label.html(l_lib + '<span style="color:red">* !</span>');
					} else {
						l_label.html(l_lib + '<span style="color:red">!</span>');
					}
				} else {
					if(f_obli)
					{
						l_label.html(l_lib + '<span style="color:red">*</span>');
					} else {
						l_label.html(l_lib);
					}
				}
			} else {
				if(f_obli)
				{
					l_label.html(l_lib + '<span style="color:red">*</span>');
				} else {
					l_label.html(l_lib);
				}
			}
			
			if(f_donper == true)
			{
				l_saisichamp.attr("data-donper", "O");
			}
			else
			{
				l_saisichamp.attr("data-donper", "N");
			}
			
			l_label.css("font-Weight", (f_gLib) ? 'bold' : 'normal');
			l_saisichamp.css("font-Weight", (f_gSai) ? 'bold' : 'normal');
			
			l_champ.css("opacity", (f_vis) ? '1' : '0.4');
			
			l_saisichamp.prop('required',f_obli);
	
			l_label.css('color', f_cLib);
			l_saisichamp.css('color', f_cSai);
			l_saisichamp.css('background-color', f_cFSai);
	
			
			pi_js_applique_dateLiee_nav(f_idTE, f_codchamp, f_dateLiee);
			
			if(f_idTE.substr(0, 3) == "evt")
			{
				var l_pos = parseInt(l_saisichamp.attr("data-postab"), 10);
				if(f_visTable == true)
				{
					if(l_pos != f_posTable)
					{
						if(l_pos > 0)
						{
							pi_gere_js_suppr_position_tableau(f_idTE, f_codchamp);
						}
						pi_js_Decal_Position_Tableau(f_idTE, f_posTable);
					}
					l_saisichamp.attr("data-postab", f_posTable);
					l_saisichamp.attr("data-ptab", f_tailleTable);
				}
				else
				{
					if(!isNaN(l_pos))
					{
						pi_gere_js_suppr_position_tableau(f_idTE, f_codchamp);
						pi_gere_js_suppr_tri_tableau(f_idTE, f_codchamp);
					}
					l_saisichamp.removeAttr("data-postab");
					l_saisichamp.removeAttr("data-ptab");
					l_saisichamp.removeAttr("data-tri");
					l_saisichamp.removeAttr("data-ordretri");
				}
			}
		}
		else
		{
			if(l_champ.find("input").length == 0)
			{	// champ libellé
				var l_label = l_champ.find("p");
				var l_lib = UTILESNAV_ENCOREHTML(f_lib);
				
				l_label.html(l_lib);
				
				l_label.css("font-Weight", (f_gLib) ? 'bold' : 'normal');

				l_label.css('color', f_cLib);
				
				l_champ.css("opacity", (f_vis) ? '1' : '0.4');
				
			}
			else if(l_champ.find("input").length == 2)
			{	//champ oui non
				var l_label = l_champ.find(".editableLabel>p");
				l_saisichamp = l_champ.find("#" + f_codchamp + "C");
				var l_champOui = l_saisichamp.find("#"+f_codchamp + "Oui");
				
				var l_lib = UTILESNAV_ENCOREHTML(f_lib);
				
				if(f_obli)
				{
					l_label.html(l_lib + '<span style="color:red">*</span>');
				} else {
					l_label.html(l_lib);
				}

				
				l_label.css("font-Weight", (f_gLib) ? 'bold' : 'normal');
				l_saisichamp.css("font-Weight", (f_gSai) ? 'bold' : 'normal');
				
				l_champ.css("opacity", (f_vis) ? '1' : '0.4');
				
				
				l_label.css('color', f_cLib);
				l_saisichamp.css('color', f_cSai);
				
				l_champOui.prop('required',f_obli);
				
				if(f_donper == true)
				{
					l_saisichamp.attr("data-donper", "O");
				}
				else
				{
					l_saisichamp.attr("data-donper", "N");
				}
				
				if(f_idTE.substr(0, 3) == "evt")
				{
					var l_pos = parseInt(l_saisichamp.attr("data-postab"), 10);
					if(f_visTable == true)
					{
						if(l_pos != f_posTable)
						{
							if(l_pos > 0)
							{
								pi_gere_js_suppr_position_tableau(f_idTE, f_codchamp);
							}
							pi_js_Decal_Position_Tableau(f_idTE, f_posTable);
						}
						l_saisichamp.attr("data-postab", f_posTable);
						l_saisichamp.attr("data-ptab", f_tailleTable);
					}
					else
					{
						if(!isNaN(l_pos))
						{
							pi_gere_js_suppr_position_tableau(f_idTE, f_codchamp);
							pi_gere_js_suppr_tri_tableau(f_idTE, f_codchamp);
						}
						l_saisichamp.removeAttr("data-postab");
						l_saisichamp.removeAttr("data-ptab");
						l_saisichamp.removeAttr("data-tri");
						l_saisichamp.removeAttr("data-ordretri");
					}
				}
			}
		}
	}
}

function pi_js_gestion_liste_date_liee(f_teCour, f_codeChamp, f_dateLieeDebut, f_dateLieeFin)
{
	var l_liste = new Array();
	
	var l_lib;
	
	if(f_dateLieeDebut > 0)
	{
		var l_champ = document.getElementById(f_dateLieeDebut+'P');
		var l_label = l_champ.getElementsByTagName('label')[0];
		l_lib = (l_label.firstChild && l_label.firstChild.nodeType === 3) ? l_label.firstChild.nodeValue : "";
		l_liste.push({
			gs_cod: f_dateLieeDebut,
			gs_lib: l_lib,
			gs_selectionne: true
		});
	} else {
	
		$("#"+f_teCour).children().each(function( index ) {
			
			var l_input = $( this ).find("input");
			if(l_input.length > 0)
			{
				if(parseInt(l_input.attr('data-type'), 10) == 3)
				{
					var l_id = parseInt(l_input.attr('id'), 10);
					if(l_id == f_dateLieeFin)
					{
						l_lib = $( this ).find("label").contents().first().text();
						l_liste.push({
							gs_cod: l_id,
							gs_lib: l_lib,
							gs_selectionne: true
						});
					}
					else if(l_id != f_codeChamp && parseInt( l_input.attr('data-datelieed'), 10 ) == 0 && parseInt( l_input.attr('data-datelieef'), 10 ) == 0)
					{
						l_lib = $( this ).find("label").contents().first().text();
						l_liste.push({
							gs_cod: l_id,
							gs_lib: l_lib,
							gs_selectionne: false
						});
					}
				}
				
			}
		});
	}
	
	return l_liste;
}

function js_pi_recup_pose_tab_max(f_teCour)
{
	var l_poseMax = 0;
	$("#" + f_teCour).find("div,input,select").each(function( index ) {
		
		var l_posTemp = parseInt($( this ).attr("data-postab"), 10);
		if(l_posTemp < 11)
			l_poseMax = Math.max(l_poseMax,l_posTemp);
		
	});
	
	return l_poseMax;
}

function js_pi_control_date_liee(f_evt)
{
	
	var l_idDateLiee;
	var l_champDateLiee;
	var l_dateDebut;
	var l_datefin;
	var l_compar;
	var l_champ = f_evt.target;
	console.log(l_champ.id);
	if(l_champ.value != "")
	{
		l_idDateLiee = parseInt(l_champ.getAttribute('data-datelieed'), 10);
		if(l_idDateLiee > 0)
		{
			l_champDateLiee = document.getElementById(l_idDateLiee);
			if(l_champDateLiee)
			{
				if(l_champDateLiee.value != "")
				{
					l_dateDebut = js_pi_geneDate(l_champDateLiee.value);
					l_datefin = js_pi_geneDate(l_champ.value);
					if(l_dateDebut > l_datefin)
					{
//						alert("Date de début supérieur à la date de fin");
						l_champ.focus();
						return false;
					}
				}
			}
		} else {
			l_idDateLiee = parseInt(l_champ.getAttribute('data-datelieef'), 10);
			if(l_idDateLiee > 0)
			{
				l_champDateLiee = document.getElementById(l_idDateLiee);
				if(l_champDateLiee)
				{
					if(l_champDateLiee.value != "")
					{
						l_dateDebut = js_pi_geneDate(l_champ.value);
						l_datefin = js_pi_geneDate(l_champDateLiee.value);
						if(l_dateDebut > l_datefin)
						{
//							alert("Date de début supérieur à la date de fin");
							l_champ.focus();
							return false;
						}
					}
				}
			}
		}
	}
	return true;
}

function js_pi_geneDate(f_date)
{
	var l_langue = document.documentElement.lang.substring(0,2) || document.getElementsByName("keywords")[0].lang.substring(0,2);
	var l_date
	switch(l_langue)
	{
		case "fr":
		case "es":
			l_date = new Date(parseInt(f_date.substr(6, 4), 10),
							parseInt(f_date.substr(3,2), 10)-1,
							parseInt(f_date.substr(0,2), 10));		

			break;
		default:
			
			break;
	}
	
	return l_date;
}

function JS_PI_SelectionPremierChamp(f_teCour)
{
	$("#" + f_teCour).find("input[tabindex=1000],select[tabindex=1000]").focus();
}
function Pi_js_FormTop()
{
	return $("#CH_PI_FORM_HTML").position().top;
}

function pi_js_suppr_dateLiee_nav(f_teCour, f_id)
{
	var l_input = $("#"+f_id+"C").find("input");
	
	if(parseInt( l_input.attr('data-type') ) == 3)
	{
		$("#"+f_teCour).find("input").each( function( index ) {
	
			if(parseInt( $( this ).attr('data-datelieed') ) == f_id)
				$( this ).attr('data-datelieed', "0");
			
			if(parseInt( $( this ).attr('data-datelieef') ) == f_id)
				$( this ).attr('data-datelieef', "0");
				
		});
	}
}

function pi_js_recup_ordretri(f_teCour)
{
	var l_liste = new Array();
	
	var l_champ;
	var l_champLabel;
	var l_id;
	var l_lib;
	var l_numTri;
	var l_ordreTri;
	var l_ordreCol;
	
	$("#"+f_teCour).find("div,input,select").each(function( index ) {
		l_champ = $( this );
		if(l_champ.length > 0)
		{
			l_ordreCol = parseInt(l_champ.attr('data-postab'));
			if(l_ordreCol > 0)
			{
				l_id = parseInt(l_champ.attr('id'), 10);
				if (l_champ.is("div")) {
					l_champLabel = l_champ.parent().find("p");
				} else {
					l_champLabel = l_champ.parent().parent().find("label");
				}
				l_lib = l_champLabel.contents().first().text();
				l_numTri=l_champ.attr('data-tri');
				if (typeof l_numTri !== typeof undefined && l_numTri !== false) {
					l_numTri=parseInt(l_numTri);
				} else {
					l_numTri=0;
				}
				l_ordreTri=l_champ.attr('data-ordretri');
				if (typeof l_ordreTri === typeof undefined || l_ordreTri === false) {
					l_ordreTri="";
				}
				l_liste.push({
					gs_cod: l_id,
					gs_lib: l_lib,
					gs_numTri: l_numTri,
					gs_ordreTri: l_ordreTri,
					gs_ordreCol: l_ordreCol
				});
			}
		}
	});
	
	return l_liste;
}

function pi_js_applique_modif_tri(f_idTE, f_codchamp, f_numTri, f_ordreTri)
{
	(f_idTE)
	{
		var l_champ = $("#" + f_codchamp + "P");
		var l_saisichamp = l_champ.find("#" + f_codchamp);
		
		var l_type = parseInt(l_saisichamp.attr("data-type"), 10);
		
		if(!isNaN(l_type))
		{
			l_saisichamp.attr("data-tri",f_numTri);
			l_saisichamp.attr("data-ordretri",f_ordreTri);
		} else {
			if(l_champ.find("input").length == 2)
			{	//champ oui non
				l_saisichamp = l_champ.find("#" + f_codchamp + "C");
				l_saisichamp.attr("data-tri",f_numTri);
				l_saisichamp.attr("data-ordretri",f_ordreTri);
			}
		}
	}
}

function pi_js_suppr_tri(f_teCour)
{
	var l_champ;
	$("#"+f_teCour).find("div,input,select").each(function( index ) {
		l_champ = $( this );
		l_champ.removeAttr("data-tri");
		l_champ.removeAttr("data-ordretri");
	});
}

function pi_gere_js_suppr_tri_tableau(f_idTE, f_codchamp)
{
	(f_idTE)
	{
		var l_trichamp = parseInt($("#" + f_codchamp).attr("data-tri"), 10)
		
		if(l_trichamp > 0)
		{
			for (var i = l_trichamp + 1; i <= 5; i++) {
				var l_champ = $("#" + f_idTE + " > .editable > .editableChamp").children("input[data-tri='"+i+"'], select[data-tri='"+i+"']");
				if(l_champ.length > 0)
				{
					l_champ.attr("data-tri", i - 1 );
				}
			}
		}
	}
}

function js_pi_modif_style_titre_tableau()
{
	$("td.S020-CADRE-TITRE > div").css({'cssText': 'position:relative;overflow:hidden;height:19px !important;'});
}

