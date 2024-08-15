import React from "react"
import Form from "./src/components/Form"
import Table from "./src/components/Table"

export default function App (){

    const API_URL = 'https://jsonplaceholder.typicode.com/'
    const [reqType, setReqType] = React.useState('users')
    const [items, setItems] =React.useState([])

    React.useEffect(() => {
        fetch(`${API_URL}${reqType}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [reqType])

    return(
        <div>
            <Form 
                reqType={reqType}
                setReqType={setReqType}
            />
            <Table items={items}/>
        </div>
    )
}