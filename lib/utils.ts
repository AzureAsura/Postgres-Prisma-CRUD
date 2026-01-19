export const dateFormat = (data: string) => {
    const date = new Date(data)
    const formatedDate = new Intl.DateTimeFormat("id-ID", {
        dateStyle: 'medium',
        timeStyle: 'short'
    })

    return formatedDate.format(date)
}