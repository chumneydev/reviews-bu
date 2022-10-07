import { NextPageWithLayout } from "../_app"
import { useForm, SubmitHandler, useFieldArray, useWatch, FormProvider } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { classNames } from 'lib/helpers';

import AdminLayout from "@/layouts/Admin"

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Input from "@/components/Store/Input";
import Form from "@/components/Store/Form";

// Types
type Inputs = {
    rating?: number,
    subject: string,
    name: string,
    email: string,
    phone: string,
    city: string,
    state: string,
    zip: string,
    message: string,
    streetAddress: string,
    url: string,
    socialAccounts: {
        id: number | string,
        name: string,
        icon: string,
        url: string
    } [],
}

const AdminCreateDealer: NextPageWithLayout = () => {


    // TODO Form Validation

    // ? Input classes
    // const input

    // const onSubmit = ({data}: ) => console.log(data);

    const schema = yup.object().shape({
        name: yup
            .string()
            .min(5, 'Name must be at least 2 characters')
            .required('Name is required'),
        url: yup
            .string()
            .required('URL is required'),
        // phone: yup
        //     .string()
        //     .required('Phone is required'),
        // email: yup
        //     .string()
        //     .email('Email is invalid')
        //     .required('Email is required'),
        // city: yup
        //     .string()
        //     .required('City is required'),
        // state: yup
        // .string()
        // .max(2, 'State must be 2 characters')
        // .required('State is required'),
        // zip: yup
        //     .number()
        //     .max(5, 'Zip must be 5 characters')
        //     .required('Zip is required'),
        // streetAddress: yup
        //     .string()
        //     .required('Street Address is required'),
        // socialAccounts: yup
        //     .array()
        //     .of(
        //         yup.object().shape({
        //             name: yup
        //                 .string()
        //                 .required('Name is required'),
        //             icon: yup
        //                 .string()
        //                 .required('Icon is required'),
        //             url: yup
        //                 .string()
        //                 .required('URL is required'),
        //         })
        //     )

    });

    const { register, handleSubmit, setValue, reset, watch, getValues, control,  formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const { fields, append, remove } = useFieldArray<Inputs>( {control, name: 'socialAccounts', keyName: 'id', } ) 


    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
            <section>
                <div className="border-2 border-burnt-500 mx-auto px-4 py-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                            
                        <section className="grid grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col">
                                <input
                                    type={'text'}
                                    placeholder={'Name'}
                                    {...register('name')} 
                                    className={errors.name ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                />
                                {errors.name && <span>{errors.name?.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type={'text'}
                                    placeholder={'Name'}
                                    {...register('url')}
                                    className={errors.name ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                />
                                {errors.url && <span>{errors.url?.message}</span>}
                            </div>
                        </section>

                        {fields.map((item, index) => {
                        
                        return (
                            <div key={item.id} className="flex flex-col bg-rust border-2 border-blue-300 p-4 mb-8">
                                <div className="grid grid-cols-1 pb-8">
                                    <input type={'text'} placeholder={'Name'} {...register(`socialAccounts.${index}.name` as const, { required: true })} />
                                    {errors.socialAccounts && <div>This field is required</div>}
                                </div>                            
                                <div className="grid grid-cols-1 pb-8">
                                    <input type={'text'} placeholder={'Icon'} {...register(`socialAccounts.${index}.icon` as const, { required: true })} />
                                    {errors.socialAccounts && <div>This field is required</div>}
                                </div>                            

                                <div className="grid grid-cols-1 pb-8">
                                    <input type={'text'} placeholder={'Url'} {...register(`socialAccounts.${index}.url` as const, { required: true })} />
                                    {errors.socialAccounts && <div>This field is required</div>}
                                </div>                            

                                <div className="grid grid-cols-1 pb-8">
                                    <button type="button" className="bg-red-400 py-4 font-bold text-white tracking-wider" onClick={() => remove(index)}>Delete</button>
                                </div>                            
                            </div>
                        )
                        })}





                        <section className="grid grid-cols-1 gap-8 mb-8">

                            <div className="px-4 py-2 border-2 border-grey rounded relative">
                                <label className="absolute -my-4 -mx-2 bg-white px-2 text-grey-darker">Name</label>
                                <input type={"text"} className="appearance-none border-2 border-white rounded w-full py-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-white" placeholder={"Max Mustermann"} />
                            </div>
                        </section>
                        

                        <section className="grid grid-cols-1">
                            <button type="button" className="bg-sky-500 hover:bg-sky-700 transition-color duration-300 tracking-wider font-bold py-4"  onClick={() => append({ id: fields.length.toString() , name: '', icon: '', url: '' })}>Add Social Account</button>
                        </section>

                        <section className="grid md:grid-cols-2 gap-8 mt-8">
                            <button className="bg-burnt-500 tracking-wider font-bold py-4">Clear</button>
                            <button type="submit" className="bg-green-500 tracking-wider font-bold py-4">Create</button>

                        </section>
                    </form>

                </div>
            </section>

   
        </>

    )
}

AdminCreateDealer.getLayout = (page) => (
    <AdminLayout>
        {page}
    </AdminLayout>
)


export default AdminCreateDealer
