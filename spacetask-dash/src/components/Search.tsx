import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;


const RGSearch = () => {
    const onSearch = value => console.log(value);

    return (
        <div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
        />
        </div>
       
    )
}

export default RGSearch;


  
 