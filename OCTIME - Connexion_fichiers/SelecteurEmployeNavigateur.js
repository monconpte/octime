// Procedures globales du projet
function SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(Vf_pageEnCours,Vf_enContrat,Vf_photo,Vf_persencontrat){try{clWDUtil.Try();{var Vl_texte="";if(clWDUtil.oConversionType(clWDAJAXMain.AJAXDisponible(),1,0,1,0)){Vl_texte=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.SE_RecupTableau","",0,Vf_pageEnCours,Vf_enContrat,Vf_photo,Vf_persencontrat),19,0,31,0);}clWDUtil.Renvoyer(Vl_texte);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_SERECUPERERTYPENAV(){try{clWDUtil.Try();{var Vl_texte="";if(clWDUtil.oConversionType(clWDAJAXMain.AJAXDisponible(),1,0,1,0)){Vl_texte=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.RecupTypeNav","",0),19,0,31,0);}clWDUtil.Renvoyer(Vl_texte);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE(VsF_date){try{clWDUtil.Try();{if((clWDUtil.oConversionType(_NA_,8,0,8,0)==2)){clWDUtil.Renvoyer(clWDUtil.oAddition(clWDUtil.oAddition((VsF_date + "").substring(7-1, 10),(VsF_date + "").substring(1-1, 2)),(VsF_date + "").substring(4-1, 5)));return;}else {clWDUtil.Renvoyer(clWDUtil.oAddition(clWDUtil.oAddition((VsF_date + "").substring(7-1, 10),(VsF_date + "").substring(4-1, 5)),(VsF_date + "").substring(1-1, 2)));return;}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_SEVALIDEMAT(Vf_mat,Vf_dateDeb,Vf_dateFin){if(Vf_dateDeb===void 0){Vf_dateDeb="";}if(Vf_dateFin===void 0){Vf_dateFin="";}try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.SE_ValideSel","",0,Vf_mat,Vf_dateDeb,Vf_dateFin);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_SECONVERTIONDATEINVERSE(Vf_date){try{clWDUtil.Try();{var Vl_date="";if((clWDUtil.oConversionType(_NA_,8,0,8,0)==2)){Vl_date=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition((Vf_date + "").substring(5-1, 6),"/"),(Vf_date + "").substring(7-1, 8)),"/"),(Vf_date + "").substring(1-1, 4)),19,0,50,0);}else {Vl_date=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition((Vf_date + "").substring(7-1, 8),"/"),(Vf_date + "").substring(5-1, 6)),"/"),(Vf_date + "").substring(1-1, 4)),19,0,50,0);}clWDUtil.Renvoyer(Vl_date);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_SERECUPMATSEL(){try{clWDUtil.Try();{var Vl_texte="";if(clWDUtil.oConversionType(clWDAJAXMain.AJAXDisponible(),1,0,1,0)){Vl_texte=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.SE_RecupMalSelectionne","",0),19,0,31,0);}clWDUtil.Renvoyer(Vl_texte);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function SELECTEUREMPLOYENAVIGATEUR_LOD(event)
{
	//Variable du tableau des employés
var SE_tableau;
//Variable qui affiche le résultat 
var SE_foncretour;
//Variable qui stock la lettre saisie au clavier
var SE_valClavier;
//Variable du timer lors de la saisie
var SE_timer;
//Variable stockant le ou les matricules des employés sélectionnés
var SE_matSelec;
//Variable stockant la position dans le tableau des employés sélectionnés
var SE_ligneSelec;
//Variable stockant la ligne précédemment sélectionné(Utile pour multi sélection)
var SE_lignePrec;
//Variable permettant de savoir si la multi sélection est activée
var SE_multiSelec;
//Variable permettant de savoir si la date est présente
var SE_date;
//Variable qui stocke la page courante
var SE_pageEnCours;

var SE_sovEvtOnKey;
var SE_sovEvtonSelectStart;
var SE_sovEvtOnKeyDown;
var SE_sovEvtOnKeyUp;

// Variable qui stocke la valeur se substituant au paramètre GENE::gc_persencontrat si nécessaire
var SE_persencontrat;
// Variable qui stocke la liste des matricules déjà sélectionnés à enlever du sélecteur
var SE_listeMat;

}
function SELECTEUREMPLOYENAVIGATEUR_UNL(event)
{
	

}
function SE_ModifTailleLigne(f_valLigne,f_valPhoto,f_valBouton)
{
	var l_enTete=$('#TabEnTete tbody')[0].childNodes[0];
	if(f_valBouton==0){
		
	}else if(f_valBouton==1){
		
	}else if(f_valBouton==2){
		
	}
	
	var l_ligne=$('#TableEmployes tbody')[0].childNodes[f_valLigne];
	//Colonne 1
	if(f_valPhoto==1){
		l_ligne.style.height="50px";
		if(f_valBouton==0){
			l_enTete.childNodes[0].style.width="calc(50% - 16px)";
			l_enTete.childNodes[1].style.width="calc(25% - 25px)";
			l_enTete.childNodes[2].style.width="calc(25% - 25px)";
			
			l_ligne.childNodes[0].style.width="calc(50% - 16px)";
			l_ligne.childNodes[1].style.width="calc(25% - 25px)";
			l_ligne.childNodes[2].style.width="calc(25% - 25px)";
		}else if(f_valBouton==1){
			l_enTete.childNodes[0].style.width="calc(25% - 25px)";
			l_enTete.childNodes[1].style.width="calc(50% - 16px)";
			l_enTete.childNodes[2].style.width="calc(25% - 25px)";
			
			l_ligne.childNodes[0].style.width="calc(25% - 25px)";
			l_ligne.childNodes[1].style.width="calc(50% - 16px)";
			l_ligne.childNodes[2].style.width="calc(25% - 25px)";
		}else if(f_valBouton==2){
			l_enTete.childNodes[0].style.width="calc(25% - 25px)";
			l_enTete.childNodes[1].style.width="calc(25% - 25px)";
			l_enTete.childNodes[2].style.width="calc(50% - 16px)";
			
			l_ligne.childNodes[0].style.width="calc(25% - 25px)";
			l_ligne.childNodes[1].style.width="calc(25% - 25px)";
			l_ligne.childNodes[2].style.width="calc(50% - 16px)";
		}
	}else{
		l_ligne.style.height="20px";
		if(f_valBouton==0){
			l_enTete.childNodes[0].style.width="calc(50% - 16px)";
			l_enTete.childNodes[1].style.width="25%";
			l_enTete.childNodes[2].style.width="25%";
			
			l_ligne.childNodes[0].style.width="calc(50% - 16px)";
			l_ligne.childNodes[1].style.width="25%";
			l_ligne.childNodes[2].style.width="25%";
		}else if(f_valBouton==1){
			l_enTete.childNodes[0].style.width="25%";
			l_enTete.childNodes[1].style.width="calc(50% - 16px)";
			l_enTete.childNodes[2].style.width="25%";
			
			l_ligne.childNodes[0].style.width="25%";
			l_ligne.childNodes[1].style.width="calc(50% - 16px)";
			l_ligne.childNodes[2].style.width="25%";
		}else if(f_valBouton==2) {
			l_enTete.childNodes[0].style.width="25%";
			l_enTete.childNodes[1].style.width="25%";
			l_enTete.childNodes[2].style.width="calc(50% - 16px)";
			
			l_ligne.childNodes[0].style.width="25%";
			l_ligne.childNodes[1].style.width="25%";
			l_ligne.childNodes[2].style.width="calc(50% - 16px)";
		}
	}

}


	



function SE_ViderValClavier()
{
	SE_valClavier="";
}
function SE_Tri(f_valBouton)
{
	if(SE_tableau!=undefined && SE_tableau.ListeEmp!=undefined){
		if(f_valBouton==0){
			SE_tableau.ListeEmp.sort(function(elem1,elem2){
				if (elem1.n.toUpperCase()<elem2.n.toUpperCase()){
					return -1;
				}else if (elem1.n.toUpperCase()>elem2.n.toUpperCase()){
					return 1;
				}else{
					return 0;
				}
			});
		}else if(f_valBouton==1){
			SE_tableau.ListeEmp.sort(function(elem1,elem2){
				if (elem1.m.toUpperCase()<elem2.m.toUpperCase()){
					return -1;
				}else if (elem1.m.toUpperCase()>elem2.m.toUpperCase()){
					return 1;
				}else{
					return 0;
				}
			});
		}else if(f_valBouton==2){
			SE_tableau.ListeEmp.sort(function(elem1,elem2){
				if (elem1.b.toUpperCase()<elem2.b.toUpperCase()){
					return -1;
				}else if(elem1.b.toUpperCase()>elem2.b.toUpperCase()){
					return 1;
				}else {
					return 0;
				}
			});
		}
	}

}
//Val 1:La page courante
//Val 2:La fonction de retour
//Val 3: multi sélection (Faux pas de multi sélection, Vrai multi sélection)
//Val 4: Valeur photo (0 pas coché,1 coché,2 pas cochable , 3 toujours coché) 
//Val 5: Afficher ou non date (Vrai date, Faux pas date) 
//Val 6:Alias du champ calendrier
//Val 7:Variable permettant de griser (non modifiable) la checkbox de contrat si le paramètre est à true
//Val 8:Cas particulier (O_REM,O_REMR..) permettant de recharger le tableau lorsqu'on ouvre la popup pour la deuxième fois si le paramètre est à true
//Val 9:Permet de cocher la case en contrat et de forcer le paramètre
//Val 10:Valeur se substituant au paramètre GENE::gc_persencontrat si nécessaire

function SE_AfficheCelGrise(f_pageEnCours, f_foncretour, f_multiSelection, f_valPhoto, f_valDate, f_Alias, f_ContratGrise, f_reinit, f_mat, f_persencontrat)
{

	if(f_persencontrat != undefined){
		SE_persencontrat = f_persencontrat;
	} else {
		SE_persencontrat = "";	
	}
	
	if(f_mat != undefined){
		SE_listeMat = f_mat;
	} else {
		SE_listeMat = "";	
	}
	
	if(f_reinit!=true){
		f_reinit=false;
	}
	
	GNAV_GIGEREGFI(true);
	
	var l_tailleTemp=20;
	if(f_valPhoto==1){
		l_tailleTemp=50;
	}
	
	SE_pageEnCours = f_pageEnCours;
	SE_foncretour = f_foncretour;
	
	if($("#CELL_GRISE_GESTION_EMP").length )
	{
		if(f_reinit){
			var l_photoCheck=false;
			if(f_valPhoto==1 || $("#CheckboxPhotos").is(":checked")){
				l_photoCheck=true;
				l_tailleTemp=50;
			}
			SE_tableau=JSON.parse(SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(SE_pageEnCours,-1,l_photoCheck,SE_persencontrat));
			sessionStorage.setItem('emps',JSON.stringify(SE_tableau.ListeEmp));
				
			if($("#RadioNom").is(":checked")){
				SE_Tri(0);
			}else if($("#RadioMatricule").is(":checked")){
				SE_Tri(1);
			}else if($("#RadioBadge").is(":checked")){
				SE_Tri(2);
			}
		} else if ($("#CheckboxPhotos").is(":checked")) {
			// On réinitialise si la checkbox des photos est cochée afin de ré-afficher les images
			l_tailleTemp=50;
			SE_tableau=JSON.parse(SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(SE_pageEnCours,$("#CheckboxContrat").is(":checked"),true,SE_persencontrat));
			sessionStorage.setItem('emps',JSON.stringify(SE_tableau.ListeEmp));
			
			if($("#RadioNom").is(":checked")){
				SE_Tri(0);
			}else if($("#RadioMatricule").is(":checked")){
				SE_Tri(1);
			}else if($("#RadioBadge").is(":checked")){
				SE_Tri(2);
			}
		}
		else
		{
			SE_tableau.ListeEmp = JSON.parse(sessionStorage.getItem('emps'));
			SE_tableau.MatSel = SELECTEUREMPLOYENAVIGATEUR_SERECUPMATSEL();
			SE_tableau.ListeEmp.sort(triDynamique("n"));
		}

		var l_tailleTab=SE_tailleTab_sansListeMat(l_tailleTemp);
			
		SE_ligneSelec=[];
		SE_matSelec=[];
		
		SE_matSelec.push(SE_tableau.MatSel);

		for(n=0;n<l_tailleTab;n++){
			var l_res=SE_matSelec.indexOf(SE_tableau.ListeEmp[n].m);
			if(l_res!=-1){
				SE_ligneSelec.push(n);
			}
		}
		$("#CELL_GRISE_GESTION_EMP").show();
		$("#DivTabEmp").get(0).focus();
		document.getElementById("DivScrollTableau").scrollTop=SE_ligneSelec[0]*l_tailleTemp;
		SE_FuncScrollCache();
		SE_FuncEcouteClavier();
	}
	else
	{
		var l_divGrise = document.createElement("div");
		l_divGrise.id= "CELL_GRISE_GESTION_EMP";
		l_divGrise.style.zIndex = "2000000";
		l_divGrise.style.position = "absolute";
		l_divGrise.style.left = "0px";
		l_divGrise.style.top = "0px";
		l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
		l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop()+"px";
		l_divGrise.style.background = "rgba(102, 102, 102, 0.55)";
		l_divGrise.className="S001-TEXT";
		
		SE_multiSelec=f_multiSelection;
		SE_timer=null;
		SE_ligneSelec=[];
		SE_matSelec=[];
		SE_date=f_valDate;
		
		var l_photoCheck=false;
		if(f_valPhoto==1 || $("#CheckboxPhotos").is(":checked")){
			l_photoCheck=true;
			l_tailleTemp=50;
		}
		SE_tableau=JSON.parse(SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(SE_pageEnCours,-1,l_photoCheck,SE_persencontrat));
		sessionStorage.setItem('emps',JSON.stringify(SE_tableau.ListeEmp));
		
		var l_tailleTab=SE_tailleTab_sansListeMat(l_tailleTemp);
		
		l_divGrise.appendChild(SE_AfficheSelecEmp(f_valPhoto,f_Alias,f_ContratGrise));
		
		$("body").children().first().append(l_divGrise);
		
		$("#DivTabEmp").get(0).focus();
		
		SE_matSelec.push(SE_tableau.MatSel);
		
		for(n=0;n<l_tailleTab;n++){
			var l_res=SE_matSelec.indexOf(SE_tableau.ListeEmp[n].m);
			if(l_res!=-1){
				SE_ligneSelec.push(n);
			}
		}
		
		SE_FuncScrollCache();
		SE_FuncEcouteClavier();
		
		document.getElementById("DivScrollTableau").scrollTop=SE_ligneSelec[0]*l_tailleTemp;

		$("#PopUpEmp").draggable({
			drag:SE_CellDraggable,
			handle:"div#DivEnTete",
			cursor:"crosshair"
		});

	}
	
	$('#DivTableEmployesBis').on('mousewheel MozMousePixelScroll',function(e) {
		return SE_SourisScrollPrincipal(e);
	});	
	
	$("#CELL_GRISE_GESTION_EMP").click(function(f_e){
		
		if(f_e.target.parentNode.id!='calInputDate1' && f_e.target.parentNode.id!='calInputDate2'){
				$("#dwwCH_CELL_CAL").css("visibility","hidden");
		}
		
	});
	$("#PopUpEmp").focus();
	SE_FuncEcouteFleche(f_multiSelection);
		
	
	if(f_ContratGrise==true){
		$("#CheckboxContrat").attr("disabled","true");
	}
	
	if(SE_tableau.etatcontrat==true || SE_persencontrat=="C"){
		$("#CheckboxContrat").attr("checked","true");
	} else if (SE_persencontrat=="T") {
		$("#CheckboxContrat").removeAttr("checked");
	}
	
	function triDynamique(propriete) {
		var OrdreTri = 1;
		
		if(propriete[0] === "-") {
			OrdreTri = -1;
			propriete = propriete.substr(1);
		}
		
		return function (a,b) {
			if(OrdreTri == -1){
				return b[propriete].localeCompare(a[propriete]);
			}else{
				return a[propriete].localeCompare(b[propriete]);
			}        
		}
	}
}


function SE_AfficheSelecEmp(f_valPhoto,f_Alias,f_ContratGrise)
{
	
	if($("#PopUpEmp").length){
		$("#PopUpEmp").show();
		
	}else{
		
		var l_divemp = document.createElement("div");
		var l_top = ((document.body.clientHeight / 2) - (508 / 2) + $(window).scrollTop());
		if (f_Alias!="") {
			// 240 = 255 (hauteur du calendrier) - 35 (calendrier dans la popup) + 20 (marge en bas)
			if ((l_top+508+240)>document.body.clientHeight) {
				if (document.body.clientHeight>(508+240)) {
					l_top=(document.body.clientHeight-508-240);
				}
			}
		}
		l_divemp.id = "PopUpEmp";
		l_divemp.style.position = "absolute";
		l_divemp.style.top = l_top + "px";
		l_divemp.style.left = ((document.body.clientWidth /2) - (650 / 2) + $(window).scrollLeft()) + "px";
		l_divemp.style.width = "650px";
		l_divemp.style.height = "508px";
		l_divemp.style.background = "white";
		l_divemp.style.cursor = "default";
		l_divemp.style.zIndex = "999994";
		
		
		l_divemp.appendChild(SE_DivTitre());
		l_divemp.appendChild(SE_DivTri());
		l_divemp.appendChild(SE_ListeRadio(SE_tableau.defautTri));
		l_divemp.appendChild(SE_DivCheckbox(f_valPhoto,SE_tableau.defautContrat,f_ContratGrise));
		
		SE_Tri(SE_tableau.defautTri);
		l_divemp.appendChild(SE_DivTabEmploye(SE_tableau.defautTri,f_valPhoto,SE_tableau.defautContrat));
		
		if(SE_date==true){
			l_divemp.appendChild(SE_DivDate(f_Alias));		
		}
		l_divemp.appendChild(SE_BoutonValider());
		
		return l_divemp;
	}
}


function SE_ListeEmploye(f_valBouton,f_valPhoto)
{
	var l_divTable = document.createElement("div");
	l_divTable.id = "DivTableEmployesBis";
	l_divTable.style.position = "static";
	l_divTable.style.height="calc(100% - 37px)";
	l_divTable.style.width="calc(100% - 19px)";
	l_divTable.style.float="left";
	l_divTable.style.overflow="hidden";
	l_divTable.style.border="1px solid #A9AAAC";
	l_divTable.style.borderRight="0px";
	l_divTable.style.backgroundColor="white";
	
	
	var l_table = document.createElement("table");
	l_table.id="TableEmployes";
	l_table.style.position="relative";
	l_table.style.top="0px";
	l_table.style.backgroundColor="white";
	l_table.style.width="100%";
	l_table.style.height="100%";
	l_table.style.margin="0 0 0";
	l_table.style.cursor="pointer";
	
	var l_tablebody=document.createElement("tbody");
	var l_tailleTab=15;
	
	if(SE_tableau !=undefined && SE_tableau.ListeEmp!=undefined){
		var l_tailleTab=SE_tableau.ListeEmp.length;
	}
	$('#TableEmployes tbody').empty();
	
	var l_photo=0;
	if(f_valPhoto==1 || f_valPhoto==3){
		
		l_photo=1;
	}
	
	
	
	
	for(i=0;i<15;i++){
		l_row=SE_CreerLigneTab("","","",l_photo,f_valBouton);
		if(l_tailleTab<=i){
			l_row.onClick=false;
			l_row.style.cursor="default";
		}else{
			l_row.onClick=SE_ChoixTableau;
			l_row.ondblclick=function(){
				SE_ValidationBouton();
			};
			l_row.style.cursor="pointer";
		}
		
		
		l_tablebody.appendChild(l_row);
	}
	
	l_table.appendChild(l_tablebody);	
	l_divTable.appendChild(l_table);
	
	return l_divTable;
	
}

function SE_BoutonValider()
{
	var l_input = document.createElement("div");
	l_input.id = "BoutonValider";
	l_input.className="S100-BOUTON";
	l_input.style.position="static";
	l_input.style.width="100px";
	l_input.style.height="35px";
	l_input.style.cursor="pointer";
	l_input.style.float="right";
	l_input.style.marginTop="20px";
	l_input.style.marginRight="30px";
	l_input.style.borderRadius="19px";
	
	l_input.onclick=SE_ValidationBouton;
	
	l_p=document.createElement("p");
	l_p.innerHTML=GNAV_DICTIONNAIRENAV("VAL");
	l_p.style.width="100%";
	l_p.style.height="100%";
	l_p.style.marginTop="7px";
	
	l_input.appendChild(l_p);
	
	return l_input;
	
}


function SE_CreerLigneTab(valCell1,valCell2,valCell3,valPhoto,valBouton)
{
	l_row=document.createElement("tr");
	
	//Colonne 1
	var l_cell=document.createElement("td");
	l_cell.innerHTML=valCell1;
	l_cell.style.float="left";
	l_cell.style.fontSize="14px";
	l_cell.style.height="100%";
	l_cell.style.overflow="hidden";
	l_cell.style.marginLeft="16px";
	l_row.appendChild(l_cell);
	
	//Colonne 2
	var l_cell=document.createElement("td");
	l_cell.innerHTML=valCell2;
	l_cell.style.float="left";
	l_cell.style.fontSize="14px";
	l_cell.style.height="100%";
	l_cell.style.overflow="hidden";
	l_row.appendChild(l_cell);
	
	//Colonne 3
	var l_cell=document.createElement("td");
	l_cell.innerHTML=valCell3;
	l_cell.style.float="left";
	l_cell.style.fontSize="14px";
	l_cell.style.height="100%";
	l_cell.style.overflow="hidden";
	l_row.appendChild(l_cell);
	l_row.style.height="20px";
	
	//Colonne photo
	if(valPhoto==1){
	
		
		var l_cellPhotos=document.createElement("td");
		l_cellPhotos.style.float="left";
		l_cellPhotos.style.width="50px";
		l_cellPhotos.style.height="50px";
		l_cellPhotos.style.overflow="hidden";
		
		l_row.appendChild(l_cellPhotos);
		l_row.style.height="50px";
	}else{
		l_row.style.height="20px";
	}
	return l_row;
}

function SE_ChangeCheckContrat()
{

	SE_tableau=JSON.parse(SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(SE_pageEnCours,$("#CheckboxContrat").is(":checked"),$("#CheckboxPhotos").is(":checked"),SE_persencontrat));
	sessionStorage.setItem('emps',JSON.stringify(SE_tableau.ListeEmp));
	
	if($("#RadioNom").is(":checked")){
		SE_Tri(0);
	}else if($("#RadioMatricule").is(":checked")){
		SE_Tri(1);
	}else if($("#RadioBadge").is(":checked")){
		SE_Tri(2);
	}
	
	var l_tailleTemp=20;
	if($("#CheckboxPhotos").is(":checked")){
		l_tailleTemp=50;
	}
	
	for(i=0;i<$("#TableEmployes tr").length;i++){
		SE_ModifTailleLigne(i);
	}
	
	var l_matSelecTemp=[];
	var l_ligneSelecTemp=[];
	
	var l_tailleTab=SE_tailleTab_sansListeMat(l_tailleTemp);
		
	for(n=0;n<l_tailleTab;n++){
		var l_res=SE_matSelec.indexOf(SE_tableau.ListeEmp[n].m);
		if(l_res!=-1){
			l_matSelecTemp.push(SE_matSelec[l_res]);
			l_ligneSelecTemp.push(n);
		}
	}
	
	SE_matSelec=l_matSelecTemp;
	SE_ligneSelec=l_ligneSelecTemp;
	
	document.getElementById("DivScrollTableau").scrollTop=SE_ligneSelec[0]*l_tailleTemp;
	
	SE_FuncScrollCache();
	
}

function SE_ChangeCheckPhotos()
{
	SE_tableau=JSON.parse(SELECTEUREMPLOYENAVIGATEUR_SERECUPTAB(SE_pageEnCours,$("#CheckboxContrat").is(":checked"),$("#CheckboxPhotos").is(":checked"),SE_persencontrat));
	sessionStorage.setItem('emps',JSON.stringify(SE_tableau.ListeEmp));
	
	var l_valBouton;
	if($("#RadioNom").is(":checked")){
		SE_Tri(0);
		l_valBouton=0;
	}else if($("#RadioMatricule").is(":checked")){
		SE_Tri(1);
		l_valBouton=1;
	}else if($("#RadioBadge").is(":checked")){
		SE_Tri(2);
		l_valBouton=2;
	}
	
	var l_tailleTemp=20;
	if($("#CheckboxPhotos").is(":checked")){
		l_tailleTemp=50;
	}
	
	var l_tailleTab=SE_tailleTab_sansListeMat(l_tailleTemp);
	
	var l_enTete=$('#TabEnTete tbody')[0].childNodes[0];
	if($("#CheckboxPhotos").is(":checked")){
	
		for(i=14;i>6;i--){

			$("#TableEmployes tbody")[0].removeChild($("#TableEmployes tbody")[0].childNodes[i]);
			
		}
		
		var l_cellPhotoEnTete=document.createElement("td");
		l_cellPhotoEnTete.innerHTML=GNAV_DICTIONNAIRENAV("PHO");
		l_cellPhotoEnTete.style.float="left";
		l_cellPhotoEnTete.style.width="50px";
		l_cellPhotoEnTete.style.overflow="hidden";
		
		l_enTete.appendChild(l_cellPhotoEnTete);
		for(i=0;i<$("#TableEmployes tr").length;i++){
			var l_recupLigne=$('#TableEmployes tbody')[0].childNodes[i];
			
			
			
			var l_cellPhotos=document.createElement("td");
			l_cellPhotos.style.float="left";
			l_cellPhotos.style.width="50px";
			l_cellPhotos.style.fontSize="14px";
			l_cellPhotos.style.height="50px";
			l_cellPhotos.style.overflow="hidden";
			
			l_recupLigne.appendChild(l_cellPhotos);
		}
	}else{
	
		for(i=0;i<8;i++){
			
			l_row=SE_CreerLigneTab("","","",1,l_valBouton);
			if(l_tailleTab<=i){
				l_row.onClick=false;
				l_row.style.cursor="default";
			}else{
				l_row.onClick=SE_ChoixTableau;
				l_row.ondblclick=function(){
					SE_ValidationBouton();
				};
				l_row.style.cursor="pointer";
			}
			
			
			$("#TableEmployes tbody")[0].append(l_row);
			
			
		}
	
		l_enTetePhoto=l_enTete.childNodes[3];
		l_enTete.removeChild(l_enTetePhoto);
	
		for(i=0;i<$("#TableEmployes tr").length;i++){
			var l_recupLigne=$('#TableEmployes tbody')[0].childNodes[i];
			l_enfant=l_recupLigne.childNodes[3];
			l_recupLigne.removeChild(l_enfant);
		}
	}
	SE_FuncScrollCache();
		
	document.getElementById("DivScrollTableau").scrollTop=SE_ligneSelec[0]*l_tailleTemp;
	
}

function SE_ChangementRadio()
{
	
	var l_photo=0;
	var l_tailleLigne=20;
	if($("#CheckboxPhotos").is(":checked")){
		l_tailleLigne=50;
		l_photo=1;
	}
	if($("#RadioNom").is(":checked")){
		SE_Tri(0);
	}else if($("#RadioMatricule").is(":checked")){
		SE_Tri(1);
	}else if($("#RadioBadge").is(":checked")){
		SE_Tri(2);
	}
	SE_FuncScrollCache();
	
}

function SE_ChoixTableau(f_event)
{
	
	var l_tailleL=20;
	var l_derniereLigne=14;
	if($("#CheckboxPhotos").is(":checked")){
		l_tailleL=50;
		l_derniereLigne=5;
	}
	
	var l_montee=document.getElementById("DivScrollTableau").scrollTop%l_tailleL;
	var l_pos=(document.getElementById("DivScrollTableau").scrollTop-l_montee)/l_tailleL;
	if(f_event.currentTarget.rowIndex==0){
		document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop-l_montee;
	}
	if(f_event.currentTarget.rowIndex==l_derniereLigne){
		document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop+(20-l_montee);
	}
	
	var l_position=f_event.currentTarget.rowIndex+l_pos;
	
	
	
	if (f_event.ctrlKey && SE_multiSelec) {
			if(SE_lignePrec!=undefined){
				var l_posPrec=SE_lignePrec;
			}
		
			if(f_event.shiftKey ){
									
					if(l_position<l_posPrec){
						for(i=l_position;i<=l_posPrec;i++){
						
							var l_recupLigne=SE_tableau.ListeEmp[i];
							if(SE_matSelec.indexOf(l_recupLigne.m)==-1){
								SE_matSelec.push(l_recupLigne.m);
								SE_ligneSelec.push(i);
							}
						}
					}else{
						for(i=l_posPrec;i<=l_position;i++){
							
							var l_recupLigne=SE_tableau.ListeEmp[i];
							if(SE_matSelec.indexOf(l_recupLigne.m)==-1){
								SE_matSelec.push(l_recupLigne.m);
								SE_ligneSelec.push(i);
							}
						}
					}
			}else{
					var l_recupLigne=SE_tableau.ListeEmp[f_event.currentTarget.rowIndex+l_pos];
					if(SE_matSelec.indexOf(l_recupLigne.m)==-1){
						SE_matSelec.push(l_recupLigne.m);
						SE_ligneSelec.push(f_event.currentTarget.rowIndex+l_pos);
					}else{
						var l_caseAsupp=SE_matSelec.indexOf(l_recupLigne.m);
						SE_matSelec.splice(l_caseAsupp,1);
						SE_ligneSelec.splice(l_caseAsupp,1);	
					}
					SE_lignePrec=f_event.currentTarget.rowIndex+l_pos;
			
			
			}
	}else if(f_event.shiftKey){
	
		if(SE_lignePrec!=undefined){
			var l_posPrec=SE_lignePrec;
		}
		SE_matSelec=[];
		SE_ligneSelec=[];
		
		if(l_position<l_posPrec){
			for(i=l_position;i<=l_posPrec;i++){
				
				var l_recupLigne=SE_tableau.ListeEmp[i];
				if(SE_matSelec.indexOf(l_recupLigne.m)==-1){
					SE_matSelec.push(l_recupLigne.m);
					SE_ligneSelec.push(i);
				}
			}
		}else{
			
			for(i=l_posPrec;i<=l_position;i++){
				
				var l_recupLigne=SE_tableau.ListeEmp[i];
				if(SE_matSelec.indexOf(l_recupLigne.m)==-1){
					SE_matSelec.push(l_recupLigne.m);
					SE_ligneSelec.push(i);
				}
			}
		}
	}else{
			SE_ligneSelec=[];
			SE_matSelec=[];
			SE_lignePrec=f_event.currentTarget.rowIndex+l_pos;
			SE_ligneSelec[0]=f_event.currentTarget.rowIndex+l_pos;
			
			
			if($("#RadioMatricule").is(":checked")){
				SE_matSelec[0]=f_event.currentTarget.childNodes[0].innerHTML;
			}else {
				SE_matSelec[0]=f_event.currentTarget.childNodes[1].innerHTML;
			}
	}
	
	SE_FuncScrollCache();
}

function SE_DivCheckbox(f_valPhoto,f_valContrat,f_ContratGrise)
{
	var l_divCheckbox=document.createElement("div");
	l_divCheckbox.id="DivCheckbox";
	l_divCheckbox.style.marginTop="10px";
	l_divCheckbox.style.marginBottom="20px";
	l_divCheckbox.style.marginRight="30px";
	l_divCheckbox.style.width="calc(37% - 30px)";
	l_divCheckbox.style.float="right";
	l_divCheckbox.style.position="static";
	
	//Check Photo
	
	var l_divPhotos = document.createElement("div");
	l_divPhotos.id = "DivCheckboxPhotos";
	l_divPhotos.style.position = "static";
	l_divPhotos.style.float="left";
	
	
	var l_checkPhotos = document.createElement("input");
	l_checkPhotos.id = "CheckboxPhotos";
	l_checkPhotos.style.cssFloat = "left";
	l_checkPhotos.type = "checkbox";
	l_checkPhotos.onchange=function(){
		SE_ChangeCheckPhotos();
	};
	l_checkPhotos.style.marginTop="6px";
	if(f_valPhoto==1){
		l_checkPhotos.checked="true";
	}else if(f_valPhoto==2){
		l_checkPhotos.disabled="true";
	}else if(f_valPhoto==3){
		l_checkPhotos.checked="true";
		l_checkPhotos.disabled="true";
	}
	
	
	var l_checkPhotosLib = document.createElement("label");
	l_checkPhotosLib.setAttribute("for", "CheckboxPhotos");
	l_checkPhotosLib.style.cssFloat = "left";
	l_checkPhotosLib.style.margin = "3px 0px 0px 3px";
	l_checkPhotosLib.innerHTML =GNAV_DICTIONNAIRENAV("AVPHO");;
	
	l_divPhotos.appendChild(l_checkPhotos);
	l_divPhotos.appendChild(l_checkPhotosLib);
	
	
	
	//Check contrat 
	var l_divContrat = document.createElement("div");
	l_divContrat.id = "DivCheckboxContrat";
	l_divContrat.style.position = "static";
	l_divContrat.style.float="right";
	
	
	var l_checkContrat = document.createElement("input");
	l_checkContrat.id = "CheckboxContrat";
	l_checkContrat.style.cssFloat = "left";
	l_checkContrat.type = "checkbox";
	l_checkContrat.onchange=function(){
		SE_ChangeCheckContrat();
	};
	l_checkContrat.style.marginTop="6px";
	if(f_valContrat=="True"){
		l_checkContrat.checked="true";
	}
	
	var l_checkContratLib = document.createElement("label");
	l_checkContratLib.setAttribute("for", "CheckboxContrat");
	l_checkContratLib.style.cssFloat = "left";
	l_checkContratLib.style.margin = "3px 0px 0px 3px";
	l_checkContratLib.innerHTML = GNAV_DICTIONNAIRENAV("CONT");
	
	l_divContrat.appendChild(l_checkContrat);
	l_divContrat.appendChild(l_checkContratLib);
	
	
	l_divCheckbox.appendChild(l_divPhotos);
	l_divCheckbox.appendChild(l_divContrat);
	return l_divCheckbox;
	
	
}





function SE_DivDate(f_Alias)
{
	var l_divDates=document.createElement("div");
	l_divDates.id="DivDate";
	l_divDates.style.position="static"
	l_divDates.style.marginLeft="45px";
	l_divDates.style.marginTop="25px";
	l_divDates.style.float="left";
	l_divDates.style.width="400px";
	
	
	
	var l_divDate1=document.createElement("div");
	l_divDate1.id="DivDate1";
	l_divDate1.style.position="relative";
	l_divDate1.style.float="left";
	l_divDate1.style.marginRight="30px";
		
	l_inputDate1=document.createElement("input");
	l_inputDate1.id="InputDate1";
	l_inputDate1.style.position="static";
	l_inputDate1.style.width="100px";
	l_inputDate1.style.height="25px";
	l_inputDate1.style.padding="3px";
	l_inputDate1.className="S001-TEXT";
	
	l_inputDate1.value=SELECTEUREMPLOYENAVIGATEUR_SECONVERTIONDATEINVERSE(SE_tableau.dateDeb);
	
	var l_libDate1 = document.createElement("label");
	l_libDate1.setAttribute("for", "InputDate1");
	l_libDate1.innerHTML =GNAV_DICTIONNAIRENAV("DEB");
	l_libDate1.style.marginTop="3px";
	l_libDate1.style.marginRight="15px";
	l_libDate1.style.float="left";
	
	
	l_divDate1.appendChild(l_inputDate1);
	SE_DivDateCal(l_inputDate1,f_Alias);
	
	l_divDates.appendChild(l_libDate1);
	l_divDates.appendChild(l_divDate1);
	
	
	
	var l_divDate2=document.createElement("div");
	l_divDate2.id="DivDate2";
	l_divDate2.style.position="relative";
	l_divDate2.style.float="left";
	
	l_inputDate2=document.createElement("input");
	l_inputDate2.id="InputDate2";
	l_inputDate2.style.position="static";
	l_inputDate2.style.width="100px";
	l_inputDate2.style.height="25px";
	l_inputDate2.style.padding="3px";
	l_inputDate2.className="S001-TEXT";
	
	l_inputDate2.value=SELECTEUREMPLOYENAVIGATEUR_SECONVERTIONDATEINVERSE(SE_tableau.dateFin);
	
	var l_libDate2 = document.createElement("label");
	l_libDate2.setAttribute("for", "InputDate2");
	l_libDate2.innerHTML =GNAV_DICTIONNAIRENAV("FIN");
	l_libDate2.style.marginTop="3px";
	l_libDate2.style.marginRight="15px";
	l_libDate2.style.float="left";
	
	l_divDate2.appendChild(l_inputDate2);
	SE_DivDateCal(l_inputDate2,f_Alias);
	
	
	l_divDates.appendChild(l_libDate2);
	l_divDates.appendChild(l_divDate2);
	
	return l_divDates;
}

function SE_DivDateCal(f_champ,f_Alias)
{
	var l_langue = document.documentElement.lang.substring(0,2) || document.getElementsByName("keywords")[0].lang.substring(0,2);
	
	
	
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
	
	var l_elt=f_champ;
	
	
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
	l_cal.style.right    = '2px';
	l_cal.style.top      = '1px';
	l_cal.href           = 'javascript:{}';
	l_cal.innerHTML      = '<img style="vertical-align:top;" src="/' + GNAV_RECUPREPWEB() + '/ext/picto-calendrier/picto-calendrier.png">';
	l_cal.onclick=function(f_evt){
		SE_AfficheCal(f_Alias,l_elt.id);
	};
	l_elt.parentNode.insertBefore(l_cal, l_elt);
	
	// Copié/collé du code généré par WebDev (par événement JS)
	l_elt.onkeypress = function (f_evt) { return JJMMAA(f_evt, l_format); };
	l_elt.onblur = function (f_evt) {
		reinit(f_evt, l_format);
		VerifRegExp(this,l_regExp);
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
		f_evt.stopPropagation();
		return false;
	};
	
}

function SE_DivScrollTableau(f_valPhoto)
{
	var l_divConteneur = document.createElement("div");
	l_divConteneur.id = "DivConteneur";
	l_divConteneur.style.position = "static";
	l_divConteneur.style.height="calc(100% - 37px)";
	l_divConteneur.style.width="17px";
	l_divConteneur.style.overflow="hidden";
	l_divConteneur.style.float="left";
	l_divConteneur.style.border="1px solid #A9AAAC";
	l_divConteneur.style.borderLeft="0px";
	
	var l_divScroll = document.createElement("div");
	l_divScroll.id = "DivScrollTableau";
	l_divScroll.style.position = "static";
	l_divScroll.style.height="100%";
	l_divScroll.style.width="18px";
	l_divScroll.style.overflowY="scroll";
	l_divScroll.style.overflowX="hidden";
	l_divScroll.style.float="left";
	l_divScroll.onscroll=function(){
		SE_FuncScrollCache();
	}
	
	l_divConteneur.appendChild(l_divScroll);
	
	var l_divCache=document.createElement("div");
	l_divCache.id = "DivScrollCache";
	if(SE_tableau !=undefined && SE_tableau.ListeEmp!=undefined){
		if(f_valPhoto==1){
			l_divCache.style.height=SE_tableau.ListeEmp.length*50+"px";
		}else{
			l_divCache.style.height=SE_tableau.ListeEmp.length*20+"px";
		}
	}else{
		l_divCache.style.height="0px";
	}
	
	
	l_divCache.innerHTML="&nbsp;";
	
	l_divScroll.appendChild(l_divCache);
	
	
	return l_divConteneur;
	
}

function SE_DivTabEmploye(f_valBouton,f_valPhoto,f_valContrat)
{
	l_divemp=document.createElement("div");
	l_divemp.id="DivTabEmp";
	l_divemp.style.position="static";
	l_divemp.style.float="left";
	l_divemp.style.width="calc(100% - 60px)";
	l_divemp.style.height="calc(100% - 191px)";
	l_divemp.style.marginLeft="30px";
	l_divemp.tabIndex="0";
	
	l_divemp.appendChild(SE_EnTeteTableau(f_valPhoto));	
	l_divemp.appendChild(SE_ListeEmploye(f_valBouton,f_valPhoto,f_valContrat));
	l_divemp.appendChild(SE_DivScrollTableau(f_valPhoto));
	
	
	return l_divemp;
}


function SE_DivTitre()
{
	//Div Titre
	var l_divEnTete=document.createElement("div");
	l_divEnTete.id="DivEnTete";
	l_divEnTete.style.position="static";
	l_divEnTete.style.fontSize = "18px";
	l_divEnTete.style.width="100%";
	l_divEnTete.style.height="45px";
	l_divEnTete.style.marginBottom="10px";
	l_divEnTete.style.cursor="move";
	
	var l_divTexte=document.createElement("p");
	l_divTexte.style.position="absolute";
	l_divTexte.style.width="190px";
	l_divTexte.style.height="27px";
	l_divTexte.innerText=GNAV_DICTIONNAIRENAV("SEL");
	l_divTexte.style.marginTop="26px";
	l_divTexte.style.marginLeft="30px";
	l_divTexte.classList.add(GNAV_RECUPSTYLETITREWEB());
	
	//Div bouton fermeture
	var l_divBouton=document.createElement("div");
	l_divBouton.id = "DivBoutonFermeture";
	l_divBouton.style.position = "static";
	l_divBouton.style.float="right";
	l_divBouton.style.width="12px";
	l_divBouton.style.height="18px";
	l_divBouton.style.marginTop="26px";
	l_divBouton.style.marginRight="30px";
	l_divBouton.style.cursor="pointer";
	l_divBouton.style.backgroundImage="url('/" + GNAV_RECUPREPWEB() + "/Ext/FermePopup/PictoFermerPoppup.png";
	l_divBouton.onclick=SE_ChoixFermeture;
	
	l_divEnTete.appendChild(l_divTexte);
	l_divEnTete.appendChild(l_divBouton);
	
	return l_divEnTete;
}

function SE_DivTri()
{
	var l_texte=document.createTextNode(GNAV_DICTIONNAIRENAV("Tri"));
	var l_divTri=document.createElement("div");
	l_divTri.id="DivTri";
	l_divTri.appendChild(l_texte);
	l_divTri.style.position="static";
	l_divTri.style.float="left";
	l_divTri.style.marginLeft="30px";
	l_divTri.style.marginTop="12px";
	l_divTri.style.marginBottom="20px";
	l_divTri.style.marginRight="10px";
	
	return l_divTri;
	
}

function SE_FuncEcouteClavier()
{


	
	SE_sovEvtOnKey		=  document.onkeypress;
	SE_sovEvtonSelectStart	=  document.onselectstart;
	
	SE_sovEvtOnKeyDown		=  document.onkeydown;
	SE_sovEvtOnKeyUp		=  document.onkeyup;
	
	
	SE_valClavier="";
	
	
	document.onkeypress=function(f_e){
	
		
		if(SE_tableau.ListeEmp!=undefined){
			var l_tabEmp=SE_tableau.ListeEmp;
		}
		
		l_ligneSelec=SE_ligneSelec;

		var key=f_e.key;

		//Si nécessaire mettre dans le if !='focus' pour pas qu'il s'effectue lorsqu'on est au niveau de la date
		if (key=='Enter'){
			SE_ValidationBouton();
		}else{
			
			if(SE_tableau.ListeEmp!=undefined){
				if( SE_timer!=null ){
					
					clearTimeout(SE_timer);
				}
				
				SE_valClavier=SE_valClavier+key;
				if(document.activeElement.id!="InputDate1" && document.activeElement.id!="InputDate2" && document.activeElement.id!="calInputDate1" && document.activeElement.id!="calInputDate2"){
					
					
					var l_trouve=SE_FuncRecherche(SE_valClavier);
					
					SE_timer=setTimeout(SE_ViderValClavier,1000);
					
					if(l_trouve!=-1){
						SE_matSelec=[];
						SE_ligneSelec=[];
						
						for(i=0;i<$('#TableEmployes tr').length;i++){
							$("#TableEmployes tr")[i].style.backgroundColor="white";
						}
						
						SE_ligneSelec[0]=l_trouve;	
						SE_matSelec[0]=SE_tableau.ListeEmp[l_trouve].m;
						SE_lignePrec=l_trouve;
						
						
						
						if($("#CheckboxPhotos").is(":checked")){
							var l_valScroll=SE_ligneSelec;
							document.getElementById("DivScrollTableau").scrollTop=l_valScroll*50;
						}else{
							var l_valScroll=SE_ligneSelec;
							document.getElementById("DivScrollTableau").scrollTop=l_valScroll*20;
						}
						SE_FuncScrollCache();
						l_matSelec=SE_matSelec;
					}else{
						console.log("Introuvable dans la liste actuelle");
					}
				}
			}else{
				console.log("Tableau vide");
			}
		}
		
		
	}
	
	// Désactive la selection de texte
	document.onselectstart	= function() { return false; };
	
	document.onkeydown	 	= null; 
	
	document.onkeyup		= null;
	
}

function SE_FuncRecherche(f_valClavier)
{
	var l_valClavier=f_valClavier.toUpperCase();
	var l_tabEmp=SE_tableau.ListeEmp;
	for(i=0;i<l_tabEmp.length;i++){
		
		if($("#RadioNom").is(":checked")){
			l_valtd=l_tabEmp[i].n;
		}else if($("#RadioMatricule").is(":checked")){
			l_valtd=l_tabEmp[i].m;
		}else {
			l_valtd=l_tabEmp[i].b;
		}
		l_valTab=l_valtd.toUpperCase();
		if(l_valTab.indexOf(l_valClavier)==0  ){
			return i;
			
		}
	}
	return -1;
}


function SE_FuncScrollCache(f_valBouton)
{
	if(SE_tableau !=undefined ){
		var l_tabEmp=SE_tableau.ListeEmp;
	}
	var l_photo=0;
	var l_tailleL=20;
	var l_tailleBody=15;
	var l_marginTopTd=0;
	if($("#CheckboxPhotos").is(":checked")){
		l_photo=1;
		l_tailleL=50;
		l_tailleBody=7;
		l_marginTopTd=15;
	}
	var l_montee=document.getElementById("DivScrollTableau").scrollTop%l_tailleL;
	var l_pos=(document.getElementById("DivScrollTableau").scrollTop-l_montee)/l_tailleL;
	$('#TableEmployes').css('top', "-" + l_montee+"px");
	
	var l_nbLigne=$('#TableEmployes tr').length;
	
	if(l_tabEmp!=undefined){
		if(l_tabEmp.length-l_pos<19){
			l_nbLigne=l_tabEmp.length-l_pos;
			
		}
	}else{
		l_nbLigne=0;
	}
	
	var l_enTete=$('#TabEnTete tbody')[0].childNodes[0];
	if($("#RadioNom").is(":checked")){
		l_valBoutonMat=1;
		l_enTete.childNodes[0].innerHTML=GNAV_DICTIONNAIRENAV("EMP");
		l_enTete.childNodes[1].innerHTML=GNAV_DICTIONNAIRENAV("MAT");
		l_enTete.childNodes[2].innerHTML=GNAV_DICTIONNAIRENAV("BAD");
	}else if($("#RadioMatricule").is(":checked")){
		l_valBoutonMat=0;
		l_enTete.childNodes[0].innerHTML=GNAV_DICTIONNAIRENAV("MAT");
		l_enTete.childNodes[1].innerHTML=GNAV_DICTIONNAIRENAV("EMP");
		l_enTete.childNodes[2].innerHTML=GNAV_DICTIONNAIRENAV("BAD");
	}else if($("#RadioBadge").is(":checked")){
		l_valBoutonMat=1;
		l_enTete.childNodes[0].innerHTML=GNAV_DICTIONNAIRENAV("BAD");
		l_enTete.childNodes[1].innerHTML=GNAV_DICTIONNAIRENAV("MAT");
		l_enTete.childNodes[2].innerHTML=GNAV_DICTIONNAIRENAV("EMP");
	}
	
	for(i=0;i<l_tailleBody;i++){
		var l_recupLigne=$('#TableEmployes tbody')[0].childNodes[i];
		l_recupLigne.childNodes[0].style.marginTop=l_marginTopTd+"px";
		l_recupLigne.childNodes[1].style.marginTop=l_marginTopTd+"px";
		l_recupLigne.childNodes[2].style.marginTop=l_marginTopTd+"px";
		
		if(i>=l_nbLigne){
			l_recupLigne.childNodes[0].innerHTML="";
			l_recupLigne.childNodes[1].innerHTML="";
			l_recupLigne.childNodes[2].innerHTML="";
			if(l_recupLigne.childNodes[3]!=undefined){
				l_recupLigne.childNodes[3].innerHTML="";
			}
			l_recupLigne.onclick=false;
			l_recupLigne.style.cursor="default";
		}else{
			l_recupLigne.onclick=SE_ChoixTableau;
			l_row.ondblclick=function(){
				SE_ValidationBouton();
			};
			l_recupLigne.style.cursor="pointer";
			if($("#RadioNom").is(":checked")){
				SE_ModifTailleLigne(i,l_photo,0);
				l_recupLigne.childNodes[0].innerHTML=l_tabEmp[l_pos+i].n				
				l_recupLigne.childNodes[1].innerHTML=l_tabEmp[l_pos+i].m;
				l_recupLigne.childNodes[2].innerHTML=l_tabEmp[l_pos+i].b;
				
			}
			else if($("#RadioMatricule").is(":checked")){
				SE_ModifTailleLigne(i,l_photo,1);
				l_recupLigne.childNodes[0].innerHTML=l_tabEmp[l_pos+i].m;
				l_recupLigne.childNodes[1].innerHTML=l_tabEmp[l_pos+i].n;
				l_recupLigne.childNodes[2].innerHTML=l_tabEmp[l_pos+i].b;
			}
			else if($("#RadioBadge").is(":checked")){
				SE_ModifTailleLigne(i,l_photo,2);
				l_recupLigne.childNodes[0].innerHTML=l_tabEmp[l_pos+i].b;
				l_recupLigne.childNodes[1].innerHTML=l_tabEmp[l_pos+i].m;
				l_recupLigne.childNodes[2].innerHTML=l_tabEmp[l_pos+i].n;	
			}
			if($("#CheckboxPhotos").is(":checked")){
				var l_image;
				
				while( l_recupLigne.childNodes[3].firstChild) {
					l_recupLigne.childNodes[3].removeChild( l_recupLigne.childNodes[3].firstChild);
				}
				
				if(l_tabEmp[l_pos+i].p){
					if(l_tabEmp[l_pos+i].pI)
					{
						l_tabEmp[l_pos+i].pI.style.borderRadius="50px";
						l_recupLigne.childNodes[3].appendChild(l_tabEmp[l_pos+i].pI);
					}
					else
					{
						l_image=new Image(50,50);
						l_image.src=l_tabEmp[l_pos+i].p;
						l_tabEmp[l_pos+i].pI = l_image;
						l_tabEmp[l_pos+i].pI.style.borderRadius="50px";
						l_recupLigne.childNodes[3].appendChild(l_tabEmp[l_pos+i].pI);
					}
								
				}else{

				}		
			}
			
			for(n=0;n<3;n++){
				if(l_recupLigne.childNodes[n].innerHTML==""){
					l_recupLigne.childNodes[n].innerHTML="&nbsp;";
				}
			}
			
			
		}
		if(l_recupLigne.childNodes[l_valBoutonMat].innerHTML !== "" && SE_matSelec.indexOf(l_recupLigne.childNodes[l_valBoutonMat].innerHTML)!=-1){
			$("#TableEmployes tbody")[0].childNodes[i].style.backgroundColor="#137AEC";
			$("#TableEmployes tbody")[0].childNodes[i].style.color="white";
		}else{
			$("#TableEmployes tbody")[0].childNodes[i].style.backgroundColor="white";
			$("#TableEmployes tbody")[0].childNodes[i].style.color="#505458";
		}
	}
	
}

function SE_ListeRadio(f_valBouton)
{
	//Div finale
	var l_divTriRadio=document.createElement("div");
	l_divTriRadio.id="DivTriRadio";
	l_divTriRadio.style.position = "static";
	l_divTriRadio.style.width="calc(63% - 65px)";
	l_divTriRadio.style.float="left";
	l_divTriRadio.style.marginTop="10px";
	l_divTriRadio.style.marginBottom="20px";

	//Div pour les boutons radio et label	
	var l_divRadio = document.createElement("div");
	l_divRadio.id = "SelecteurTri";
	l_divRadio.style.position="static";
	l_divRadio.style.width="100%";
	l_divRadio.style.height="18px";
	
	
	
	var l_inputNom = document.createElement("input");
	l_inputNom.id = "RadioNom";
	l_inputNom.name = "Tri";
	l_inputNom.type = "radio";
	l_inputNom.style.marginTop="6px";
	l_inputNom.style.float="left";
	l_inputNom.onchange=function(){
		SE_ChangementRadio();
	};
	if(f_valBouton==0){
		l_inputNom.checked="true";
	}
	
	var l_libNom = document.createElement("label");
	l_libNom.setAttribute("for", "RadioNom");
	l_libNom.innerHTML =GNAV_DICTIONNAIRENAV("NOPRE");
	l_libNom.style.float="left";
	l_libNom.style.marginTop="3px";
	l_libNom.style.marginLeft="3px"
	
	//Div composé de bouton et libellé pour le nom
	l_divNom=document.createElement("div");
	l_divNom.id="DivRadioNom";
	l_divNom.style.position="static";
	l_divNom.style.float="left";
	l_divNom.style.paddingRight="12px";
	
	l_divNom.appendChild(l_inputNom);
	l_divNom.appendChild(l_libNom);
	
	l_divRadio.appendChild(l_divNom);
	
	//Deuxième bouton
	
	var l_inputMat = document.createElement("input");
	l_inputMat.id = "RadioMatricule";
	l_inputMat.name = "Tri";
	l_inputMat.type = "radio";
	l_inputMat.style.float="left";
	l_inputMat.style.marginTop="6px";
	l_inputMat.onchange=function(){
		SE_ChangementRadio();
	};
	if(f_valBouton==1){
		l_inputMat.checked="true";
	}
	
	var l_libMat = document.createElement("label");
	l_libMat.setAttribute("for", "RadioMatricule");
	l_libMat.style.float="left";
	l_libMat.style.marginTop="3px";
	l_libMat.innerHTML =GNAV_DICTIONNAIRENAV("PMAT");
	l_libMat.style.marginLeft="3px"
	
	//Div composé de bouton et libellé pour le matricule
	l_divMat=document.createElement("div");
	l_divMat.id="DivRadioMatricule";
	l_divMat.style.position="static";
	l_divMat.style.float="left";
	l_divMat.style.paddingRight="12px";
	
	l_divMat.appendChild(l_inputMat);
	l_divMat.appendChild(l_libMat);
	
	l_divRadio.appendChild(l_divMat);
	
	//Troisième bouton
	var l_inputBadge = document.createElement("input");
	l_inputBadge.id = "RadioBadge";
	l_inputBadge.name = "Tri";
	l_inputBadge.type = "radio";
	l_inputBadge.style.float="left";
	l_inputBadge.style.marginTop="6px";
	l_inputBadge.onchange=function(){
			SE_ChangementRadio();
	};
	if(f_valBouton==2){
		l_inputBadge.checked="true";
	}
	
	var l_libBadge = document.createElement("label");
	l_libBadge.setAttribute("for", "RadioBadge");
	l_libBadge.style.float="left";
	l_libBadge.style.marginTop="3px";
	l_libBadge.innerHTML =GNAV_DICTIONNAIRENAV("PBAD");
	l_libBadge.style.marginLeft="3px"
	
	
	//Div composé de bouton et libellé pour le badge
	l_divBad=document.createElement("div");
	l_divBad.id="DivRadioBadge";
	l_divBad.style.position="static";
	l_divBad.style.float="left";
	
	l_divBad.appendChild(l_inputBadge);
	l_divBad.appendChild(l_libBadge);
	
	l_divRadio.appendChild(l_divBad);
	
	l_divTriRadio.appendChild(l_divRadio);
	return l_divTriRadio;
}



function SE_ChoixFermeture()
{
	GNAV_GIGEREGFI(false);
	$("#CELL_GRISE_GESTION_EMP").hide();
	SE_finInterEvt();
}
function SE_SourisScrollPrincipal(f_evt)
{
	
	var l_mouvement;
	if(f_evt.originalEvent.wheelDelta)
	{
		l_mouvement = f_evt.originalEvent.wheelDelta / 120;
	}
	else
	{
		l_mouvement = f_evt.originalEvent.detail;
	}
	
	switch(SE_tableau.typeNav)
	{
		case 'CR' :
		l_mouvement = l_mouvement * -100;
		break;
		case 'FF' :
		break;
		case 'SF' :
		l_mouvement = l_mouvement * -100;
		break;
		default : // IE + edge
		l_mouvement = l_mouvement * -30;
	}
	
	var data1  = document.getElementById("DivScrollTableau");
	
	data1.scrollTop += l_mouvement;
	SE_FuncScrollCache();
	
	f_evt.originalEvent.stopPropagation();
	
	return false;
}

function SE_ValidationBouton()
{
	SE_ChoixFermeture()
	if(SE_date){
		l_tabdeb = $("#InputDate1").val().split("/");
		l_tabfin = $("#InputDate2").val().split("/");
		
		
		if(l_tabdeb[0]=="00" || l_tabdeb[1]=="00" || l_tabdeb[2]=="0000" || l_tabfin[0]=="00" || l_tabfin[1]=="00" || l_tabfin[2]=="0000"){
			alert("Veuillez saisir une date valide");
			return;
		}
		l_Datedeb = SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate1").val());
		l_Datefin = SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate2").val());
		if(l_Datefin < l_Datedeb) {
			alert("La date de fin ne peut pas être antérieur à la date de début");
			return;
		}
	}
	
	var l_photo="";
	var l_valEmp=[];
	
	var l_ligne=document.getElementById("TableEmployes").getAttribute("ligneSelec");
	
	l_ligneSelec=SE_ligneSelec;
	l_matSelec=SE_matSelec
	if(l_ligneSelec.length>1){
	
		for(i=0;i<l_ligneSelec.length;i++){
			l_valEmp[i]=SE_tableau.ListeEmp[l_ligneSelec[i]];
		}
		if(l_valEmp!=null){
			var l_tabRetour= new Object();
			l_tabRetour.mats=[];
			for(i=0;i<l_ligneSelec.length;i++){
				
				
				l_tabRetour.mats.push(l_valEmp[i].m);
			}
			if(SE_date){
				l_tabRetour.DateDebut=SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate1").val());
				l_tabRetour.DateFin=SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate2").val());
				SELECTEUREMPLOYENAVIGATEUR_SEVALIDEMAT(l_tabRetour.mats.join(','),l_tabRetour.DateDebut,l_tabRetour.DateFin);
			}else{
				SELECTEUREMPLOYENAVIGATEUR_SEVALIDEMAT(l_tabRetour.mats.join(','));
			}
				ExecuteFonctionJavascript(SE_foncretour,l_tabRetour);
		}else{
			console.log("Veuillez choisir un employé ou fermer la fenêtre"); 
		}
	}else{
		
		if(SE_tableau.ListeEmp!=undefined){
			l_valEmp=SE_tableau.ListeEmp[l_ligneSelec[0]];
		}else{
			l_valEmp=null;
		}
		
		if(l_valEmp!=null){

			var l_tabRetour= new Object();
			l_tabRetour.mats=[];
			l_tabRetour.mats.push(l_valEmp.m);
			if(SE_date){
				l_tabRetour.DateDebut=SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate1").val());
				l_tabRetour.DateFin=SELECTEUREMPLOYENAVIGATEUR_SECONVERSIONDATE($("#InputDate2").val());
				SELECTEUREMPLOYENAVIGATEUR_SEVALIDEMAT(l_tabRetour.mats[0],l_tabRetour.DateDebut,l_tabRetour.DateFin);
			}else{
				SELECTEUREMPLOYENAVIGATEUR_SEVALIDEMAT(l_tabRetour.mats[0]);
			}
			
			ExecuteFonctionJavascript(SE_foncretour,l_tabRetour);
		}else{
			console.log("Veuillez choisir un employé ou fermer la fenêtre"); 
		}
	}
	
	
	
	
	
}

function SE_CellDraggable()
{
	
	
	$("#CELL_GRISE_GESTION_EMP").width(document.body.clientWidth + $(window).scrollLeft()).height(document.body.clientHeight + $(window).scrollTop());
	
	if($("#dwwCH_CELL_CAL").css("visibility")=="visible"){
		$("#dwwCH_CELL_CAL").css("visibility","hidden");
	}
	$("#InputDate1").blur();
	$("#InputDate2").blur();
}

function SE_AfficheCal(f_Alias,f_id)
{
	var l_idCal="#dww"+f_Alias;
	
	var l_top=$("#PopUpEmp").offset().top +$("#"+f_id).parent().position().top+$("#"+f_id).parent().height();
	// 117 = Largeur du calendrier (215 px) - largeur de la zone de saisie (100 px)
	var l_left=$("#PopUpEmp").offset().left +$("#"+f_id).parent().position().left -$("body > form > table").offset().left-115;
	
	$(l_idCal).css("zIndex",2000002);
	$(l_idCal).css("top",l_top);
	$(l_idCal).css("left",l_left);
	if($(l_idCal).css("visibility")=="visible"){
		$(l_idCal).css("visibility","hidden");
		$(l_idCal).css("visibility","visible");
	}else{
		$(l_idCal).css("visibility","visible");
	}
	if($(l_idCal).css("display")=="none"){
		$(l_idCal).css("display","none");
		$(l_idCal).css("display","block");
	}else{
		$(l_idCal).css("display","block");
	}
	$("#InputDate1").blur();
	$("#InputDate2").blur();
}

function SE_finInterEvt()
{

	document.onkeypress	= SE_sovEvtOnKey;
	document.onselectstart	= SE_sovEvtonSelectStart;
	document.onkeydown		= SE_sovEvtOnKeyDown;
	document.onkeyup		= SE_sovEvtOnKeyUp;


}
function SE_EnTeteTableau(f_valPhoto)
{
	var l_divTable = document.createElement("div");
	l_divTable.id = "DivEnTeteTab";
	l_divTable.style.position = "static";
	l_divTable.style.height="35px";
	l_divTable.style.width="100%";
	l_divTable.style.float="left";
	l_divTable.style.overflow="hidden";
	l_divTable.style.backgroundColor="#ECF0F4";
	
	
	var l_table=document.createElement("table");
	l_table.id = "TabEnTete";
	l_table.style.position = "static";
	l_table.style.height="20px";
	l_table.style.width="calc(100% - 18px)";
	l_table.style.float="left";
	l_table.style.marginTop="8px";
	l_table.style.fontFamily="OpenSans-SemiBold-oct, Arial, sans-serif";
	l_table.style.color="#505458";
	l_table.style.overflow="hidden";
	
	var l_tr=document.createElement("tr");
	
	var l_tablebody=document.createElement("tbody");
	
	var l_thEmp=document.createElement("td");
	l_thEmp.innerHTML=GNAV_DICTIONNAIRENAV("EMP");
	l_thEmp.style.float="left";
	l_thEmp.style.width="calc(34% - 16px)";
	l_thEmp.style.marginLeft="16px";
	l_thEmp.style.height="100%";
	
	l_tr.appendChild(l_thEmp);
	
	var l_thMat=document.createElement("td");
	l_thMat.innerHTML=GNAV_DICTIONNAIRENAV("MAT");
	l_thMat.style.float="left";
	l_thMat.style.width="33%";
	l_thMat.style.height="100%";
	
	l_tr.appendChild(l_thMat);
	
	var l_thBadge=document.createElement("td");
	l_thBadge.innerHTML=GNAV_DICTIONNAIRENAV("BAD");
	l_thBadge.style.float="left";
	l_thBadge.style.width="33%";
	l_thBadge.style.height="100%";
	
	l_tr.appendChild(l_thBadge);
	
	if(f_valPhoto==1){
		var l_cellPhotoEnTete=document.createElement("td");
		l_cellPhotoEnTete.innerHTML=GNAV_DICTIONNAIRENAV("PHO");
		l_cellPhotoEnTete.style.float="left";
		l_cellPhotoEnTete.style.width="50px";
		l_cellPhotoEnTete.style.overflow="hidden";
		l_cellPhotoEnTete.style.height="100%";
		
		l_tr.appendChild(l_cellPhotoEnTete);
	}
	
	
	l_tablebody.appendChild(l_tr);
	
	l_table.appendChild(l_tablebody);
	
	l_divTable.appendChild(l_table);
	
	return l_divTable;



}
function SE_ChoixJourCal(f_date)
{
	var l_left=5+$("#PopUpEmp").offset().left + $("#InputDate1").parent().position().left - $("body > form > table").offset().left;
	var l_leftCal=$("#dwwCH_CELL_CAL").css("left").substr(0, $("#dwwCH_CELL_CAL").css("left").length-2);
	if(l_leftCal<l_left){
		$("#InputDate1").val(f_date);
	}else{
		$("#InputDate2").val(f_date);
	}
	$("#dwwCH_CELL_CAL").css("visibility","hidden");
}
function TestExisteFonction(f_fonction)
{
return (typeof(window[f_fonction]) == "function");


}
function SE_FuncEcouteFleche(f_multiSelection)
{

	document.onkeydown=function(f_event){
		 
		if(f_multiSelection){
					if(document.activeElement.id!="InputDate1" && document.activeElement.id!="InputDate2" && document.activeElement.id!="calInputDate1" && document.activeElement.id!="calInputDate2"){
						if(f_event.keyCode==40){
							document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop+20;
							f_event.stopPropagation();
							
							return false;
						}
						if(f_event.keyCode==38){
							document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop-20;
							f_event.stopPropagation();
							return false;
						}
					}
		}else{
					var l_ligneSelecTemp=SE_ligneSelec[0];
					if(document.activeElement.id!="InputDate1" && document.activeElement.id!="InputDate2" && document.activeElement.id!="calInputDate1" && document.activeElement.id!="calInputDate2"){
						if(f_event.keyCode==40){
						
							var l_tailleL=20;
							var l_derniereLigne=14;
							if($("#CheckboxPhotos").is(":checked")){
								l_tailleL=50;
								l_derniereLigne=5;
							}
							
							f_event.stopPropagation();
							if($("#RadioMatricule").is(":checked")){
								if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[l_derniereLigne].childNodes[0].innerHTML){
									document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop+20;
								}
							}else{
								if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[l_derniereLigne].childNodes[1].innerHTML){
									document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop+20;
								}
							}
							
							if(l_ligneSelecTemp<SE_tableau.ListeEmp.length-1){
								l_ligneSelecTemp=parseInt(l_ligneSelecTemp)+1;
							}
							SE_ligneSelec=[];
							SE_matSelec=[];
							SE_lignePrec=l_ligneSelecTemp;
							SE_ligneSelec[0]=l_ligneSelecTemp;
							SE_matSelec[0]=SE_tableau.ListeEmp[l_ligneSelecTemp].m;
							SE_FuncScrollCache();
							
							
							var l_montee=document.getElementById("DivScrollTableau").scrollTop%l_tailleL;
							var l_pos=(document.getElementById("DivScrollTableau").scrollTop-l_montee)/l_tailleL;
							if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[l_derniereLigne].childNodes[1].innerHTML){
								console.log("rentre la");
								console.log(document.getElementById("DivScrollTableau").scrollTop);
								document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop+(20-l_montee);
								console.log(document.getElementById("DivScrollTableau").scrollTop);
							}
							var l_posLigne=document.getElementById("DivScrollTableau").scrollTop/l_tailleL;
							console.log("se ligne selec "+SE_ligneSelec[0]);
							console.log("l_posLigne "+l_posLigne);
							if(SE_ligneSelec[0]<l_posLigne){
								console.log("inférieur");
								document.getElementById("DivScrollTableau").scrollTop=l_ligneSelecTemp*l_tailleL;
							}else{
								console.log(((l_derniereLigne-1)*l_tailleL));
								if(SE_ligneSelec[0]>l_posLigne+l_derniereLigne-1){
									document.getElementById("DivScrollTableau").scrollTop=l_ligneSelecTemp*l_tailleL-((l_derniereLigne-1)*l_tailleL);
								}
							
							}
							
							return false;
						}
							if(f_event.keyCode==38){
								f_event.stopPropagation();
								
								var l_tailleL=20;
								var l_derniereLigne=14;
								if($("#CheckboxPhotos").is(":checked")){
									l_tailleL=50;
									l_derniereLigne=5;
								}
								
								if($("#RadioMatricule").is(":checked")){
									if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[0].childNodes[0].innerHTML || SE_matSelec[0]==SE_tableau.ListeEmp[parseInt(SE_ligneSelec)-1].m){
										document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop-20;
									}
								}else{
									if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[0].childNodes[1].innerHTML || SE_matSelec[0]==SE_tableau.ListeEmp[parseInt(SE_ligneSelec)-1].m){
										document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop-20;
									}
								}
								if(l_ligneSelecTemp>0){
									l_ligneSelecTemp=parseInt(l_ligneSelecTemp)-1;
								}
								SE_ligneSelec=[];
								SE_matSelec=[];
								SE_lignePrec=l_ligneSelecTemp;
								SE_ligneSelec[0]=l_ligneSelecTemp;
								SE_matSelec[0]=SE_tableau.ListeEmp[l_ligneSelecTemp].m;
								SE_FuncScrollCache();
								
								var l_montee=document.getElementById("DivScrollTableau").scrollTop%l_tailleL;
								var l_pos=(document.getElementById("DivScrollTableau").scrollTop-l_montee)/l_tailleL;
								if(SE_matSelec[0]==$("#TableEmployes tbody")[0].childNodes[0].childNodes[1].innerHTML){
									document.getElementById("DivScrollTableau").scrollTop=document.getElementById("DivScrollTableau").scrollTop-l_montee;
								}
								var l_posLigne=document.getElementById("DivScrollTableau").scrollTop/l_tailleL;
								if(SE_ligneSelec[0]<l_posLigne){
									document.getElementById("DivScrollTableau").scrollTop=l_ligneSelecTemp*l_tailleL;
								}else{
									if(SE_ligneSelec[0]>l_posLigne+l_derniereLigne-1){
										document.getElementById("DivScrollTableau").scrollTop=l_ligneSelecTemp*l_tailleL-((l_derniereLigne-1)*l_tailleL);
									}
								}
								
								return false;
							}
					}
					
			}
	}
}
function SE_tailleTab_sansListeMat(f_tailleTemp)
{
	var l_tailleTab=0;
	var l_tailleScroll=0;
	
	if(SE_tableau!=undefined && SE_tableau.ListeEmp!=undefined){
		l_tailleTab=SE_tableau.ListeEmp.length;
		if(SE_listeMat != undefined) {
			if(SE_listeMat.length != 0) {
				for(n=0;n<l_tailleTab;n++){
					if(SE_listeMat.indexOf(SE_tableau.ListeEmp[n].m.toUpperCase()) != -1) {
						SE_tableau.ListeEmp.splice(n,1);
						l_tailleTab = l_tailleTab-1;
						n--;
					}
				}
			}
		}
		l_tailleScroll=SE_tableau.ListeEmp.length*f_tailleTemp;
	}
	
	$("#DivScrollCache").css('height',+l_tailleScroll+"px");
	
	return l_tailleTab;
}

