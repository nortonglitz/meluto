"use client"

import { InputText } from "@/components"
import { ButtonFeedback } from "@/components"
import { EmailSchema, useEmailSchema } from "@/validations/schemas/fields"
import { Value } from "./data-display"

interface EmailFieldProps {
    initialValue: Value
    onClose: () => void
}

export const EmailField = ({
    initialValue,
    onClose
}: EmailFieldProps) => {

    const { handleSubmit, register, formState: { errors } } = useEmailSchema({
        defaultValues: {
            email: initialValue || ""
        }
    })

    const onSubmit = (values: EmailSchema) => {
        // If do not change values, close form
        if (values.email === initialValue) {
            onClose()
        }
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
                autoComplete="email"
                className="w-full lowercase"
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
                {/* Explicit use this as type button to prevent submit */}
                <ButtonFeedback type="button" option="cancel" className="mr-2" onClick={() => onClose()} />
                <ButtonFeedback option="confirm" type="submit" />
            </div>
        </form>
    )
}