type propsType = {
    country : string
}

const getlocalStrogeCurrencyCode = () =>{
    const countryCode = localStorage.getItem("code")
    return countryCode
}

const setLocalStrogeCurrencyCode = (country: string) =>{
    localStorage.setItem("code", country)
}

export {getlocalStrogeCurrencyCode, setLocalStrogeCurrencyCode}