export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    leftIcon ?: React.ReactNode;
    name : string;
    control : any;
    errorsMessage ?: string;
    type : string;
}