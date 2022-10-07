import { classNames } from 'lib/helpers';
import { useFormContext } from 'react-hook-form';

import { HiExclamationCircle } from 'react-icons/hi';


type FieldProps = {
    label?: string;
    placeholder: string;
    helperText?: string;
    fieldName: string;
    type?: string;
    readOnly: boolean;
    validation?: any;
    rest?: any;
}


const Input = ({ label, placeholder,helperText, fieldName, type='text', readOnly = false, validation, ...rest}: FieldProps ) => {
    
    const { register, formState: { errors} } = useFormContext();

    return (
        <div className="relative mt-1 flex flex-col w-full bg-sky ">
            <input
                {...register(fieldName, validation)}
                {...rest}
                type={type}
                placeholder={placeholder}
                readOnly={readOnly}
                className={classNames(
                    readOnly
                    ? 'bg-gray-100 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300'
                    : errors[fieldName]
                    ? 'focus:ring-red-500 border-red-500 focus:border-red-500 w-full'
                    : 'focus:ring-primary-500 border-gray-300 focus:border-primary-500 w-full',                
                )}
            />

            {errors[fieldName] && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <HiExclamationCircle className='text-xl text-red-500' />
                </div>
            )}
            
            <div className='mt-1'>
                {helperText !== '' && (
                    <p className='text-xs text-gray-500'>{helperText}</p>
                )}
                {/* @ts-ignore */}
                {errors[fieldName] && (<span className='text-sm text-red-500'>{errors[fieldName]?.message}</span>
                )}
            </div>


        </div>

    )


}

export default Input