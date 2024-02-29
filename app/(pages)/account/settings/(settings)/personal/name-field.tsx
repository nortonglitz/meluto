"use client"

import { InputText } from "@/components"
import { ButtonFeedback } from "@/components"
import { NameSchema, useNameSchema } from "@/validations/schemas/fields"
import { Value } from "./data-display"

interface NameFieldProps {
    initialValue?: Value[]
    onClose: () => void
}

export const NameField = ({
    initialValue,
    onClose
}: NameFieldProps) => {

    const { handleSubmit, register, formState: { errors } } = useNameSchema({
        defaultValues: {
            given_name: initialValue?.[0] || "",
            family_name: initialValue?.[1] || ""
        }
    })

    const onSubmit = (values: NameSchema) => {
        // If do not change values, close form
        if (
            values.given_name === initialValue?.[0]
            &&
            values.family_name === initialValue?.[1]
        ) {
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
                label="Nome"
                autoComplete="given-name"
                autoFocus
                className="w-full flex"
                {...register("given_name")}
                error={errors.given_name?.message}
            />
            <InputText
                label="Sobrenome"
                autoComplete="family-name"
                className="w-full flex"
                {...register("family_name")}
                error={errors.family_name?.message}
            />
            <div
                className="
                    flex
                    w-full
                    justify-around
                    ml-2
                "
            >
                {/* Explicit use this as type button to prevent submit */}
                <ButtonFeedback type="button" option="cancel" className="mr-2" onClick={() => onClose()} />
                <ButtonFeedback option="confirm" type="submit" />
            </div>
        </form>
    )
}