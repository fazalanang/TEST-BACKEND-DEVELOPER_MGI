// SOAL NO 1

const produk = [
    {
        id_produk:1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk:2,
        nama_produk: 'Huawei Nova 5T'
    },
];

const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    },
]

let hasil = [
    {
        nama_produk: produk[0].nama_produk,
        total_stock: stok_produk[0].qty + stok_produk[1].qty

    },
    {
        nama_produk: produk[1].nama_produk,
        total_stock: stok_produk[2].qty + stok_produk[3].qty

    }
]

exports.getProduk = async (req, res) => {
    try {
        res.send({
            status: "success",
            data: {
                hasil
            }
        })
    } catch (error) {
        res.send({
            status: "failed",
            message: "server error"
        })
    }
}
