// Procedures globales du projet
function isIE1()
{	
	// Détecte si le navigateur est Internet Explorer (ou compatible)
	if (document.all)
		return true;
	else
		return false;
}

function isNS1()
{
	// Détecte si le navigateur est Netscape Navigator (ou compatible)
	if (document.layers)
		return true;
	else
		return false;
}
function isDOM1()
{
	// Détecte si le navigateur est FireFox (ou DOM compatible)
	if (document.getElementById)
		return true;
	else
		return false;
}
function iTrue()
{
	// Renvoie vrai
	return true;
}
function iFalse()
{
	// Renvoie Faux
	return false;
}
