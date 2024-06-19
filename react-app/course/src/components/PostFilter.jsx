import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
    return (<>
        <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Поиск...'

        />
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue={'Сортировка по'}
            options={[
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' },
            ]}
        />
    </>);
}

export default PostFilter;