import { generateRandomString } from "@/utils/generators/strings"

type Option = {
    label?: string
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

                return (
                    <button
                        onClick={() => onChangeValue(valueOption)}
                        key={`button-${generateRandomString(4)}-${valueOption}-${i}`}
                        type="button"
                        className={`
                            px-4
                            py-2
                            rounded-full
                            outline
                            
                            ${selected ? "dark:text-gray-950 text-white" : "text-gray-500 dark:text-gray-400"}
                            ${selected ? "dark:outline-white outline-black" : "outline-gray-500"}
                            ${selected ? "dark:bg-white bg-black" : "bg-gray-100 dark:bg-gray-900"}

                            hover:-outline-offset-1
                            hover:outline-2

                            hover:outline-black
                            dark:hover:outline-white
                            
                        `}
                    >
                        {labelOption || valueOption}
                    </button>
                )
            })}
        </>
    )
}