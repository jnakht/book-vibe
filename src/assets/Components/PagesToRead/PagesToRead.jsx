import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesToRead = () => {
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const readBooks = getFromLocalStorage('read');
    const [data, setData] = useState([]);
    useEffect(() => {
        const bookArr = [];
        
        readBooks.map(book => {
            // eachBook.bookName = book.bookName;
            // eachBook.pages = book.totalPages;
            const eachBook = {
                bookName: book.bookName,
                pages: book.totalPages
            }
            bookArr.push(eachBook);
            console.log("this is eachBook Object: ", eachBook)
            console.log("this is bookArr: ", bookArr)
        })
        console.log('age hoise go')
        console.log('this is bookArr After the map: ', bookArr)
        setData(bookArr);

    }, [])
    useEffect(() => {
        console.log('this is the data to make barChart: ', data);
    }, [data])
    return (
        <div className=" w-10/12 mx-auto bg-[#131313]/10 rounded-lg p-4 mt-4 mb-4">
            
            <ResponsiveContainer width='100%' height={600} >
            <BarChart
                
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 5,
                    bottom: 150,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" angle={-30} textAnchor="end"/>
                <YAxis />
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;