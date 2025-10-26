import { useState, useCallback } from 'react';

// A map for functions that need special handling or replacement
const functionMap: { [key: string]: string } = {
  'sin': 'Math.sin',
  'cos': 'Math.cos',
  'tan': 'Math.tan',
  'log10': 'Math.log10',
  'log': 'Math.log',
  'sqrt': 'Math.sqrt',
  'π': 'Math.PI',
  'e': 'Math.E'
};

const operators = ['+', '-', '*', '/', '%'];

export const useCalculator = () => {
  const [expression, setExpression] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [isScientificMode, setScientificMode] = useState(false);

  const handleButtonClick = useCallback((value: string) => {
    if (value === 'clear') {
      setExpression('');
      setDisplayValue('0');
    } else if (value === 'backspace') {
      if (displayValue.length > 1) {
        setDisplayValue(displayValue.slice(0, -1));
      } else {
        setDisplayValue('0');
      }
    } else if (value === 'equals') {
      try {
        let expressionToEvaluate = displayValue;

        // Remove trailing operators to prevent syntax errors on incomplete expressions
        const lastChar = expressionToEvaluate.slice(-1);
        if (operators.includes(lastChar)) {
            expressionToEvaluate = expressionToEvaluate.slice(0, -1);
        }

        // Pre-process expression for calculation
        let calcExpression = expressionToEvaluate.replace(/\^2/g, '**2');

        // Sanitize and replace function names for safe evaluation
        const safeFunctionsRegex = new RegExp(Object.keys(functionMap).join('|'), 'g');
        calcExpression = calcExpression.replace(safeFunctionsRegex, match => functionMap[match]);
        
        // Use Function constructor for safer evaluation than eval()
        const result = new Function('return ' + calcExpression)();
        
        const formattedResult = parseFloat(result.toPrecision(15)).toString();
        setDisplayValue(formattedResult);
        setExpression(displayValue + '=');
      } catch (error) {
        setDisplayValue('Error');
        setExpression('');
      }
    } else if (operators.includes(value)) {
       if (displayValue === 'Error') return;

       const lastChar = displayValue.slice(-1);
       // Prevent adding an operator after another operator or an opening parenthesis.
       if (operators.includes(lastChar) || lastChar === '(') {
         return;
       }
       setDisplayValue(displayValue + value);
    } else if (value.includes('(')) { // scientific functions
        if (displayValue === '0' || displayValue === 'Error') {
            setDisplayValue(value);
        } else {
            setDisplayValue(displayValue + value);
        }
    } else if (value === ')') {
        const lastChar = displayValue.slice(-1);
        // Prevent adding ')' after an operator or if display is 0.
        if (displayValue === '0' || operators.includes(lastChar) || lastChar === '(') {
            return;
        }
        // Ensure parentheses are balanced.
        const openParenCount = (displayValue.match(/\(/g) || []).length;
        const closeParenCount = (displayValue.match(/\)/g) || []).length;
        if (openParenCount > closeParenCount) {
            setDisplayValue(displayValue + value);
        }
    } else if (value === '^2') {
        setDisplayValue(displayValue + value);
    }
    else { // Numbers and dot
      if (displayValue === 'Error') {
        setDisplayValue(value === '.' ? '0.' : value);
        return;
      }
      
      // Prevent multiple decimal points in the same number.
      if (value === '.') {
        const segments = displayValue.split(/[\+\-\*\/\(\)\%]/);
        if (segments[segments.length - 1].includes('.')) {
          return;
        }
      }

      if (displayValue === '0' && value !== '.') {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    }
  }, [displayValue]);

  const toggleScientificMode = useCallback(() => {
    setScientificMode(prev => !prev);
  }, []);

  return {
    expression,
    displayValue,
    isScientificMode,
    handleButtonClick,
    toggleScientificMode,
  };
};