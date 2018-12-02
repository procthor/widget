export const monthlyChange = (e) => {

    return {
        type: 'SPENDINGS_CHANGE',
        id: e.target.id,
        payload: e.target.value.replace(/\D/g, '')
    }

}