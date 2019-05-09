/*
	输入、输出
	涉及数学公式相关的exp、HTML、DOM、字符规范化处理
*/
var SBSi='Num Num1 ABC ABC1 ABC2 ABC3 Operator Operator1 Relation Relation1 Arrow Arrow1 Arrow2 Misc Misc1 Misc2',
SBS={

	Num:[['⁰¹²³⁴⁵⁶⁷⁸⁹','₀₁₂₃₄₅₆₇₈₉'],
		['⁺⁻⁼⁽⁾','₊₋₌₍₎'],

		['①②③④⑤⑥⑦⑧⑨⑩','⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳'],
	
		['❶❷❸❹❺❻❼❽❾❿','➀➁➂➃➄➅➆➇➈➉'],
		['➊➋➌➍➎➏➐➑➒➓','⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴'],
		
		['⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾','㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚'],
			
		['㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵','㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿'],

		['⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑','⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛'],
		['⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽','⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇'],

		['⅟½⅓⅔¼¾⅕⅖⅗⅘','⅙⅚⅛⅜⅝⅞%‰‱'],


		],

	Num1:[
		
		['〇一二三四五六七八九','零壹贰叁肆伍陆柒捌玖'],
		['十百千万亿兆','拾佰仟萬亿兆'],
		Arrf(fCC,[seqA(12928,10),seqA(12832,10)]),
		
		
		Arrf(fCC,[seqA(12992,10),seqA(13002,2)]),
		Arrf(fCC,[seqA(13280,10),seqA(13290,10)]),
		Arrf(fCC,[seqA(13300,10),[13310]]),
		Arrf(fCC,[seqA(13144,10),seqA(13154,10)]),
		[fCC(seqA(13164,5)),' '],
		['甲乙丙丁戊己庚辛壬癸','子丑寅卯辰巳午未申酉'],
		['㆙㆚㆛㆜㆒㆓㆔㆕','戌亥㆖㆗㆘㆝㆞㆟']
		],


	ABC:[
		Arrf(fCC,[seqA(945,10),seqA(913,10)]),
		Arrf(fCC,[seqA(955,10),seqA(923,10)]),
		Arrf(fCC,[seqA(965,5),seqA(933,5)]),

	//	Arrf(fCC,[seqA(65,26),seqA(97,26)]),
		Arrf(fCC,[seqA(8560,10),seqA(8544,10)]),
		[fCC(seqA(8570,6)),fCC(seqA(8554,6))],
		['ℵℶℷℸ','∞∝∅⍉⌀℘'],

		['ℬℰℱℋℐℒℳℛ','ℯℊℴ'],

		['ℂℍℕℙℚℝℤ','ℭℌℑℜℨ'],
		['ƒℎæœ','ℲℏÆŒ'],
		['⍺⍶ϐϒϵ⍷ℇϑϴϕ','⍳⍸⍴ϱ⍵⍹ϖ'],



		],



	ABC1:[
		Arrf(fCC,[seqA(65345,10),seqA(65313,10)]),
		Arrf(fCC,[seqA(65355,10),seqA(65323,10)]),
		Arrf(fCC,[seqA(65365,6).concat(32,9392,9393,9394),
				  seqA(65333,6).concat(32,9395,9396,9397)]),


		Arrf(fCC,[seqA(9372,10),seqA(9382,10)]),

		Arrf(fCC,[seqA(9424,10),seqA(9398,10)]),
		Arrf(fCC,[seqA(9434,10),seqA(9408,10)]),
		Arrf(fCC,[seqA(9444,6),seqA(9418,6)]),
		['àáâãäåçþÞ','ÀÁÂÃÄÅÇÐß'],
		['èéêëìíîïÿ','ÈÉÊËÌÍÎÏÝ'],
		['ñðòóôöùúûü','ÑÒÓÔÕÖÙÚÛÜ'],


		

	//	['+-	=.%|\\$<>,;^_~\'"&*/:?@#!删空',' '],		ℏ



		],
			
	ABC2:Arrf(function(t,i){return [Latin(t,true).join(''),Latin(t).join('')]},entity.slice(4)).concat(
		[['aℝℎＣϹ∁','āáǎàċäůâãă']]
		),

	ABC3:[['°℃℉'+fCC(seqA(8372,2)),''],
			[fCC(seqA(8352,10)),fCC(seqA(8362,10))],
		].concat(Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,(i==4?4:10)).concat(i==4?seqA(13169,6):[]))]},seqA(13184,5,'',20)),[

		]),


	Operator:[
		['∑∏∐㏒㏑√∛∜','∫∬∭∮∯∰∱∲∳'],//⨌
		['¬∀∃∄∂∇','!‼†′″‴‵‶‷'],
		
		['+∓⍅⍏⌿⌗⌶','⊹±⍆⍖⍀⋕#†'],
		['‐‑‒−⁃∣','–—―－∤¦'],
		['‾∓∔∸∺∻÷∹⍎','_±‗⍘⍙⍚⍛⍜⍕'],
			
		['×⨉∕╱','╳⋇∖╲'],
			
		['⊕⨁⨂⊖⊗⊘⌽⊜⊝','⦿⊙⨀⊚⌾⍟⊛⌻⌼'],//⧀⧁

		
		['∧⋀⌃⌅⊼⌆⋋⋏⨇','∨⋁⌄‸⊻⊽⋌⋎⨈'],
		['∩⋂⋓⋔ ⨃⨄⨅⊓','∪⋃⋒ ⊌⊍⊎⨆⊔'],

		[ZLR('() [] {} <> 〈〉 ║║ || ⁽⁾ ┌┐ ⌈⌉ ⟨⟩ '),
		ZLR('(,) [,] {,} <,> (,] [,) ⎰⎱ ₍₎ └┘ ⌊⌋ ⟦⟧')],//⟮⟯

		],

	Operator1:[

		['∡∠','∢∟⊾⊿'],//⦛⦣⦤⦥⦟⦞ ⦠⦢⦡⦜⦝
		['⊞⊠⍁⌸⊡⍃⍄⍰⍐⍍⍓⌺','⊟⌹⍂⍯⍠⍇⍈⍞⍗⍔⍌'],
		['≖⋄','']

		],

	Relation:[

		['⋅∙•‧․∘','⋆∗⁂⁑°'],

		[':‥⋯⋰∵∷','∶¨⋮⋱∴⁞'],

			

		['＝≡≣≗≘≙≚≛≜≝','≠≢≐≑≓≒≔≕≟≞'],
		['∼≈≋≀⌇≌⋍≃≅≊','≁≉⍭∾∿∽≂≄≇≆'],

		['<>≤≥⋖⋗≦≧','≮≯≰≱⋜⋝≨≩'],

		['⊂⊃⊆⊇⊊⊋','⊄⊅⊈⊉⋐⋑'],
		['∈∋∊∍⋳⋻⋶⋽⋸∁','∉∌⋲⋺⋴⋼⋷⋾⋹⋵'],

		['≺≻≼≽⊰⊱≾≿','⊀⊁⋞⋟⋠⋡⋨⋩'],
		
		['⊲⊳⊴⊵⋉⋊⋈','⋪⋫⋬⋭'],
			
		['⊏⊐⋤⋥⌌⌍⌜⌝⌐⋿','⊑⊒⋢⋣⌎⌏⌞⌟⌙¬'],

		],

	Relation1:[



		['≲≳≶≷⋚⋛≪≫','≴≵≸≹⋦⋧⋘⋙'],

		['‖∥⊩⊫⧻','∦⧺⊮⊯⊪'],
		['⊺⊧⊤⊦⊨⍑','⊢⊣⊥⊬⊭⍊'],
		['⍤⍥⍡⍢','⍣⍨⍩'],
		],

	Arrow:[


		['←→↑↖↗⟵⟶','↚↛↓↙↘'],


		['↤↦↥⤟⤠⤒⇤⇥','⟻⟼↧⤝⤞⤓'],

		['⇷⇸⤉⇞','⇺⇻⤈⇟'],
		['↔⇹↕⤡⟷','↮⇼↨⤢⥈'],
		['↼⇀↿↾⥊⥏⥑⥎','↽⇁⇃⇂⥋⥌⥍⥐'],
		['⥚⥛⥠⥜⥒⥓⥘⥔','⥞⥟⥡⥝⥖⥗⥙⥕'],
		['⥢⥤⥣⥮⥦⥨⥪⥬','⇋⇌⥥⥯⥩⥧⥫⥭'],

		['⇐⇒⇑⇖⇗⇔⟺⟸⟹','⇍⇏⇓⇙⇘⇎⤄⤂⤃'],
		['⇇⇉⇈','⬱⇶⇊'],

		['⇆⇅⥃⥂⥶⥸','⇄⇵⥄ ⥹⥻'],


		],
	Arrow1:[
		['⤪⤨⤧⤮⤯⤲','⤫⤬⤩⤭⤰⤱'],
		['⤆⤇⇚⇛⤊⟰','⟽⟾  ⤋⟱'],


	



		['↞↠↟⥉ ⬴⤀⬻⤖⬼⤗','⤛⤜↡⬶⤅⬵⤁⬷⤐⬽⤘'],
	
		['↩↪⤣⤤↜↝↭⬳⟿','↫↬⤦⤥⇜⇝⬿⤳'],
		['⤾⤿⤺↶⤽⤼','⤶⤷⤻↷⤸⤹'],
			
		['⇠⇢⇡⤌⤍','⤎⤏⇣⬸⤑'],
		['⤙⤚⬹⤔','↢↣⬺⤕'],

		['⥳⥴⭋⭌⭊⥵⥆⥅','⭉⥲⭁⭇⭂⭈⭀⥱'],

		['⬰⇴⬾⥇','⬲⟴⥺⭄⥷⭃'],

		['↰↱⤴↴⇱','↲↳⤵↵⇲'],
		],

	Arrow2:[
		
		['⇦⇨ ⇧⇳','⇽⇾⇿⇩⇕'],
		
		['￩￫￪➚➶➹','‹›￬➘➴➷'],

		['↹','↸☈↯⏎☇ ⥰'],
		['➾➟➠➢➣➤➨➧➥➩','➙➝➞➡➔➜➲⇰➦➪'],
		['➬➮➱➳➵➺➼','➫➭➯➛➸➻➽'],
		['⇪⇫⇬⇭⇮⇯',''],
		['↻↺⥀','⟲⟳⥁'],
		
		],
/* 暂不收录的Unicode字符：
	27C0-27EF：杂项数学符号-A (Miscellaneous Mathematical Symbols-A) 
⟐⟑⟒⟓⟔⟕⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟	




*/


	Misc:Arrf(function(x,i){return i==4?['卍卐⌘'+fCC(seqA(x+13,7)),'']:[fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9632,10,'',20)),


	Misc1:Arrf(function(x){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9832,4,'',20)).concat([
			['⚸⚹⚺⚻⚼✁✂✃✄✆','✇✈✉✌✍✎✏✐✑✒']
		]).concat(Arrf(function(x){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(10003,3,'',20))
		).concat([
			['❏❐❑❒❖'+fCC(seqA(8962,5)),fCC(seqA(8967,10))],
			[fCC(seqA(8977,10)),fCC(seqA(8987,10))]
		]),

	Misc2:Arrf(function(x){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(8997,4,'',20)).concat([
		
		['⌢⌒≍╭╮≎⍱⍬','⌣≬≭╰╯≏⍲⍫'],
		['□▫▭▯▱◇△','■▪▬▮▰◆▲'],
		['∆▵▷▹▻◎○☌⊸⊶','∇▴▶▸►◉●∎☍⊷'],

		
		]),


	SurPre:[ZLR("' ′ ″ ‴ ‵ ‶ ‷ % ‰ ‱ ‼ ! †"),ZLR('∫ ∬ ∭ ∮ ∯ ∰ ∱ ∲ ∳ ∑ ∏ ∐ ㏒ ㏑ √ ∛ ∜ ¬ ∀ ∃ ∄')],

/*
	entity=
 scr fr opf bar acute caron grave dot uml ring circ tilde breve 
 latex=
 mathcal mathfrak mathbb bar acute check grave dot ddot mathring hat tilde breve
 手写体 花体（哥特体） 空心体 上横线(第1声) 第2声 v形状(第3声) 第4声 点 双点 圆圈 上尖角 波浪线 u形状 
 𝒜𝔄𝔸 Á À ÄÅÃĂÂ
 𝒶𝔞𝕒āáǎàċäåâãă
*/

	Latex:{

'Α':'Alpha',
'Β':'Beta',
'Γ':'Gamma',
'Δ':'Delta',
'Ε':'Epsilon',
'Ζ':'Xeta',
'Η':'Eta',
'Θ':'Theta',
'Ι':'Iota',
'Κ':'Kappa',
'Λ':'Lambda',
'Μ':'Mu',
'Ν':'Nu',
'Ξ':'Xi',
'Ο':'Omikron',
'Π':'Pi',
'Ρ':'Rho',
'΢':'Zelta',//实际无此字母，暂以Zelta命名
'Σ':'Sigma',
'Τ':'Tau',
'Υ':'Upsilon',
'Φ':'Phi',
'Χ':'Chi',
'Ψ':'Psi',
'Ω':'Omega',
'Ϝ':'Digamma',//

'α':'alpha',
'β':'beta',
'γ':'gamma',
'δ':'delta',
'ε':'epsilon',
'ζ':'zeta',
'η':'eta',
'θ':'theta',
'ι':'iota',
'κ':'kappa',
'λ':'lambda',
'μ':'mu',
'ν':'nu',
'ξ':'xi',
'ο':'omikron',
'π':'pi',
'ρ':'rho',
'ς':'zelta',//实际无此字母，暂以Zelta命名
'σ':'sigma',
'τ':'tau',
'υ':'upsilon',
'φ':'phi',
'χ':'chi',
'ψ':'psi',
'ω':'omega',
'ϝ':'digamma',

'ϵ':'varepsilon',


'ϑ':'vartheta',

'ϰ':'varkappa',

'ϖ':'varpi',

'ϱ':'varrho',


'ς':'varsigma',


'ϕ':'varphi',


'ı':'imath',
'ȷ':'jmath',


'ℵ':'aleph',
'ℶ':'beth',
'ℷ':'gimel',
'ℸ':'daleth',

'ð':'eth',




'ℬ':'mathscr{B}',
'ℰ':'mathscr{E}',
'ℱ':'mathscr{F}',
'ℋ':'mathscr{H}',
'ℐ':'mathscr{J}',
'ℒ':'mathscr{L}',
'ℳ':'mathscr{M}',
'ℛ':'mathscr{R}',
'ℯ':'mathscr{e}',
'ℊ':'mathscr{g}',
'ℴ':'mathscr{o}',

'ℭ':'mathfrak{C}',
'ℌ':'mathfrak{H}',
'ℑ':'mathfrak{J}',
'ℜ':'mathfrak{R}',
'ℨ':'mathfrak{Z}',




'ℂ':'mathbb{C}',
'ℍ':'mathbb{H}',
'ℕ':'mathbb{N}',
'ℙ':'mathbb{P}',
'ℚ':'mathbb{Q}',
'ℝ':'mathbb{R}',
'ℤ':'mathbb{Z}',




'ℝ':'mathbb{R}',
'ℎ':'mathit{h}',//mathnormal 
'Ｃ':'mathbf{C}',
'Ϲ':'mathsf{C}',
'∁':'mathtt{C}',
	
'a':'mathrm{a}',
	
	
'ā':'bar{a}',
'á':'acute{a}',
'ǎ':'check{a}',
'à':'grave{a}',
'ċ':'dot{c}',
'ä':'ddot{a}',
'ů':'mathring{u}',
'â':'hat{a}',
'ã':'tilde{a}',
'ă':'breve{a}',



'⅟':fnr(kfrac('1/n')),
'½':fnr(kfrac('1/2')),
'⅓':fnr(kfrac('1/3')),
'⅔':fnr(kfrac('2/3')),
'¼':fnr(kfrac('1/4')),
'¾':fnr(kfrac('3/4')),
'⅕':fnr(kfrac('1/5')),
'⅖':fnr(kfrac('2/5')),
'⅗':fnr(kfrac('3/5')),
'⅘':fnr(kfrac('4/5')),
'⅙':fnr(kfrac('1/6')),
'⅚':fnr(kfrac('5/6')),
'⅛':fnr(kfrac('1/8')),
'⅜':fnr(kfrac('3/8')),
'⅝':fnr(kfrac('5/8')),
'⅞':fnr(kfrac('7/8')),

'㏒':'log',
'㏑':'ln',

'func_tri':[zlr2('sech csch cth th sh ch','⁻¹'),'sech csch cth th sh ch',
		zlr('arc','sin cos tan cot sec csc'),'sin cos tan cot sec csc'
		],
//'func':'# & % exp log ln lg arg gcd lcm mod max min sup inf lim limsup liminf sin cos tan cot sec csc sh ch th cth tg ctg cotg tanh cosec arcsin arccos arctan arccot arctg arcctg det dim deg hom ker Pr',
'func':'# & % exp log ln lg arg gcd max min sup inf lim limsup liminf sin cos tan cot sec csc sh ch th cth tg ctg cotg tanh cosec arcsin arccos arctan arctg arcctg det dim deg hom ker Pr',

'struc':{//结构

	
},
	
//∘°度数

//\,, \:, \;, \quad, \qquad 空格由小到大
// 排版 equation, gather, align split alignat{n} 		gathered,aligned, alignedat intertext
// numberwithin eqref subequations 

		'±':'pm',
		'∓':'mp',
		'×':'times',
		'÷':'div',

		'∣':'mid',
		'∤':'nmid',
		'⋅':'cdot',
		'∘':'circ',
		'∗':'ast',
		'⨀':'bigodot',//⨀
		'⨂':'bigotimes',
		'⨁':'bigoplus',

		'≡':'equiv',
		'≠':'ne',	// \ne \not= \neq

	//	'≠':'=\\not\\mathrlap{}',

/*
		bug	 不等号被Katex显示成 / = 		写成		=\not\mathrlap{}
	
2≠3\\
2\neq3\\
2\ne3\\

*/



		'≐':'doteq', //	'dot=',

		'≪':'ll',
		'≫':'gg',
		'⋘':'lll',
		'⋙':'ggg',

		'≤':'leq',
		'≥':'geq',

		'≦':'leqq',
		'≧':'geqq',
			

		'≈':'approx',
		'≃':'simeq',
		'≅':'cong',
		
		
		'∝':'propto',
		
		'∑':'sum',
		'∏':'prod',
		'∐':'coprod',
		'∐':'amalg',
			
		'√':'sqrt',
		'∛':'sqrt[3]',
		'∜':'sqrt[4]',

		'∅':'varnothing',
		'∅':'empty',
		'∅':'emptyset',
		'∈':'in',
		'∉':'notin',
		'⊂':'subset',
		'⊃':'supset',
		'⊆':'subseteq',
		'⊇':'supseteq',
		'∩':'cap',
		'∪':'cup',
		'⊓':'sqcap',
		'⊔':'sqcup',
		'⊏':'sqsubset',
		'⊐':'sqsupset',
		'⊑':'sqsubseteq',
		'⊒':'sqsupseteq',
		'⋢':'notsqsubseteq',
		'⋣':'notsqsupseteq',
		'⋤':'sqsubsetnoteq',
		'⋥':'sqsupsetnoteq',

		'⋂':'bigcap',
		'⋃':'bigcup',
		'⋁':'bigvee',
		'⋀':'bigwedge',
		'⨄':'biguplus',
		'⨆':'bigsqcup',
		'∋':'ni',
		
		
		'…':'ldots',
		'⋯':'cdots',
		'⋱':'ddots',
		'⋮':'vdots',

		'∵':'because',
		'∴':'therefore',
		'∀':'forall',
		'∃':'exists',

		'≯':'not>',
		'̸⊄':'not\\subset',


		'⊥':'bot',
		'∠':'angle',
		'°':'^\\circ',
		
		'′':'prime',
		'″‴':'\'\'',
		'‴':'\'\'\'',
		'‵':'backprime',
		'∫':'int',
		'∬':'iint',
		'∭':'iiint',
		'∬∬':'iiiint',
		'∮':'oint',
		'∯':'oiint',
		'∰':'oiiint',
		'∞':'infty',
		'∇':'nabla',
		'∂':'partial',

		'Ⅎ':'Finv',
			
		'ℜ':'Re',
		'ℜ':'real',
		'ℑ':'Im',
		'ℑ':'image',

		'ℓ':'ell',
		'ℏ':'hbar',
		'ℏ':'hslash',

		'℘':'wp',
		'℘':'weierp',
		'⅁':'Game',

		'ø':'text{\\o}',
		'Ø':'text{\\O}',

		'ı':'text{\\i}',
		'ȷ':'text{\\j}',


		'å':'text{\\aa}',
		'Å':'text{\\AA}',
		'æ':'text{\\ae}',
		'Æ':'text{\\AE}',
		'œ':'text{\\oe}',
		'Œ':'text{\\OE}',

		'ß':'text{\\ss}',

		

		'↑':'uparrow',
		'↓':'downarrow',
		'⇑':'Uparrow',
		'⇓':'Downarrow',

		'→':'rightarrow',
		'←':'leftarrow',
		'⇒':'Rightarrow',
		'⇐':'Leftarrow',
		'⟶':'longrightarrow',
		'⟵':'longleftarrow',
		'⟹':'Longrightarrow',
		'⟸':'Longleftarrow',
		
		'→':'to',
		'←':'gets',
		
		'↔':'leftrightarrow',
		'↮':'notleftrightarrow',
		
		'￫':'vec{}',
		
		'⎰':'lmoustache',
		'⎱':'rmoustache',
		'⌈':'lceil',
		'⌉':'rceil',
		'⌊':'lfloor',
		'⌋':'rfloor',
		
		
		






'↺':'circlearrowleft',
'↻':'circlearrowright',
'↶':'curvearrowleft',
'↷':'curvearrowright',
'⇓':'Darr',
'⇓':'dArr',
'↓':'darr',
'⇠':'dashleftarrow',
'⇢':'dashrightarrow',
'↓':'downarrow',
'⇓':'Downarrow',
'⇊':'downdownarrows',
'⇃':'downharpoonleft',
'⇂':'downharpoonright',
'←':'gets',
'⇔':'Harr',
'⇔':'hArr',
'↔':'harr',
'↩':'hookleftarrow',
'↪':'hookrightarrow',
'⟺':'iff',
'⟸':'impliedby',
'⟹':'implies',
'⇐':'Larr',
'⇐':'lArr',
'←':'larr',
'⇝':'leadsto',
'←':'leftarrow',
'⇐':'Leftarrow',
'↢':'leftarrowtail',
'↽':'leftharpoondown',
'↼':'leftharpoonup',
'⇇':'leftleftarrows',
'↔':'leftrightarrow',
'⇔':'Leftrightarrow',
'⇆':'leftrightarrows',
'⇋':'leftrightharpoons',
'↭':'leftrightsquigarrow',
'⇚':'Lleftarrow',
'⟵':'longleftarrow',
'⟸':'Longleftarrow',
'⟷':'longleftrightarrow',
'⟺':'Longleftrightarrow',
'⟼':'longmapsto',
'⟶':'longrightarrow',
'⟹':'Longrightarrow',
'↫':'looparrowleft',
'↬':'looparrowright',
'⇔':'Lrarr',
'⇔':'lrArr',
'↔':'lrarr',
'↰':'Lsh',
'↦':'mapsto',
'↗':'nearrow',
'↚':'nleftarrow',
'⇍':'nLeftarrow',
'↮':'nleftrightarrow',
'⇎':'nLeftrightarrow',
'↛':'nrightarrow',
'⇏':'nRightarrow',
'↖':'nwarrow',
'⇒':'Rarr',
'⇒':'rArr',
'→':'rarr',
'↾':'restriction',
'→':'rightarrow',
'⇒':'Rightarrow',
'↣':'rightarrowtail',
'⇁':'rightharpoondown',
'⇀':'rightharpoonup',
'⇄':'rightleftarrows',
'⇌':'rightleftharpoons',
'⇉':'rightrightarrows',
'⇝':'rightsquigarrow',
'⇛':'Rrightarrow',
'↱':'Rsh',
'↘':'searrow',
'↙':'swarrow',
'→':'to',
'↞':'twoheadleftarrow',
'↠':'twoheadrightarrow',
'⇑':'Uarr',
'⇑':'uArr',
'↑':'uarr',
'↑':'uparrow',
'⇑':'Uparrow',
'↕':'updownarrow',
'⇕':'Updownarrow',
'↿':'upharpoonleft',
'↾':'upharpoonright',
'⇈':'upuparrows',

'≈':'approx',
'≊':'approxeq',
'≍':'asymp',
'∍':'backepsilon',
'∽':'backsim',
'⋍':'backsimeq',
'≬':'between',
'⋈':'bowtie',
'≏':'bumpeq',
'≎':'Bumpeq',
'≗':'circeq',
':≈':'colonapprox',
'::≈':'Colonapprox',
':−':'coloneq',
'::−':'Coloneq',
':=':'coloneqq',
'::=':'Coloneqq',
':∼':'colonsim',
'::∼':'Colonsim',
'≅':'cong',
'⋞':'curlyeqprec',
'⋟':'curlyeqsucc',
'⊣':'dashv',
'::':'dblcolon',
'≐':'doteq',
'≑':'Doteq',
'≑':'doteqdot',
'≖':'eqcirc',
'−:':'eqcolon',
'−::':'Eqcolon',
'=:':'eqqcolon',
'=::':'Eqqcolon',
'≂':'eqsim',
'⪖':'eqslantgtr',
'⪕':'eqslantless',
'≡':'equiv',
'≒':'fallingdotseq',
'⌢':'frown',
'≥':'ge',
'≥':'geq',
'≧':'geqq',
'⩾':'geqslant',
'≫':'gg',
'⋙':'ggg',
'⋙':'gggtr',
'>':'gt',
'⪆':'gtrapprox',
'⋛':'gtreqless',
'⪌':'gtreqqless',
'≷':'gtrless',
'≳':'gtrsim',
'∈':'in',
'∈':'isin',
'⋈':'Join',
'≤':'le',
'≤':'leq',
'≦':'leqq',
'⩽':'leqslant',
'⪅':'lessapprox',
'⋚':'lesseqgtr',
'⪋':'lesseqqgtr',
'≶':'lessgtr',
'≲':'lesssim',
'≪':'ll',
'⋘':'lll',
'⋘':'llless',
'<':'lt',
'∣':'mid',
'⊨':'models',
'⊸':'multimap',
'∋':'owns',
'∥':'parallel',
'⊥':'perp',
'⋔':'pitchfork',
'≺':'prec',
'⪷':'precapprox',
'≼':'preccurlyeq',
'⪯':'preceq',
'≾':'precsim',
'∝':'propto',
'≓':'risingdotseq',
'∣':'shortmid',
'∥':'shortparallel',
'∼':'sim',
'≃':'simeq',
'⌢':'smallfrown',
'⌣':'smallsmile',
'⌣':'smile',
'⊏':'sqsubset',
'⊑':'sqsubseteq',
'⊐':'sqsupset',
'⊒':'sqsupseteq',
'⋐':'Subset',
'⊂':'subset',
'⊂':'sub',
'⊆':'subseteq',
'⊆':'sube',
'⫅':'subseteqq',
'≻':'succ',
'⪸':'succapprox',
'≽':'succcurlyeq',
'⪰':'succeq',
'≿':'succsim',
'⋑':'Supset',
'⊃':'supset',
'⊇':'supseteq',
'⊇':'supe',
'⫆':'supseteqq',
'≈':'thickapprox',
'∼':'thicksim',
'⊴':'trianglelefteq',
'≜':'triangleq',
'⊵':'trianglerighteq',
'∝':'varpropto',
'△':'vartriangle',
'⊲':'vartriangleleft',
'⊳':'vartriangleright',
':':'vcentcolon',
'⊢':'vdash',
'⊨':'vDash',
'⊩':'Vdash',
'⊪':'Vvdash',

'⪊':'gnapprox',
'⪈':'gneq',
'≩':'gneqq',
'⋧':'gnsim',
'':'gvertneqq',
'⪉':'lnapprox',
'⪇':'lneq',
'≨':'lneqq',
'⋦':'lnsim',
'':'lvertneqq',
'≆':'ncong',
'̸​=':'ne',
'̸​=':'neq',
'≱':'ngeq',
'':'ngeqq',
'':'ngeqslant',
'≯':'ngtr',
'≰':'nleq',
'':'nleqq',
'':'nleqslant',
'≮':'nless',
'∤':'nmid',
'∈/​':'notin',
'̸​':'notni',
'∦':'nparallel',
'⊀':'nprec',
'⋠':'npreceq',
'':'nshortmid',
'':'nshortparallel',
'≁':'nsim',
'⊈':'nsubseteq',
'':'nsubseteqq',
'⊁':'nsucc',
'⋡':'nsucceq',
'⊉':'nsupseteq',
'':'nsupseteqq',
'⋪':'ntriangleleft',
'⋬':'ntrianglelefteq',
'⋫':'ntriangleright',
'⋭':'ntrianglerighteq',
'⊬':'nvdash',
'⊭':'nvDash',
'⊯':'nVDash',
'⊮':'nVdash',
'⪹':'precnapprox',
'⪵':'precneqq',
'⋨':'precnsim',
'⊊':'subsetneq',
'⫋':'subsetneqq',
'⪺':'succnapprox',
'⪶':'succneqq',
'⋩':'succnsim',
'⊋':'supsetneq',
'⫌':'supsetneqq',
'':'varsubsetneq',
'':'varsubsetneqq',
'':'varsupsetneq',
'':'varsupsetneqq'

	}

}
,FUNCSi='算术 代数 三角 双曲 分析 集合 逻辑 概率 统计 拓扑 几何'
	
,FUNCS={
	'算术':'gcd lcm mod sign exp log ln Arg arg',// ㏒ ㏑
	'代数':'r tr det dim hom ker Pr diag',
	'三角':'sin cos tan cot sec csc '+zlr('arc','sin cos tan cot sec csc'),
	'双曲':'sh ch th cth sech csch '+zlr2('sh ch th cth sech csch','^{-1}'),//⁻¹

	'分析':'lim sup inf limsup liminf',
	'集合':'',
	'逻辑':'',
	'概率':'',
	'统计':'min max',

	'拓扑':'',
	'几何':''
}


,STRUCi=[//

	'分式 连分式 微分 上下 上下备注',
	'根式 连根式 上下小型括号 二项式 大型分式括号',
	'括号 左右括号 极限 概括 矩阵',

	'大型求和 大型求积 积分 竖向等式 矩阵等式',
	'上 下 等式备注 横向等式 横向不等式',

	'字体 数学字体 文本字体 希伯来文 希腊字母',

	'上下标 固定间距 负间距 间距值 微调间距',
	'单字修饰 整体修饰 隐形 大小 颜色',
	]
	
,STRUC={


	'分式':zlrA3("$kfrac(",[
			"'1/2'",
			"[3,4]",
			"'1/2+3/4+5/6',1",
			
		],")$")
		.concat(zlrA3('\\',['','t','d'],'frac{1}{2}')),
			
	'连分式':zlrA3('\\',['','t'],'frac{1}{1+\\frac{1}{2}}').concat([
		"\\cfrac{1}{1 + \\cfrac{1}{2}}",
		"$mfracs([1,3,5],[2,4,6],'',1,'+','')$"
		]),

	'根式':zlrA3("$kroot('x'",['',',3',',4'],')$'),
	
	'连根式':["$kfrac([kroot(2),2])$",
			"φ=$kfrac([kroot(5)+'-1','2'])$",
			"x=$kfrac(['-b±'+kroot('b^2-4ac'),'2a'])$"
			].concat(
			zlrA3('$mroots(',ZLR("[2,3],['','x','y'],'','','+-',1 [2,3,4,5],['',1,10,100,1000],'',1,'+',1"),",'')$")
			),

	
	'横向等式':zlrA3("$Eq([",[
		"'x','y',2],'','line'",
		],')$').concat($A([
			"eq0(['x','y'])",
			"kmod('a','b',2)",
			"eq0(['x','y'],3,5)",
			"eqM([1,-1],2)"
		])),

	'横向不等式':zlrA3("$Eq([",[
		"'x','y',2],'','line',['=','≤']",
		"'x','y',2],'','line',['=','≠']",

		],')$').concat($A([
			"kmod('a','b',2,1)"
		])),

	'竖向等式':zlrA3("$Eq([",[
		"['x','1'],'2']",
		"'x','1','2']",
		"['x','1'],'2'],'','','≡'",
		"'x','1','2'],'','','≡'",
		],')$').concat([
			"$EqA(['1x+2y=3','4x-5y=6'])$",
			"$EqA(['1x+2y>=3','4x-5y<=6'])$",
		]),


	'概括':zlrA3("$piece([",[
		"[1,2],[3,4]]",
		"[1,2],[3,4]],2",
		"1,2]",
		"1,2],1",
		],')$').concat(zlrA3("$kx",[
			"o('a+b+c','{'",
			"o('a+b+c','{','note'",
			"u('a+b+c','{'",
			"u('a+b+c','{','note'"
		],')$')),

	'括号':zlrA3("$zp('x'",[
		"",
		",'<>'",
		",'[]'",
		",'{}'",
		",'||'",
		",'‖‖'",
		",'/\\\\'",
		",'⌊⌋'",
		",'⌈⌉'",
		",'↑↓'",
		",'↕↕'",
		",'⇑⇓'",
		",'⇕⇕'",
		],')$'),

	'左右括号':zlrA3("$zp('x,y'",[
		",'','(','.'",
		",'','.',')'",
		",'(]'",
		",'[)'",
		",'','<','>'",

		],')$').concat("$pp('x,y')$")
		.concat(),

	'矩阵':zlrA3("$zmtrx([[1,2",[
			"],[3,4]]",
			"],[3,4]],'','r2c2'",
			",3,4],[5,6,7,8]],'','c2'"
		],')$').concat(zlrA3("$mtrx([[1,2],[3,4]],'",[
		"p','p",
		"B','B",
		"V','V",
		],"','')$")).concat("$kdet([[1,2],[3,4]])$","$zdet(['1 2','3 4'])$"),

	'矩阵等式':zlrA3("$Eq([",[
			"kdet([[1,2],[2,4]]),0],[['1st','2nd']]",
			"kdet([[1,2],[3,4]]),kdet([[5,6],[7,8]])],[['1st','2nd']]",
			"zmtrx([[1,2],[3,4]]),zmtrx([[5,6],[7,8]])],[['1st','2nd']],'','→'",	//\\begin{aligned} & ~ \\\\quad x \\\\  & =1 \\\\  & =2 \\end{aligned}
			"zmtrx([[1,2,3,4],[5,6,7,8]],'','c2'),zmtrx([[-1,-2,-3,-4],[-5,-6,-7,-8]],'','c2')],[['1st','2nd']],'','→'"
		],')$'),


	'大型求和':zlrA3("$sum('i',0,'+','f',",seqA(0,7),",'')$").concat("$Opr('','-','+','f','*')$"),

	'大型求积':zlrA3("$prod('i',0,'+','f',",seqA(0,9),",'')$"),

	'极限':zlrA3("$lim('x','0",[
		"','f','",
		"+','f','",
		"','f','u",
		"','f','d",
		],"','')$"),

	'微分':zlrA3("$difn('f','x',",[
		"''",
		"1",
		"'',2",
		"1,2"
		],")$"),
	
	'积分':zlrA3("$intl('f','-','+','x',",seqA(0,7),",'')$"),




	'上':zlrA3("$kxo('a','",'-→↔←I↼⇀{(<~>='.split(''),"')$"),//katex 暂不支持 ⇐ ⇒
	'下':zlrA3("$kxu('a','",'-→↔←I{(~='.split(''),"')$"),//katex 暂不支持  ↼ ⇀ < > ⇐ ⇒ 

	'上下备注':zlrA3("$eq(1,'",'→↔←↩↪↞↠↼⇀↽⇁↦'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤	//←↔→⇐⇔⇒=↩↪↞↠↼⇀↽⇁⇋⇌⇄↦

	'等式备注':zlrA3("$eq(1,'",'=⇒⇔⇐⇋⇌⇄'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤
	
	'上下标':zlrA('{x}',[
		'_1^2',
		'^2',
		'^3',
		'^{-1}',
		'_1',
		]).concat('{e}^{πi}','{e}^{πi}+1=0','{r}e^{iθ}','{e}^{\\frac{iπ}2}','C_{n}^{m}'),

	
	'上下':['\\stackrel{1}{2}','\\overset{1}{2}','\\underset{2}{1}']
		.concat(zlrA3('1 \\',['atop','above{}','above{1pt}','above{2pt}'],2)),
	
	'二项式':zlrA3("$binom('n+1','n'",[",'c'",'',",'d'",",'t'"],')$'),
	
	'大型分式括号':zlrA3("$genfrac(1,2",[
			",'','',1",
			",'','',1,0",
			",'','',1,1",
			",'','','',0",
			'',
			",'','','',1"
		],')$').concat([
		"$kfraczp('1+2/3','','4')$"
		]),
		
	'上下小型括号':['1 \\brack 2','1 \\brace 2'],



//zlrA3("\\math",ZLR('rm bb it bf sf tt'),"{A}"),
	'字体':zlrA3("$kxc('",Arrf(function(x){return x+"','"+x},ZLR('Bbb bf frak it rm sf tt bm bold boldsymbol')),"','')$"),
	'数学字体':zlrA3("$kxc('math",Arrf(function(x){return x+"','"+x},ZLR('bb bf cal frak it rm scr sf')),"')$").concat("$kxf('mathrm')$"),
	'文本字体':zlrA3("$kxc('text",Arrf(function(x){return x+"','"+x},ZLR(' bf it rm sf normal tt')),"','text')$"),
	'希伯来文':zlrA3("$kxc('",['A','B','C','D'],"','a')$"),
	'希腊字母':zlrA3("$kxc('",['A','B','C','D','a','b','c','d'],"','g')$"),

// \>
	'固定间距':zlrA('\\backslash',[',\\,',':\\:',';\\;'])
		.concat(Arrf(function(x){return x+'\\'+x},zlrA2(ZLR('thin med thick en  nobreak'),'space').concat(['quad','qquad'])))
		.concat('\\backslash~~'),
	'负间距':['\\backslash!\\!'].concat(Arrf(function(x){return x+'\\'+x},zlrA3('neg',ZLR('thin med thick'),'space'))),
	'间距值':zlrA3('\\',ZLR('mkern mskip'),'{5mu}').concat(zlrA3('\\',ZLR('kern hskip hspace hspace*'),'{0.25em}')).concat('\\raisebox{0.25em}A'),

	'微调间距':zlrA3('\\',ZLR('smash[b] mathllap mathrlap mathclap'),'{A}'),
	'换行':$A(['kbr','kbr2']),

	'隐形':ZLR('phantom\\phantom{A} hphantom$hp()$ vphantom\\vphantom{A}'),
	'单字修饰':zlrA3('\\',ZLR('vec bar acute check grave dot ddot mathring hat tilde breve'),'{a}'),
		
	'整体修饰':$A(["kancel(123)","kancel(123,'-')","kbox(123)","kbox('mathfrak','frak','math')"]),


	'大小':zlrA3("$ksz('",[
		"Huge',5",
		"huge',4",
		"LARGE',3",
		"Large',2",
		"large',1",
		"normalsize'",
		"small',-1",
		"footnotesize',-2",
		"scriptsize',-3",
		"tiny',-4",
		],")$").reverse(),

	'颜色':["\\color{blue}A",
		"$fcb('red','','A')$",
		"$fcb('red','yellow','A')$",
		"\\colorbox{aqua}{A}"
		]


},SBSFn=[],

//下列涉及LaTeX
zx=function(t,o){return katex.renderToString(kx(isArr(t)?t.join(kbr2):t),o||{})},
zxdet=function(A,spacing){return zx(zdet(A,spacing))},
zxmtrx=function(A,spacing,parts){return zx(zmtrx(A,spacing,parts))},
zxul=function(A){return zx(piece(Arrf(ZLR,A)))},
zxsum=function(i,b,t,v,p){return zx(lrp('',sum(i,b,t,v,p,''),'',''))},
zxprod=function(i,b,t,v,p){return zx(lrp('',prod(i,b,t,v,p,''),'',''))},
zxfrac=function(t,b,zM){return zx(frac(t,b,zM))},
zxroot=function(t,n){return zx(root(t,n,'',''))},
zxmod=function(a,b,m,neg){return zx(mod(a,b,m,neg,'',''))},
zxEq=function(A,noteA,style,eqClass){return Eq(Arrf(zx,A),noteA,style,eqClass)},
zxdetail=function(s,v,o){return detail(zx(s),zx(v),o)},


//下列涉及DOM
OH=function(txt,cols){var isA=isArr(txt), t=isA && txt.length==1 && txt[0].indexOf(hr+br)>0?txt[0].split(hr+br):txt;
	$('#oHTML').html(isArr(t)?(cols || t.length>1 && t.length<2?Table('',[t],'TBc dash edit','vat pd10'):t.join(hr)):t);
},

//下列涉及输入编码
$2v=function(str,A){/*将含$字符串，替换为变量
	*/
	if(isArr(str)){
		return Arrf(function(s){return $2v(s,A)}, str)
	}else{
		return str.replace(/\$\d+/g,function(t){return isArr(A)?A[+t.substr(1)]:A})
	}



//下列涉及函数编程API
},fun2str=function(name,val,p){//参数p是完整点.路径
	var tp=typeof val;
	if(tp == 'object'){//遍历对象属性
		if(val instanceof RegExp){
			return sceg2(name)+val
		}
		
		var A=[];
		$.each(val,function(i,v){
			A.push(fun2str(i,v,(p?p+'.':'')+name));
		});
		return XML.wrapE('details','<summary class=obj>'+name+'</summary>'+ A.join(br))
	}

	if(tp == 'function'){
		var s=(''+val).replace(/^[^\(]+/,''), s0=s.split('{')[0], s1=s.substr(s0.length), c=s1.substr(1,s1.length-2),eg2='';
		if(/【.+】/.test(c)){
			var A=c.match(/【.+】[^\n]+/g);
			consolelog(A);
			eg2=Arrf(function(x){var x0=x.split('】')[0]+'】', x1=x.split('】 ')[1];return x0+sceg2(x1)}, A).join(br);
			c=c.replace(/【.+】[^\n]+/g,'');
		}
		return sceg2(name+'()','', p?p+'.':'')+eg2+
			detail(s0.substr(1,s0.length-2), XML.wrapE('pre',XML.encode(c)))
	}else{
		return sceg2(name,'',p?p+'.':'')+XML.encode(val)
	}

},API=function(A){/* A是JSON数组
	A=[{'zlr':[{'颜色':'a b c'},{'组件':'d e f'}]},{'io':[]}]
	
	bug OH(API([{'zlr':[{'颜色':[{'整数':'gcd'},{'数组':'Arrf'}]},{'组件':'lcm'}]},{'io':[]}]))
	*/
	var t='';
	return Arrf(function(x){
		var s='',u=[];
		consolelog('x=',x);
		$.each(x,function(jsname,funcA){
			var tp=typeof funcA;
			if(isArr(funcA)){
				u.push(detail(jsname,API(funcA))) 
			}else if(tp ==  'object'){
				$.each(funcA,function(grp,funcs){
					if(isArr(funcs)){
						consolelog(grp,funcs);
						u.push(detail(grp,API(funcs)))
					}else{
						u.push(detail(grp,Arrf(function(i){return fun2str(i,eval(i))},ZLR(funcs)).join(br)));
					}
				});
			}else if(tp ==  'string'){
				u.push(detail(jsname,Arrf(function(i){return fun2str(i,eval(i))},ZLR(funcA)).join(br)));
			}
		});
		return u.join(br);
	},A).join(br)


	


//下列涉及规范化字符、预处理


},n2sub=function(n,sup){//数字转Unicode上下标
	var S0=SBS.Num[0][0],S1=SBS.Num[0][1],i=S0.indexOf('⁰');
	return (n+'').replace(/./g,function(t){return /\d/.test(t)?(sup?S0:S1)[i+(+t)]:(sup?'⁺⁻⁼⁽⁾':'₊₋₌₍₎')['+-=()'.indexOf(t)]||t})

},sub2n=function(s,latex){//上下标字符转成普通字符 latex指定转换为latex
	var S0=SBS.Num[0][0],S1=SBS.Num[0][1],regS0=new RegExp('['+S0+']+','g'),regS1=new RegExp('['+S1+']+','g');
	if(latex){return s.replace(regS0,function(t){return sup(sub2n(t),'')}).replace(regS1,function(t){return sub(sub2n(t),'')})}
	return s.replace(/./g,function(t){return /[⁺⁻⁼₊₋₌⁽⁾₍₎]/.test(t)?'+-=+-=()()'['⁺⁻⁼₊₋₌⁽⁾₍₎'.indexOf(t)]:(''+Math.max(S0.indexOf(t),S1.indexOf(t))).replace(/-1/,t)})



},asc2unicode=function(s){//将普通字符转成专门字符
	var t=s.replace(/[\.。]{3}/g,'⋯').replace(/beta/g,'β').replace(/zeta/g,'ζ');
		
	$.each(SBS.Latex,function(k,v){
		if(/[a-z]{2,}/i.test(t)){
		//	if(v=='in'){
				
		//	}else{
		//		t=t.replace(new RegExp(v,'g'),k)
			//	}
			t=t.replace(new RegExp(' '+v+' ','g'),' '+k+' ')
		}else{
			return false
		}
	});
	
	return t


},opreplace=function(x){//运算符规范化预处理	算术运算
	return x.replace(/[]/g,'').replace(/​/g,'')	//不可见字符
		.replace(/ |&#8194;/g,' ')	//非标空格
		.replace(/[乘乖✖ⅹ╳‧][以于与]?/ig,'*').replace(/&#10008;/g,'*')
		
		.replace(/&#65409;&#10135;/g,'除').replace(/ﾁ7ￊ9|&#65409;7&#65482;9|&#10135;/g,'除').replace(/[除➗梅／][以于与]?/g,'/')
		.replace(/[减減]去?|－/g,'-').replace(/[＋加]上?/g,'+')//.replace(/\+\-/g,'±').replace(/\-\+/g,'∓')
		.replace(/（/g,'(').replace(/）/g,')').replace(/[·•。]/g,'.').replace(/[和与，、]/g,',').replace(/；/g,';')
		.replace(/[“”‘’]/g,"'").replace(/[？]/g,'?')
		.replace(/\(([\d\.]*)\)/g,'$1').replace(/∣/g,'|')
		.replace(/[三3]次根号下?/g,'∛').replace(/[四4]次根号下?/g,'∜').replace(/根号下?/g,'√')
		.replace(/log/g,'㏒').replace(/ln/g,'㏑').replace(/!{2,}/g,'‼')
		

},opreplace0=function(x,standard){/*运算符规范化预处理	常量（不含变量）运算
	参数standard 指定按*,/ 标准写法
	*/
	if(standard){
		consolelog(x);
		return x.replace(/[xⅹ╳‧×]/ig,'*').replace(/[÷／]/ig,'/')
	}
	return x.replace(/[xⅹ╳‧]/ig,'×')
		.replace(/[\*]/ig,'×')
		.replace(/[\/]/g,'÷')

},opreplace1=function(x){//运算符规范化预处理	数论函数
	return x.replace(/PI|[π]/ig,'Π')//小于n的素数个数函数Π(n)

},opreplace2=function(x){//运算符规范化预处理	矩阵运算
	return x.replace(/\^T|'/g,'†')//转置（共轭转置）
		.replace(/\^?\*/g,'*')	//伴随矩阵
		.replace(/^(\?⁻¹?\)?/g,'⁻')	//逆（广义逆）

},opreplace3=function(x){//运算符规范化预处理	微积分运算
	return x.replace(/[′']{3}/g,'‴').replace(/[′']+/g,'″').replace(/‵{3}/g,'‷').replace(/‵+/g,'″')
		.replace(/∫{3}/g,'∭').replace(/∫+/g,'∬').replace(/∮{3}/g,'∰').replace(/∮+/g,'∯')
		.replace(/d([xyt])/g,'ⅾ$1')//暂用罗马数字ⅾd，表示微分算符
		.replace(/偏/g,'∂')
		.replace(/o+/g,'∞')



},opreplace6=function(x){//运算符规范化预处理	集合运算
	return x.replace(/[补]/g,'-')
		.replace(/[⋂交\*]/g,'∩').replace(/[⋃并\+]/g,'∪')


},opreplace7=function(x){//运算符规范化预处理	逻辑命题运算
	return re(x.replace(/[与非]/g,'↑').replace(/[或非]/g,'↓')
		.replace(/异或/,'⊕')
		.replace(/[┐┒┓非不]/g,'¬')
		
		.replace(/[⋀Λ且与]|合取/g,'∧').replace(/[⋁或]|析取/g,'∨'))

		.replace(/¬永真蕴含于/g,'⇍').replace(/¬永真蕴含/g,'⇏').replace(/¬等价/g,'⇎').replace(/¬等值/g,'↮').replace(/¬蕴含/g,'↛')
		.replace(/永真蕴含于/g,'⇐').replace(/永真蕴含/g,'⇒').replace(/等价/g,'⇔').replace(/等值/g,'↔').replace(/蕴含/g,'→')



},opreNumRlt=function(x){//关系符规范化预处理		数字关系
	return re(x.replace(/不等于/g,'≠')
		.replace(/〉/g,'>').replace(/〈/g,'<'))
		.replace(/大于等于/g,'≥').replace(/小于等于/g,'≤')

},opreplace16=function(x){//关系符规范化预处理		集合关系
	return x.replace(/不真包含于/g,'⊄')
		.replace(/真包含于/g,'⊂').replace(/不包含于/g,'⊈')

},opreSeqsA=function(x){/* 序列间隔符预处理
	*/
	return x.replace(/[ ，]/g,',')
	
},simOpr=function(s){//简化矩阵运算表达式
	return s.replace(/\+\-/g,'-').replace(/([\+\- ^])1([A-Z])/g,'$1$2').replace(/[\+\-]0I/g,'').replace(/\(A\)/g,'A')



//下列涉及信息提取

},exp2arr=function(str){//表达式内部（子元素按逗号,分隔） to 数组 
	var A=str.split(','),i=-1,chkpairs=function(s,p){//i标记数组中第几个元素括号成对出现（合规）chkpairs检查括号是否成对出现
		if(p){
			return s.length-s.replace(new RegExp('\\'+p,'g'),'').length
		}
		var s0=s.replace(/\(/g,'').length,s1=s.replace(/\)/g,'').length;
		if(s0<s1){
			return [')',s1-s0]
		}
		var s0=s.replace(/\[/g,'').length,s1=s.replace(/\]/g,'').length;
		if(s0<s1){
			return [']',s1-s0]
		}
		var s0=s.replace(/\{/g,'').length,s1=s.replace(/\}/g,'').length;
		if(s0<s1){
			return ['}',s1-s0]
		}
		return ['',0]
	};

	while(i+1<A.length){
		var t=A[i+1],c=chkpairs(t);
		if(!c[0]){
			i++;
		}else{
			A[i+1]+=','+A[i+2];
			A.splice(i+2,1);
		}
	}
	return A

},exp2coe=function(exp,regX,otherVars){/*表达式提取未知量前面的系数
	regX：未知量的正则表达式字符串
	otherVars：其它未知量变量字母串
	
	regX是1时，提取常数项（x的多项式降幂排列的常数项， 或齐次方程=左边的常数项， 或非齐次方程=右边的常数项）
	如果表达式e是方程，则regX是=时，提取等式右边的项
	
	*/
	var e=exp.replace(/ /g,''), R=regX||'x\\d*', r=new RegExp(R,'i'), r1=new RegExp('.*'+(/x\d/i.test(regX)?'x\\d+':'['+(otherVars||'a-zα-ω')+']')+'(\\^.)*','ig');
	//   /x1/.test(s)?e.match(/-*[\da-z]*x1/i)[0].replace(/x.+/,'').replace(/^-$/,-1)||1:0
	if(regX=='='){
		return e.split('=')[1]
	}
	if(''+regX=='1'){
		if(/=/.test(e) && !/=\s*0$/.test(e)){
			return e.split('=')[1]
		}
		
		return e.split('=')[0].replace(r1,'').replace(/^\+/,'')||0
	}

	return r.test(e)? e.split(r)[0].replace(r1,'').replace(/^-$/,-1).replace(/^\+/,'')||1 : 0




// 二维数组平面化


},Mtrx2str=function(A,tbClass,bds){//与矩阵字符串化略有区别，多了递归

	var m=A.length,n=A[0].length,B=[];
	for(var i=0;i<m;i++){
		var Bi=[],Ai=A[i];
		for(var j=0;j<n;j++){
			var Aij=Ai[j],s='';
			//consolelog(i,j,Aij);
			Bi.push(Aij.t?eval(Aij.t).toStr(Aij,Aij.typ||''):Aij)
		}
		B.push(Bi);
	}

	return Table('',B,tbClass||'bd0 alignc',bds)

},sbsTbltd=function(T,e,textareaId,ityp){//LaTeX输入面板功能
	var td=$(T),tr=td.parent(),me=td.children('span'),t=me.text(),iTyp=ityp||'LaTeX', istd=me.is('td'),
		mult=tr.is('.Operator9'), fn=td.is('.Fns'), st=td.is('.Sts'), shft=e.shiftKey;//排版


	if(me.is('.symboli')){
		td.toggleClass('seled');
		var di=me.attr('data-i');
		if(me.is('.symboli_')){
			$(zlr('.'+di,seqA(10,30).join(' '),',')).hide();
			$(zlr3('.Symboli_[data-i='+di,seqA(1,3).join(' '),']',',')).toggle().find('td.seled').removeClass('seled');
			return
		}
		

		if(fn||st){
			$('.'+ZLR('Fns Sts')[[fn,st].indexOf(true)]+'[data-i="'+di+'"]').toggle();
		}else{
			$('.'+di).toggle();
		}
		return
	}

	var t=me.text().replace('空',' '), SL=SBS.Latex,SLF=ZLR(SL.func);
	if(fn){//函数
		if(iTyp=='LaTeX'){

			var c=td.attr('title'),hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,'');

			t=(SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+c0+'}')+(hassbl?c.replace(/^[a-z]+/i,''):'');

		}
		if(!shft){
			t+='()';
		}
		
	}else if(st){//结构
		if(iTyp=='LaTeX'){
			
			var tl=td.attr('title');
			t=tl;

			if(t){
				if(t.indexOf('$')>-1){
					t=t.replace(/^[^\$]+/g,'');
					if(!shft){
						t=eval(t.replace(/\$/g,''))
					}
					t=tl.replace(/\$.+/,'')+t;
				}else{
				//	t=(/^[\{\d\\]/.test(tl)?'':'\\')+tl;
					//t=/^[a-z]/i.test(t)?t.replace(/^[a-z]+/ig,''):t;
				}
			}else if(t=='~'){
				
			}else if(/quad/.test(t)){
				t='\\'+t.replace(/\d/g,'')

			}else if(/thin|med|thick|break|en/.test(t)){
				t='\\'+t.replace(/[^a-z]/ig,'')+'space'

			}else if(/kern|skip|space|phantom|raisebox|smash|lap/.test(t)){
				t='\\'+t;
				
			}else if(/^[,:;!]$/.test(t)){
				t='\\'+t;
				
			}else if(/^.$/.test(t)){
				t='\\'+SL[t];
			}else{
				
			}
		}

		
		
	}else if(iTyp=='LaTeX' && !isArr(t)){//字符	istd
		var tl=SL[t];
		
consolelog(tl,t);
		if(tl && !shft && t=='≠'){
	//		t='=\\not\\mathrlap{}'	//fix bug of katex ≠
		}else{
			t=tl && !shft?(tl[0]=='^'?'':'\\')+tl+' ':t;
		}
consolelog(tl,t);
	}
		
		
	var iT=$('#input0Tip [data-tool="帮助"]'),smry='<summary>帮助</summary>';
	if(!iT.length){
		$('#input0Tip').append('<details class=inputTip data-tool="帮助">'+smry+'</details>');
		iT=$('#input0Tip [data-tool="帮助"]');
	}else{
		iT.show();
	}
	if(isArr(t)){//多个表达方式
		iT.html(smry+concat(Arrf(sceg2,t), iTyp=='JS'?Arrf(fun2str,t):[]).join(br)).attr('open',true);
		return;
	}else if(iTyp=='JS'){
		iT.html(smry+fun2str(t)).attr('open',true);
	}
	var i=$('#'+textareaId), iv=i.val(), sS=i[0].selectionStart, sE=i[0].selectionEnd;
	if(shft && sS!=sE){// fix bug of shift on textarea 
		sS=sE
	}
consolelog(iv,sS,sE);



	var v=iv.substr(0,sS+(t=='删'?-1:0))+(t=='删'?'':t)+(sE==iv.length?'':iv.substr(sE));
	i.val(v).change();

consolelog(v,t);

	t=sS+(t=='删'?-1:(t.length%2==0 && mult?t.length/2:(istd && /\{/.test(t) && !/\(/.test(t)?t.indexOf('{')+1:(/,/.test(t)?(/..,/.test(t)?t.indexOf(',')+1:1):t.length-(+(fn && !shft))))));

	i[0].selectionStart=t;
	i[0].selectionEnd=t;
	i.focus();
};



$.each(FUNCS,function(i,v){SBSFn=SBSFn.concat(ZLR(v))});

var SBSFUN=SBS.Latex.func_tri.concat(SBS.Latex.func.replace(/.+% |log ln |sin .+ arcctg /g,'')+
			' Arg ㏒ ㏑').join(' ');

$(function(){
	
// LaTeX支持
//SBS
	var str='<table class=sbsTbl>',str2='</table><table class="sbsTbl sbsiTbl">',SL=SBS.Latex,SLF=ZLR(SL.func);
	var strK=function(K,A){

		var si=1,s='',n=Math.max(A[0].length,A[1].length);

		for(var j=0;j<2;j++){
			s+='<tr class='+K+'>';
			for(var i=0;i<n;i++){
				var c=A[j][i];
				if(!c){break}
				var tl=SL[c];

				s+='<td'+(tl?' title="'+(tl[0]=='^'?tl:'\\'+tl)+'"':'')+'>'+(c==' '?'':SCtv('symbol'+si,c))+'</td>';
			}
			s+='</tr>';
		}
		return s
	};
	var S=ZLR(SBSi);
	for(var j=0;j<S.length;j++){
		var K=S[j],A=SBS[K], Kisd=/\d/.test(K);


		str2+='<tr class="Symboli'+(Kisd?' Symboli_ " data-i="'+K:'')+'">';

		for(var i=0;i<A.length;i++){
			str+=strK(K+i,A[i]);

			var uc=A[i][0][0];
			str2+='<td>'+SCtv('symboli" data-i="'+K+i,uc)+'</td>'
		}
		if(!Kisd){
			str2+='<td>'+SCtv('symboli symboli_" data-i="'+K,'...')+'</td>'
		}

		str2+='</tr>'
	}

	$('#sbs').append(str+str2+'</table>');



//FUNCS
	var str='<div class=sbsTbl>',str2=dc+'<table class="sbsTbl sbsiTbl"><tr class=Symboli>';
	var strK=function(K,A){

		var s='<div class=Fns data-i='+K+'>',n=A.length;
		for(var i=0;i<n;i++){
			var c=A[i],hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,'');

			s+='<div class="Fns td" title="'+c+'">'+SCtv('symboln',zx((SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+c0+'}')+(hassbl?c.replace(/^[a-z]+/i,''):'')))+dc;
		}
		s+=DCtv('clear')+dc;
		return s
	};
	var S=ZLR(FUNCSi);
	for(var j=0;j<S.length;j++){
		var K=S[j],A=ZLR(FUNCS[K]);
		str+=strK(K,A);
		str2+='<td class=Fns>'+SCtv('symboli" data-i="'+K, K)+'</td>'

	}

	$('#funcs').append(str+str2+'</tr></table>');


//STRUC
	var str='<div class=sbsTbl>',str2=dc+'<table class="sbsTbl sbsiTbl">';
	var strK=function(K,A){
consolelog(K,A);
		var s='<div class=Sts data-i='+K+'>',n=A.length;
		for(var i=0;i<n;i++){
			var c=A[i];
			if(K=='间距值'){
				c=c.split('{')[0].substr(1)+c
			}
			s+='<div class="Sts td" title="'+c.replace(/.backslash./,'').replace(/^[a-z]{5,}/g,'')+'">'+SCtv('symboln',zx(c))+dc;
		}
		s+=DCtv('clear')+dc;
		return s
	};
	var SA=STRUCi;
	for(var i=0;i<SA.length;i++){
		var S=ZLR(SA[i]);
		str2+='<tr class=Symboli>';
		for(var j=0;j<S.length;j++){

			var K=S[j],A=STRUC[K];
			str+=strK(K,A);
			str2+='<td class=Sts title="'+gM(K)+'">'+SCtv('symboli" data-i="'+K, zx(K=='间距值'?A[0].split('{')[0].substr(1)+A[0]:A[0]))+'</td>'//K
		}
		str2+='</tr>'
	}

	$('#struc').append(str+str2+'</table>');


	$('.sbsTbl > tbody > tr, .sbsTbl > div').not('.Symboli:not(.Symboli_)').hide();	
});