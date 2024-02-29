"use client"

import { InputText } from "@/components"
import { ButtonFeedback } from "@/components"
import { PhoneSchema, usePhoneSchema } from "@/validations/schemas/fields"
import { Value } from "./data-display"

interface PhoneFieldProps {
    initialValue: Value
    onClose: () => void
    type: "whatsapp" | "phone"
}

export const PhoneField = ({
    initialValue,
    onClose,
    type
}: PhoneFieldProps) => {

    const { handleSubmit, register, formState: { errors } } = usePhoneSchema({
        defaultValues: {
            phone: initialValue || ""
        }
    })

    const onSubmit = (values: PhoneSchema) => {
        // If do not change values, close form
        if (values.phone === initialValue) {
            onClose()
        }

        // TODO: Create action to save phone or whatsapp based on type param
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
                type="tel"
                autoComplete="tel-national"
                autoFocus
                className="w-full"
                {...register("phone")}
                error={errors.phone?.message}
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