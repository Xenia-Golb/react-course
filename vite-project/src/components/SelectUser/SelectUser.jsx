
function SelectUser({ changedUser }) {
    const changeUser = (e) => {
        changedUser(e.target.value);
    };
    return (
        <select name="user" id="user" onChange={changeUser}>
            <option value="1">Рома</option>
            <option value="2">Барон</option>
        </select>
    );
}

export default SelectUser;