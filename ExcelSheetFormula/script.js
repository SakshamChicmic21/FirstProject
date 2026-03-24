const varsList = document.getElementById('variables-list');
const addVarBtn = document.getElementById('add-var-btn');
const formulaInput = document.getElementById('formula-input');
const resultValue = document.getElementById('result-value');
const errorMessage = document.getElementById('error-message');

/**
 * Core Formula Calculation Logic
 */
const calculate = (formula, values) => {
    let expr = formula;

    // Get all keys and sort them by length descending to prevent partial replacements 
    // (e.g., replacing 'a' in 'aa' before 'aa')
    const keys = Object.keys(values).sort((a, b) => b.length - a.length);

    keys.forEach(key => {
        // Use a safer replacement for basic variables
        // We use a regex to match the variable only if it's not part of another word
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        expr = expr.replace(regex, values[key]);
    });

    try {
        // Basic sanitization: only allow math characters and numbers
        // This is still using Function() as requested, but with a bit more care
        if (/[^0-9+\-*/().\s]/.test(expr)) {
            // Check if there are still letters left (unresolved variables)
            const remainingVars = expr.match(/[a-zA-Z_]\w*/g);
            if (remainingVars) {
                throw new Error(`Undefined variables: ${remainingVars.join(', ')}`);
            }
        }
        
        const result = new Function(`return ${expr}`)();
        
        if (result === Infinity || isNaN(result)) {
            throw new Error("Mathematical Error");
        }
        
        return typeof result === 'number' ? result % 1 !== 0 ? result.toFixed(2) : result : result;
    } catch (err) {
        throw err;
    }
};

/**
 * UI Updates and Interaction
 */
const updateCalculation = () => {
    const values = {};
    const rows = document.querySelectorAll('.variable-row');
    
    rows.forEach(row => {
        const name = row.querySelector('.var-name').value.trim();
        const val = parseFloat(row.querySelector('.var-value').value) || 0;
        if (name) {
            values[name] = val;
        }
    });

    const formula = formulaInput.value;

    try {
        if (!formula.trim()) {
            resultValue.textContent = '--';
            errorMessage.textContent = '';
            return;
        }

        const result = calculate(formula, values);
        resultValue.textContent = result;
        errorMessage.textContent = '';
        resultValue.style.color = 'var(--success)';
    } catch (err) {
        resultValue.textContent = 'err';
        resultValue.style.color = 'var(--error)';
        errorMessage.textContent = err.message;
    }
};

const createVariableRow = (name = '', val = '') => {
    const div = document.createElement('div');
    div.className = 'variable-row';
    div.innerHTML = `
        <input type="text" placeholder="name" class="var-name" value="${name}">
        <span class="equals">=</span>
        <input type="number" placeholder="value" class="var-value" value="${val}">
        <button class="remove-btn" title="Remove">&times;</button>
    `;

    // Add listeners to new inputs
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateCalculation);
    });

    div.querySelector('.remove-btn').addEventListener('click', () => {
        div.remove();
        updateCalculation();
    });

    return div;
};

// Initial Event Listeners
addVarBtn.addEventListener('click', () => {
    const newRow = createVariableRow();
    varsList.appendChild(newRow);
    newRow.querySelector('.var-name').focus();
});

formulaInput.addEventListener('input', updateCalculation);

// Add initial listeners to existing rows
document.querySelectorAll('.variable-row').forEach(row => {
    row.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateCalculation);
    });
    row.querySelector('.remove-btn').addEventListener('click', () => {
        row.remove();
        updateCalculation();
    });
});

// Seed some data for the demo
const seedData = [
    { name: 'b', val: 5 },
    { name: 'c', val: 2 }
];

seedData.forEach(data => {
    varsList.appendChild(createVariableRow(data.name, data.val));
});

// Run initial calculation
updateCalculation();
