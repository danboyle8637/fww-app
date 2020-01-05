import { useState, useEffect } from 'react'

import siteConfig from '../utils/siteConfig'

const useFetch = ({ endpoint, method, token, body }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    const url = `${siteConfig.api.baseUrl}${endpoint}`

    const fetchOptions =
      method === 'GET' && !body
        ? {
            method: method,
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        : {
            method: method,
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
          }

    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
  }, [body, endpoint, method, token])

  return { data, error }
}

export default useFetch
