import React, {useState} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import carsCatalog from '../static/carsCatalog';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));


export default function Catalog() {
    const classes = useStyles();

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(carsCatalog);
    const [sortType, setSortType] = useState(null)

    const excludeColumn = ['title', 'price'];

    const handleChange = value =>{
        setSearchText(value);
        filterData(value);
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue) {
            setData(carsCatalog);
        }
        else {
            const filteredData = carsCatalog.filter(item =>{
                return Object.keys(item).some(key =>{
                    return excludeColumn.includes(key) ? false: item[key].toString().toLowerCase().includes(lowerCaseValue);
                    //Берем всі ключі з об'єкту, і перевіряємо значення кожного ключа, чи воно містить пошукове слово
                })
            });
            setData(filteredData);
        }
    }

    const onSort = sortType =>{
        setSortType(sortType);
    }

    const sorted = carsCatalog.sort((a , b) => {
        if (sortType != null) {
            const isReserved = (sortType === 'asc') ? 1: -1;
            return isReserved * a.title.localeCompare(b.title)
        } else {
            return
        }
    });


    return (
        <div>
            <div className={classes.inputs}>
                <div className={classes.filter}>
                    <button className="buttonSecondPage" onClick={() => onSort('asc')}>Sort by asc</button>
                    <button className="buttonSecondPage" onClick={() => onSort('desc')}>Sort by desc</button>         
                </div>
                
            </div>
            <div className="">
                <input 
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
                />
                <div className="">
                    <div className={classes.root}>
                        {data.map(car => (<ImageCard car={car}/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                </div>
            </div>
            </div>
    );
}