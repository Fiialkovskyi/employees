import './app-info.css';

const AppInfo = ({totalEmployees, willIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalEmployees}</h2>
            <h2>Премию получат: {willIncrease}</h2>
        </div>
    )
}

export default AppInfo;