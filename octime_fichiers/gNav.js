// Procedures globales du projet
function _ECR(c,p,s){c+="";var h = c.substring(0, 50);var n = 0;switch (p){case -2147483645:n = 1;case -2147483648:if (!window.tabExtraitChaine){tabExtraitChaine = new Array();}tabExtraitChaine[h] = 1;return _EC(c,tabExtraitChaine[h],s,n);case -2147483646:n = 1;case -2147483647:if (!window.tabExtraitChaine || !(tabExtraitChaine[h])){return "\b";}(tabExtraitChaine[h])++;var sRes = _EC(c,tabExtraitChaine[h],s,n);if ("\b" == sRes){delete tabExtraitChaine[h];}return sRes;}}
function _EC(c,p,s,n){c=String(c);if ((p >= -2147483648) && (p <= -2147483645)){return _ECR(c,p,s);}var t=new Array();if(typeof(s)!=typeof(t))t[0]=s;else t=s;if (!(n == 1)){var d=0;for(var i=0;i<p-1;i++){var m=-1;var l=0;for(var j=0;j<t.length;j++){s=t[j];var k=c.indexOf(s,d);if((k>-1)&&((m<0)||(k<m))){m=k;l=s.length;}}d=m+l;if(d==-1)return(p==1?c:"\b");}var f=-1;for(var j=0;j<t.length;j++){var k=c.indexOf(t[j],d);if((k>-1)&&((f<0)||(k<f)))f=k;}if(f==-1)f=c.length;return c.substring(d,f);}else{var d = c.length;for(var i=0;i<p-1;i++){var m=-1;for(var j=0;j<t.length;j++){var k=c.lastIndexOf(t[j],d-1);if(k>m)m=k;}d=m;if (d == -1)	return (p==1?c:"\b");}var f=-1;var l=0;for(var j=0;j<t.length;j++){s=t[j];var k=c.lastIndexOf(s,d-1);if(k>f){f=k;l=s.length;}}f+=l;if (f == -1)return c.substr(0, d);return c.substr(f, d - f);}}
function _MI2(c,n,l){c+="";return c.substring(n - 1, (undefined === l) ? c.length : n - 1 + l);}
function GNAV_LOD(event){try{clWDUtil.Try();{GNAV_gf_threadActif=false;}}catch(_E){clWDUtil.xbCatchThrow(_E,event);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_HMODIF(Vf_Val_Ch,VNB,Vf_Ancienne_Heure,Vf_Limite,Vf_Separateur){if(Vf_Separateur===void 0){Vf_Separateur=":";}try{clWDUtil.Try();{var Vl_i=0;var Vl_Lim=clWDUtil.oConversionType(Vf_Limite,1,0,50,0);var Vl_ValeurRetour=clWDUtil.oConversionType(Vf_Val_Ch,19,0,50,0);var Vl_Separateur=clWDUtil.oConversionType(Vf_Separateur,19,0,50,0);if(clWDUtil.bComparaison(VNB,2,true,true,false,false)){Vl_Lim=false;}if(Vl_Lim){if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique((Vl_ValeurRetour + "").substr(1-1, 1)),2,false,false,false,true)){Vl_ValeurRetour="";}if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique((Vl_ValeurRetour + "").substring(1-1, 2)),23,false,false,false,true)){Vl_ValeurRetour=clWDUtil.oConversionType((Vl_ValeurRetour + "").substr(1-1, 1),19,0,50,0);}}if((clWDUtil.bComparaison(clWDUtil.oConversionType(String(Vl_ValeurRetour).length,8,0,8,0),VNB,true,false,false,false)&&clWDUtil.bComparaison(clWDUtil.oConversionType(String(Vf_Ancienne_Heure).length,8,0,8,0),VNB,false,false,false,false))){Vl_ValeurRetour=(Vl_ValeurRetour+Vl_Separateur);}if(clWDUtil.bComparaison(clWDUtil.oConversionType(String(Vl_ValeurRetour).length,8,0,8,0),VNB,false,false,false,true)){if(clWDUtil.bComparaison((Vl_ValeurRetour + "").substr(clWDUtil.oAddition(VNB,1)-1, 1),Vl_Separateur,true,true,false,false)){Vl_ValeurRetour=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition((Vl_ValeurRetour + "").substring(1-1, VNB),Vl_Separateur),(Vl_ValeurRetour + "").substr(clWDUtil.oAddition(VNB,1)-1, 1)),19,0,50,0);}if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique((Vl_ValeurRetour + "").substr(clWDUtil.oAddition(VNB,2)-1, 1)),5,false,false,false,true)){Vl_ValeurRetour=clWDUtil.oConversionType((Vl_ValeurRetour + "").substring(1-1, clWDUtil.oAddition(VNB,1)),19,0,50,0);}}if((Vl_Separateur!="")){Vl_i=clWDUtil.oConversionType(Position(Vl_ValeurRetour,Vl_Separateur,0),8,0,8,0);}if((Vl_i!=0)){if((clWDUtil.oConversionType(Position(Vl_ValeurRetour,Vl_Separateur,(Vl_i+1)),8,0,8,0)!=0)){Vl_ValeurRetour="";}}clWDUtil.Renvoyer(Vl_ValeurRetour);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_HSORTIE(Vf_Val_Ch,Vf_NB,Vf_Separateur){if(Vf_Separateur===void 0){Vf_Separateur=":";}try{clWDUtil.Try();{var Vl_i=0;var Vl_pos=0;var Vl_ch="";var Vl_tmp="";var Vl_ValeurRetour=clWDUtil.oConversionType(Vf_Val_Ch,19,0,50,0);var Vl_Separateur=clWDUtil.oConversionType(Vf_Separateur,19,0,50,0);if(clWDUtil.bComparaison(Vf_Val_Ch,"",true,true,false,false)){Vl_ch=clWDUtil.oConversionType(_EC(Vl_ValeurRetour,1,Vl_Separateur,0),19,0,31,0);if(clWDUtil.bComparaison(clWDUtil.oConversionType(String(Vl_ch).length,8,0,8,0),Vf_NB,false,false,false,true)){Vl_ValeurRetour=clWDUtil.oConversionType(clWDUtil.oAddition((Vl_ch + "").substring(1-1, Vf_NB),Vl_Separateur),19,0,50,0);Vl_tmp=clWDUtil.oConversionType((Vl_ch + "").substring(clWDUtil.oAddition(Vf_NB,1)-1, clWDUtil.oAddition(Vf_NB,2)),19,0,50,0);if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique(Vl_tmp),59,false,false,false,true)){Vl_ValeurRetour=Vl_ValeurRetour+"00";}else {Vl_ValeurRetour=Vl_ValeurRetour+Vl_tmp;}}Vl_pos=clWDUtil.oConversionType(Position(Vl_ValeurRetour,Vl_Separateur,0),8,0,8,0);if((Vl_pos==0)){var V1670779104=Vf_NB;for(Vl_i=(clWDUtil.oConversionType(String(Vl_ValeurRetour).length,8,0,8,0)+1);Vl_i<=V1670779104;Vl_i++){Vl_ValeurRetour=("0"+Vl_ValeurRetour);}Vl_ValeurRetour=Vl_ValeurRetour+(Vl_Separateur+"00");}Vl_i=clWDUtil.oConversionType((clWDUtil.oConversionType(String(Vl_ValeurRetour).length,8,0,8,0)-Vl_pos),8,0,9,0);var V1670772192=Vl_i;if(clWDUtil.bComparaison(V1670772192,0,true,false,false,false)){Vl_ValeurRetour=Vl_ValeurRetour+"00";}else if(clWDUtil.bComparaison(V1670772192,1,true,false,false,false)){Vl_ValeurRetour=Vl_ValeurRetour+"0";}}else {Vl_ValeurRetour="";}clWDUtil.Renvoyer(Vl_ValeurRetour);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSHEUREMINUTE(Vf_heure){try{clWDUtil.Try();{var Vl_heure="";Vl_heure=clWDUtil.oConversionType(String(Vf_heure).split(":").join(""),19,0,31,0);var Vch=clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oChaineVersNumerique(Vl_heure),"08d"),19,0,19,0);if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique(Vch),0,false,false,false,false)){Vch=clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine((-clWDUtil.oChaineVersNumerique(Vch)),"08d"),19,0,19,0);clWDUtil.Renvoyer((-clWDUtil.oAddition(clWDUtil.oMultiplication(clWDUtil.oChaineVersNumerique((Vch + "").substr(1-1, 6)),60),clWDUtil.oChaineVersNumerique((Vch + "").substr(7-1, 2)))));return;}else {clWDUtil.Renvoyer(clWDUtil.oAddition(clWDUtil.oMultiplication(clWDUtil.oChaineVersNumerique((Vch + "").substr(1-1, 6)),60),clWDUtil.oChaineVersNumerique((Vch + "").substr(7-1, 2))));return;}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSMINUTEHEURE(Vf_minute,Vf_nb,Vf_blanc){if(Vf_nb===void 0){Vf_nb=6;}if(Vf_blanc===void 0){Vf_blanc=false;}try{clWDUtil.Try();{var Vch=(("0"+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(Vf_nb,"01d"),19,0,19,0))+"d");if(clWDUtil.bComparaison(Vf_minute,0,false,false,false,false)){Vf_minute=clWDUtil.oAbsolue(Vf_minute);Vch=(("0"+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oSoustraction(Vf_nb,1),"01d"),19,0,19,0))+"d");clWDUtil.Renvoyer((("-"+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oPartieEntiere(clWDUtil.oDivision(Vf_minute,60)),Vch),19,0,19,0))+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oModulo(Vf_minute,60),"02d"),19,0,19,0)));return;}else {if((!Vf_blanc)){clWDUtil.Renvoyer((clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oPartieEntiere(clWDUtil.oDivision(Vf_minute,60)),Vch),19,0,19,0)+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oModulo(Vf_minute,60),"02d"),19,0,19,0)));return;}else {clWDUtil.Renvoyer(((" "+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oPartieEntiere(clWDUtil.oDivision(Vf_minute,60)),Vch),19,0,19,0))+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oModulo(Vf_minute,60),"02d"),19,0,19,0)));return;}}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSMOINSHH(Vf_heure1,Vf_heure2,Vf_nb,Vf_blanc){if(Vf_nb===void 0){Vf_nb=6;}if(Vf_blanc===void 0){Vf_blanc=false;}try{clWDUtil.Try();{var Vl_minute=0;Vl_minute=clWDUtil.oConversionType(clWDUtil.oSoustraction(GNAV_JSHEUREMINUTE(Vf_heure1),GNAV_JSHEUREMINUTE(Vf_heure2)),8,0,50,0);if((Vl_minute<0)){clWDUtil.Renvoyer(("-"+clWDUtil.oConversionType(GNAV_JSMINUTEHEURE((-Vl_minute),Vf_nb,false),19,0,19,0)));return;}else {clWDUtil.Renvoyer(clWDUtil.oConversionType(GNAV_JSMINUTEHEURE(Vl_minute,Vf_nb,Vf_blanc),19,0,19,0));return;}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSSOMMEHH(Vf_heure1,Vf_heure2,Vf_nb,Vf_blanc){if(Vf_nb===void 0){Vf_nb=6;}if(Vf_blanc===void 0){Vf_blanc=false;}try{clWDUtil.Try();{var Vminu=0;Vminu=clWDUtil.oConversionType(clWDUtil.oAddition(GNAV_JSHEUREMINUTE(Vf_heure1),GNAV_JSHEUREMINUTE(Vf_heure2)),8,0,50,0);if((Vminu<0)){clWDUtil.Renvoyer(("-"+clWDUtil.oConversionType(GNAV_JSMINUTEHEURE((-Vminu),Vf_nb,false),19,0,19,0)));return;}else {clWDUtil.Renvoyer(clWDUtil.oConversionType(GNAV_JSMINUTEHEURE(Vminu,Vf_nb,Vf_blanc),19,0,19,0));return;}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_SORTIESAISIENUM(Vf_valeur,Vf_reel){if(Vf_reel===void 0){Vf_reel=false;}try{clWDUtil.Try();{if(Vf_reel){Vf_valeur=clWDUtil.oConversionType(GNAV_COMPLETECARACTERENAV(String(clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oChaineVersNumerique(String(String(Vf_valeur).split(" ").join("")).split(",").join(".")),"8.2fS"),19,0,19,0)).split(".").join(","),10," ",true),19,0,19,0);}else {Vf_valeur=clWDUtil.oConversionType(GNAV_COMPLETECARACTERENAV(clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oChaineVersNumerique(String(Vf_valeur).split(" ").join("")),"8dS"),19,0,19,0),10," ",true),19,0,19,0);}clWDUtil.Renvoyer(Vf_valeur);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_COMPLETECARACTERENAV(Vf_ch,Vf_taille,Vf_caract,Vf_gauche){if(Vf_caract===void 0){Vf_caract=" ";}if(Vf_gauche===void 0){Vf_gauche=false;}try{clWDUtil.Try();{var Vl_i=0;var Vl_ch=clWDUtil.oConversionType(Vf_ch,19,0,50,0);var Vl_tailleIni=clWDUtil.oConversionType(String(Vl_ch).length,19,0,8,0);if(clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique(Vf_taille),clWDUtil.oChaineVersNumerique(Vl_tailleIni),false,true,false,false)){var V1670794752=clWDUtil.oSoustraction(clWDUtil.oChaineVersNumerique(Vf_taille),clWDUtil.oChaineVersNumerique(Vl_tailleIni));for(Vl_i=1;Vl_i<=V1670794752;Vl_i++){if(Vf_gauche){Vl_ch=clWDUtil.oConversionType(clWDUtil.oAddition(Vf_caract,Vl_ch),19,0,50,0);}else {Vl_ch=clWDUtil.oAddition(Vl_ch,Vf_caract);}}}else {if(Vf_gauche){Vl_ch=clWDUtil.oConversionType(clWDUtil.sDroite(Vl_ch,clWDUtil.oChaineVersNumerique(Vf_taille)),19,0,31,0);}else {Vl_ch=clWDUtil.oConversionType((Vl_ch+"").substring(0,clWDUtil.oChaineVersNumerique(Vf_taille)),19,0,31,0);}}clWDUtil.Renvoyer(Vl_ch);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_MASQUEDESAISIENUM(Vf_chaine,Vf_reel,Vf_nb_decimale){if(Vf_reel===void 0){Vf_reel=false;}if(Vf_nb_decimale===void 0){Vf_nb_decimale=2;}try{clWDUtil.Try();{var V1670802528=(Vf_chaine + "").substr(clWDUtil.oConversionType(String(Vf_chaine).length,8,0,8,0)-1, 1);if((clWDUtil.bComparaison(V1670802528,"+",true,false,false,false))||(clWDUtil.bComparaison(V1670802528,"-",true,false,false,false))||(clWDUtil.bComparaison(V1670802528,"/",true,false,false,false))||(clWDUtil.bComparaison(V1670802528,"*",true,false,false,false))||(clWDUtil.bComparaison(V1670802528," ",true,false,false,false))){Vf_chaine=(Vf_chaine + "").substr(0, (clWDUtil.oConversionType(String(Vf_chaine).length,8,0,8,0)-1));}else if((clWDUtil.bComparaison(V1670802528,",",true,false,false,false))||(clWDUtil.bComparaison(V1670802528,".",true,false,false,false))){if(Vf_reel){if((clWDUtil.oConversionType(Position(Vf_chaine,",",0),8,0,8,0)==0)){Vf_chaine=clWDUtil.oAddition((Vf_chaine + "").substr(0, (clWDUtil.oConversionType(String(Vf_chaine).length,8,0,8,0)-1)),",");}else {Vf_chaine=(Vf_chaine + "").substr(0, (clWDUtil.oConversionType(String(Vf_chaine).length,8,0,8,0)-1));}}else {Vf_chaine=(Vf_chaine + "").substr(0, (clWDUtil.oConversionType(String(Vf_chaine).length,8,0,8,0)-1));}}else {if((Vf_reel&&(clWDUtil.oConversionType(Position(Vf_chaine,",",0),8,0,8,0)!=0))){Vf_chaine=(Vf_chaine + "").substr(0, clWDUtil.oAddition(clWDUtil.oConversionType(Position(Vf_chaine,",",0),8,0,8,0),Vf_nb_decimale));}}clWDUtil.Renvoyer(Vf_chaine);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_HAFFICHE(Vf_Heure,Vf_NB,Vf_Sep){if(Vf_Sep===void 0){Vf_Sep=":";}try{clWDUtil.Try();{var Vl_ch1="";var Vl_i=clWDUtil.oAddition(Vf_NB,2);var Vl_ch3="";if(clWDUtil.bComparaison(clWDUtil.sSupprimeEspacesDebutFin(Vf_Heure),"",true,true,false,false)){Vl_ch1=clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oChaineVersNumerique(Vf_Heure),(("0"+Vl_i)+"d")),19,0,19,0);Vl_ch3=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition((Vl_ch1 + "").substring(1-1, Vf_NB),Vf_Sep),(Vl_ch1 + "").substr(clWDUtil.oAddition(Vf_NB,1)-1)),19,0,50,0);}else {Vl_ch3="";}clWDUtil.Renvoyer(Vl_ch3);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_HVAL(Vf_heure,Vf_sep){if(Vf_sep===void 0){Vf_sep=":";}try{clWDUtil.Try();{var Vl_heure="";Vl_heure=clWDUtil.oConversionType(String(Vf_heure).split(Vf_sep).join(""),19,0,31,0);clWDUtil.Renvoyer(clWDUtil.oChaineVersNumerique(Vl_heure));return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_HENREG(Vf_Heure,Vf_Sep){if(Vf_Sep===void 0){Vf_Sep=":";}try{clWDUtil.Try();{var Vl_ch1=clWDUtil.oConversionType(_EC(Vf_Heure,1,Vf_Sep,0),19,0,31,0);var Vl_ch2=clWDUtil.oConversionType(_EC(Vf_Heure,2,Vf_Sep,0),19,0,31,0);var Vl_ch3="";if((Vl_ch1!="\b")){Vl_ch3=Vl_ch1;}if((Vl_ch2!="\b")){Vl_ch3=(Vl_ch3+Vl_ch2);}if((Vl_ch3=="")){Vl_ch3=" ";}clWDUtil.Renvoyer(Vl_ch3);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_REMPLACESPECIAUX(Vf_url){try{clWDUtil.Try();{var Vl_i=0;var Vl_url=Vf_url;var Vl_debut=clWDUtil.oConversionType(Position(Vl_url,"\x26Pwd=",0),8,0,8,0);var Vl_fin=clWDUtil.oConversionType(Position(Vl_url,"\x26Bascule=",0),8,0,8,0);var Vl_pwd=clWDUtil.oConversionType((Vl_url + "").substring((Vl_debut+5)-1, (Vl_fin-1)),19,0,50,0);var Vl_tabspe="+-*/\\_\'()[]{}`@°^¨#~:!¡?¿.,;§\x3E\x3C£$¤µ|=\x26";var V1670780784=clWDUtil.oConversionType(String(Vl_tabspe).length,8,0,8,0);for(Vl_i=1;Vl_i<=V1670780784;Vl_i++){Vl_pwd=clWDUtil.oConversionType(String(Vl_pwd).split((Vl_tabspe + "").substr(Vl_i-1, 1)).join(("%"+clWDUtil.oConversionType(clWDUtil.sNumeriqueVersChaine(clWDUtil.oConversionType(String((Vl_tabspe + "").substr(Vl_i-1, 1)).charCodeAt(0),8,0,8,0),"02X"),19,0,19,0))),19,0,31,0);}Vl_url=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition((Vl_url + "").substring(1-1, (Vl_debut+4)),Vl_pwd),(Vl_url + "").substr(Vl_fin-1)),19,0,50,0);clWDUtil.Renvoyer(Vl_url);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_RECHNOMPRENAV(Vf_mat){try{clWDUtil.Try();{var Vl_nompre=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Web_Pla.rech_nompre","",0,Vf_mat),19,0,31,0);clWDUtil.Renvoyer(Vl_nompre);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_OUVERTUREPAGEMSGNAV(Vf_msg){if(Vf_msg===void 0){Vf_msg="";}try{clWDUtil.Try();{var Vl_msg="";if(clWDUtil.bComparaison(clWDUtil.sSupprimeEspacesDebutFin(Vf_msg),"",true,true,false,false)){Vl_msg=clWDUtil.oConversionType(ChaineConstruit(_ML3FCF18514BF1598C_0000005B_,clWDUtil.sSupprimeEspacesDebutFin(Vf_msg)),19,0,31,0);}else {Vl_msg=_ML3FCF18514BF1598C_00000001_;}clWDUtil.Renvoyer(Vl_msg);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_OUVERTURECALENDRIER(){try{clWDUtil.Try();{var Vl_msg=_ML3FCF18514BF1598C_00000002_;clWDUtil.Renvoyer(Vl_msg);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_MSGDATINVAL(){try{clWDUtil.Try();{var Vl_msg=_ML3FCF18514BF1598C_00000004_;clWDUtil.Renvoyer(Vl_msg);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_DNDSAUVE(VsID,Vx,Vy){try{clWDUtil.Try();{clWDUtil.m_oCookie.SetCookie(clWDUtil.oAddition(VsID,"X"),Vx);clWDUtil.m_oCookie.SetCookie(clWDUtil.oAddition(VsID,"Y"),Vy);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_DNDRESTAURE(VsID,VsVal){try{clWDUtil.Try();{clWDUtil.Renvoyer(clWDUtil.oConversionType(clWDUtil.m_oCookie.GetCookie(clWDUtil.oAddition(VsID,VsVal)),19,0,19,0));return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_CONFIRMERACTION(Vf_Action,Vf_Table,Vf_ValChamp,Vf_ValChamp2){if(Vf_ValChamp2===void 0){Vf_ValChamp2="";}try{clWDUtil.Try();{var Vl_action="";var Vl_table="";var Vl_champ="";var Vl_message="";var Vl_reponse=0;var Vl_impact=false;var Vl_lst_modifies="";Vl_action=clWDUtil.oConversionType(((Vf_Action + "").substr(1-1, 1)+"").toUpperCase(),19,0,19,0);Vl_table=clWDUtil.oConversionType((Vf_Table+"").toLowerCase(),19,0,19,0);Vl_champ=clWDUtil.oConversionType(Vf_ValChamp,19,0,50,0);var V1670796528=Vl_table;if(clWDUtil.bComparaison(V1670796528,"cjourn",true,false,false,false)){if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000007_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_impact=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Cycle_Horaire.est_utilise","",0,Vl_champ,"HOR"),1,0,31,0);if(clWDUtil.bComparaison(Vl_impact,true,true,false,false,false)){Vl_lst_modifies=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.recupere_gf","",0,"gf_lst_modifies"),19,0,31,0);Vl_impact=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Cycle_Horaire.ctrl_lib_coul","",0,Vl_lst_modifies),1,0,31,0);}if(Vl_impact){Vl_message=(((((_ML3FCF18514BF1598C_0000003C_+"\r\n")+"\r\n")+_ML3FCF18514BF1598C_0000003D_)+"\r\n")+_ML3FCF18514BF1598C_0000003E_);}else {Vl_message=_ML3FCF18514BF1598C_00000009_;}}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_0000000B_;}Vl_message=clWDUtil.oConversionType(ChaineConstruit(Vl_message,Vl_champ),19,0,31,0);}else if(clWDUtil.bComparaison(V1670796528,"cptjou",true,false,false,false)){if(clWDUtil.bDansTableau(["A","I","M","U"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_0000000F_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000010_;}Vl_message=clWDUtil.oConversionType(ChaineConstruit(Vl_message,Vl_champ,Vf_ValChamp2),19,0,31,0);}else if(clWDUtil.bComparaison(V1670796528,"horcptj",true,false,false,false)){if(clWDUtil.bDansTableau(["A","I","M","U"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000059_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_0000003A_;}Vl_message=clWDUtil.oConversionType(ChaineConstruit(Vl_message,Vl_champ),19,0,31,0);}else if(clWDUtil.bComparaison(V1670796528,"cycent",true,false,false,false)){if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000012_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_impact=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Cycle_Horaire.est_utilise","",0,Vl_champ,"CYC"),1,0,31,0);if(Vl_impact){Vl_message=(((((_ML3FCF18514BF1598C_0000003C_+"\r\n")+"\r\n")+_ML3FCF18514BF1598C_0000003F_)+"\r\n")+_ML3FCF18514BF1598C_0000003E_);}else {Vl_message=_ML3FCF18514BF1598C_00000014_;}}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000016_;}Vl_message=clWDUtil.oConversionType(ChaineConstruit(Vl_message,Vl_champ),19,0,31,0);}else if(clWDUtil.bComparaison(V1670796528,"rotent",true,false,false,false)){if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000018_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_impact=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Cycle_Horaire.est_utilise","",0,Vl_champ,"ROT"),1,0,31,0);if(Vl_impact){Vl_message=(((((_ML3FCF18514BF1598C_0000003C_+"\r\n")+"\r\n")+_ML3FCF18514BF1598C_00000040_)+"\r\n")+_ML3FCF18514BF1598C_0000003E_);}else {Vl_message=_ML3FCF18514BF1598C_0000001A_;}}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_0000001D_;}Vl_message=clWDUtil.oConversionType(ChaineConstruit(Vl_message,Vl_champ),19,0,31,0);}else if((clWDUtil.bComparaison(V1670796528,"lempent",true,false,false,false))||(clWDUtil.bComparaison(V1670796528,"clausent",true,false,false,false))){if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_0000001F_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000021_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000023_;}}else {if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000024_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000025_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=_ML3FCF18514BF1598C_00000026_;}}Vl_message=Vl_message+(("\r\n"+_ML3FCF18514BF1598C_00000028_)+" : ");if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_0000002B_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_0000002D_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_0000002F_;}Vl_message=Vl_message+".\r\n";Vl_message=Vl_message+(_ML3FCF18514BF1598C_00000031_+" : ");if(clWDUtil.bDansTableau(["A","I"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_00000033_;}if(clWDUtil.bDansTableau(["M","U"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_00000035_;}if(clWDUtil.bDansTableau(["S","D"],Vl_action)){Vl_message=Vl_message+_ML3FCF18514BF1598C_00000037_;}Vl_message=Vl_message+".";Vl_reponse=clWDUtil.oConversionType(confirm(Vl_message),8,0,8,0);clWDUtil.Renvoyer(Vl_reponse);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_MARQUERCHAMPENMODIF(Vf_ValChamp,Vf_Indice,Vf_Max,Vf_Table){try{clWDUtil.Try();{var Vl_ind=0;var Vl_max=0;var Vl_table="";var Vl_result=clWDUtil.oConversionType(Vf_ValChamp,19,0,50,0);Vl_ind=clWDUtil.oConversionType(Vf_Indice,8,0,50,0);Vl_max=clWDUtil.oConversionType(Vf_Max,8,0,50,0);Vl_table=clWDUtil.oConversionType((Vf_Table+"").toLowerCase(),19,0,19,0);if((clWDUtil.oConversionType(String(Vl_result).length,8,0,8,0)<Vl_max)){Vl_result=clWDUtil.oConversionType(clWDUtil.sCompleteWL(Vl_result,Vl_max,"N"),19,0,31,0);}if(((Vl_ind>0)&&(Vl_ind<=Vl_max))){Vl_result=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition((Vl_result+"").substring(0,(Vl_ind-1)),"O"),clWDUtil.sDroite(Vl_result,(Vl_max-Vl_ind))),19,0,50,0);}var V1670785632=Vl_table;if(clWDUtil.bComparaison(V1670785632,"cycent",true,false,false,false)){var V1670784576=Vl_ind;if(clWDUtil.bComparaison(V1670784576,"3",true,false,false,false)){Vl_result=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition((Vl_result+"").substring(0,3),"O"),_MI2(Vl_result,5,4)),"O"),clWDUtil.sDroite(Vl_result,(Vl_max-9))),19,0,50,0);}else if(clWDUtil.bComparaison(V1670784576,"9",true,false,false,false)){Vl_result=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition((Vl_result+"").substring(0,3),"O"),clWDUtil.sDroite(Vl_result,(Vl_max-4))),19,0,50,0);}else {}}else {}clWDUtil.Renvoyer(Vl_result);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_REPRISESAISIECHAMP(Vf_NomChamp,Vf_Message){if(Vf_NomChamp===void 0){Vf_NomChamp="";}if(Vf_Message===void 0){Vf_Message="";}try{clWDUtil.Try();{var Vl_nomchamp=clWDUtil.oConversionType(Vf_NomChamp,19,0,50,0);if(clWDUtil.bComparaison(Vf_Message,"",true,true,false,false)){alert(Vf_Message);}return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_SUPESPACE(Vbuffer){try{clWDUtil.Try();{clWDUtil.Renvoyer(clWDUtil.sSupprimeEspacesDebutFin(Vbuffer));return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_DICTIONNAIRENAV(Vf_message){try{clWDUtil.Try();{var V1670806176=Vf_message;if(clWDUtil.bComparaison(V1670806176,"Tri",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000071_);return;}else if(clWDUtil.bComparaison(V1670806176,"AVPHO",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000069_);return;}else if(clWDUtil.bComparaison(V1670806176,"CONT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006A_);return;}else if(clWDUtil.bComparaison(V1670806176,"EMP",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000064_);return;}else if(clWDUtil.bComparaison(V1670806176,"MAT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000065_);return;}else if(clWDUtil.bComparaison(V1670806176,"DEB",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006B_);return;}else if(clWDUtil.bComparaison(V1670806176,"FIN",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006C_);return;}else if(clWDUtil.bComparaison(V1670806176,"SEL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006D_);return;}else if(clWDUtil.bComparaison(V1670806176,"NOPRE",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006E_);return;}else if(clWDUtil.bComparaison(V1670806176,"PMAT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000006F_);return;}else if(clWDUtil.bComparaison(V1670806176,"PBAD",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000070_);return;}else if(clWDUtil.bComparaison(V1670806176,"BAD",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000066_);return;}else if(clWDUtil.bComparaison(V1670806176,"PHO",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000067_);return;}else if(clWDUtil.bComparaison(V1670806176,"MP_ACC",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000056_);return;}else if(clWDUtil.bComparaison(V1670806176,"MP_AIDE",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000057_);return;}else if(clWDUtil.bComparaison(V1670806176,"MP_DECO",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000058_);return;}else if(clWDUtil.bComparaison(V1670806176,"MP_CALDIFF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000052_);return;}else if(clWDUtil.bComparaison(V1670806176,"MP_CALAUTO",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000053_);return;}else if(clWDUtil.bComparaison(V1670806176,"CSEL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000051_);return;}else if(clWDUtil.bComparaison(V1670806176,"CCOUL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000054_);return;}else if(clWDUtil.bComparaison(V1670806176,"CDEF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004F_);return;}else if(clWDUtil.bComparaison(V1670806176,"FAV",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004E_);return;}else if(clWDUtil.bComparaison(V1670806176,"PHOR",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000041_);return;}else if(clWDUtil.bComparaison(V1670806176,"PABS",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000042_);return;}else if(clWDUtil.bComparaison(V1670806176,"PACT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000043_);return;}else if(clWDUtil.bComparaison(V1670806176,"PPEX",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000044_);return;}else if(clWDUtil.bComparaison(V1670806176,"PREG",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000045_);return;}else if(clWDUtil.bComparaison(V1670806176,"PNIV",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000046_);return;}else if(clWDUtil.bComparaison(V1670806176,"VEUP",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000047_);return;}else if(clWDUtil.bComparaison(V1670806176,"OUI",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004B_);return;}else if(clWDUtil.bComparaison(V1670806176,"NON",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004A_);return;}else if(clWDUtil.bComparaison(V1670806176,"ANNUL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000049_);return;}else if(clWDUtil.bComparaison(V1670806176,"OK",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000048_);return;}else if(clWDUtil.bComparaison(V1670806176,"CAL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004C_);return;}else if(clWDUtil.bComparaison(V1670806176,"DEF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000004D_);return;}else if(clWDUtil.bComparaison(V1670806176,"VAL",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000055_);return;}else if(clWDUtil.bComparaison(V1670806176,"VISUCPT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000005A_);return;}else if(clWDUtil.bComparaison(V1670806176,"HOR_EVT",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000005C_);return;}else if(clWDUtil.bComparaison(V1670806176,"SUPP",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000005D_);return;}else if(clWDUtil.bComparaison(V1670806176,"DOS",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000005E_);return;}else if(clWDUtil.bComparaison(V1670806176,"NDD",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_0000005F_);return;}else if(clWDUtil.bComparaison(V1670806176,"NDF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000060_);return;}else if(clWDUtil.bComparaison(V1670806176,"GDF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000061_);return;}else if(clWDUtil.bComparaison(V1670806176,"AF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000062_);return;}else if(clWDUtil.bComparaison(V1670806176,"SMF",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000063_);return;}else if(clWDUtil.bComparaison(V1670806176,"NOATOHOR",true,false,false,false)){clWDUtil.Renvoyer(_ML3FCF18514BF1598C_00000072_);return;}else {clWDUtil.Renvoyer("");return;}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_SANSCARACTERENAV(Vf_chaine,Vf_caractere){try{clWDUtil.Try();{var Vl_res=clWDUtil.oConversionType(clWDAJAXMain.AJAXExecuteSynchrone20("Communes_Web.SansCaractereServ","",0,Vf_chaine,Vf_caractere),19,0,31,0);clWDUtil.Renvoyer(Vl_res);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_CONTROLESSORTIE(Vf_type,Vf_donnee,Vf_NB){if(Vf_NB===void 0){Vf_NB=6;}try{clWDUtil.Try();{var Vl_donnee=clWDUtil.oConversionType(Vf_donnee,19,0,50,0);var Vl_pos=(clWDUtil.oConversionType(ChaineOccurrence(Vl_donnee,":",0),8,0,8,0)+1);var V1670801328=Vf_type;if(clWDUtil.bComparaison(V1670801328,"H",true,false,false,false)){if(clWDUtil.bComparaison(clWDUtil.sSupprimeEspacesDebutFin(Vl_donnee),"",true,false,false,false)){Vl_donnee="00:00";}else {if(clWDUtil.bComparaison((Vl_donnee + "").substr(clWDUtil.oConversionType(String(Vl_donnee).length,8,0,8,0)-1, 1),":",true,false,false,false)){Vl_donnee=Vl_donnee+"00";}else {if((Vl_pos<2)){Vl_donnee=(Vl_donnee+":00");}else {Vl_donnee=clWDUtil.oConversionType(GNAV_HSORTIE(Vl_donnee,Vf_NB),19,0,19,0);}}}}else if(clWDUtil.bComparaison(V1670801328,"T",true,false,false,false)){Vl_donnee=clWDUtil.oConversionType(clWDUtil.sSupprimeEspacesDebutFin(Vl_donnee),19,0,31,0);}else if(clWDUtil.bComparaison(V1670801328,"V",true,false,false,false)){Vl_donnee=clWDUtil.oConversionType(String(Vl_donnee).split(",").join("."),19,0,31,0);if(clWDUtil.bDansTableau(["","-","."],Vl_donnee)){Vl_donnee="0";}}else if(clWDUtil.bComparaison(V1670801328,"N",true,false,false,false)){if((Vl_donnee=="")){Vl_donnee="0";}}clWDUtil.Renvoyer(Vl_donnee);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_CONTROLESTOUCHERELACHEE(Vf_type,Vf_donnee,Vf_taille){if(Vf_taille===void 0){Vf_taille=6;}try{clWDUtil.Try();{var Vl_donnee=clWDUtil.oConversionType(Vf_donnee,19,0,50,0);var Vl_heures=clWDUtil.oConversionType(_EC(Vl_donnee,1,":",0),19,0,31,0);var Vl_minutes=clWDUtil.oConversionType(_EC(Vl_donnee,2,(Vl_heures+":"),0),19,0,31,0);var Vl_taille=clWDUtil.oConversionType(String(Vl_donnee).length,8,0,8,0);var Vl_i=0;var Vl_nb_virgule=0;var V1670795088=Vf_type;if(clWDUtil.bComparaison(V1670795088,"H",true,false,false,false)){for(Vl_i=1;Vl_i<=Vl_taille;Vl_i++){if((!clWDUtil.bDansTableau(["0","1","2","3","4","5","6","7","8","9",":"],(Vl_donnee + "").substr(Vl_i-1, 1)))){Vl_donnee=clWDUtil.oConversionType(clWDUtil.oAddition((Vl_donnee + "").substring(1-1, (Vl_i-1)),(Vl_donnee + "").substring((Vl_i+1)-1, Vl_taille)),19,0,50,0);Vl_heures=clWDUtil.oConversionType(_EC(Vl_donnee,1,":",0),19,0,31,0);Vl_minutes=clWDUtil.oConversionType(_EC(Vl_donnee,2,(Vl_heures+":"),0),19,0,31,0);Vl_taille=Vl_taille-1;Vl_i=Vl_i-1;}}if((((clWDUtil.oConversionType(Position(Vl_minutes,":",0),8,0,8,0)>0)||(clWDUtil.bComparaison(clWDUtil.oConversionType(String(Vl_donnee).length,8,0,8,0),Vf_taille,true,false,false,false)&&(clWDUtil.oConversionType(Position(Vl_donnee,":",0),8,0,8,0)==0)))||((clWDUtil.oConversionType(String(Vl_minutes).length,8,0,8,0)==1)&&clWDUtil.bComparaison(clWDUtil.oChaineVersNumerique(Vl_minutes),6,false,true,false,false)))){Vl_donnee=(Vl_heures+":");}if((clWDUtil.oConversionType(String(Vl_minutes).length,8,0,8,0)>2)){Vl_donnee=clWDUtil.oConversionType(clWDUtil.oAddition((Vl_heures+":"),(Vl_minutes + "").substring(1-1, 2)),19,0,50,0);}}else if(clWDUtil.bComparaison(V1670795088,"N",true,false,false,false)){for(Vl_i=1;Vl_i<=Vl_taille;Vl_i++){if((!clWDUtil.bDansTableau(["0","1","2","3","4","5","6","7","8","9"],(Vl_donnee + "").substr(Vl_i-1, 1)))){Vl_donnee=clWDUtil.oConversionType(clWDUtil.oAddition((Vl_donnee + "").substring(1-1, (Vl_i-1)),(Vl_donnee + "").substring((Vl_i+1)-1, Vl_taille)),19,0,50,0);Vl_taille=Vl_taille-1;Vl_i=Vl_i-1;}}}else if(clWDUtil.bComparaison(V1670795088,"V",true,false,false,false)){for(Vl_i=1;Vl_i<=Vl_taille;Vl_i++){if(clWDUtil.bDansTableau([".",","],(Vl_donnee + "").substr(Vl_i-1, 1))){Vl_nb_virgule=Vl_nb_virgule+1;}if((((!clWDUtil.bDansTableau(["0","1","2","3","4","5","6","7","8","9"],(Vl_donnee + "").substr(Vl_i-1, 1)))&&(!(clWDUtil.bComparaison((Vl_donnee + "").substr(Vl_i-1, 1),"-",true,false,false,false)&&(Vl_i==1))))&&(!(clWDUtil.bDansTableau([".",","],(Vl_donnee + "").substr(Vl_i-1, 1))&&(Vl_nb_virgule==1))))){Vl_donnee=clWDUtil.oConversionType(clWDUtil.oAddition((Vl_donnee + "").substring(1-1, (Vl_i-1)),(Vl_donnee + "").substring((Vl_i+1)-1, Vl_taille)),19,0,50,0);Vl_taille=Vl_taille-1;Vl_i=Vl_i-1;}}}clWDUtil.Renvoyer(Vl_donnee);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_INCLUDEJQUERY(){try{clWDUtil.Try();{verif_jquery((("/"+clWDUtil.oConversionType(GNAV_RECUPREPWEB(),19,0,19,0))+"/res/jquery.js"));verif_jquery_ui((("/"+clWDUtil.oConversionType(GNAV_RECUPREPWEB(),19,0,19,0))+"/res/jquery-ui.js"));}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_RECUPREPWEB(){try{clWDUtil.Try();{clWDUtil.Renvoyer(gp_repertoire_web);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_AFFICHETRACES(){try{clWDUtil.Try();{clWDAJAXMain.AJAXExecuteAsynchrone20("Communes_Web.RecupThreadMessageAJAX",GNAV_RETOURAJAXTRACES,"",0);}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_RETOURAJAXTRACES(Vl_traceJSON){try{clWDUtil.Try();{var Vl_trace={};if(clWDUtil.bComparaison((Vl_traceJSON + "").substring(1-1, 3),"OK:",true,false,false,false)){Vl_trace=nav_deserialise_JSON((Vl_traceJSON + "").substr(4-1));if(clWDUtil.bComparaison(clWDUtil.oConversionType(Vl_trace.gs_threadTraces.length,8,0,8,0),0,false,false,false,true)){GTN_CreeChampsThread();GTN_AjoutTraces(Vl_trace.gs_threadTraces);}else {alert("Pas de trace à afficher");}}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSINITLIBELLEHTML(Vf_couleur1,Vf_couleur2,Vf_couleur3,Vf_couleur4,Vf_with,Vf_height,Vf_fontSize,Vf_fontColeur,Vf_text){if(Vf_couleur1===void 0){Vf_couleur1="#808080";}if(Vf_couleur2===void 0){Vf_couleur2="#808080";}if(Vf_couleur3===void 0){Vf_couleur3="#1C1D1D";}if(Vf_couleur4===void 0){Vf_couleur4="#1C1D1D";}if(Vf_with===void 0){Vf_with="50";}if(Vf_height===void 0){Vf_height="20";}if(Vf_fontSize===void 0){Vf_fontSize="10";}if(Vf_fontColeur===void 0){Vf_fontColeur="#FFFFFF";}if(Vf_text===void 0){Vf_text="Texto2";}try{clWDUtil.Try();{var Vf_page="";Vf_page=Vf_page+"\x3Chtml\x3E ";Vf_page=Vf_page+"\x3Chead\x3E ";Vf_page=Vf_page+"\x3C/head\x3E ";Vf_page=Vf_page+"\x3Cbody\x3E ";Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("\x3Cdiv style=\"background-image: -ms-linear-gradient(",Vf_couleur1)," 0, "),Vf_couleur2)," 50%, "),Vf_couleur3)," 50%, "),Vf_couleur4)," 100%); "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("background-image: -moz-linear-gradient(",Vf_couleur1)," 0, "),Vf_couleur2)," 50%, "),Vf_couleur3)," 50%, "),Vf_couleur4)," 100%); "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("background-image: -webkit-linear-gradient(",Vf_couleur1)," 0, "),Vf_couleur2)," 50%, "),Vf_couleur3)," 50%, "),Vf_couleur4)," 100%); "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("background-image: -o-linear-gradient(",Vf_couleur1)," 0, "),Vf_couleur2)," 50%, "),Vf_couleur3)," 50%, "),Vf_couleur4)," 100%); "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("background-image: linear-gradient(",Vf_couleur1)," 0, "),Vf_couleur2)," 50%, "),Vf_couleur3)," 50%, "),Vf_couleur4)," 100%); "));Vf_page=Vf_page+"background-repeat: repeat; ";Vf_page=Vf_page+"-ms-border-radius: 3px; ";Vf_page=Vf_page+"-moz-border-radius: 3px; ";Vf_page=Vf_page+"-webkit-border-radius: 3px; ";Vf_page=Vf_page+"-o-border-radius: 3px; ";Vf_page=Vf_page+"border-radius: 3px;\" \x3E ";Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition("\x3Cp style=\"width: ",Vf_with),"px; "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition("height: ",Vf_height),"px; "));Vf_page=Vf_page+"font-family: Tahoma, Geneva, sans-serif; ";Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition("font-size: ",Vf_fontSize),"pt; "));Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition("color: ",Vf_fontColeur),"; "));Vf_page=Vf_page+"text-align: right;\"\x3E";Vf_page=clWDUtil.oAddition(Vf_page,clWDUtil.oAddition(clWDUtil.oAddition("",Vf_text),""));Vf_page=Vf_page+"\x3C/p\x3E ";Vf_page=Vf_page+"\x3C/div\x3E ";Vf_page=Vf_page+"\x3C/body\x3E";Vf_page=Vf_page+"\x3C/html\x3E";Vf_page=Vf_page+"\x3Cdiv style=\'float:right;text-align:center;padding-left:5px;padding-right:5px;height:15px;line-height:15px;background-color:rgba(170,170,255,0.2);border-radius:10px;border-width:2px;border-style:solid;border-color:#aaaaff;\'\x3E";clWDUtil.Renvoyer(Vf_page);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_JSDONNERLOMBRE(Vf_couleur){try{clWDUtil.Try();{var Vl_result="";var Vl_rouge="";var Vl_vert="";var Vl_bleu="";var Vl_rougeEntier=0;var Vl_vertEntier=0;var Vl_bleuEntier=0;Vl_rouge=clWDUtil.oConversionType(_MI2(Vf_couleur,2,2),19,0,31,0);Vl_vert=clWDUtil.oConversionType(_MI2(Vf_couleur,4,2),19,0,31,0);Vl_bleu=clWDUtil.oConversionType(clWDUtil.sDroite(Vf_couleur,2),19,0,31,0);Vl_vertEntier=clWDUtil.oConversionType(clWDUtil.oDivision(jsHexaVersEntier(Vl_vert),2),8,0,50,0);Vl_rougeEntier=clWDUtil.oConversionType(clWDUtil.oDivision(jsHexaVersEntier(Vl_rouge),2),8,0,50,0);Vl_bleuEntier=clWDUtil.oConversionType(clWDUtil.oDivision(jsHexaVersEntier(Vl_bleu),2),8,0,50,0);Vl_rouge=clWDUtil.oConversionType(jsEntierVersHexa(Vl_rougeEntier),19,0,50,0);Vl_vert=clWDUtil.oConversionType(jsEntierVersHexa(Vl_vertEntier),19,0,50,0);Vl_bleu=clWDUtil.oConversionType(jsEntierVersHexa(Vl_bleuEntier),19,0,50,0);Vl_result=clWDUtil.oConversionType(clWDUtil.oAddition(clWDUtil.oAddition(clWDUtil.oAddition("#",clWDUtil.sCompleteWL((Vl_rouge+"").substring(0,2),2,"0")),clWDUtil.sCompleteWL((Vl_vert+"").substring(0,2),2,"0")),clWDUtil.sCompleteWL((Vl_bleu+"").substring(0,2),2,"0")),19,0,50,0);clWDUtil.Renvoyer(Vl_result);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_GIGEREGFI(Vf_ouvre){if(Vf_ouvre===void 0){Vf_ouvre=false;}try{clWDUtil.Try();{if(Vf_ouvre){GI_ChangeCouleurTourIframe("#ABABAB","#A0A0A0");}else {GI_ChangeCouleurTourIframe("","");}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_RECUPSTYLETITREWEB(){try{clWDUtil.Try();{clWDUtil.Renvoyer(gp_styleTitreWeb);return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_RECUPCSTCOULEUR(Vf_nomCoul){try{clWDUtil.Try();{var V1670806080=Vf_nomCoul;if(clWDUtil.bComparaison(V1670806080,"Blanc_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#FFFFFF");return;}else if(clWDUtil.bComparaison(V1670806080,"TxtS001_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#505458");return;}else if(clWDUtil.bComparaison(V1670806080,"TxtBleuLienS004_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#137AEC");return;}else if(clWDUtil.bComparaison(V1670806080,"FondMenuContext_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#E6F0FA");return;}else if(clWDUtil.bComparaison(V1670806080,"TxtAccentueS009_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#282C30");return;}else if(clWDUtil.bComparaison(V1670806080,"TxtGriseS100_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#A0A4A8");return;}else if(clWDUtil.bComparaison(V1670806080,"FondJauge_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#A1CAF7");return;}else if(clWDUtil.bComparaison(V1670806080,"FondTrace_HEXA",true,false,false,false)){clWDUtil.Renvoyer("#FFD263");return;}else {}clWDUtil.Renvoyer("#505458");return;}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{return clWDUtil&&clWDUtil.oFinally();}}
function GNAV_STYLETABLEAUUNTITREPADDINGLEFT(Vf_nomTable){try{clWDUtil.Try();{$(("#ctz"+Vf_nomTable)).addClass("style_tableauUnTitre_padding_octime");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_STYLETABLEAUTHEMES(Vf_nomTable){try{clWDUtil.Try();{$(("#ctz"+Vf_nomTable)).addClass("style_tableau_themes_octime");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_STYLETABLEAUCENTRERIMG(Vf_nomTable){try{clWDUtil.Try();{$(("#ctz"+Vf_nomTable)).addClass("style_tableau_centrer_img_octime");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_STYLETABLEAUPADDINGLEFT(Vf_nomTable,Vf_appliquerPadding){if(Vf_appliquerPadding===void 0){Vf_appliquerPadding=false;}try{clWDUtil.Try();{if(Vf_appliquerPadding){$(("#ctz"+Vf_nomTable)).addClass("style_tableau_padding_octime");}else {$(("#ctz"+Vf_nomTable)).addClass("style_tableau_octime");}}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_STYLEONGLETELLIPSE(Vf_nomOnglet){try{clWDUtil.Try();{$(("#con-"+Vf_nomOnglet)).addClass("style_onglet_ellipse");}}catch(_E){clWDUtil.xbCatchThrow(_E);return;}finally{clWDUtil&&clWDUtil.oFinally();}}
function GNAV_CONTIENTCARACTERESINTERDITS(){{}}
function jsCodeTouche(evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "") 
	if (evt)
	{
		return evt.keyCode;
	}	
}

function masqueSaisieDate(obj) {
var ch;
var ch_gauche, ch_droite;
var l_i,l_j;
var tab=new Array;

ch = obj.value;
ch.toString();
//if ((jsCodeTouche()!=46)&&(jsCodeTouche()!=8))
//{
l_j=0;
for(l_i=1;l_i<=ch.length;l_i++)
{
	if (ch.slice(l_i-1,l_i)=="/")
	{
		tab[l_j]=l_i;
		l_j++;
	}
}
	
	//alert(tab[0]);
	if ( (ch.slice(1,2) == "/")  && (ch.length == 2) ){
		obj.value = "0"+ ch;
	}	
	if ( (l_j!=2) && (ch.slice(2,3)!="/") && (ch.slice(1,2) != "/") && (ch.length >= 3) ){
		ch_gauche = ch.slice(0,2);
		ch_droite = ch.slice(2);
		obj.value = ch_gauche + "/" + ch_droite;
	}	
	if ( ( ch.slice(4,5) == "/") && (ch.length == 5) ){
		ch_gauche = ch.slice(0,3);
		ch_droite = ch.slice(3);
		obj.value = ch_gauche +"0"+ ch_droite;
	}	
	if  ( ( l_j!=2) && (ch.slice(5,6) != "/" ) && (ch.slice(4,5) != "/") && (ch.slice(3,4) != "/") && (ch.length >= 6) ){
		ch_gauche = ch.slice(0,5);
		ch_droite = ch.slice(5);
		obj.value = ch_gauche + "/" + ch_droite;
	}
	return;
//}
}
function JS_ChampExiste(f_fenetre,f_champs)
{
	var formula;
	try{
		formula ="document."+f_fenetre+"."+f_champs+".value=='';";
		eval(formula);
		return 1;
	}
	catch(error){
		return 0;
	}
}
function js_PageHauteur()
{
	// Récupère la hauteur du navigateur
	var navHt;
	
	try {
//		if ( document.body.clientHeight )	// IE6
//			navHt = top.document.body.clientHeight;
		if ( document.body.offsetHeight )	// IE7
			navHt = document.body.offsetHeight - 4;	
		else if ( window.innerHeight )			// Firefox
			navHt = top.window.innerHeight;			
	} catch( err ) { }
	
	return (navHt);
}
function js_PageLargeur()
{
	// Récupère la largeur du navigateur
	var navLg;
	
	try {
//		if ( document.body.clientHeight )	// IE6
//			navLg = top.document.body.clientWidth;
		if ( document.body.offsetWidth )	// IE7
			navLg = document.body.offsetWidth - 4;	
		else if ( window.innerWidth )			// Firefox
			navLg = top.window.innerWidth;			
		} catch( err ) { }
	
	return (navLg);
}
function js_FrameHauteur()
{
	// Récupère la hauteur du navigateur
	var fHt;
	
	try {
		if ( document.body.clientHeight )		// IE6
			fHt = document.body.clientHeight;
		else if ( document.body.offsetHeight )	// IE7
			fHt = document.body.offsetHeight;	
		else if ( window.innerHeight )			// Firefox
			fHt = window.innerHeight;			
		} catch( err ) { }

	return (fHt);
}

function js_TailleEcran(f_largeur,f_hauteur)
{
	
	var windowLeft = (screen.width-f_largeur)/2;
	var windowTop = (screen.height-f_hauteur)/2;
	
	return windowLeft+";"+windowTop;
	
}

function jsIsDate(d)
{
	// Cette fonction permet de vérifier la validité d'une date au format jj/mm/aa ou jj/mm/aaaa
	
	if (d == "") // si la variable est vide on retourne faux
	return 0;
	
	var e = new RegExp("^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4})$");
	
	if (!e.test(d)) // On teste l'expression régulière pour valider la forme de la date
	return 'faux'; // Si pas bon, retourne faux
	
	// On sépare la date en 3 variables pour vérification, parseInt() converti du texte en entier
	var j = parseInt(d.split("/")[0], 10); // jour
	var m = parseInt(d.split("/")[1], 10); // mois
	var a = parseInt(d.split("/")[2], 10); // année
	
	// Si l'année n'est composée que de 2 chiffres on complète automatiquement
	if (a < 1000) {
		if (a < 89)  a+=2000; // Si a < 89 alors on ajoute 2000 sinon on ajoute 1900
		else a+=1900;
		}
	
	// Définition du dernier jour de février
	var fev;
	// Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
	if (a%4 == 0 && a%100 !=0 || a%400 == 0) fev = 29;
	else fev = 28;
	
	// Nombre de jours pour chaque mois
	var nbJours = new Array(31,fev,31,30,31,30,31,31,30,31,30,31);
	
	// Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
	if ( m >= 1 && m <=12 && j >= 1 && j <= nbJours[m-1] )
	{
		return 1;
	}
	else
	{
		var l_mess=GNAV_MSGDATINVAL(); 	//msg_dat_inval();
		alert(l_mess);
		return 0;
	}
}

function js_NavigateurLargeur()
{
	if (document.documentElement.clientWidth)
	return document.documentElement.clientWidth;
	else
	if (document.body.clientWidth)
	return document.body.clientWidth;
	else
	if (window.innerWidth)
	return window.innerWidth;
	else
	return window.clientWidth;
}
function js_NavigateurHauteur(bForDWW)
{
	var nH;
	
	if (document.body.clientHeight)
	nH = document.body.clientHeight;
	else
	if (window.innerHeight)
	nH = window.innerHeight;
	else
	nH = window.clientHeight;
	
	if (bForDWW == true)
	nH = document.body.scrollHeight;
	else
	if (nH == 0) nH = document.body.scrollHeight;	

	return nH;			
	
}
function ajax_valide() {
	if (document.getElementById && ! document.all ) { 	// Firefox
		if (clWDAJAXMain) clWDAJAXMain.m_bWDAJAXMainValide = true;
	}
}
function js_nom(f_ch)
{
	return document.getElementById(f_ch).name;
}
function js_convimg(f_ch,f_nom,f_img)
{
	document.getElementById(f_ch).name=f_nom;
	document.getElementById(f_ch).src=f_img;
}

function js_convtxt(f_ch,f_texte,f_color)
{
	document.getElementById(f_ch).innerHTML=f_texte;  	
	document.getElementById(f_ch).style.color=f_color;
}
function recup_color(f_ch)
{
	return document.getElementById(f_ch).style.backgroundColor;
}

function js_convsel(alpha,f_iObj)
{
	var iObj = document.getElementById(f_iObj);
	if (document.all) iObj.style.filter = "alpha(opacity=" + alpha + ")";
	else iObj.style.opacity = (alpha / 100);
}	
function js_bloque()
{
	return false;
}
function js_menu_ferme() 
{
	var l_menu = GetObj("CMenu");
	if (l_menu) l_menu.style.visibility = "hidden";
}
function ajax_bloque() {
	if (document.getElementById && ! document.all ) { 	// Firefox
		window.onbeforeunload = function(){clWDAJAXMain.BloqueAJAX();};
		}
}
function visu_remp(f_aff,f_posX,f_posY,f_tail,f_sens,f_oriX,f_oriY,f_numFleche)
{
	var l_numFleche = (typeof f_numFleche !== 'undefined') ? f_numFleche : "";
	//alert(f_aff+"-"+f_posX+"-"+f_posY+"-"+f_tail+"-"+f_sens+"-"+f_oriX+"-"+f_oriY);
	var l_vremp = GetObj("Vremp"+l_numFleche);
	var l_cremp = GetObj("Cremp"+l_numFleche);
	
	if (f_aff=="O") {
		var l_oriX; var l_oriY;
		
		if (document.getElementById && ! document.all ) {
			l_oriX = eval(f_oriX+10); l_oriY = eval(f_oriY+10) ;
		}
		else {
			l_oriX = 0; l_oriY = 0;
		}
		
		l_vremp.style.visibility = "visible";
		
		var l_img = l_vremp.src;
		var l_deb = l_img.indexOf("picto-planning-fleche-",0); 	// extrait chemin rép image
		var l_nimg;
		var l_pX = f_posX;
		var l_pY = f_posY;

		if (f_sens=="H") l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-rem-h.png";
		else l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-rem-b.png";
		l_vremp.src = l_nimg;
		if (eval(f_tail-7)<=0) {	// bout flèche seulement
			l_cremp.style.visibility = "hidden";
			l_pY -= 3;
			bouge_champ("Vremp"+l_numFleche,l_pX,l_pY);
			}			
		else {
			l_cremp.style.visibility = "visible";
			l_cremp.style.height = (f_tail-7)+"px";						
			
			if (f_sens=="H") {

				bouge_champ("Vremp"+l_numFleche,l_pX,l_pY);
				bouge_champ("Cremp"+l_numFleche,l_pX+5,l_pY+7);
			} else {

				bouge_champ("Vremp"+l_numFleche,l_pX,(l_pY+f_tail-7));
				bouge_champ("Cremp"+l_numFleche,l_pX+5,l_pY);
			}
		}	
	}
	else {
		l_vremp.style.visibility = "hidden";
		l_cremp.style.visibility = "hidden";
	}
}
function js_conv(f_ch,f_couleur)
{
	var l_elem = document.getElementById(f_ch);
	
	if(l_elem) l_elem.style.backgroundColor=f_couleur;   
}

function supprimeasch(sAliasTV)
{
	var l_obj = GetObj("dz"+sAliasTV);
	
	if (l_obj) l_obj.style.overflowX="hidden";
}

function ascenseurparam(sAliasTV) {
	var l_obj = GetObj("dz"+sAliasTV);
	
	if (l_obj) {
		l_obj.style.overflowY="auto";
		l_obj.style.maxheight="300px";
	}
}

function supprimeasch_zr(sAliasTV)
{
	var l_obj = GetObj("dzcon-"+sAliasTV);
	
	if (l_obj) l_obj.style.overflowX="hidden";
}

function GetObj(id)
{ 
	// Renvoie l'objet correspondant à l'identifiant
	// -> id : 'ID' HTML de l'objet

	if (document.getElementById) return document.getElementById(id);
	else if (document.all) return document.all(id);
}
function GetObjAt(x,y,l,h,theClass) { 
	// Renvoie l'objet avec la classe CSS spécifiée se situant dans le rectangle donné
	// -> x : position X haut gauche du rectangle
	// -> y : position Y haut gauche du rectangle
	// -> l : largeur du rectangle
	// -> h : hauteur du rectangle
	// -> theClass : classe CSS de l'objet
		
	var iObj = null;
	var tDiv;
	var i;
	
	// récupère tous les objets "DIV"
	//	tDiv = document.getElementsByTagName("div");
	tDiv = document.getElementsByTagName("td");
	
	for(i=0;i<tDiv.length;i++)
	{
		// si c'est un objet déplaçable
		
		if ((tDiv[i].className == theClass))
		{
			
			if (tDiv[i].id != iCurrentObj.id) 
			{
				// Récupère les dimensions de l'objet
				var divX, divY, divL, divH;
				divX = (tDiv[i].offsetLeft);
				divY = (tDiv[i].offsetTop);
				divL = (tDiv[i].offsetWidth);
				divH = (tDiv[i].offsetHeight);
				// si le champ en déplacement se trouve dans la largeur du champ survolé
				if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL))
				{
					// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
					// si le champ en déplacement se trouve dans la hauteur du champ survolé
					if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH))
					{
						iObj = tDiv[i];				
						break;
						}
					}
				
				// si le champ en déplacement se trouve dans la hauteur du champ survolé
				if ((y >= divY && y <= divY + divH) || (y + h >= divY && y + h <= divY + divH))
				{
					// si le champ survolé se trouve dans la largeur du champ champ en déplacement
					// si le champ en déplacement se trouve dans la largeur du champ survolé
					if ((divX >= x && divX <= x + l) || (x >= divX && x <= divX + divL))
					{
						iObj = tDiv[i];				
						break;
						}
					}				
				}			
			}
		}	
	
	return iObj;
}
function GetObjAt1(x,y,l,h) { 
	// Renvoie l'objet avec la classe CSS spécifiée se situant dans le rectangle donné
	// -> x : position X haut gauche du rectangle
	// -> y : position Y haut gauche du rectangle
	// -> l : largeur du rectangle
	// -> h : hauteur du rectangle
	// -> theClass : classe CSS de l'objet
	
	var iObj = null;
	var tDiv;
	var i;
	
	var tr=false;
	var td=false;
	var trs=false;
	// on vérifie que les coordonnées sont dans Data
	var data=document.getElementById("Data");
	if(data)
	{
		var divX, divY, divL, divH;
		divX = relatiftoabs(data,"offsetLeft");
		divY = relatiftoabs(data,"offsetTop");
		divL = (data.offsetWidth);
		divH = (data.offsetHeight);
		// si le champ en déplacement se trouve dans la largeur du champ survolé
		if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL))
		{
			// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
			// si le champ en déplacement se trouve dans la hauteur du champ survolé
			if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH))
			{
				x += data.scrollLeft;
				y += data.scrollTop;
				var t=document.getElementById("pla");
				trs=t.getElementsByTagName("tr");
				}
			}
		}
	if(trs)for(i=0;i<trs.length;i++)
	{
		//if (trs[i].className!="dnd") continue;
		// recup coordonnée absolu du tr
		var divX, divY, divL, divH;
		divX = relatiftoabs(trs[i],"offsetLeft");
		divY = relatiftoabs(trs[i],"offsetTop");
		divL = (trs[i].offsetWidth);
		divH = (trs[i].offsetHeight);
		
		// comparaison / coordonnée souris
		// si le champ en déplacement se trouve dans la largeur du champ survolé
		if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL))
		{
			// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
			// si le champ en déplacement se trouve dans la hauteur du champ survolé
			if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH))
			{
				tr = trs[i];		
				break;
				}
			}
		}
	//renvoi la ligne du tableau nomme 
	if (tr)
	{
		var tds=tr.getElementsByTagName("td");
		for(i=0;i<tds.length;i++)
		{
			if (tds[i].className!="dnd") continue;
			// recup coordonnée absolu du td
			var divX, divY, divL, divH;
			divX = relatiftoabs(tds[i],"offsetLeft");
			divY = relatiftoabs(tds[i],"offsetTop");
			divL = (tds[i].offsetWidth);
			divH = (tds[i].offsetHeight);
			
			// comparaison / coordonnée souris
			// si le champ en déplacement se trouve dans la largeur du champ survolé
			if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL))
			{
				// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
				// si le champ en déplacement se trouve dans la hauteur du champ survolé
				if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH))
				{
					td = tds[i];		
					break;
					}
				}
			}
		}
	return td;
}

function relatiftoabs(elt,typ)
{
	var wb=0;
	while(elt){
		wb+=elt[typ];elt=elt.offsetParent;
		}
	return wb
}
function UnRelativize(tObjects)
{
	var i;
	var iObj;
	
	// si la liste des fils est OK
	if(tObjects)
	for(i=0;i<tObjects.length;i++)
	{
		iObj = tObjects[i];
		
		// si c'est un DIV ou une TABLE
		if (iObj.tagName == "DIV" || iObj.tagName == "TABLE")
		{
			// l'objet aura une position absolute (cas sous IE)
			iObj.style.position = "absolute";
			UnRelativize(iObj.children);
			}
		}	
}
function DoTransparentTimer(alpha, iObjID) {
	// Timer d'animation pour la transparence d'un objet
	// -> alpha : % alpha à appliquer
	// -> iObjID : 'ID' HTML de l'objet
	
	var iObj = GetObj(iObjID);
	
	if (!isIE())  iObj.style.opacity = (alpha / 100);
	else  iObj.style.filter = "alpha(opacity=" + alpha + ")";
	
	if (alpha <= 0)  document.body.removeChild(iObj);	// Supprime le clone
}
function DoTransparent(iObjID, alphaDeb, alphaFin, milliTimer) {
	// Rend un champ transparent (ou opaque) pendant une animation
	// -> iObjID : 'ID' HTML de l'objet
	// -> alphaDeb : % alpha de départ
	// -> alphaFin : % alpha de fin
	// -> milliTimer : durée de l'animation
	
	var speed, timer;
	speed = Math.round(milliTimer / 100);
	timer = 0;
	
	if (alphaDeb > alphaFin)
	{
		for(i = alphaDeb; i >= alphaFin; i--)
		{
			setTimeout("DoTransparentTimer(" + i + ",'" + iObjID + "')", (timer * speed));
			timer ++;
			}
		}
	else if (alphaDeb < alphaFin)
	{
		for(i = alphaDeb; i <= alphaFin; i++)
		{
			setTimeout("DoTransparentTimer(" + i + ",'" + iObjID + "')", (timer * speed));
			timer ++;
			}
		}
}
function DoAjoute(sID) {
	// Ajoute un objet dans le panier
	// -> sID : Identifiant du produit associé à l'objet
	
	// I6 est l'alias du champ de saisie SAI_IDPRODUIT de la page interne PI_SHOPPANIER
	// I5 est l'alias du bouton BTN_ADD de la page interne PI_SHOPPANIER
	//	_PAGE_.I6.value = sID;
	//	_PAGE_.I5.click();
}

function DNDSurvol(e) {
	if (!(iCurrentObj && iCurrentObj.className == "dnd")) return;
	
	// récupère l'objet
	var iObj = iCurrentObj;
	
	var difX, difY;
	var newX, newY;	
	var maxX, maxY;
		
	// si l'objet est valide
	if (iObj) {

		iObj.style.visibility = "visible";		

		if (isIE()) {
					
			// calcule la nouvelle position
			newX = event.clientX + 2;
			newY = event.clientY + 2;
			difX = document.body.scrollLeft;
			difY = document.body.scrollTop;
			
			// Dimension max
			maxX = document.body.clientWidth;
			maxY = document.body.clientHeight; //10000;
			
			if (iObj.style.filter == "")
			{
				//iObj.style.height = (parseInt(iObj.style.height) + 1) + "px";		// bug IE 10 => les cases de la nouvelle palette s'étendent à l'infini pendant le drag...					
				// Applique une transparence sur l'objet
				iObj.style.filter = "alpha(opacity=80)";
			}
			
		} else if (isDOM()) {			
			
			if(!gf_modeTablette)
			{
				// calcule la nouvelle position
				newX = e.clientX + 2;
				newY = e.clientY + 2;
				difX = window.pageXOffset;
				difY = window.pageYOffset;
				
				// Dimension max
				maxX = window.innerWidth;
				maxY = window.innerHeight;	
				
				iObj.style.opacity = 0.80;	
			}
			else
			{
				// calcule la nouvelle position
				var touch = e.targetTouches[0];
				newX = touch.pageX + 2;
				newY = touch.pageY + 2;
				difX = window.pageXOffset;
				difY = window.pageYOffset;
				
				// Dimension max
				maxX = window.innerWidth;
				maxY = window.innerHeight;
				
				iObj.style.opacity = 0.80;	
			}
		} else if (isNS()) {
			
			// calcule la nouvelle position
			newX = e.pageX + 2;
			newY = e.pageY + 2;
			difX = window.pageXOffset;
			difY = window.pageYOffset;
			
			// Dimension max
			maxX = window.innerWidth;
			maxY = window.innerHeight;			
		}
		
		// bornes max
		maxX = maxX - 10;
		maxY = maxY - 10;
		
		// Si le champ va trop à gauche
		if (newX < 10) newX = 10;
		// Si le champ va trop en haut
		if (newY < 10) newY = 10;
		
		// Si le champ va trop à droite
//		if (newX + parseInt(iObj.style.width) > maxX) newX = maxX - parseInt(iObj.style.width);
		// Si le champ va trop en bas
		if (newY + parseInt(iObj.style.height) > maxY) newY = maxY - parseInt(iObj.style.height);
		
		// applique la nouvelle position
		newX = newX+difX;
		newY = newY+difY;
		iObj.style.left =  newX + "px";
		iObj.style.top  =  newY + "px";			
		}
	
	return false;
}
function DNDLache(e) {
	// Fin du drag and drop (correspond à l'événement 'dndLacher')
	
	var l_i = 0;
	var l_expnew = RegExp("^[0-9]{1,5}-[0-9]{1,3}-[0-9]{1,3}$","g");
	var l_trouve = false;
	var l_spl;
	var l_idch;
	var l_ch;
	
	gf_aff_encours = false;
	if (isIE() || isNS()) {
		// Annule la gestion des événements
		document.onmousemove = null;
		document.onmouseup = null;
		} else if (isDOM()) {
		// Annule la gestion des événements
		window.onmousemove = null;
		window.onmouseup = null;
		document.ontouchmove = null;
		document.ontouchend = null;
	}
	
	if(gf_PlaInverserPost || gf_PlaInverserNiv1 || gf_PlaInverserNiv2 || gf_PlaInverserNiveau != 0 || gf_PlaInverserNiveauPoste != 0)
	{		//planning inverser
		if (document.all) {
			if (event) {
				l_objsel=event.srcElement;
			}
		} else if (e){
			l_objsel=e.target;	
		}
		
		if (l_objsel.id) {
			l_ch=l_objsel.id.toLowerCase();
		} else {
			l_ch="";
		}
		
		while(!l_trouve && l_i < 3 && l_objsel)
		{
			if (l_objsel.id) {
				l_ch=l_objsel.id.toLowerCase();
				if(l_expnew.test(l_ch))
				{
					l_trouve = true;
				}
			} else {
				l_ch="";
			}
			l_objsel = l_objsel.parentElement;
			l_i++;
		}
		
		
		if (iCurrentObj && l_trouve)
		{
			
			l_idch=iCurrentObj.id.substring(0,6);
			
			if (gf_case_cli=="")
			{
				l_spl = l_ch.split("-");
				cy(l_spl[0], l_spl[1], l_spl[2]);
				
				DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
				
//				if (l_idch=="ch_abs")
//				{
//					pose_absence(iCurrentObj.id.substring(6,8));
//				}
//				else if (l_idch=="ch_act")
//				{
//					pose_activite(iCurrentObj.id.substring(6,8));
//				}
//				else if (l_idch=="ch_pex")
//				{
//					pose_perexcep(iCurrentObj.id.substring(6,8));
//				}
//				else if (l_idch=="ch_reg")
//				{
//					pose_regul(iCurrentObj.id.substring(6,8));
//				}
//				else if (l_idch=="ch_niv")
//				{
//					pose_niv(iCurrentObj.id.substring(6,8));
//				}
//				else
//				{
//					pose_horaire(iCurrentObj.id.substring(6,8));
//				}
			}
			else
			{
				if (gf_case_cli.match("@" + l_ch + ";"))
				{
					DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
					
//					if (l_idch=="ch_abs")
//					{
//						pose_absence(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_act")
//					{
//						pose_activite(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_pex")
//					{
//						pose_perexcep(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_reg")
//					{
//						pose_regul(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_niv")
//					{
//						pose_niv(iCurrentObj.id.substring(6,8));
//					}
//					else
//					{
//						pose_horaire(iCurrentObj.id.substring(6,8));
//					}
				}
				else
				{
					raz_selectionI();
					l_spl = l_ch.split("-");
					cy(l_spl[0], l_spl[1], l_spl[2]);
					
					DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
					
//					if (l_idch=="ch_abs")
//					{
//						pose_absence(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_act")
//					{
//						pose_activite(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_pex")
//					{
//						pose_perexcep(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_reg")
//					{
//						pose_regul(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_niv")
//					{
//						pose_niv(iCurrentObj.id.substring(6,8));
//					}
//					else
//					{
//						pose_horaire(iCurrentObj.id.substring(6,8));
//					}
				}
			}

		}
	
	}
	else
	{		// planning mensuel
		
		// Détruit l'objet
		if (iCurrentObj)
		{
			// Récupère l'objet au moment du lâcher
			var iTarget;
			iTarget = GetObjAt1(parseInt(iCurrentObj.style.left), parseInt(iCurrentObj.style.top), parseInt(iCurrentObj.style.width), parseInt(iCurrentObj.style.height));
			var pl_id = GetIdAtClass(parseInt(iCurrentObj.style.left), parseInt(iCurrentObj.style.top), 0, 0,"pl");
			var pc_id = GetIdAtClass(parseInt(iCurrentObj.style.left), parseInt(iCurrentObj.style.top), 0, 0,"pc");
			if (pc_id.split("-")[0] != pl_id.split("-")[0]) {
				pc_id = "";
			}
			// Si il y a un objet
			if (iTarget) 
			{
				var l_ch="J"+iTarget.id.toLowerCase().substring(1);
				l_idch=iCurrentObj.id.substring(0,6);
				
				if (gf_case_cli=="")
				{
					ajout_selection(l_ch);
					DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
//					if (l_idch=="ch_abs")
//					{
//						pose_absence(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_act")
//					{
//						pose_activite(iCurrentObj.id.substring(6,8),pl_id,pc_id);
//					}
//					else if (l_idch=="ch_pex")
//					{
//						pose_perexcep(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_reg")
//					{
//						pose_regul(iCurrentObj.id.substring(6,8));
//					}
//					else if (l_idch=="ch_niv")
//					{
//						pose_niv(iCurrentObj.id.substring(6,8));
//					}
//					else
//					{
//						pose_horaire(iCurrentObj.id.substring(6,8));
//					}
				}
				else
				{				
					if (gf_case_cli.match(l_ch))
					{
						DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
//						if (l_idch=="ch_abs") //iCurrentObj.id=="IMG_ABS_clone")
//						{
//							
//							pose_absence(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_act")
//						{
//							pose_activite(iCurrentObj.id.substring(6,8),pl_id,pc_id);
//						}
//						else if (l_idch=="ch_pex")
//						{
//							pose_perexcep(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_reg")
//						{
//							pose_regul(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_niv")
//						{
//							pose_niv(iCurrentObj.id.substring(6,8));
//						}
//						else
//						{
//							pose_horaire(iCurrentObj.id.substring(6,8));									
//						}
					}
					else
					{
						raz_selection();	
						ajout_selection(l_ch);
						
						DNDPose_Case(l_idch, iCurrentObj.id.substring(6,8), pl_id, pc_id);
						
//						if (l_idch=="ch_abs")
//						{
//							pose_absence(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_act")
//						{
//							pose_activite(iCurrentObj.id.substring(6,8),pl_id,pc_id);
//						}
//						else if (l_idch=="ch_pex")
//						{
//							pose_perexcep(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_reg")
//						{
//							pose_regul(iCurrentObj.id.substring(6,8));
//						}
//						else if (l_idch=="ch_niv")
//						{
//							pose_niv(iCurrentObj.id.substring(6,8));
//						}
//						else
//						{
//							pose_horaire(iCurrentObj.id.substring(6,8));
//						}				
					}
				}				
			}
			

		}

	}
	// Rend l'objet transparent à 100%
	DoTransparent(iCurrentObj.id, 80, 0, 100);
}

function DNDDebute(e) {
	// Débute le drag and drop (correspond à l'événement 'dndDebutGlisser')
	// -> e : objet 'Event' renvoyé par les navigateurs autres que IE
	
	var iClone;
	//	var l_bul = GetObj("bulle_jour");
	//
	//	// cache la bulle pendant le DragAndDrop
	//	l_bul.innerHTML = "";
	//	l_bul.style.visibility = "hidden";
	//	gf_aff_encours = 1;
	
	// Sous IE
	if (isIE())
	{
		// Récupère l'objet ayant provoqué l'événement 'mousedown'
		iCurrentObj = event.srcElement;
		
		// Déclenche les évenements de déplacement et de fin de déplacement
		document.onmousemove = DNDSurvol;
		document.onmouseup = DNDLache;
		
		// Sous FireFox
	} else if (isDOM()) {
		
		// Récupère l'objet ayant provoqué l'événement 'mousedown'
		iCurrentObj = e.target;
		
		// Déclenche les évenements de déplacement et de fin de déplacement
		window.onmousemove = DNDSurvol;
		window.onmouseup = DNDLache;
		document.ontouchmove = DNDSurvol;
		document.ontouchend = DNDLache;	

		if(gf_modeTablette) e.preventDefault();
		
		// Sous Netscape
	} else if (isNS()) {
		
		// Récupère l'objet ayant provoqué l'événement 'mousedown'
		iCurrentObj = e.target;
		
		// Déclenche les évenements de déplacement et de fin de déplacement
		document.captureEvents(Event.MOUSEMOVE);
		document.captureEvents(Event.MOUSEUP);
		document.onmousemove = DNDSurvol;		
		document.onmouseup = DNDLache;	
	}	
	
	
	// Si un objet a provoqué le 'mousedown'	
	if (iCurrentObj)
	{
		// Retrouve le DIV déplaçable qui contient cet objet
		while (iCurrentObj.getAttribute("DropObj") != "yes")
		if (iCurrentObj.parentNode)
		iCurrentObj = iCurrentObj.parentNode;		
		
		iClone = GetObj(iCurrentObj.getAttribute("ID") + "_clone"); //on vérifie que le clone n'a pas déjà été crée pour éviter le bug du clic gauche+clic droit qui crée plusieurs clones d'un seul coup
		if (iClone===null) {
			// Sous IE
			if (isIE())		
			{	
				// Duplique le code HTML de l'objet
				document.body.insertAdjacentHTML('AfterBegin', iCurrentObj.outerHTML.replace(iCurrentObj.getAttribute("ID"), iCurrentObj.getAttribute("ID") + "_clone"));
				// Récupère le clone
				iClone = GetObj(iCurrentObj.getAttribute("ID") + "_clone");
				iClone.style.position = "absolute";
				
				// Sous FireFox et NS
			} else {
				// Crée un nouveau DIV pour cloner l'objet que l'on drag
				iClone = document.createElement("divClone");		
				// Ajoute l'objet cloné à la page
				document.body.appendChild(iClone);			
				
				// Duplique les propriétés							
				iClone.style.position = "absolute";
				iClone.style.cursor = "default";	
				
				iClone.style.left = iCurrentObj.style.left;
				iClone.style.top = iCurrentObj.style.top;
				iClone.style.width = iCurrentObj.style.width;
				iClone.style.height = iCurrentObj.style.height;
				iClone.style.backgroundColor = iCurrentObj.style.backgroundColor;
				iClone.style.font = "10px arial";
				
				// Nouvel ID
				iClone.id = iCurrentObj.getAttribute("ID") + "_clone";
				iClone.innerHTML = iCurrentObj.innerHTML;
				iClone.style.visibility = "hidden";
			}						
		}
		// Propriétés originales
		iClone.setAttribute("XOriginal", iCurrentObj.getAttribute("XOriginal"));
		iClone.setAttribute("YOriginal", iCurrentObj.getAttribute("YOriginal"));
		iClone.setAttribute("ProductID", iCurrentObj.getAttribute("ProductID"));
		iClone.className = "dnd";
		
		// Le clone sera l'objet déplacé
		iCurrentObj = iClone;
		iCurrentObj.style.zIndex = '1004';
		
		// Recale / scroll page
		var difX=0;
		var difY=0;
		if (document.body.scrollLeft) {
			difX = document.body.scrollLeft;
			difY = document.body.scrollTop;
		} else if (window.pageXOffset) {
			difX = window.pageXOffset;
			difY = window.pageYOffset;
		}
		
		var l_x=0;
		var l_y=0; 
		l_x = difX + parseInt(iCurrentObj.style.left);
		l_y = difY + parseInt(iCurrentObj.style.top);
		iCurrentObj.style.left =  l_x + "px";
		iCurrentObj.style.top  =  l_y + "px";
		}
}
function DNDActive(idObj, f_e_abr, f_e_coul, f_e_bul, bCorrecteur) {
	// Active le drag and drop pour un objet HTML donné
	// -> idObj : 'ID' HTML de l'objet
	// -> bCorrecteur : Vrai pour appliquer un correcteur sur la position de l'objet, Faux sinon

	// Récupère l'objet identifié par son ID
	var iObj = GetObj(idObj);

	// Init propriétés
	iObj.innerHTML = f_e_abr;
	iObj.style.backgroundColor = f_e_coul;
	iObj.title = f_e_bul;		

	// Rend l'objet déplaçable
//	iObj.style.position = "absolute";
	
//	// Sauvegarde la position de départ
//	iObj.setAttribute("XOffsetOriginal"	, iObj.offsetLeft);

//	// Applique sa position	
//	iObj.style.left     = iObj.offsetLeft + "px";
//	iObj.style.top      = (iObj.offsetTop - (bCorrecteur?CORRECTEUR:0)) + "px";
//	iObj.style.width    = iObj.offsetWidth + "px";
//	iObj.style.height   = iObj.offsetHeight + "px";

	//iObj.style.cursor   	= "pointer";
	iObj.style.visibility 	= "visible";	

	// Ajoute un attribut à l'objet indiquant qu'il est déplaçable	
	iObj.setAttribute("DropObj", "yes");

	iObj.className 			= "dnd";

	// Attributs spéciaux
	iObj.setAttribute("ProductID", iObj.id);	
	iObj.setAttribute("XOriginal", iObj.style.left);
	iObj.setAttribute("YOriginal", iObj.style.top);

	if (isIE())	{
		// Bouton souris enfoncé : début du drag and drop 
		iObj.onmousedown = DNDDebute;		
		document.onselectstart = iFalse;
		
		// Dérelativise les fils
		UnRelativize(iObj.children);		

	} else if (isDOM()) {	
		
		// Bouton souris enfoncé : début du drag and drop 
		iObj.addEventListener("mousedown", DNDDebute, false);					
		iObj.addEventListener("touchstart", DNDDebute, false);					

	} else if (isNS()) {	
		
		// Bouton souris enfoncé : début du drag and drop 
		iObj.captureEvents(Event.MOUSEDOWN);
		iObj.onmousedown = DNDDebute;

	}	
}
function bouge_champ(idObj,xx,yy) {
	var iObj = GetObj(idObj);
	iObj.style.position = "absolute";
	iObj.style.left = xx+'px';
	iObj.style.top = yy+'px';		
}

function MakeDateFromWD( szWDDate ) {
	var szSS = szWDDate.substring(12,14);
	var szMIN = szWDDate.substring(10,12);
	var szHH	= szWDDate.substring(8,10);
	var szJJ = szWDDate.substring(6,8);
	var szMM = szWDDate.substring(4,6);
	var szAAAA = szWDDate.substring(0,4);
	
	var d = new Date(szAAAA,eval(szMM+'-1'),szJJ,szHH,szMIN,szSS);
	if (eval(szAAAA)<100) d.setFullYear(szAAAA);
	return d;
}

function isDOM() {
	// Détecte si le navigateur est FireFox (ou DOM compatible)
	if (document.getElementById)  return true;
	else  return false;
}
function isIE() {	
	// Détecte si le navigateur est Internet Explorer (ou compatible)
	if (document.all) 	 return true;
	else  return false;
}
function isNS() {
	// Détecte si le navigateur est Netscape Navigator (ou compatible)
	if (document.layers)  return true;
	else  return false;
}
function iFalse()  {
	return false;
}
function js_init_b_img(f_b,f_src)
{
	var l_o = GetObj(f_b);
	if (l_o) l_o.style.backgroundImage = "url("+f_src+")";
}
function js_tail_if_mz(f_obj,f_lg,f_ht)  {
	var l_o = GetObj(f_obj);
	
	if(l_o.children)	{
		var l_c = l_o.children[0];
		
//		if (l_c.tagName == "IFRAME") {
		if (l_c.tagName == "TABLE") {
			if(typeof f_lg !== 'undefined')
			{
				l_c.style.width  = f_lg+"px";
				l_c.style.height = f_ht+"px";
			}
			else
			{
				l_c.style.width  = l_o.style.width;
				l_c.style.height = l_o.style.height;
			}
		}
	}	
}
function js_CaseExiste(f_case)
{
	if(document.getElementById(f_case))
	{
		return 1
	}
	else
	{
		return 0
	}
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// js_CaseExiste ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
//PROCEDURE js_CaseExiste()
//
function js_convtxtcoul(f_ch,f_color)
{	
	var l_t = GetObj(f_ch);
	
	if (l_t) l_t.style.color=f_color;
}
function js_changeVisible(idChamp,visibilite)
{
	var l_champ= document.getElementById(idChamp);
	if(l_champ != null)
	{
		if(visibilite)
		{
			l_champ.style.visibility='visible'
		}
		else
		{
			l_champ.style.visibility='hidden'
		}
	}
}

function tabletteAvertirListes()
{
	if(gf_modeTablette)
	{
		$("ul.multilineselect").remove();
		$("select").fixForSafariMobile(true);
	}
}

function iOSAndroidOnLoad()
{
	var largeurPage = $(window).width(); 
	var hauteurPage = $(window).height();
	$("body").children().wrapAll("<div onclick='void(0);' style='width:" + largeurPage + "px; height:" + hauteurPage + "px;'></div>"); // force la perte de focus lors d'un clic sur le fond	
}

function js_AltitudeEdit(champ,alti)
{
	document.getElementById(champ).style.zIndex = alti;
}

// Tracé des flèches d'échange 
function visu_echange(f_aff,f_posX,f_posY,f_tail1,f_tail2,f_tail3,f_sens)
{		
	var l_dech = GetObj("Dech");
	var l_phech = GetObj("PHech");
	var l_hech = GetObj("Hech");
	var l_vech = GetObj("Vech");
	var l_hech2 = GetObj("Hech2");
	var l_vech2 = GetObj("Vech2");
	var l_phech2 = GetObj("PHech2");
	var l_dech2 = GetObj("Dech2");
	var l_width = 3
	
	//Pour les flèches à gauche et à droite
	var l_trilg = 7;
	var l_triht = 13;
	var l_trilgdemi = 5;
	var l_trihtdemi = 5;
	//Pour les flèches au dessus et au dessous
	var l_trilg2 = 13;
	var l_triht2 = 7;
	var l_trilgdemi2 = 5;
	var l_trihtdemi2 = 5;
	
	var l_nimg;
	var l_pX = f_posX;
	var l_pY = f_posY;
	
	
	if (f_aff=="O") {
		
		if ((f_sens=="VD") || (f_sens=="VG")) {
			// Cases sur la même colonne
			l_dech.style.visibility = "visible";
			l_dech2.style.visibility = "visible";
			l_hech.style.visibility = "visible";
			l_vech.style.visibility = "visible";
			l_hech2.style.visibility = "visible";	
			l_phech.style.visibility = "hidden";
			l_vech2.style.visibility = "hidden";	
			l_phech2.style.visibility = "hidden";	
			
			var l_img = l_dech.src;
			var l_deb = l_img.indexOf("picto-planning-fleche-",0); 	// extrait chemin rép image
			var l_lgh = f_tail1;	
			
			l_hech.style.width  = l_lgh+"px";						
			l_vech.style.height = f_tail2+l_width+"px";						
			l_hech2.style.width  = l_lgh+"px";
			
			if (f_sens=="VD" ) {
				// Tracé à droite de la colonne
				l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-g.png";
				l_dech.src = l_nimg;
				l_dech2.src = l_nimg;
				
				bouge_champ("Dech",l_pX,l_pY);
				bouge_champ("Dech2",l_pX,l_pY+f_tail2);
				bouge_champ("Hech",l_pX+l_trilg,l_pY+l_trihtdemi);
				bouge_champ("Vech",l_pX+l_trilg+l_lgh,l_pY+l_trihtdemi);
				bouge_champ("Hech2",l_pX+l_trilg,l_pY+f_tail2+l_trihtdemi);				
				}
			
			else  {
				// Tracé à gauche de la colonne
				l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-d.png";
				l_dech.src = l_nimg;
				l_dech2.src = l_nimg;						
				bouge_champ("Dech",l_pX,l_pY);
				bouge_champ("Dech2",l_pX,l_pY+f_tail2);
				bouge_champ("Hech",l_pX-l_lgh,l_pY+l_trihtdemi);
				bouge_champ("Vech",l_pX-l_lgh-l_width,l_pY+l_trihtdemi);
				bouge_champ("Hech2",l_pX-l_lgh,l_pY+f_tail2+l_trihtdemi);				
				}	
			}	
		
		else { 		
			if ((f_sens=="HH") || (f_sens=="HB")) {
				// Cases sur la même ligne
				l_phech.style.visibility = "visible";
				l_phech2.style.visibility = "visible";		
				l_vech.style.visibility = "visible";
				l_vech2.style.visibility = "visible";
				l_hech2.style.visibility = "visible";	
				l_dech.style.visibility = "hidden";
				l_hech.style.visibility = "hidden";	
				l_dech2.style.visibility = "hidden";	
				
				var l_img = l_phech.src;				
				var l_deb = l_img.indexOf("picto-planning-fleche-",0); 	// extrait chemin rép image
				var l_lgh = f_tail1;		
				
				l_vech.style.height  = l_lgh+"px";						
				l_hech2.style.width = f_tail2+l_width+"px";						
				l_vech2.style.height  = l_lgh+"px";								
				
				
				if (f_sens=="HB" ) {
					// Tracé en dessous de la ligne
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-h.png";
					l_phech.src = l_nimg;
					l_phech2.src = l_nimg;
					
					bouge_champ("PHech",l_pX,l_pY);
					bouge_champ("PHech2",l_pX+f_tail2,l_pY);
					bouge_champ("Vech",l_pX+l_trilgdemi2,l_pY+l_triht2);
					bouge_champ("Vech2",l_pX+l_trilgdemi2+f_tail2,l_pY+l_triht2);
					bouge_champ("Hech2",l_pX+l_trilgdemi2,l_pY+l_lgh+l_triht2);				
					}
				
				else  {
					// Tracé au dessus de la ligne
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-b.png";
					l_phech.src = l_nimg;
					l_phech2.src = l_nimg;
					
					bouge_champ("PHech",l_pX,l_pY-l_triht2);
					bouge_champ("PHech2",l_pX+f_tail2,l_pY-l_triht2);					
					bouge_champ("Vech",l_pX+l_trilgdemi2,l_pY-l_triht2-l_lgh);
					bouge_champ("Vech2",l_pX+l_trilgdemi2+f_tail2,l_pY-l_triht2-l_lgh);	
					bouge_champ("Hech2",l_pX+l_trilgdemi2,l_pY-l_triht2-l_lgh-l_width);	
					
					}	
				}		
			
			else  {
				// Cases ni sur la même ligne, ni sur la même colonne
				
				l_phech.style.visibility = "visible";	
				l_vech.style.visibility = "visible";
				l_hech2.style.visibility = "visible";	
				l_dech2.style.visibility = "visible";									
				l_phech2.style.visibility = "hidden";
				l_vech2.style.visibility = "hidden";
				l_hech.style.visibility = "hidden";	
				l_dech.style.visibility = "hidden";	
				
				var l_img = l_phech.src;				
				var l_deb = l_img.indexOf("picto-planning-fleche-",0); 	// extrait chemin rép image
				var l_lgh = f_tail1;	
				var l_lgh2= f_tail2-l_trilg-l_width*2-1;
											
				
				if ( l_lgh == 0 ) {	
					l_vech.style.visibility = "hidden";
					}
				
				if ( l_lgh2 <= 0 ) {	
					l_lgh2=0;
					l_hech2.style.visibility = "hidden";
					}
					
				l_vech.style.height = l_lgh+"px";					
				l_hech2.style.width = l_lgh2+"px";	
				
				if (f_sens=="VH" ) {	
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-h.png";
					l_phech.src = l_nimg;
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-d.png";					
					l_dech2.src = l_nimg;
					
					bouge_champ("PHech",l_pX,l_pY);
					bouge_champ("Dech2",l_pX+f_tail2-l_width*2,l_pY+l_lgh+l_triht2-l_trihtdemi-l_width);
					bouge_champ("Vech",l_pX+l_trilgdemi2,l_pY+l_triht2);					
					bouge_champ("Hech2",l_pX+l_trilgdemi2+l_width,l_pY+l_lgh+l_triht2-l_width);				
					}
				
				else  {
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-b.png";
					l_phech.src = l_nimg;
					l_nimg = l_img.substring(0,l_deb)+"picto-planning-fleche-ech-d.png";					
					l_dech2.src = l_nimg;
					
					bouge_champ("PHech",l_pX,l_pY-l_triht2);
					bouge_champ("Dech2",l_pX+f_tail2-l_width*2,l_pY-l_lgh-l_triht2-l_trihtdemi);
					bouge_champ("Vech",l_pX+l_trilgdemi2,l_pY-l_lgh-l_triht2);				
					bouge_champ("Hech2",l_pX+l_trilgdemi2+l_width,l_pY-l_lgh-l_triht2);	
					
					}	
				
				}					
			}
		
		}
	else {
		l_dech.style.visibility = "hidden";
		l_hech.style.visibility = "hidden";
		l_vech.style.visibility = "hidden";
		l_hech2.style.visibility = "hidden";	
		l_dech2.style.visibility = "hidden";
		
		l_phech.style.visibility = "hidden";
		l_vech2.style.visibility = "hidden";	
		l_phech2.style.visibility = "hidden";
		}
	}




function recup_coordonnees(f_ch)
{
	var l_objet = document.getElementById(f_ch)
	return l_objet.style.left + ";" + l_objet.style.top
}

function bgcouleur_item(f_idcombo,f_ind,f_coul)
{
	var l_elt = document.getElementById(f_idcombo)[f_ind-1];
	l_elt.style.background=f_coul;
	l_elt.style.fontFamily = "OpenSans-SemiBold-oct, Arial, sans-serif";
}

function couleur_item(f_idcombo,f_ind,f_coul)
{
	var l_elt = document.getElementById(f_idcombo)[f_ind-1];
	l_elt.style.color=f_coul;
}

//fonction qui permet d'écrire une texte (ou code html) dans une balise, à condition de connaître son identifiant
function js_modif_html(f_id, f_html, f_plus)
{
	if (f_plus) // si f_plus = vrai, on ajoute à la suite
		document.getElementById(f_id).innerHTML += f_html;
	else // sinon on remplace
		document.getElementById(f_id).innerHTML = f_html;
}


function raf_menu(f_num_onglet, f_nb_onglets, f_table,f_boite_id)
{	
	f_table = "<table class='menuTable2' style='visibility:visible;'>"+f_table+"</table>";
	js_modif_html('tab_menu_id{'+f_boite_id+'}',f_table);
	document.getElementById('item{'+f_num_onglet+'}_id{'+f_boite_id+'}').setAttribute('style', 'background:#CBE8F8;border:1px solid;color:#38A5DD;border-color: #36ACD0 #36ACD0 #36ACD0 #36ACD0;font-weight:600;');
	for (i = 1; i <= f_nb_onglets; i++)
	{
		if ((f_num_onglet != i) && (document.getElementById('item{'+i+'}_id{'+f_boite_id+'}'))) {
			document.getElementById('item{'+i+'}_id{'+f_boite_id+'}').setAttribute('style', 'font-weight:600;color:#757575;');}
	} 
}

//document.getElementById('item{'+l_i+'}').setAttribute('style', '');
//"+((l_i modulo 3+1)modulo 3+1)+"
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
// raf_menu ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
//PROCEDURE raf_menu()
//
//

function js_change_parente(f_fils,f_parent)
{
//Fonction permettant de déplacer un objet de parenté
	var l_fils = GetObj(f_fils);
	var l_parent = GetObj(f_parent);

	if ((l_fils)&&(l_parent)){
		l_parent.appendChild(l_fils); 
	}
}
 
function js_Champ_Existe(f_champ)
{	
	var l_obj = GetObj(f_champ);
	if (l_obj){
		return 1; 
	}
	else{
		return 0;
	}
}
// Résumé : <indiquez ici ce que fait la procédure>
// Syntaxe :
//js_Champ_Existe ()
//
// Paramètres :
//	Aucun
// Valeur de retour :
// 	Aucune
//
// Exemple :
// Indiquez ici un exemple d'utilisation.
//
//PROCEDURE js_Champ_Existe()
//
//
function GetIdAtClass(x,y,l,h,classe) { 
	// Renvoie l'objet avec la classe CSS spécifiée se situant dans le rectangle donné
	// -> x : position X haut gauche du rectangle
	// -> y : position Y haut gauche du rectangle
	// -> l : largeur du rectangle
	// -> h : hauteur du rectangle
	// -> theClass : classe CSS de l'objet
	var i;
	var div=false;
	var divs=false;
	// on vérifie que les coordonnées sont dans Data
	var data=document.getElementById("Data");
	if(data)
	{
		var divX, divY, divL, divH;
		divX = relatiftoabs(data,"offsetLeft");
		divY = relatiftoabs(data,"offsetTop");
		divL = (data.offsetWidth);
		divH = (data.offsetHeight);
		// si le champ en déplacement se trouve dans la largeur du champ survolé
		if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL))
		{
			// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
			// si le champ en déplacement se trouve dans la hauteur du champ survolé
			if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH))
			{
				x += data.scrollLeft;
				y += data.scrollTop;
				divs=data.getElementsByClassName(classe);
			}
		}
	}
	if(divs) {
		for(i=0;i<divs.length;i++) {
			var divX, divY, divL, divH;
			divX = relatiftoabs(divs[i],"offsetLeft");
			divY = relatiftoabs(divs[i],"offsetTop");
			divL = (divs[i].offsetWidth);
			divH = (divs[i].offsetHeight);
			// comparaison / coordonnée souris
			// si le champ en déplacement se trouve dans la largeur du champ survolé
			if ((x >= divX && x <= divX + divL) || (x + l >= divX && x + l <= divX + divL)) {
				// si le champ survolé se trouve dans la hauteur du champ champ en déplacement
				// si le champ en déplacement se trouve dans la hauteur du champ survolé
				if ((divY >= y && divY <= y + h) || (y >= divY && y <= divY + divH)) {
					div = divs[i];		
					break;
				}
			}
		}
	}
	if (div) {
		var l_spl = div.id.split("-");
		var l_num1;
		if (l_spl[1]==0 && classe=="pl") {
			l_num1 = 0;
		} else {
			l_num1 = l_spl[2];
		}
		var l_tmp;
		var l_num2 = "*";
		for(i=0;i<divs.length;i++) {
			l_tmp = divs[i].id.split("-");
			if (l_spl[0]==l_tmp[0] && l_spl[1]==l_tmp[1] && parseInt(l_tmp[2])<parseInt(l_num1)) {
				l_num1 = l_tmp[2];
			}
		}
		// Récupération de l'activité précédente et de l'activité suivante sur la plage
		var act1 = "";
		var act2 = "";
		if (classe=="pl") {
			var acts = data.getElementsByClassName("pc");
			var spl_act;
			for(i=0;i<acts.length;i++) {
				spl_act = acts[i].id.split("-");
				if (l_spl[0]==spl_act[0] && l_spl[1]==spl_act[1]) {
					if (l_num2=="*") {
						l_num2=spl_act[2];
					}
					var actX, divL;
					actX = relatiftoabs(acts[i],"offsetLeft");
					if (actX<x) {
						act1=acts[i].id;
					}
					if (actX>x) {
						act2=acts[i].id;
						break;
					}
				}
			}
		}
		if (act1 != "") {
			act1 = act1.split("-");
			act1 = act1[2];
		} else {
			act1 = "*";
		}
		if (act2 != "") {
			act2 = act2.split("-");
			act2 = act2[2];
		} else {
			act2 = "*";
		}
		return div.id+"-"+l_num1+"-"+act1+"-"+act2+"-"+l_num2;
	} else {
		return "";
	}
}
function DNDPose_Case(f_idch, fnum, f_pl_id, f_pc_id)
{
	if (f_idch=="ch_abs")
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PABS"));
	}
	else if (f_idch=="ch_act")
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PACT"));
	}
	else if (f_idch=="ch_pex")
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PPEX"));
	}
	else if (f_idch=="ch_reg")
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PREG"));
	}
	else if (f_idch=="ch_niv")
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PNIV"));
	}
	else
	{
		GAA_affiche_attente(GNAV_DICTIONNAIRENAV("PHOR"));
	}
	
	setTimeout(function(){ DNDPose_Case_Timer(f_idch, fnum, f_pl_id, f_pc_id); }, 100);
}

function DNDPose_Case_Timer(f_idch, fnum, f_pl_id, f_pc_id)
{
	if (f_idch=="ch_abs")
	{
		pose_absence(fnum);
	}
	else if (f_idch=="ch_act")
	{
		pose_activite(fnum, f_pl_id, f_pc_id);
	}
	else if (f_idch=="ch_pex")
	{
		pose_perexcep(fnum);
	}
	else if (f_idch=="ch_reg")
	{
		pose_regul(fnum);
	}
	else if (f_idch=="ch_niv")
	{
		pose_niv(fnum);
	}
	else
	{
		pose_horaire(fnum);
	}
}

function js_convimgPla(f_ch,f_atribut,f_nom,f_img)
{
	document.getElementById(f_ch).setAttribute(f_atribut,f_nom);
	document.getElementById(f_ch).style.backgroundImage="url('"+f_img+"')"; 
}

function js_RecupAttribut(f_ch, f_nomAtt)
{
	return document.getElementById(f_ch).getAttribute(f_nomAtt);
}

function jsCodechar(evt, tctrl)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "") 
	if (evt)
	{
		if(evt.ctrlKey || evt.metaKey)
			tctrl = "O";
		else
			tctrl = "N";

		return evt.charCode;
	}	
}

function js_Pos_Scroll_X()
{
	return (document.documentElement.scrollLeft || document.body.scrollLeft);
}
function js_Pos_Scroll_Y()
{
	return (document.documentElement.scrollTop || document.body.scrollTop);
}

function IdRecupValeur(f_id)
{
	return $("#" + f_id).val();
}

function IdModifValeur(f_id,f_val)
{
	return $("#" + f_id).val(f_val);
}
function IdEstCoche(f_id)
{
	return $('#' + f_id).is(':checked');
}
function GI_CellGriseIFrameScroll()
{
	var l_cellsGrise = $(".CELLS_GRISE_IFRAME");
	l_cellsGrise.width(document.body.clientWidth + $(window).scrollLeft()).height(document.body.clientHeight + $(window).scrollTop());

	var l_espaceVertical = document.body.clientHeight * 0.10;
	$(".S900-CELL-GRANDE-POPUP").css("height", document.body.clientHeight - l_espaceVertical + "px").css("top", (l_espaceVertical / 2) + $(window).scrollTop() + "px").css("left",((document.body.clientWidth /2) - (968 / 2)) + $(window).scrollLeft() + "px");

	l_cellsGrise.width(document.body.clientWidth + $(window).scrollLeft()).height(document.body.clientHeight + $(window).scrollTop());
}


function GI_CreeNouvelleIFrame(f_tailleLongueur, f_tailleHauteur)
{
	GI_InitNumIFramePage();
	
	var l_tailleLongueurdiv = f_tailleLongueur
	var l_tailleHauteurdiv = f_tailleHauteur
	
	var l_nomIframe = "PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	
	var l_divGrise = document.createElement("div");
	l_divGrise.id= "CELL_GRISE_" + l_nomIframe;
	l_divGrise.className  = "CELLS_GRISE_IFRAME"
	l_divGrise.style.zIndex = "" + (1000000 + gf_numIFramePage);
	l_divGrise.style.position = "absolute";
	l_divGrise.style.left = "0px";
	l_divGrise.style.top = "0px";
	l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
	l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop() + "px";
	l_divGrise.style.backgroundColor = "rgba(102, 102, 102, 0.55)";
	//l_divGrise.style.overflow = "hidden";
	
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_IFRAME_" + l_nomIframe;
	l_divPrincipal.classList.add("S900-CELL-POPUP");
	l_divPrincipal.classList.add("padding");
	l_divPrincipal.style.position = "absolute";
	l_divPrincipal.style.left = Math.max(0, ((document.body.clientWidth /2) - (l_tailleLongueurdiv / 2)) + $(window).scrollLeft()) + "px";
	l_divPrincipal.style.top = Math.max(0, ((document.body.clientHeight / 2) - (l_tailleHauteurdiv / 2)) + $(window).scrollTop()) + "px";	
	l_divPrincipal.style.width = l_tailleLongueurdiv + "px";
	l_divPrincipal.style.height = l_tailleHauteurdiv + "px";
//	l_divPrincipal.style.top ="50%";
//	l_divPrincipal.style.left = "50%";
//	l_divPrincipal.style.transform = "translate(-50%,-50%)";
//	l_divPrincipal.style.backgroundColor = "#D7EDFA";
	l_divPrincipal.style.cursor = "move";
	
	var l_divIframe = document.createElement("iframe");
	l_divIframe.id = l_nomIframe;
	l_divIframe.name = l_nomIframe;
//	l_divIframe.style.position = "absolute";
//	l_divIframe.style.left = "30px";
//	l_divIframe.style.top = "30px";	
//	l_divIframe.style.width = f_tailleLongueur + "px";
//	l_divIframe.style.height = f_tailleHauteur + "px";
	l_divIframe.style.width = "100%";
	l_divIframe.style.height = "100%";
	
	l_divPrincipal.appendChild(l_divIframe);
	l_divGrise.appendChild(l_divPrincipal);
	
	$("body").children().first().append(l_divGrise);
	
//	var l_optConteneurDrag = { 
	//		start: null,
	//		drag: null,
	//		stop: null,
	//		cancel: null,
	//		grid : [10 , 10] };
//	
//	$("#" + l_divPrincipal.id).draggable(l_optConteneurDrag);
	$("#" + l_divPrincipal.id).draggable({start:GI_IFrameDebutDrag, stop:GI_IFrameFinDrag, drag:GI_CellGriseIFrameScroll});
	
	return l_nomIframe;
}

function GI_FermeIFrame()
{
	GI_InitNumIFramePage();
	
	$("#CELL_GRISE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).hide();
	$("#CELL_GRISE_GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).hide();
	
	//$("#CELL_GRISE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).remove();
	
	gf_numIFramePage--;

	if(gf_numIFramePage > 0)
	{
		if($("#GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).length > 0)
		{
			if($("#GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).css("display") != "none")
			{
				return "GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage;
			}
		}
		return "PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	}
	
	$(window).off("scroll", GI_CellGriseIFrameScroll).off("resize",GI_CellGriseIFrameScroll);
	
	return "_parent";

}

function GI_FermeIFrameParent()
{
	return parent.GI_FermeIFrame();
}

function GI_IFrameDebutDrag()
{
	GI_InitNumIFramePage();
	
	$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + gf_numIFramePage + ", " + "#CELL_IFRAME_GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).append("<div style='position:absolute; top:0; left:0; width:100%; height:100%;'>&nbsp;</div>");
}


function GI_IFrameFinDrag()
{
	GI_InitNumIFramePage();
	
	$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + gf_numIFramePage + ", " + "#CELL_IFRAME_GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).children().remove("div");
}

function GI_OuvreIFrame(f_tailleLongueur, f_tailleHauteur)
{
	GI_InitNumIFramePage();
	
	gf_numIFramePage++;
	
	var l_nomIframe = "PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	
	if($("#" + l_nomIframe).length > 0)
	{
	
		var l_tailleLongueurdiv = f_tailleLongueur;
		var l_tailleHauteurdiv = f_tailleHauteur;
		
		$("#CELL_IFRAME_" + l_nomIframe).width(l_tailleLongueurdiv).height(l_tailleHauteurdiv).css({left: (document.body.clientWidth /2) - ((l_tailleLongueurdiv + 60) / 2) + $(window).scrollLeft(), top : (document.body.clientHeight / 2) - ((l_tailleHauteurdiv + 54) / 2) + $(window).scrollTop()}).show();
//		$("#" + l_nomIframe).width(f_tailleLongueur).height(f_tailleHauteur).contents().children().remove();
		GI_CellGriseIFrameScroll();
		$("#CELL_GRISE_" + l_nomIframe).show();
	}
	else
	{
		GI_CreeNouvelleIFrame(f_tailleLongueur, f_tailleHauteur);
	}
	
	if(gf_numIFramePage == 1)
	{
		$(window).on("scroll", GI_CellGriseIFrameScroll).on("resize",GI_CellGriseIFrameScroll);
	}
	
	return l_nomIframe;
}

function GI_OuvreIFrameParent(f_tailleLongueur, f_tailleHauteur)
{
	GI_DesactiveToutChamps();
	return parent.GI_OuvreIFrame(f_tailleLongueur, f_tailleHauteur);
}

function verif_jquery_ui(f_versJQueryUI)
{
	if (!window.jQuery.ui) {
		var l_jq  = document.createElement('script');
		l_jq.type = 'text/javascript';
		l_jq.src  = f_versJQueryUI;
		document.head.appendChild(l_jq);
	}
}
function verif_jquery(f_jQueryChemin)
{
	if (!window.jQuery) {
		var l_jq  = document.createElement('script');
		l_jq.type = 'text/javascript';
		l_jq.src  = f_jQueryChemin;
		document.head.appendChild(l_jq);
	}
}
function AjoutEvenementKeydown()
{
	$(document).on( "keydown", function(e) {
		if(!GNAV_gf_threadActif && !e.ctrlKey && e.altKey && e.shiftKey && (e.keyCode == 84 || e.keyCode == 116)) {
			GNAV_AFFICHETRACES();
		}
	});
}

function GI_NomIFrameEnCours()
{
	return parent.GI_NomIFrameEnCoursViaParent();
}

function jsHexaVersEntier(f_hexa)
{
	var l_entier;
	l_entier = parseInt(f_hexa,16);
	return l_entier;
}

function jsEntierVersHexa(f_entier)
{
 var l_hexa;
 l_hexa = f_entier.toString(16);
 return l_hexa;
}

function GI_FermeToutIFrame()
{
	GI_InitNumIFramePage();
	
	while (gf_numIFramePage > 0)
	{
		GI_FermeIFrame();
	}
}
function GI_DesactiveToutChamps()
{
	$("button, input, optgroup, option, select, textarea, menuitem, fieldset").each(function( index ) {

//		console.log( index + ": " + $( this ).attr('id') + " % " +  $( this ).attr('name') + " - " + $( this ).prop("readonly") );
//		$( this ).off("onchange onblur");
		this.onblur = null;
		this.onchange = null;
		this.onfocus = null;
		
	});
}

function GI_OuvreIFramePrincipal(f_tailleLongueur, f_tailleHauteur)
{
	GI_DesactiveToutChamps();
	return GI_OuvreIFrame(f_tailleLongueur, f_tailleHauteur);
}

function getUrlNav()
{
	return window.location.href;
}

function GI_ChangeTailleIFrame(f_tailleLongueur, f_tailleHauteur)
{
	GI_InitNumIFramePage();
	
	clearTimeout(gf_idTimerOuvreIframe);
	var l_nomIframe = "PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	
	if($("#" + l_nomIframe).length > 0)
	{
		var l_tailleLongueurdiv = f_tailleLongueur;
		var l_tailleHauteurdiv = f_tailleHauteur;
		
		$("#CELL_IFRAME_" + l_nomIframe).width(l_tailleLongueurdiv).height(l_tailleHauteurdiv).css({left: Math.max(0, (document.body.clientWidth /2) - ((l_tailleLongueurdiv + 60) / 2) + $(window).scrollLeft()), top : Math.max(0, (document.body.clientHeight / 2) - ((l_tailleHauteurdiv + 42) / 2) + $(window).scrollTop())}).show();
		//		$("#" + l_nomIframe).width(f_tailleLongueur).height(f_tailleHauteur)
		GI_CellGriseIFrameScroll();
//		$("#CELL_GRISE_" + l_nomIframe).show();
		
	}
	GAA_FermeAttente();
	GI_ChangeCouleurTourIframe("");
}

function GI_ChangeTailleIFrameParent(f_tailleLongueur, f_tailleHauteur)
{
	parent.GI_ChangeTailleIFrame(f_tailleLongueur, f_tailleHauteur);
}

function GI_OuvreIFrameAvecChargementViaParent(f_message)
{
	GI_InitNumIFramePage();
	
	GAA_affiche_attente(f_message);
	var l_nomIFrame = GI_OuvreIFrame(10, 10);
	$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + gf_numIFramePage).hide();
	
	gf_idTimerOuvreIframe = setTimeout(GI_TopTimerIFrame, 10000);
	
	return l_nomIFrame;
}

function GI_OuvreIFrameAvecChargement(f_message)
{
	return parent.GI_OuvreIFrameAvecChargementViaParent(f_message);
}

function GI_TopTimerIFrame()
{
	GI_ChangeTailleIFrame(900, 600);
}

function js_getPosition(f_select)
{
	return $(f_select).position();
}

function js_getOffset(f_select)
{
	return $(f_select).offset();
}

function GI_ChangeCouleurTourIframe(f_couleur, f_couleurContour)
{
	parent.GI_ChangeCouleurTourIframeViaParent(f_couleur, f_couleurContour)
}

function GI_ChangeCouleurTourIframeViaParent(f_couleur, f_couleurContour)
{
	GI_InitNumIFramePage();
	
	if(f_couleur == "")
	{
		for (var i = 1; i <= gf_numIFramePage; i++)
		{
			$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + i).css("background-color", f_couleur).css("border", "");
		}
	}
	else
	{
		$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + gf_numIFramePage).css("background-color", f_couleur).css("border", "1px solid " + f_couleurContour);
	}
}

function delai(f_action, f_temps)
{
	var l_temps = f_temps * 10;
	return setTimeout(f_action, l_temps);
}
function js_ouvre_grise_popup(f_zIndex_grise)
{
	if( !$("#CELL_GRISE_POPUP").length )
	{
		var l_divGrise = document.createElement("div");
		l_divGrise.id= "CELL_GRISE_POPUP";
		l_divGrise.style.zIndex = f_zIndex_grise;
		l_divGrise.style.position = "absolute";
		l_divGrise.style.left = "0px";
		l_divGrise.style.top = "0px";
		l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
		l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop() + "px";
		l_divGrise.style.background = "rgba(102, 102, 102, 0.55)";
		l_divGrise.style.display = "none";
		l_divGrise.style.fontFamily = "Arial, Helvetica, sans-serif";
		l_divGrise.style.fontSize = "12px";
		$("body").children().first().append(l_divGrise);
	}
	$("#CELL_GRISE_POPUP").show();
}

function js_ferme_grise_popup()
{
	if( $("#CELL_GRISE_POPUP").length ) {
		$("#CELL_GRISE_POPUP").hide();
	}
}

function PositionAscenseurListe(f_nomListe, f_numChamp)
{
	var l_num = f_numChamp - 1;
	var l_list = document.getElementById(f_nomListe);
	if(l_list)
	{
		if(l_list[l_num])
		{
			l_list.scrollTop = l_list[l_num].offsetTop;
		}
	}
}

function AffCacheOptionSelecteur(f_idChamp, f_indice, f_affiche)
{
	if (f_affiche === undefined) {
		f_affiche = true;
	}
	
	var l_test = $("#tz" + f_idChamp + ">tbody").find("#" + f_idChamp + "_" + f_indice).parent().parent();
	
	if(f_affiche)
	{
		$(l_test).show();
	}
	else
	{
		$(l_test).hide();
	}
}

function js_recupLongueurNav()
{
	if($("body").css("overflow-y") === "scroll")
	{
		console.log(document.documentElement.clientWidth + 17);
		return document.documentElement.clientWidth + 17;
	}
	else
	{
		if(document.documentElement.scrollHeight > document.documentElement.clientHeight)
		{
			//console.log(document.documentElement.clientWidth + 17);
			return document.documentElement.clientWidth + 17;
		}
		else
		{
			//console.log(document.documentElement.clientWidth);
			return document.documentElement.clientWidth;
		}
	}
}

function js_recupHauteurNav()
{
	if($("body").css("overflow-x") === "scroll")
	{
		console.log(document.documentElement.clientHeight + 17);
		return document.documentElement.clientHeight + 17;
	}
	else
	{
		if(document.documentElement.scrollWidth > document.documentElement.clientWidth)
		{
			//console.log(document.documentElement.clientHeight + 17);
			return document.documentElement.clientHeight + 17;
		}
		else
		{
			//console.log(document.documentElement.clientHeight);
			return document.documentElement.clientHeight;
		}
	}
}

function GI_InitNumIFramePage()
{
	if(typeof(gf_numIFramePage) === 'undefined')
	{
		gf_numIFramePage = 0;
		gf_callBackSelection = new Array();
		gf_callBackFermeture = new Array();
	}
		
}
function GI_NomIFrameEnCoursViaParent()
{
	GI_InitNumIFramePage();
	
	return "PAGE_IFRAME_MULTI_" + gf_numIFramePage;
}
function js_gestionClicCalendrierOctime()
{
	$("#dwwCH_CELL_CAL").on("click",js_clicOffCalendrierOctime);
	$(window).on("click",js_fermeCalendrierOctime);
}

function js_fermeCalendrierOctime()
{
	$("#dwwCH_CELL_CAL").css("visibility","hidden").off("click",js_clicOffCalendrierOctime);
	$(window).off("click",js_fermeCalendrierOctime);
}

function js_clicOffCalendrierOctime(f_event)
{
	f_event.stopPropagation();
}

function MDLCNombreChangerMasque()
{
	var l_champ =  document.getElementById("CH_NOMBRE");
	var l_taille =  document.getElementById("CH_TAILLE2").value;
	var l_dec = document.getElementById("CH_DEC").value;
	var l_str = "";
	
	for (l_i=0;l_i<=l_taille;l_i++){
		if (l_dec != "0"){
			if (l_i == (l_taille - l_dec )){
				l_str += ",";
			}else{
				l_str += "0";
			}
		}else {
			l_str += "0";
		}
	}
	l_champ.placeholder =  l_str;
}

function MDLCNombreformatNombre(f_aliasTaille, f_aliasNombre, f_aliasDec)
{
	var l_taille =  document.getElementById(f_aliasTaille).value;
	var l_valor =  document.getElementById(f_aliasNombre).value;
	var l_dec = document.getElementById(f_aliasDec).value;
	var l_aux = l_valor;
	
	if((l_valor == "-,") || (l_valor == ",") || (l_valor == "-") || (l_valor == "") || (l_valor == "-.") || (l_valor == ".")){
		l_aux = "";
	}
	
	
	if (l_dec > 0){
		
		if ((l_valor.search(",") != -1) && (l_aux != "")){
			
			if ((l_valor == "0,") || (l_valor == "-0,")) {
				l_valor = "0,0";
			}
			l_aux = l_valor.replace(',',".");
			var l_aux2 = parseFloat(l_aux);
			l_aux = l_aux2.toFixed(l_dec.valueOf());
			
			l_aux = l_aux.replace('.',",");
		}
		
		if ((l_valor.indexOf(".") != -1) && (l_aux != "")) {
			if ((l_valor == "0.") || (l_valor == "-0.")) {
				l_valor = "0.0";
			}
			var l_aux2 = parseFloat(l_valor);
			l_aux = l_aux2.toFixed(l_dec.valueOf());
			l_aux = l_aux.replace('.',",");
		}
		
		if( (l_valor.search(",") == -1) && (l_valor.indexOf(".") == -1) && (l_aux != "")){
			var l_aux2 = parseFloat(l_aux);
			l_aux = l_aux2.toFixed(l_dec.valueOf());
			l_aux = l_aux.replace('.',",");
		}
	}
	// entiers
	if (l_dec == 0){
		if (l_valor.search(",") != -1){
			l_aux = l_valor.replace(',',"");
		}		
		
		if (l_valor.indexOf(".") != -1){
			l_aux = l_valor.replace('.',"");
		}
		if (l_valor.search("-") != -1){
			var l_aux2 = parseInt(l_valor);
			if (l_aux2 == 0){
				l_aux = "0";
			}
		}
		
	}
	
	document.getElementById(f_aliasNombre).value = l_aux;	
}

function MDLCNombreValidationNombre(f_e, f_aliasNombre, f_taille, f_dec, f_type)
{
	l_tecla = (document.all) ? f_e.keyCode : f_e.which;
	var l_isFirefox = typeof InstallTrigger !== 'undefined';
	var l_valor =  document.getElementById(f_aliasNombre).value;
	var l_flag = true;
	
	// Firefox 1.0+
	if (l_isFirefox){
		if(l_tecla==0){
			l_tecla=9;
		}
	}
	
	if ((l_tecla==8) || (l_tecla==9)){
		l_flag = true;
	}else{
		
		if (f_type == "N"){
			if (l_valor.length > f_taille-1)  {
				l_flag = false;
			}else{
				if (l_tecla == 45) {
					if (l_valor.length == 0){
						l_flag = true;
					}else{
						l_flag = false;
					}
				}else{
					l_patron =/[0-9]/;
					l_tecla_final = String.fromCharCode(l_tecla);
					l_flag = l_patron.test(l_tecla_final);
				}
			}
		}
		
		
		
		if (f_type == "V"){
			if (l_valor.length > f_taille-1){
				l_flag = false;
			}else{
				
				if (l_tecla == 45) {
					if (l_valor.length == 0){
						l_flag = true;
					}else{
						l_flag = false;
					}
				}
				
				
				if ((l_tecla==46) || (l_tecla==44)   ){
					if ( (l_valor.indexOf(".") == -1 ) && (l_valor.search(",") == -1 ) ){
						if (f_dec > 0){
							l_flag = true;
						}else{
							l_flag = false;			
						}
					}else{
						l_flag = false;
					}
				}
				
				if((l_tecla!=46) && (l_tecla!=44) && (l_tecla!=45)){
					if(l_valor.length  == (f_taille - f_dec - 1) ){
						if((l_valor.indexOf(".") == -1) && (l_valor.search(",") == -1) && (f_dec > 0)){
							l_flag = false;
						}
					}else {
						l_patron =/[0-9]/;
						l_tecla_final = String.fromCharCode(l_tecla);
						l_flag = l_patron.test(l_tecla_final);
					}
				} 
				
				if (l_valor.indexOf(".") != -1){
					var l_pos = l_valor.indexOf(".");
					if ( (l_valor.length - (l_pos+1) ) >= f_dec  ) {
						l_flag = false;
					}
				}
				
				if (l_valor.search(",") != -1){
					var l_pos = l_valor.search(",");
					if ( (l_valor.length - (l_pos+1) ) >= f_dec  ) {
						l_flag = false;
					}
				}
			}
		}
		
		if (f_type == "P"){
			if(l_valor == "10"){
				l_patron =/[0]/;
				l_tecla_final = String.fromCharCode(l_tecla);
				l_flag = l_patron.test(l_tecla_final);
			}else{
				if (l_valor.length > f_taille-2) {
					l_flag = false;
				}else{
					l_patron =/[0-9]/;
					l_tecla_final = String.fromCharCode(l_tecla);
					l_flag = l_patron.test(l_tecla_final);
				}
			}
		}
		
		
	}
	
	if (l_flag == false){
		f_e.preventDefault();
	}
	
	
}

function MDLCNombreValidationSelection(f_event, f_aliasNombre)
{
	var l_touche = (document.all) ? f_event.keyCode : f_event.which;
	var l_input = document.getElementById(f_aliasNombre);
	var l_inicio = l_input.selectionStart ;
	var l_fin = l_input.selectionEnd ;
	
	if((l_inicio != l_fin) && (l_touche != 9) ){
		var l_valor =  l_input.value;
		var l_inicio = l_valor.substr(0, l_inicio);
		var l_fin = l_valor.substr(l_fin, l_valor.length);
		l_input.value = l_inicio + l_fin;
	}
}

function MDLCNombreVerifierSymbole(f_event, f_aliasNombre, f_taille,f_dec,f_type)
{
	var l_touche = (document.all) ? f_event.keyCode : f_event.which;
	var l_champ = document.getElementById(f_aliasNombre);
	var l_valeur = l_champ.value;
	
	if(f_type == "V"){
		if( (l_valeur.length == (f_taille - f_dec-1)) && (l_touche != 8) && (l_valeur.indexOf(",") == -1) && (l_valeur.indexOf(".") == -1)){
			l_champ.value = l_champ.value + ",";
		}
	}
}

function MDLCHeureFormatHeure(f_aliasHeure, f_aliasTaille)
{
	var l_taille =  document.getElementById(f_aliasTaille).value;
	var l_valeur =  document.getElementById(f_aliasHeure).value;
	
	if((l_valeur == "-") || (l_valeur == "-:") || (l_valeur == ":")){
		l_valeur = "";
	}
	
	if(l_valeur.indexOf(":") != -1) {
		
		if (l_valeur == "0:") {
			l_valeur = "0:0";
		}
		var l_aux = l_valeur.replace(':',".");
		var l_aux2 = parseFloat(l_aux);
		l_valeur = l_aux2.toFixed(2);
		l_valeur = l_valeur.replace('.',":");
	}
	
	
	if ((l_valeur.indexOf(":") == -1) && (l_valeur != "")){
		if (l_valeur == "0") {
			l_valeur = "0:0";
		}
		var l_aux = l_valeur.replace(":",".");
		var l_aux2 = parseFloat(l_aux);
		l_valeur = l_aux2.toFixed(2);
		l_valeur = l_valeur.replace(".",":");
	}
	
	document.getElementById(f_aliasHeure).value = l_valeur;
}

function MDLCHeureValidationSelectionHeure(f_event, f_aliasHeure)
{
	var l_touche = (document.all) ? f_event.keyCode : f_event.which;
	var l_input = document.getElementById(f_aliasHeure);
	var l_inicio = l_input.selectionStart ;
	var l_fin = l_input.selectionEnd ;
	
	if((l_inicio != l_fin) && (l_touche != 9) ){
		var l_valor =  l_input.value;
		var l_inicio = l_valor.substr(0, l_inicio);
		var l_fin = l_valor.substr(l_fin, l_valor.length);
		l_input.value = l_inicio + l_fin;
	}
	
}

function MDLCHeureValidation(f_e, f_aliasHeure, f_aliasTaille)
{
	var l_tecla = (document.all) ? f_e.keyCode : f_e.which;
	var l_isFirefox = typeof InstallTrigger !== 'undefined';
	var l_taille =  document.getElementById(f_aliasTaille).value;
	var l_sel = document.getElementById(f_aliasHeure).selectionStart;
	var l_valor =  document.getElementById(f_aliasHeure).value;
	var l_tailleMinutes = 2;
	var l_flag = true;
	
	// Firefox 1.0+
	if (l_isFirefox){
		if(l_tecla==0){
			l_tecla=9;
		}
	}
	
	if ((l_tecla==8) || (l_tecla==9)) {
		l_flag = true;
	}else{
		
		if (l_valor.length >= l_taille) {
			l_flag = false;
		}else{
			
			if (l_tecla == 45) {
				if (l_valor.length == 0){
					l_flag = true;
				}else{
					l_flag = false;
				}
			}
			
			if ( (l_tecla!=58) && (l_tecla!=8) && (l_tecla!=45) ){
				
				l_patron =/[0-9]/;
				l_tecla_final = String.fromCharCode(l_tecla);
				l_flag = l_patron.test(l_tecla_final);	
			}
			
			if (l_tecla==58){
				if (l_valor.indexOf(":") == -1) {
					if (l_valor.length <= (l_taille - l_tailleMinutes -1)){
						l_flag = true;
					}else{
						l_flag = false;		
					}	
				} else{
					l_flag = false;
				}
			}
			
			if(l_valor.indexOf(":") != -1){
				
				var l_pos = l_valor.indexOf(":");
				var l_min = l_valor.substr(l_pos+1, l_valor.length);
				var l_heure = l_valor.substr(0,l_pos);
				
				if(l_sel <= l_pos){
					if(l_heure.length > l_taille-3 ){
						l_flag = false;				
					}
				}
				
				if(l_sel > l_pos){
					if(l_min.length > 1) {
						l_flag = false;			
					}	
				}
				
				if(l_valor.length == l_pos+1){
					l_patron =/[0-5]/;
					l_tecla_final = String.fromCharCode(l_tecla);
					l_flag = l_patron.test(l_tecla_final);
				}
				
			}
			
			if((l_valor.length == (l_taille-3)) && (l_valor.indexOf(":") == -1)){
				if(l_tecla != 58 ){
					l_flag = false;
				}
			}
		}
		
	}
	
	
	if (l_flag == false){
		f_e.preventDefault();
	}
	
	
}

function MDLCHeureVerifierSymbole(f_event, f_aliasHeure, f_taille)
{
	var l_touche = (document.all) ? f_event.keyCode : f_event.which;
	var l_champ = document.getElementById(f_aliasHeure);
	var l_valeur = l_champ.value;
	
	
	if((l_valeur.length == (f_taille - 3)) && (l_touche != 8) && (l_valeur.indexOf(":") == -1)){
		l_champ.value = l_champ.value + ":";
	}
}

function GereTailleChampListeFireFox(f_champ, f_tailleExt, f_tailleMin)
{
	var l_taille = document.documentElement.clientHeight - f_tailleExt;
	if(l_taille < f_tailleMin)
		l_taille = f_tailleMin;
	$("#" + f_champ).css("height", l_taille + "px");
	
	$( window ).resize( function() {
		var l_taille = document.documentElement.clientHeight - f_tailleExt;
		if(l_taille < f_tailleMin)
			l_taille = f_tailleMin;
		$("#" + f_champ).css("height", l_taille + "px");
	});
	
}

function AffCacheOptionSelecteurSansDeplacement(f_idChamp, f_indice, f_affiche)
{
	if (f_affiche === undefined) {
		f_affiche = true;
	}
	
	var l_test = $("#tz" + f_idChamp + ">tbody").find("#" + f_idChamp + "_" + f_indice).parent().parent();
	
	if(f_affiche)
	{
		$(l_test).css("visibility","visible");
	}
	else
	{
		$(l_test).css("visibility","hidden");
	}
}

function bgcouleur_item_simple(f_idcombo,f_ind,f_coul)
{
	var l_elt = document.getElementById(f_idcombo)[f_ind-1];
	l_elt.style.background=f_coul;
}

function FormatDureeEnHeures(f_val){
	var l_format = '' ;
	
	if (f_val > 0){
		switch(f_val){
			case '1':
			l_format = 'H:MM';
			break;
			case '2':
			l_format = 'HH:MM';
			break;
			case '3':
			l_format = 'HHH:MM';
			break;
			case '4':
			l_format = 'HHHH:MM';
			break;
			case '5':
			l_format = 'HHHHH:MM';
			break;
			case '6':
			l_format = 'HHHHH:MM';
			break;
			case '7':
			l_format = 'HHHHHHH:MM';
			break;
			
			default:
			l_format = 'HH:MM';
			
		}
		
	}else{
	l_format = 'HH:MM'
	}
	return l_format;
}

function jsValidationDureeEnHeures(f_e, f_idChamp, f_long)
{
	var l_tecla = (document.all) ? f_e.keyCode : f_e.which;
	var l_isFirefox = typeof InstallTrigger !== 'undefined';
	var l_taille =  f_long;
	var l_sel = document.getElementById(f_idChamp).selectionStart;
	var l_valor =  document.getElementById(f_idChamp).value;
	var l_tailleMinutes = 2;
	var l_flag = true;
	
	// Firefox 1.0+
	if (l_isFirefox){
		if(l_tecla==0){
			l_tecla=9;
		}
	}
	
	if ((l_tecla==8) || (l_tecla==9)) {
		l_flag = true;
	}else{
		
		if (l_valor.length >= parseInt(l_taille) + 3) {
			l_flag = false;
		}else{
			
			if (l_tecla == 45) {
				if (l_valor.length == 0){
					l_flag = true;
				}else{
					l_flag = false;
				}
			}
			
			if ( (l_tecla!=58) && (l_tecla!=8) && (l_tecla!=45) ){
				
				l_patron =/[0-9]/;
				l_tecla_final = String.fromCharCode(l_tecla);
				l_flag = l_patron.test(l_tecla_final);	
			}
			
			if (l_tecla==58){
				if (l_valor.indexOf(":") == -1) {
					if (l_valor.length <= l_taille){
						l_flag = true;
					}else{
						l_flag = false;		
					}	
				} else{
					l_flag = false;
				}
			}
			
			if(l_valor.indexOf(":") != -1){
				
				var l_pos = l_valor.indexOf(":");
				var l_min = l_valor.substr(l_pos+1, l_valor.length);
				var l_heure = l_valor.substr(0,l_pos);
				
				if(l_sel <= l_pos){
					if(l_heure.length > l_taille-3 ){
						l_flag = false;				
					}
				}
				
				if(l_sel > l_pos){
					if(l_min.length > 1) {
						l_flag = false;			
					}	
				}
				
				if(l_valor.length == l_pos+1){
					l_patron =/[0-5]/;
					l_tecla_final = String.fromCharCode(l_tecla);
					l_flag = l_patron.test(l_tecla_final);
				}
				
			}
			
			if((l_valor.length == (l_taille)) && (l_valor.indexOf(":") == -1)){
				if(l_tecla != 58 ){
					l_flag = false;
				}
			}
		}
		
	}
	
	
	if (l_flag == false){
		f_e.preventDefault();
	}
}
function EstSousFilsDe(f_element, f_idParent)
{
	if (f_element)
	{
		var l_node = f_element;
		while (l_node != null) {
			if (l_node.id === f_idParent) {
				return true;
			}
			l_node = l_node.parentNode;
		}
	}
	return false;
}

function GI_OuvreGrandeIFrameAvecChargement(f_message)
{
	return parent.GI_OuvreGrandeIFrameAvecChargementViaParent(f_message)
}

function GI_OuvreGrandeIFrameAvecChargementViaParent(f_message)
{
	GI_InitNumIFramePage();
	
	GAA_affiche_attente(f_message);
	var l_nomIFrame = GI_OuvreGrandeIFrame()
	$("#CELL_IFRAME_PAGE_IFRAME_MULTI_" + gf_numIFramePage).hide();
	
	gf_idTimerOuvreIframe = setTimeout(GI_TopTimerIFrame, 10000);
	
	return l_nomIFrame;
}
function GI_OuvreGrandeIFrame()
{
	GI_InitNumIFramePage();
	
	gf_numIFramePage++;
	
	var l_nomIframe = "GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	
	if($("#" + l_nomIframe).length > 0)
	{
		
		var l_tailleLongueurdiv = 968;
		var l_tailleHauteurdiv = document.body.clientHeight + $(window).scrollTop();
		
		$("#CELL_IFRAME_" + l_nomIframe).width(l_tailleLongueurdiv).height(l_tailleHauteurdiv).css({left: (document.body.clientWidth /2) - ((l_tailleLongueurdiv + 60) / 2) + $(window).scrollLeft(), top : (document.body.clientHeight / 2) - ((l_tailleHauteurdiv + 54) / 2) + $(window).scrollTop()}).show();
		//		$("#" + l_nomIframe).width(f_tailleLongueur).height(f_tailleHauteur).contents().children().remove();
		GI_CellGriseIFrameScroll();
		$("#CELL_GRISE_" + l_nomIframe).show();
	}
	else
	{
		GI_CreeNouvelleGrandeIFrame();
	}
	
	if(gf_numIFramePage == 1)
	{
		$(window).on("scroll", GI_CellGriseIFrameScroll).on("resize",GI_CellGriseIFrameScroll);
	}
	
	return l_nomIframe;
}
function GI_CreeNouvelleGrandeIFrame()
{
	GI_InitNumIFramePage();
	
	var l_espaceVertical = document.body.clientHeight * 0.10
	
	var l_nomIframe = "GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage;
	
	var l_divGrise = document.createElement("div");
	l_divGrise.id= "CELL_GRISE_" + l_nomIframe;
	l_divGrise.className  = "CELLS_GRISE_IFRAME"
	l_divGrise.style.zIndex = "" + (1000000 + gf_numIFramePage);
	l_divGrise.style.position = "absolute";
	l_divGrise.style.left = "0px";
	l_divGrise.style.top = "0px";
	l_divGrise.style.width = document.body.clientWidth + $(window).scrollLeft() + "px";
	l_divGrise.style.height = document.body.clientHeight + $(window).scrollTop() + "px";
	l_divGrise.style.backgroundColor = "rgba(102, 102, 102, 0.55)";
	//l_divGrise.style.overflow = "hidden";
	
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_IFRAME_" + l_nomIframe;
	l_divPrincipal.classList.add("S900-CELL-GRANDE-POPUP");
	l_divPrincipal.classList.add("padding");
	l_divPrincipal.style.position = "absolute";
	l_divPrincipal.style.left = ((document.body.clientWidth /2) - (968 / 2)) + $(window).scrollLeft() + "px";
	l_divPrincipal.style.top = (l_espaceVertical / 2) + $(window).scrollTop() + "px";	
	l_divPrincipal.style.width = "968px";
	l_divPrincipal.style.height = document.body.clientHeight - l_espaceVertical  + "px";
	
	var l_divIframe = document.createElement("iframe");
	l_divIframe.id = l_nomIframe;
	l_divIframe.name = l_nomIframe;
	//l_divIframe.style.overflowY = "scroll";
	l_divIframe.style.width = "100%";
	l_divIframe.style.height = "100%";
	
	l_divPrincipal.appendChild(l_divIframe);
	l_divGrise.appendChild(l_divPrincipal);
	
	$("body").children().first().append(l_divGrise);
	
//	$("#" + l_divPrincipal.id).draggable({start:GI_IFrameDebutDrag, stop:GI_IFrameFinDrag, drag:GI_CellGriseIFrameScroll});
	
	return l_nomIframe;
}

function GLV_AfficheListeVolante(f_Liste, f_titre, f_callBackSelection, f_callBackFermeture)
{
	parent.GLV_AfficheListeVolanteViaParent(f_Liste, f_titre, f_callBackSelection, f_callBackFermeture);
}

function GLV_AfficheListeVolanteViaParent(f_Liste, f_titre, f_callBackSelection, f_callBackFermeture)
{
	GI_InitNumIFramePage();
	gf_callBackSelection[gf_numIFramePage] = f_callBackSelection;
	gf_callBackFermeture[gf_numIFramePage] = f_callBackFermeture;
	
	if(!GLV_FenetreOuverte())
		GLV_CreeNouvelleListeVolante();
	
	$("#CELL_LISTE_VOLANTE_" + gf_numIFramePage + ">span").text(f_titre);
	
	var l_liste = $("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage);
	
	l_liste.empty();
	
	f_Liste.children().each(function(){ 
		if($(this).val() != 1)
			l_liste.append($(this).clone().get());
	});
	
	if(f_Liste.val() == 1)
		l_liste.children(":selected").prop('selected', false);
	else
		l_liste.children("[value='"+f_Liste.val()+"']").prop('selected', true);
}

function GLV_CreeNouvelleListeVolante()
{
	
	
	var l_nomIframe = "LISTE_VOLANTE_" + gf_numIFramePage;
	
	var l_divPrincipal = document.createElement("div");
	l_divPrincipal.id = "CELL_" + l_nomIframe;
	l_divPrincipal.classList.add("S900-CELL-POPUP");
	l_divPrincipal.classList.add("padding");
	l_divPrincipal.style.position = "absolute";
//	l_divPrincipal.style.left = Math.max(0, ((document.body.clientWidth /2) - (510 / 2)) + $(window).scrollLeft()) + "px";
//	l_divPrincipal.style.top = Math.max(0, ((document.body.clientHeight / 2) - (493 / 2)) + $(window).scrollTop()) + "px";
	l_divPrincipal.style.left = (document.body.clientWidth - 510 + $(window).scrollLeft()) + "px";
	l_divPrincipal.style.top = ($(window).scrollTop()) + "px";	
	l_divPrincipal.style.width =  "510px";
	l_divPrincipal.style.height = "493px";
	l_divPrincipal.style.cursor = "move";
	l_divPrincipal.style.zIndex = "" + (1000000 + gf_numIFramePage);
	l_divPrincipal.style.boxSizing = "border-box";
	
	var l_textTitreOuiNon = document.createElement("span");
	//l_textTitreOuiNon.id= "TEXT_TITRE_OUINON_GESTION_THREAD";
	l_textTitreOuiNon.classList.add("S903-TITRE-PAGE");
	l_textTitreOuiNon.classList.add("padding");
	l_textTitreOuiNon.style.height = "20px";
	l_textTitreOuiNon.innerText = "Liste des Horaires";
	
	var l_divBouton=document.createElement("div");
	l_divBouton.classList.add("S101-BOUTON-FERME");
	l_divBouton.style.position = "static";
	l_divBouton.style.float="right";
	l_divBouton.style.width="12px";
	l_divBouton.style.height="18px";
	l_divBouton.style.cursor="pointer";
	l_divBouton.innerHTML = "&nbsp;";
	l_divBouton.onclick=GLV_FermeListeVolante;

	var l_select=document.createElement("select");
	l_select.id = "SELECT_" + l_nomIframe;
	l_select.classList.add("S005-CHAMP-LIST");
	l_select.size = 20;
	l_select.style.position = "absolute";
	l_select.style.width="450px";
	l_select.style.height="373px";
	l_select.style.left="29px";
	l_select.style.top="59px";
	l_select.onchange = GLV_Selection;
	
	var l_divnavigation=document.createElement("div");
	//	l_divBouton.id = "DivBoutonFermeture";
	l_divnavigation.style.position = "absolute";
	l_divnavigation.style.bottom = "20px";
	l_divnavigation.style.right = "29px";
	l_divnavigation.style.cursor="pointer";
	
	var l_divBoutonDer=document.createElement("div");
	//	l_divBouton.id = "DivBoutonFermeture";
	l_divBoutonDer.classList.add("S135-BOUTON-FLECHE-PAGINATION-DERNIER");
	l_divBoutonDer.style.position = "static";
	l_divBoutonDer.style.float="right";
	l_divBoutonDer.style.width="19px";
	l_divBoutonDer.style.height="23px";
	l_divBoutonDer.style.marginLeft="7px";
	l_divBoutonDer.style.cursor="pointer";
	l_divBoutonDer.innerHTML = "&nbsp;";
	l_divBoutonDer.onclick = GLV_SelDer;

	var l_divBoutonSuiv=document.createElement("div");
	//	l_divBoutonSuiv.id = "DivBoutonFermeture";
	l_divBoutonSuiv.classList.add("S134-BOUTON-FLECHE-PAGINATION-SUIVANT");
	l_divBoutonSuiv.style.position = "static";
	l_divBoutonSuiv.style.float="right";
	l_divBoutonSuiv.style.width="19px";
	l_divBoutonSuiv.style.height="23px";
	l_divBoutonSuiv.style.marginLeft="7px";
	l_divBoutonSuiv.style.cursor="pointer";
	l_divBoutonSuiv.innerHTML = "&nbsp;";
	l_divBoutonSuiv.onclick = GLV_SelSuiv;
	
	var l_divBoutonPre=document.createElement("div");
	//	l_divBoutonSuiv.id = "DivBoutonFermeture";
	l_divBoutonPre.classList.add("S132-BOUTON-FLECHE-PAGINATION-PRECEDENT");
	l_divBoutonPre.style.position = "static";
	l_divBoutonPre.style.float="right";
	l_divBoutonPre.style.width="19px";
	l_divBoutonPre.style.height="23px";
	l_divBoutonPre.style.marginLeft="7px";
	l_divBoutonPre.style.cursor="pointer";
	l_divBoutonPre.innerHTML = "&nbsp;";
	l_divBoutonPre.onclick = GLV_SelPre;
	
	var l_divBoutonPrem=document.createElement("div");
	//	l_divBoutonSuiv.id = "DivBoutonFermeture";
	l_divBoutonPrem.classList.add("S133-BOUTON-FLECHE-PAGINATION-PREMIER");
	l_divBoutonPrem.style.position = "static";
	l_divBoutonPrem.style.float="right";
	l_divBoutonPrem.style.width="19px";
	l_divBoutonPrem.style.height="23px";
	l_divBoutonPrem.style.marginLeft="7px";
	l_divBoutonPrem.style.cursor="pointer";
	l_divBoutonPrem.innerHTML = "&nbsp;";
	l_divBoutonPrem.onclick = GLV_SelPremier;
	
	
	l_divPrincipal.append(l_textTitreOuiNon);
	l_divPrincipal.append(l_divBouton);
	l_divPrincipal.append(l_select);
	
	l_divnavigation.append(l_divBoutonDer);
	l_divnavigation.append(l_divBoutonSuiv);
	l_divnavigation.append(l_divBoutonPre);
	l_divnavigation.append(l_divBoutonPrem);
	
	l_divPrincipal.append(l_divnavigation);
	
	$("#CELL_GRISE_GRANDE_PAGE_IFRAME_MULTI_" + gf_numIFramePage).append(l_divPrincipal);
	
	$("#" + l_divPrincipal.id).draggable({start:GI_IFrameDebutDrag, stop:GI_IFrameFinDrag, drag:GI_CellGriseIFrameScroll});
	
}


function GLV_FermeListeVolante()
{
	parent.GLV_FermeListeVolanteViaParrent();
}

function GLV_FermeListeVolanteViaParrent()
{
	$("#CELL_LISTE_VOLANTE_" + gf_numIFramePage).remove();
	if(gf_callBackFermeture[gf_numIFramePage] != null)
		gf_callBackFermeture[gf_numIFramePage]();
}

function GLV_FenetreOuverte()
{
	return parent.GLV_FenetreOuverteViaParrent();
}

function GLV_FenetreOuverteViaParrent()
{
	GI_InitNumIFramePage();
	return $("#CELL_LISTE_VOLANTE_" + gf_numIFramePage).length > 0;
}

function GLV_Selection()
{
	var l_sel = $("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage).val();
	if(gf_callBackSelection[gf_numIFramePage] != null)
		gf_callBackSelection[gf_numIFramePage](l_sel);
	
}

function GLV_SelPremier()
{
	$("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage).children().first().prop('selected', true);
	GLV_Selection();
}

function GLV_SelPre()
{
	$("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage).children(":selected").prev().prop('selected', true);
	GLV_Selection();
}

function GLV_SelSuiv()
{
	$("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage).children(":selected").next().prop('selected', true);
	GLV_Selection();
}

function GLV_SelDer()
{
	$("#SELECT_LISTE_VOLANTE_" + gf_numIFramePage).children().last().prop('selected', true);
	GLV_Selection();
}

function RechercheDerniereOccurence(f_chaine, f_recherche)
{
	var l_retour = f_chaine.lastIndexOf(f_recherche);
	if(l_retour == -1)
	{
		return -1;
	}
	else
	{
		return l_retour + 1;
	}
}

