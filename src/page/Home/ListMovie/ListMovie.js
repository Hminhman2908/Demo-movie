import React, { useEffect, useState } from 'react'
import { getListMovie } from '../../api/api'
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { NavLink } from 'react-router-dom';

export default function ListMovie() {
    const [movieArr, setmovieArr] = useState([]);
    useEffect(() => {
        getListMovie().then((res) => {
            console.log(res)
            setmovieArr(res.data.content)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className='grid grid-cols-4 container gap-10'>
            {movieArr.slice(0, 16).map((item, index) => {
                return <Card
                    key={index}
                    hoverable
                    style={{
                        // width: 240,
                    }}
                    cover={<img className='h-48 object-cover' alt="example" src={item.hinhAnh} />}
                >
                    <Meta title={item.tenPhim} />
                    <Meta className='text-ellipsis overflow-hidden whitespace-nowrap w-50' description={item.moTa} />
                    <button className='px-20 py-5 my-3 bg-red-500 rounded'>
                        <NavLink to={`/movie/${item.maPhim}`} className="text-white">
                            Mua vé
                        </NavLink>
                    </button>
                </Card>
            })}
        </div>
    )
}
