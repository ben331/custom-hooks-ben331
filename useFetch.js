import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    useEffect(() => { fetchData() }, [url])

    const fetchData = async () => {

        try {

            setState({
                ...state,
                isLoading: true
            })

            const resp = await fetch(url)
            const data = await resp.json()

            setState({
                data,
                isLoading: false,
                error: null
            })

        } catch (error) {
            setState({
                ...state,
                data: null,
                isLoading: false,
                error
            })
        }
    }

  return {
    ...state,
  }
}
