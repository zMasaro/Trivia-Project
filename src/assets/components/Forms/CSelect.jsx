const CSelect = ({id, name, items, onChange}) => {
    return (
        <>
            <select id={id} name={name} onChange={onChange}>
                {items.map((item) => (
                    <option value={item.value} >
                    {item.text} 
                    </option>
                ))}
            </select></>
    );
}
export default CSelect;