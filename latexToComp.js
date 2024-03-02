function conv(inp){
    let lastConv = "";
    let converted = inp;
    let pattern = /({+)(}+)/;
    lastConv = "";
    while (lastConv != converted)
    {
        lastConv = converted;
        converted = converted.replace(/\\sqrt\{([^{}]*)}/g, "sqrt($1)");
        converted = converted.replace(/\\ln\{([^{}]*)}/g, "log($1)");
        converted = converted.replace(/(.)\^\{([^{}]*)\}/g, "($1^($2))");
        converted = converted.replace(/(.\^^\()([^)])/g, "(($1)$2)");
        converted = converted.replace(/\\log_([^{}*])\{([^{}]*)\}/g, "(log($2)/log($1))");
        converted = converted.replace(/\\abs\{([^{}]*)\}/g, "abs($1)");
        converted = converted.replace(/\\cos\{([^{}]*)\}/g, "cos($1)");
        converted = converted.replace(/\\sin\{([^{}]*)\}/g, "sin($1)");
        converted = converted.replace(/\\tan\{([^{}]*)\}/g, "tan($1)");
        converted = converted.replace(/\\arccos\{([^{}]*)\}/g, "acos($1)");
        converted = converted.replace(/\\arcsin\{([^{}]*)\}/g, "asin($1)");
        converted = converted.replace(/\\arctan\{([^{}]*)\}/g, "atan($1)");
        converted = converted.replace(/\\cdot/g, "");
        converted = converted.replace(/\\,/g, " ")
        converted = converted.replace(/\\left/g, "");
        converted = converted.replace(/\\right/g, "");
        converted = converted.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "(($1)/($2))");
        
    }
    lastConv = "";
    while (lastConv != converted)
    {
        lastConv = converted;
        converted = converted.replace(/\\/g, "");
        converted = converted.replace(/\{([^{}]*)\}/g, "($1)");
    }
    return converted;
}