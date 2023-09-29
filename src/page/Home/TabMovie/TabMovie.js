import React, { useEffect, useState } from 'react'
import { getMovieByTheater } from '../../api/api';
import { Radio, Space, Tabs } from 'antd';

export default function TabMovie() {
    const [Theater, setTheater] = useState({});
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    useEffect(() => {
        getMovieByTheater()
            .then((res) => {
                console.log(res)
                setTheater(res.data.content)
            }).catch((err) => {
                console.log(err)
            })
    }, []);
    return (
        <>
            {/* <Space
                style={{
                    marginBottom: 24,
                }}
            >
                Tab position:
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space> */}
            <Tabs
                tabPosition={tabPosition}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </>
    );
}
