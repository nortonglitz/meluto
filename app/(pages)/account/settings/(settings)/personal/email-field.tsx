"use client"

import { InputText } from "@/components"
import { ButtonFeedback } from "@/components"
import { EmailSchema, useEmailSchema } from "@/validations/schemas/fields"

interface EmailFieldProps {
    initialValue: string
    onCancel: () => void
}

export const EmailField = ({
    initialValue,
    onCancel
}: EmailFieldProps) => {

    const { handleSubmit, register, formState: { errors } } = useEmailSchema({
        defaultValues: {
            email: initialValue
        }
    })

    const onSubmit = (values: EmailSchema) => {
        console.log(values)
    }

    return (
        <form
            className="
                my-4
                flex
                gap-4
                flex-col
                w-full
                
                sm:w-fit
                sm:relative
            "
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputText
                autoFocus
                className="w-full"
                {...register("email")}
                error={errors.email?.message}
            />
            <div
                className="
                    flex
                    w-full
                    justify-around
                    ml-2
                    
                    sm:absolute
                    sm:left-full
                    sm:justify-normal
                "
            >
                <ButtonFeedback option="cancel" className="mr-2" onClick={() => onCancel()} />
                <ButtonFeedback option="confirm" type="submit" />
            </div>
        </form>
    )
}