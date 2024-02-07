import './Result.css'

const Result = ({ days, months, years }) => {

    const noData = years === null || months === null || days === null
    return (
        <div className="result">
            <p><span>{noData ? '--' : years}</span> years</p>
            <p><span>{noData ? '--' : months}</span> months</p>
            <p><span>{noData ? '--' : days}</span> days</p>
        </div>
    )

}

export default Result