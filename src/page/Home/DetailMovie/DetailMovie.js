import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie } from '../../api/api';
import { Progress } from 'antd';

export default function DetailMovie() {
    const [detail, setDetail] = useState({});
    // useParams => lấy id từ url
    let params = useParams()
    // console.log(params)

    useEffect(() => {
        // Gọi api lấy chi tiết phim
        getDetailMovie(params.id).then((res) => {
            // console.log(res)
            setDetail(res.data.content)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [params.id])


    return (
        <div className='container flex justify-between items-center '>
            <div className='container flex items-center'>
                <img className='w-1/3 aspect-square' src={detail.hinhAnh} alt='' />
                <div className='ml-2'>
                    {/* <span>{detail.ngayKhoiChieu.slice(0, 10)}</span><br /> */}
                    <span>{detail.ngayKhoiChieu}</span><br />
                    <span>{detail.tenPhim}</span><br />
                    <span>{detail.ngayKhoiChieu}</span><br />
                    {/* <span>{detail.ngayKhoiChieu.slice(11, 16)}</span><br /> */}
                    <button className='px-2 py-3 my-3 bg-red-500 rounded text-white'>Mua vé</button>
                </div>
            </div>
            <Progress
                size={200}
                strokeColor={"red"}
                strokeWidth={10}
                format={(percent) => <span className="text-red-700 font-medium animate-bounce block">{percent / 10} Điểm</span>}
                type="circle" percent={detail.danhGia * 10} />
        </div>
    )
}
