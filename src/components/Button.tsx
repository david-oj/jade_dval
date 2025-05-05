type ButtonProps = {
    outline?: boolean;
    children?: React.ReactNode;
    className?: string;
    borderColor?: string;
    bgColor?: string;
    borderRadius?: string;
};


const Button = ({ outline, children, className, borderRadius="rounded-lg", borderColor = 'border-brand', bgColor = 'bg-brand' }: ButtonProps) => {
    const baseStyles = `font-poppins py-1 px-2 ${borderRadius} cursor-pointer `;
    return (
        <button type="button" className={`${baseStyles} ${outline ? `border-1  ${borderColor}` : `${bgColor} `} ${className} `}>{children}</button>
    )
};

export default Button;