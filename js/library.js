
//obtener palabras reservadas

function isIdentificator(value){
	return false;
}

function getReservedWord(key){
	var array = {
		'alias' : 'mo',
		'break' : 'me',
		'case':'mo',
		'def' : 'mo',
		'class':'mo',
		'do':'mo',
		'else':'mo',
		'elsif':'mo',
		'end':'mo',
		'ensure':'mo',
		'false':'mo',
		'true':'mo',
		'for':'mo',
		'if':'mo',
		'in':'mo',
		'modulo':'mo',
		'next':'mo',
		'nil':'mo',
		'not':'mo',
		'or':'mo',
		'redo':'mo',
		'rescue':'mo',
		'retry':'mo',
		'return':'mo',
		'self':'mo',
		'super':'mo',
		'then':'mo',
		'undef':'mo',
		'unless':'mo',
		'until':'mo',
		'when':'mo',
		'while':'mo',
		'yield':'mo',
		'_FILE':'mo',
		'_LINE_':'mo',
		'public':'mo',
		'private':'mo',
		'protected':'mo',
		'begin':'mo',
		'try':'mo',
		'catch':'mo',		
		'finally':'mo',
		'raiz':'mo',
		'power':'mo',
		 'sin':'mo',
		'cos':'mo',
		'tan':'mo',
		'cotan':'mo',
		'sec':'mo',
		'cosec':'mo',
		'arcsin':'mo',
		'arccos':'mo',
		'arctan':'mo',
		'arccot':'mo',
		'arcsec':'mo',
		'arccosec':'mo',
		'System.out.println':'mo',
		'conio.h':'mo',
		'stdio.h':'mo',
		'scanf':'mo',
		'printf':'mo',
		'include':'mo',
		
		//Operadores lógicos
		'and' : 'ol',
		'or':'ol',
		'not':'ol',
		'&&' : 'ol',
		'||':'ol',

		
		
        //Operadores modificador
        'string':'td', 
        'int':'td',
        'char':'td',
		'float':'td',
		'decimal':'td',
		'double':'td',
		'date':'td',
		'datetime':'td',
		'byte':'td',
		'boolean':'td',


		'=' : 'igual',
		"'" : 'comilla simple',
		'.' : 'punto',
		',' : 'coma',
		';' : 'punto y coma',
		':' : 'dos puntos',
		'[' : 'abrir corchete',
		']' : 'cerrar corchete',
		'{' : 'abrir llave',
		'}' : 'cerrar llave',
		'(' : 'abrir parentesis',
		')' : 'cerrar paretensis',
		'_' : 'guion bajo',

		//Operadores Arimeticos
		'+':'oa',
		'-':'oa',
		'*':'oa',
		'/':'oa',
		'>':'oa',
		'<':'oa',

		
		'@':'Arroba',

		'?':'dcs',
		'!':'dcs',
		'%':'dcs',
		'&':'dcs',
		'|':'dcs',
		'#':'dcs',

		':':'dcs',
		'^':'dcs',
		'ç':'dcs',
		'==':'dcs',
		'*=':'dcs',
		'/=':'dcs',
		'-=':'dcs',
		'+=':'dcs',
		'!!':'dcs',
		'>>':'dcs',
		'<<':'dcs',
		'::*':'dcs',
		'@@':'dcs',
		'\n':'dcs',
		'\r':'dcs'
		


	};
	return array[key];
}
   //Define de que tipo es el caracter ingresado//

function getType(key){
	var array = {
		'ol' : 'operador lógico',
		'oa' : 'operador aritmético',
		'mo' : 'modificador',
		'me' : 'método',
		'td' : 'tipo de dato',
		'dcs' : 'complemento'

	};
	return array[key];
}

//Obtener elementos léxicos
//

function getElement(key){
	var array = {

		'+':'oa',
		'-':'oa',
		'*':'oa',
		'/':'oa',
		'>':'oa',
		'<':'oa',

		
		'@':'Arroba',

		'?':'dcs',
		'!':'dcs',
		'%':'dcs',
		'&':'dcs',
		'|':'dcs',
		'#':'dcs',

		':':'dcs',
		'^':'dcs',
		'ç':'dcs',
		'==':'dcs',
		'*=':'dcs',
		'/=':'dcs',
		'-=':'dcs',
		'+=':'dcs',
		'!!':'dcs',
		'>>':'dcs',
		'<<':'dcs',
		'::*':'dcs',
		'@@':'dcs',
		'\n':'dcs',
		'\r':'dcs'

	};
	return array[key];
}

