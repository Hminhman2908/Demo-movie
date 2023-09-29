import axios from "axios"
import { BASE_URL, configHeaders } from "./config"

export let getListMovie = () => {
    return axios
        .get(`${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`, { headers: configHeaders() })

}

export let getDetailMovie = (id) => {
    return axios
        .get(`${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`, { headers: configHeaders() })
}

export let getMovieByTheater = (id) => {
    return axios
        .get(`${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`, { headers: configHeaders() })
}
