export interface Theme {
  name: string;
  colors: {
    '--background': string;
    '--calculator-body': string;
    '--calculator-shadow': string;
    '--display-bg': string;
    '--display-text': string;
    '--text-primary': string;
    '--text-secondary': string;
    '--btn-number-bg': string;
    '--btn-number-text': string;
    '--btn-number-border': string;
    '--btn-operator-bg': string;
    '--btn-operator-text': string;
    '--btn-operator-border': string;
    '--btn-function-bg': string;
    '--btn-function-text': string;
    '--btn-function-border': string;
    '--btn-equal-bg': string;
    '--btn-equal-text': string;
    '--btn-equal-border': string;
  };
}

export enum ButtonType {
  Number = 'number',
  Operator = 'operator',
  Function = 'function',
  Equal = 'equal',
}

export interface ButtonConfig {
  label: string | React.ReactNode;
  value: string;
  type: ButtonType;
  gridSpan?: number;
}

export type View = 'calculator' | 'model' | 'features' | 'about' | 'help';