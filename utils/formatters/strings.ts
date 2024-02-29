export const formatPhone = (phone: string) => {
    switch (phone.length) {
        case 10:
            return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6, 10)}`
        case 11:
            return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7, 11)}`
        default:
            return phone
    }
}
