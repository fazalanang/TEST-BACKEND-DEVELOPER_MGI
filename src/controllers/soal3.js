// SOAL NO 3

const arrayOfObject = [
    {
        nama: 'smith',
        hobi: 'Self Service'
    },
    {
        nama: 'Dio',
        hobi: 'Design Grafis'
    },
    {
        nama: 'Agung',
        hobi: 'Bermain Game'
    }
] 

let result = [
    {
        nama: arrayOfObject[arrayOfObject.length - 1].nama,
        hobi: arrayOfObject[0].hobi,
    },
];

exports.getArrayOfObject = async (req, res) => {
    try {
        res.send({
            status: "success",
            data: {
                result
            }
        })
    } catch (error) {
        res.send({
            status: "failed",
            message: "server error"
        })
    }
}