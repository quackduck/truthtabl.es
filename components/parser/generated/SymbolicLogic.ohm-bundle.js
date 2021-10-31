'use strict';const ohm=require('ohm-js');module.exports=ohm.makeRecipe(["grammar",{"source":"SymbolicLogic {\n\tExp = Dyadic | Monadic | Identifier\n\tDyadic = Conjunction | Disjunction | Conditional | Biconditional\n\tMonadic = Negation\n\tGrouping = \"(\" Dyadic \")\"\n\t\t| \"[\" Dyadic \"]\"\n\t\t| \"{\" Dyadic \"}\"\n\tOperatorParam = Identifier | Monadic | Grouping\n\tConjunction = OperatorParam \"&\" OperatorParam\n\tDisjunction = OperatorParam \"v\" OperatorParam\n\tConditional = OperatorParam (\">\" | \"\" | \"⊃\") OperatorParam\n\tBiconditional = OperatorParam (\"=\" | \"≡\") OperatorParam\n\tNegation = \"~\" OperatorParam\n\tIdentifier = \"A\"..\"Z\"\n}"},"SymbolicLogic",null,"Exp",{"Exp":["define",{"sourceInterval":[17,52]},null,[],["alt",{"sourceInterval":[23,52]},["app",{"sourceInterval":[23,29]},"Dyadic",[]],["app",{"sourceInterval":[32,39]},"Monadic",[]],["app",{"sourceInterval":[42,52]},"Identifier",[]]]],"Dyadic":["define",{"sourceInterval":[54,118]},null,[],["alt",{"sourceInterval":[63,118]},["app",{"sourceInterval":[63,74]},"Conjunction",[]],["app",{"sourceInterval":[77,88]},"Disjunction",[]],["app",{"sourceInterval":[91,102]},"Conditional",[]],["app",{"sourceInterval":[105,118]},"Biconditional",[]]]],"Monadic":["define",{"sourceInterval":[120,138]},null,[],["app",{"sourceInterval":[130,138]},"Negation",[]]],"Grouping":["define",{"sourceInterval":[140,203]},null,[],["alt",{"sourceInterval":[151,203]},["seq",{"sourceInterval":[151,165]},["terminal",{"sourceInterval":[151,154]},"("],["app",{"sourceInterval":[155,161]},"Dyadic",[]],["terminal",{"sourceInterval":[162,165]},")"]],["seq",{"sourceInterval":[170,184]},["terminal",{"sourceInterval":[170,173]},"["],["app",{"sourceInterval":[174,180]},"Dyadic",[]],["terminal",{"sourceInterval":[181,184]},"]"]],["seq",{"sourceInterval":[189,203]},["terminal",{"sourceInterval":[189,192]},"{"],["app",{"sourceInterval":[193,199]},"Dyadic",[]],["terminal",{"sourceInterval":[200,203]},"}"]]]],"OperatorParam":["define",{"sourceInterval":[205,252]},null,[],["alt",{"sourceInterval":[221,252]},["app",{"sourceInterval":[221,231]},"Identifier",[]],["app",{"sourceInterval":[234,241]},"Monadic",[]],["app",{"sourceInterval":[244,252]},"Grouping",[]]]],"Conjunction":["define",{"sourceInterval":[254,299]},null,[],["seq",{"sourceInterval":[268,299]},["app",{"sourceInterval":[268,281]},"OperatorParam",[]],["terminal",{"sourceInterval":[282,285]},"&"],["app",{"sourceInterval":[286,299]},"OperatorParam",[]]]],"Disjunction":["define",{"sourceInterval":[301,346]},null,[],["seq",{"sourceInterval":[315,346]},["app",{"sourceInterval":[315,328]},"OperatorParam",[]],["terminal",{"sourceInterval":[329,332]},"v"],["app",{"sourceInterval":[333,346]},"OperatorParam",[]]]],"Conditional":["define",{"sourceInterval":[348,407]},null,[],["seq",{"sourceInterval":[362,407]},["app",{"sourceInterval":[362,375]},"OperatorParam",[]],["alt",{"sourceInterval":[377,392]},["terminal",{"sourceInterval":[377,380]},">"],["terminal",{"sourceInterval":[383,386]},""],["terminal",{"sourceInterval":[389,392]},"⊃"]],["app",{"sourceInterval":[394,407]},"OperatorParam",[]]]],"Biconditional":["define",{"sourceInterval":[409,464]},null,[],["seq",{"sourceInterval":[425,464]},["app",{"sourceInterval":[425,438]},"OperatorParam",[]],["alt",{"sourceInterval":[440,449]},["terminal",{"sourceInterval":[440,443]},"="],["terminal",{"sourceInterval":[446,449]},"≡"]],["app",{"sourceInterval":[451,464]},"OperatorParam",[]]]],"Negation":["define",{"sourceInterval":[466,494]},null,[],["seq",{"sourceInterval":[477,494]},["terminal",{"sourceInterval":[477,480]},"~"],["app",{"sourceInterval":[481,494]},"OperatorParam",[]]]],"Identifier":["define",{"sourceInterval":[496,517]},null,[],["range",{"sourceInterval":[509,517]},"A","Z"]]}]);