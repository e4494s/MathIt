let n, m, p, q, a, b, c, d, der;
let questionFunction, questionFunctionLatex, derivative;
function displayLatex() {
    const latex = document.getElementById('latex').value;
    document.getElementById('result').innerText = `\\(${latex}\\)`;
    MathJax.typeset();
}
function makeQuestionDerivative() {
    der = 2;//Math.floor(Math.random() * 7) + 1;
    if (der === 1) {
        n = Math.floor(Math.random() * 100) + 1;
        questionFunction = `x^${n}`; // Nerdamer-compatible string
        derivative = nerdamer(`diff(${questionFunction}, x)`).toString(); // Calculate derivative

        // Convert to LaTeX for display
        questionFunctionLatex = `\\(x^{${n}}\\)`;
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
        derivative = nerdamer(`diff(${questionFunction}, x)`).toString();
        // console.log(derivative);

        questionFunctionLatex = `\\frac{${a}x^{${n}}+${b}x^{${m}}+${c}}{x^{${p}/${q}}}`;
    }



    document.getElementById('question').innerText = `What is the derivative of \\(${questionFunctionLatex}\\)?`;
    MathJax.typeset();
}
function checkAnswer() {
    if (checkEquality(document.getElementById('answer').value)) {
        document.getElementById('wrongAnswerExplanation').innerText = 'Correct!';
        return;
    }

    if (der === 1){
        document.getElementById('wrongAnswerExplanation').innerText =`The power rule states that if \\(n\\) is a rational number, then the function \\(f(x) = x^n\\) is differentiable and\n
                                                        \\(\\frac{d}{dx}(x^n) = nx^{n-1}\\)\n
                                                        \\(\\frac{d}{dx}(x^{${n}}) = ${n}x^{${n}-1}\\)\n
                                                                                \\(= ${n}x^{${n-1}}\\)\n
                                                    So, \\(\\frac{d}{dx}(x^{${n}}) = ${n}x^{${n-1}}\\)`;
        MathJax.typeset();
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
                                                                    So, \\(\\frac{d}{dx}(${questionFunctionLatex}) = \\frac{${a*(n*q-p)}}{${q}}x^{${(n*q-p)-q}/${q}} + \\frac{${b*(m*q-p)}}{${q}}x^{${(m*q-p)-q}/${q}} + \\frac{${c*(-p)}}{${q}}x^{${-p-q}/${q}}\\)\n
                                                                        `;
        MathJax.typeset();
    }
}
function checkEquality(userAnswer) {
    try {
        const isEqual = nerdamer(derivative).eq(userAnswer);
        return isEqual;
    } catch (error) {
        console.error(error);
        return -1;
    }
}