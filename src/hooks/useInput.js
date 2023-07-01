import { useState } from "react"

const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    function handleValue(e) {
        setValue(e.target.value)
    }

    return [value, setValue, handleValue]
}

export default useInput