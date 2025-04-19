const CSelect = ({id, name, items, onChange}) => {
    return (
        <>
            <select id={id} name={name} onChange={onChange}>
                {items.map((item) => (
                    <option className="opcion" value={item.value} >
                    {item.text} 
                    </option>
                ))}
            </select></>
    );
}
export default CSelect;