import React, { useState, useEffect, useRef } from 'react'
//https://breakingbadapi.com/api/quotes/1

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        //el return es cuando el componente se desmonta
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo cargar la info'
                })
            });


        return () => {

        }
    }, [url])

    return state;

}