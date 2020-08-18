import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useGetPosts = (url, initialState, dataPost) => {
    const history = useHistory()
    const [data, setData] = useState(initialState)
    const token = window.localStorage.getItem("token")
    const axiosConfig = {
        headers: {
        Authorization: token
        }  
    }
    const getPosts = () => {          
        axios.get(url, axiosConfig, {
        }).then(response => {
            setData(response.data.posts)
        }).catch(err => {
        console.log(err.message)
        })
    }

    useEffect(() => {
        if (token === null) {
            history.push("/")
        } else {
            getPosts()
        }
    }, [])

    return [data, getPosts]
}

export default useGetPosts;