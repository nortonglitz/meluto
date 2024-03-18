"use client"

import { generateRandomString } from "@/utils/generators/strings"

type Option = {
    label?: React.ReactNode
    value: string | number
}

interface InputCheckboxOptionsProps {
    options: Option[]
    onChangeValue: (value: Option["value"]) => void
    selectedOptions: Option["value"][]
    className?: string
}


/**
 * Checkboxes displayed from array in the shape of `{ label: string, value: string}`.
 * Once any checkbox is clicked, triggers onChangeValue with the value of the checkbox.
 * Checkbox is styled if the value of it is in the array of selected options.
 * 
 * It's possible also to style them using div, because it's not inside of one,
 * they are just inputs grouped.
 * 
 * @example
 * 
 * const [selectedOptions, setSelectedOptions] = useState<number[]>([])
 * const OPTIONS = [
 *      { label: "First", value: 1 },
 *      { label: "Second", value: 2 }
 * ]
 * 
 * const handleCheckboxChangeValue = (value: number) => {
 *      const valueIdx = selectedOptions.indexOf(value)
 * 
 *      if (valueIdx === -1) {
 *          setSelectedOptions([...selectedOptions, value])
 *      } else {
 *          const tempSelectedOptions = [...selectedOptions]
 *          tempSelectedOptions.splice(valueIdx, 1)
 *          setSelectedOptions[tempSelectedOptions]
 *      }
 * }
 * 
 * <CheckboxOptions
 *      options={OPTIONS}
 *      selectedOptions={selectedOptions}
 *      onChangeValue={handleCheckboxChangeValue}
 * />
 * 
 */
export const InputCheckboxOptions = ({
    options,
    onChangeValue,
    selectedOptions,
    className
}: InputCheckboxOptionsProps) => {
    return (
        <>
            {options.map(({ value: valueOption, label: labelOption }, i) => {

                const checked = selectedOptions.findIndex(valueChosen => valueChosen === valueOption) !== -1
                const checkboxId = `checkbox-${valueOption}-${i}`

                return (
                    <label
                        key={checkboxId}
                        htmlFor={checkboxId}
                        className={`
                                flex
                                items-center
                                select-none
                                cursor-pointer
                                w-fit
                                px-3
                                py-1
                                rounded-full

                                dark:hover:bg-gray-800
                                hover:bg-gray-200

                                [&>input]:mr-1
                                [&>input]:h-4
                                [&>input]:w-4
                                [&>input]:accent-scooter-300

                                text-lg
                                sm:text-base

                                ${className ? className : ""}
                            `}
                    >
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            id={checkboxId}
                            value={valueOption}
                            onChange={e => onChangeValue(e.target.value)}
                            checked={checked}
                        />
                        {labelOption || valueOption}
                    </label>
                )
            })
            }
        </>
    )
}