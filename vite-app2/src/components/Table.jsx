import Row from "./Row"

export default function Table ({ items }) {
    return (
        <div className="table-container">
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item}/>
                ))}
            </tbody>
        </div>
    )
}