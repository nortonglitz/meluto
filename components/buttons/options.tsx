import { generateRandomString } from "@/utils/generators/strings"

type Option = {
    label?: React.ReactNode
    value: string | number
}

interface ButtonsOptionsProps {
    options: Option[]
    onChangeValue: (value: Option["value"]) => void
    selectedOptions: Option["value"][]
}

/**
 * Buttons displayed from array in the shape of `{ label: string, value: string}`.
 * Once any button is clicked, triggers onChangeValue with the value of the button.
 * Button is styled if the value of it is in the array of selected options.
 * 
 * It's possible also to style them using div, because it's not inside of one,
 * they are just buttons grouped.
 * 
 * @example
 * 
 * const [selectedOptions, setSelectedOptions] = useState<number[]>([])
 * const OPTIONS = [
 *      { label: "First", value: 1 },
 *      { label: "Second", value: 2 }
 * ]
 * 
 * const handleButtonChangeValue = (value: number) => {
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
 * <ButtonOptions
 *      options={OPTIONS}
 *      selectedOptions={selectedOptions}
 *      onChangeValue={handleButtonChangeValue}
 * />
 * 
 */
export const ButtonsOptions = ({
    options,
    onChangeValue,
    selectedOptions
}: ButtonsOptionsProps) => {
    return (
        <>
            {options.map(({ value: valueOption, label: labelOption }, i) => {

                const selected = selectedOptions.findIndex(valueChosen => valueChosen === valueOption) !== -1
                const buttonId = `button-${generateRandomString(4)}-${i}`

                return (
                    <button
                        onClick={() => onChangeValue(valueOption)}
                        key={buttonId}
                        type="button"
                        className={`
                            px-4
                            py-2
                            rounded-full
                            outline

                            hover:outline-black
                            dark:hover:outline-white

                            focus-visible:outline-2
                            hover:outline-2

                            ${selected ?
                                `
                                hover:outline-offset-2
                                focus-visible:outline-offset-2
                                text-white
                                outline-black
                                bg-black
                            
                                dark:text-black
                                dark:focus-visible:outline-white
                                dark:outline-white
                                dark:bg-white
                                `
                                :
                                `
                                outline-gray-500

                                focus-visible:outline-black
                                text-gray-500
                                bg-gray-100
                                
                                dark:focus-visible:outline-white
                                dark:text-gray-400
                                dark:bg-gray-900
                                `
                            }
                            
                        `}
                    >
                        {labelOption || valueOption}
                    </button>
                )
            })}
        </>
    )
}