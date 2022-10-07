import React from "react"
import { FormProvider, useForm } from "react-hook-form"

type FormProps = {
    defaultValues?: any,
    children: any,
    onSubmit: (data: any) => void
}


const Form = ({ defaultValues, children, onSubmit }: FormProps) => {

    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods

    return (
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(onSubmit)}>
                {React.Children.map(children, child => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: methods.register,
                                key: child.props.name,
                                errors: methods.formState.errors,
                            },
                        })
                    : child
                })}
            </form>
        </FormProvider>
    )
}


export default Form