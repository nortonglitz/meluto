import { FaHouse, FaBuilding, FaExpand, FaTree } from "react-icons/fa6"
import type { ResidentialProperty } from "."

type ResidentialPropertyLabelProps = {
    property: ResidentialProperty
}

export const ResidentialPropertyLabel = ({
    property
}: ResidentialPropertyLabelProps
) => {

    return (
        <div className="flex items-center [&>svg]:mr-2 text-nowrap">
            {property === "rural" &&
                <>
                    <FaTree />
                    Fazenda / Sítio / Chácara
                </>
            }
            {property === "apartment" &&
                <>
                    <FaBuilding />
                    Apartamento
                </>
            }
            {property === "lot" &&
                <>
                    <FaExpand />
                    Lote / Terreno
                </>
            }
            {property === "house" &&
                <>
                    <FaHouse />
                    Casa
                </>
            }
        </div>
    )

}