let n, m, p, q, a, b, c, d, t, der;
let questionFunction, questionFunctionLatex, derInt;
function makeQuestionIntegral() {
    document.getElementById('inCorrect').innerText = '';
    document.getElementById('wrongAnswerExplanation').innerText = '';
    der = Math.floor(Math.random() * 3) + 1;
    if (der === 1) {
        n = Math.floor(Math.random() * 20) + 2;
        m = n - 1;
        p = Math.floor(Math.random() * 5) + 1;
        q = Math.floor(Math.random() * 2) + 2;
        if (p % q === 0) {
            p++;
        }
        a = Math.floor(Math.random() * 19) + 2;
        b = Math.floor(Math.random() * 19) + 2;
        c = Math.floor(Math.random() * 19) + 2;
        questionFunction = `x^(${p}/${q})+${a}x^${n}+${b}x^${m}+${c}`;
        derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
        derInt += '+C';
        questionFunctionLatex = `x^{${p}/${q}}+${a}x^{${n}}+${b}x^{${m}}+${c}`;
        // console.log(derInt);
    }
    else if (der === 2) {
        t = Math.floor(Math.random() * 6) + 1;
        if (t === 1) {
            questionFunction = 'sin(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\sin(x)`;
        }
        else if (t === 2) {
            questionFunction = 'cos(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\cos(x)`;
        }
        else if (t === 3) {
            questionFunction = 'tan(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\tan(x)`;
        }
        else if (t === 4) {
            questionFunction = 'sec(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\sec(x)`;
        }
        else if (t === 5) {
            questionFunction = 'csc(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\csc(x)`;
        }
        else if (t === 6) {
            questionFunction = 'cot(x)';
            derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
            derInt += '+C';
            questionFunctionLatex = `\\cot(x)`;
        }
    }
    else if (der === 3) {
        questionFunction = 'log(x)';
        derInt = nerdamer(`integrate(${questionFunction}, x)`).toString();
        derInt += '+C';
        questionFunctionLatex = `\\ln(x)`;
    }

    document.getElementById('question1').innerText = `What is the integral of \\(${questionFunctionLatex}\\)?`;
    MathJax.typeset();
}
function checkAnswerIntegral(answer1) {
    if (checkEquality(answer1)) {
        document.getElementById('inCorrect').innerText = 'Correct!';
        document.getElementById('wrongAnswerExplanation').innerText = '';
        return;
    }

    document.getElementById('inCorrect').innerText = "You got the answer incorrect. Here is the correct answer: ";
    if (der === 1){
        document.getElementById('wrongAnswerExplanation').innerText =`The power rule for integration states: \n
                                                                        \\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\)\n
                                                                        \\(\\int ${questionFunctionLatex} dx = \\frac{x^{(${p}/${q})+1}}{(${p}/${q})+1}+${a}\\left(\\frac{x^{${n}+1}}{${n}+1}\\right)+${b}\\left(\\frac{x^{${m}+1}}{${m}+1}\\right)+${c}\\left(\\frac{x^{0+1}}{0+1}\\right)+C\\)\n
                                                                        \\(= \\frac{x^{${p+q}/${q}}}{${p+q}/${q}}+${a}\\left(\\frac{x^{${n+1}}}{${n+1}}\\right)+${b}\\left(\\frac{x^{${m+1}}}{${m+1}}\\right)+${c}\\left(\\frac{x^{1}}{1}\\right)+C\\)\n
                                                                        \\(= \\frac{${q}}{${p+q}}x^{${p+q}/${q}}+\\frac{${a}}{${n+1}}x^{${n+1}}+\\frac{${b}}{${m+1}}x^{${m+1}}+${c}x+C\\)\n
                                                                    So, \\(\\int ${questionFunctionLatex} dx = \\frac{${q}}{${p+q}}x^{${p+q}/${q}}+\\frac{${a}}{${n+1}}x^{${n+1}}+\\frac{${b}}{${m+1}}x^{${m+1}}+${c}x+C\\)\n`; 
    }
    else if (der === 2) {
        if (t === 1) {
            document.getElementById('wrongAnswerExplanation').innerText = `The integral of the function \\(f(x) = \\sin(x)\\) is \\(F(x) = -\\cos(x)+C\\)`;
        }
        else if (t === 2) {
            document.getElementById('wrongAnswerExplanation').innerText = `The integral of the function \\(f(x) = \\cos(x)\\) is \\(F(x) = \\sin(x)+C\\)`;
        }
        else if (t === 3) {
            document.getElementById('wrongAnswerExplanation').innerText = `U-substitution is used for this integral.\n
                                                                        Rewrite the integral as \\(\\int \\frac{\\sin(x)}{\\cos(x)} dx\\)\n
                                                                        Let \\(u = \\cos(x)\\) and \\(du = -\\sin(x) dx\\)\n
                                                                        Then, \\(\\int \\frac{\\sin(x)}{\\cos(x)} dx = \\int \\frac{\\sin(x)}{u}\\cdot\\frac{du}{-\\sin(x)}\\)\n
                                                                        \\(= -\\int \\frac{1}{u} du\\)\n
                                                                        \\(= -\\ln|u|+C\\)\n
                                                                        \\(= -\\ln|\\cos(x)|+C\\)\n
                                                                    So, \\(\\int \\tan(x) dx = -\\ln|\\cos(x)|+C\\)`;
        }
        else if (t === 4) {
            document.getElementById('wrongAnswerExplanation').innerText = `The integral of the function \\(f(x) = \\sec(x)\\) is \\(F(x) = \\ln|\\sec(x)+\\tan(x)|+C\\)`;
        }
        else if (t === 5) {
            document.getElementById('wrongAnswerExplanation').innerText = `The integral of the function \\(f(x) = \\csc(x)\\) is \\(F(x) = -\\ln|\\csc(x)+\\cot(x)|+C\\)`;
        }
        else if (t === 6) {
            document.getElementById('wrongAnswerExplanation').innerText = `U-substitution is used for this integral.\n
                                                                        Rewrite the integral as \\(\\int \\frac{\\cos(x)}{\\sin(x)} dx\\)\n
                                                                        Let \\(u = \\sin(x)\\) and \\(du = \\cos(x) dx\\)\n
                                                                        Then, \\(\\int \\frac{\\cos(x)}{\\sin(x)} dx = \\int \\frac{\\sin(x)}{u}\\cdot\\frac{du}{\\sin(x)}\\)\n
                                                                        \\(= \\int \\frac{1}{u} du\\)\n
                                                                        \\(= \\ln|u|+C\\)\n
                                                                        \\(= \\ln|\\sin(x)|+C\\)\n
                                                                    So, \\(\\int \\cot(x) dx = \\ln|\\sin(x)|+C\\)`;
        }
    }
    else if (der === 3) {
        document.getElementById('wrongAnswerExplanation').innerText = `Integration by parts is use for this integral. The formula for integration by parts is: \n
                                                                        \\(\\int u dv = uv - \\int v du\\)\n
                                                                        \\(\\int \\ln(x) dx\\)\n
                                                                        Let \\(u = \\ln(x)\\) and \\(dv = dx\\)\n
                                                                        Then, \\(du = \\frac{1}{x} dx\\) and \\(v = x\\)\n
                                                                        \\(\\int \\ln(x) dx = x\\ln(x) - \\int x\\frac{1}{x} dx\\)\n
                                                                        \\(= x\\ln(x) - \\int dx\\)\n
                                                                        \\(= x\\ln(x) - x + C\\)\n
                                                                    So, \\(\\int \\ln(x) dx = x\\ln(x) - x + C\\)\n`;
    }

    MathJax.typeset();

}
function makeQuestionDerivative() {
    document.getElementById('inCorrect').innerText = '';
    document.getElementById('wrongAnswerExplanation').innerText = '';
    der = Math.floor(Math.random() * 6) + 1;
    if (der === 1) {
        n = Math.floor(Math.random() * 100) + 1;
        questionFunction = `x^${n}`; // Nerdamer-compatible string
        derInt = nerdamer(`diff(${questionFunction}, x)`).toString(); // Calculate derivative

        // Convert to LaTeX for display
        questionFunctionLatex = `x^{${n}}`;
    }
    else if (der === 2) {
        n = Math.floor(Math.random() * 20) + 2;
        m = n - 1;
        p = Math.floor(Math.random() * 5) + 1;
        q = Math.floor(Math.random() * 2) + 2;
        if (p % q === 0) {
            p++;
        }
        a = Math.floor(Math.random() * 19) + 2;
        b = Math.floor(Math.random() * 19) + 2;
        c = Math.floor(Math.random() * 19) + 2;
        
        questionFunction = `(${a}x^${n}+${b}x^${m}+${c})/(x^(${p}/${q}))`;
        derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
        // console.log(derInt);

        questionFunctionLatex = `\\frac{${a}x^{${n}}+${b}x^{${m}}+${c}}{x^{${p}/${q}}}`;
    }
    else if (der === 3) {
        t = Math.floor(Math.random() * 6) + 1;
        if (t === 1) {
            questionFunction = 'sin(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\sin(x)`;
        }
        else if (t === 2) {
            questionFunction = 'cos(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\cos(x)`;
        }
        else if (t === 3) {
            questionFunction = 'tan(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\tan(x)`;
        }
        else if (t === 4) {
            questionFunction = 'sec(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\sec(x)`;
        }
        else if (t === 5) {
            questionFunction = 'csc(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\csc(x)`;
        }
        else if (t === 6) {
            questionFunction = 'cot(x)';
            derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
            questionFunctionLatex = `\\cot(x)`;
        }
    }
    else if (der === 4) {
        questionFunction = '(e^x)sec(x)';
        derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
        questionFunctionLatex = `e^x\\sec(x)`;
    }
    else if (der === 5) {
        n = Math.floor(Math.random() * 20) + 2;
        m = n - 1;
        a = Math.floor(Math.random() * 19) + 2;
        b = Math.floor(Math.random() * 19) + 2;
        c = Math.floor(Math.random() * 19) + 2;
        questionFunction = `(x^${n}+${a}x^${m}+${b})/(x^${n}+${c})`;
        derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
        questionFunctionLatex = `\\frac{x^{${n}}+${a}x^{${m}}+${b}}{x^{${n}}+${c}}`;
        // console.log(derInt);
    }
    else if (der === 6) {
        n = Math.floor(Math.random() * 20) + 2;
        questionFunction = `asin(x^${n})`;
        derInt = nerdamer(`diff(${questionFunction}, x)`).toString();
        questionFunctionLatex = `\\arcsin(x^{${n}})`;
        // console.log(derInt);
    }



    document.getElementById('question').innerText = `What is the derivative of \\(${questionFunctionLatex}\\)?`;
    MathJax.typeset();
}
function checkAnswerDerivative(answer) {
    if (checkEquality(answer)) {
        document.getElementById('inCorrect').innerText = 'Correct!';
        document.getElementById('wrongAnswerExplanation').innerText = '';
        return;
    }

    document.getElementById('inCorrect').innerText = "You got the answer incorrect. Here is the correct answer: ";
    if (der === 1){
        document.getElementById('wrongAnswerExplanation').innerText =`The power rule states that if \\(n\\) is a rational number, then the function \\(f(x) = x^n\\) is differentiable and\n
                                                        \\(\\frac{d}{dx}(x^n) = nx^{n-1}\\)\n
                                                        \\(\\frac{d}{dx}(x^{${n}}) = ${n}x^{${n}-1}\\)\n
                                                                                \\(= ${n}x^{${n-1}}\\)\n
                                                    So, \\(\\frac{d}{dx}(x^{${n}}) = ${n}x^{${n-1}}\\)`;
    }
    else if (der === 2) {
        document.getElementById('wrongAnswerExplanation').innerText = `The power rule states that if \\(n\\) is a rational number, then the function \\(f(x) = x^n\\) is differentiable and\n
                                                                        \\(\\frac{d}{dx}(x^n) = nx^{n-1}\\)\n
                                                                        \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{${a}x^{${n}}}{x^{${p}/${q}}} + \\frac{${b}x^{${m}}}{x^{${p}/${q}}} + \\frac{${c}}{x^{${p}/${q}}}\\)\n
                                                                        \\(= ${a}x^{${n}}x^{-${p}/${q}} + ${b}x^{${m}}x^{-${p}/${q}} + ${c}x^{-${p}/${q}}\\)\n
                                                                        \\(= ${a}x^{${n}-(${p}/${q})} + ${b}x^{${m}-(${p}/${q})} + ${c}x^{-${p}/${q}}\\)\n
                                                                        \\(= ${a}x^{${n*q-p}/${q}} + ${b}x^{${m*q-p}/${q}} + ${c}x^{-${p}/${q}}\\)\n
                                                                        \\(= ${a}(\\frac{${n*q-p}}{${q}}x^{${(n*q-p)-q}/${q}}) + ${b}(\\frac{${m*q-p}}{${q}}x^{${(m*q-p)-q}/${q}}) + ${c}(\\frac{${-p}}{${q}}x^{${-p-q}/${q}})\\)\n
                                                                        \\(= \\frac{${a*(n*q-p)}}{${q}}x^{${(n*q-p)-q}/${q}} + \\frac{${b*(m*q-p)}}{${q}}x^{${(m*q-p)-q}/${q}} + \\frac{${c*(-p)}}{${q}}x^{${-p-q}/${q}}\\)\n
                                                                    So, \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{${a*(n*q-p)}}{${q}}x^{${(n*q-p)-q}/${q}} + \\frac{${b*(m*q-p)}}{${q}}x^{${(m*q-p)-q}/${q}} + \\frac{${c*(-p)}}{${q}}x^{${-p-q}/${q}}\\)\n`;
    }
    else if (der === 3) {
        if (t === 1) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\sin(x)\\) is \\(f'(x) = \\cos(x)\\)`;
        }
        else if (t === 2) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\cos(x)\\) is \\(f'(x) = -\\sin(x)\\)`;
        }
        else if (t === 3) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\tan(x)\\) is \\(f'(x) = \\sec^2(x)\\)`;
        }
        else if (t === 4) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\sec(x)\\) is \\(f'(x) = \\sec(x)\\tan(x)\\)`;
        }
        else if (t === 5) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\csc(x)\\) is \\(f'(x) = -\\csc(x)\\cot(x)\\)`;
        }
        else if (t === 6) {
            document.getElementById('wrongAnswerExplanation').innerText = `The derivative of the function \\(f(x) = \\cot(x)\\) is \\(f'(x) = -\\csc^2(x)\\)`;
        }
    }
    else if (der === 4) {
        document.getElementById('wrongAnswerExplanation').innerText = `The product rule states: \n
                                                                        \\(\\frac{d}{dx}(f(x)\\cdot{g(x)}) = f'(x)\\cdot{g(x)} + g'(x)\\cdot{f(x)}\\)\n
                                                                        \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{d}{dx}(e^x)\\cdot{sec(x)} + e^x\\cdot{\\frac{d}{dx}(sec(x))}\\)\n
                                                                        \\(= e^x\\cdot{sec(x)} + e^x\\cdot{sec(x)\\tan(x)}\\)\n
                                                                    So, \\(\\frac{d}{dx}(${questionFunctionLatex}) = e^x\\cdot{sec(x)} + e^x\\cdot{sec(x)\\tan(x)}\\)\n`;
    
    }
    else if (der === 5) {
        document.getElementById('wrongAnswerExplanation').innerText = `The quotient rule states: \n
                                                                        \\(\\frac{d}{dx}(\\frac{f(x)}{g(x)}) = \\frac{f'(x)\\cdot{g(x)} - g'(x)\\cdot{f(x)}}{g(x)^2}\\)\n
                                                                        \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{\\frac{d}{dx}(x^{${n}}+${a}x^{${m}}+${b})\\cdot{(x^{${n}}+${c})} - (x^{${n}}+${a}x^{${m}}+${b})\\cdot{\\frac{d}{dx}(x^{${n}}+${c})}}{(x^{${n}}+${c})^2}\\)\n
                                                                        \\(= \\frac{(${n}x^{${n-1}}+${a*m}x^{${m-1}})\\cdot(x^{${n}}+${b}) - (x^{${n}}+${a}x^{${m}}+${b})\\cdot(${n}x^{${n-1}})}{(x^{${n}}+${c})^2}\\)\n
                                                                        \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{(${n}x^{${n-1}}+${a*m}x^{${m-1}})\\cdot(x^{${n}}+${b}) - (x^{${n}}+${a}x^{${m}}+${b})\\cdot(${n}x^{${n-1}})}{(x^{${n}}+${c})^2}\\)\n`;
    }
    else if (der === 6) {
        document.getElementById('wrongAnswerExplanation').innerText = `The chain rule states: \n
                                                                        \\(\\frac{d}{dx}(f(g(x))) = f'(g(x))\\cdot{g'(x)}\\)\n
                                                                        \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{d}{dx}(arcsin(x^{${n}}))\\cdot\\frac{d}{dx}(x^{${n}})\\)\n
                                                                        \\(= \\frac{1}{\\sqrt{1-(x^{${n}})^2}}\\cdot\\frac{d}{dx}(x^{${n}})\\)\n
                                                                        \\(= \\frac{1}{\\sqrt{1-(x^{${n}})^2}}\\cdot{${n}x^{${n-1}}}\\)\n
                                                                    So, \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{${n}x^{${n-1}}}{\\sqrt{1-(x^{${n}})^2}}\\)\n`;
    }

    MathJax.typeset();
}
function checkEquality(userAnswer) {
    try {
        const isEqual = nerdamer(derInt).eq(userAnswer);
        return isEqual;
    } catch (error) {
        console.error(error);
        return false;
    }
}