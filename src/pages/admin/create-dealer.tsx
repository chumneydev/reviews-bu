import { NextPageWithLayout } from "../_app"
import { useForm, SubmitHandler, useFieldArray, useWatch, FormProvider } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AdminLayout from "@/layouts/Admin"

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

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

     function handleTitleChange(e: any) {
            setValue('url', e.target.value.replace(/\s+/g, '-').toLowerCase());
        }


    return (
        <>
            <section>
                <div className=" mx-auto px-4 py-4">

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-700/50 p-8 border-t-4 border-b-4 border-slate-500">
                            
                        <section>
                            
                            <div className="grid grid-cols-2 gap-12 mb-12">
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'Name'}
                                        {...register('name')} 
                                        onChange={handleTitleChange}
                                        className={errors.name ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.name && <span>{errors.name?.message}</span>}
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'dealership-url'}
                                        {...register('url')}
                                        disabled
                                        className={errors.url ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.url && <span>{errors.url?.message}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12 mb-12">
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'Phone'}
                                        {...register('phone')} 
                                        onChange={handleTitleChange}
                                        className={errors.phone ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.phone && <span>{errors.phone?.message}</span>}
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'Street Address'}
                                        {...register('streetAddress')}
                                        className={errors.streetAddress ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.streetAddress && <span>{errors.streetAddress?.message}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12 mb-12">
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'City'}
                                        {...register('city')} 
                                        onChange={handleTitleChange}
                                        className={errors.city ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.city && <span>{errors.city?.message}</span>}
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'State'}
                                        {...register('state')}
                                        className={errors.state ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.state && <span>{errors.state?.message}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1  gap-12 mb-12">
                                <div className="flex flex-col">
                                    <input
                                        type={'text'}
                                        placeholder={'Zip'}
                                        {...register('zip')} 
                                        onChange={handleTitleChange}
                                        className={errors.zip ? 'focus:ring-burnt-500 bg-burnt-300 border-burnt-500 focus:border-burnt-500' : ''}
                                    />
                                    {errors.zip && <span>{errors.zip?.message}</span>}
                                </div>
                            </div>


                        </section>

                        {fields.map((item, index) => {
                        
                        return (
                            <div key={item.id} className=" bg-sky-500 bg-opacity-10 border-2 border-white p-8 mb-8 relative">

                                <div className="grid grid-cols-3 gap-12 pb-8">
                                    <div className="flex flex-col">
                                        <input type={'text'} placeholder={'Name'} {...register(`socialAccounts.${index}.name` as const, { required: true })} />
                                        {errors.socialAccounts && <div>This field is required</div>}
                                    </div>                            
                                    <div className="flex flex-col">
                                        <input type={'text'} placeholder={'Icon'} {...register(`socialAccounts.${index}.icon` as const, { required: true })} />
                                        {errors.socialAccounts && <div>This field is required</div>}
                                    </div>                            

                                    <div className="flex flex-col">
                                        <input type={'text'} placeholder={'Url'} {...register(`socialAccounts.${index}.url` as const, { required: true })} />
                                        {errors.socialAccounts && <div>This field is required</div>}
                                    </div>                            
                                
                                </div>

                                    <button type="button" className="bg-red-400 w-4 h-4 absolute -top-3 -right-4 p-4 rounded-full text-white font-bold shadow-slate-900 shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-none" onClick={() => remove(index)}>X</button>
                            </div>
                        )
                        })}




                        

                        <section className="grid grid-cols-1">
                            <button type="button" className="bg-sky-500 hover:bg-sky-700 transition-color duration-300 tracking-wider  shadow-slate-900 shadow-md font-bold py-4"  onClick={() => append({ id: fields.length.toString() , name: '', icon: '', url: '' })}>Add Social Account</button>
                        </section>

                        <section className="grid md:grid-cols-2 gap-8 mt-8">
                            <button className="bg-burnt-500 tracking-wider font-bold shadow-slate-900 shadow-md py-4 transition-all duration-200 hover:shadow-none">Clear</button>
                            <button type="submit" className="bg-green-500 tracking-wider font-bold shadow-slate-900 shadow-md py-4 transition-all duration-200 hover:shadow-none">Create</button>

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
