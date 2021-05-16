import Skeleton from 'react-loading-skeleton';



export const SpinLoader = ({loading}) => {

    return (
    <>
    <div className={`${loading ? 'spin-loader' : ''}`} />
    </>
)
}

export const SpinnerLoader = () => {

    return (
    <>
    <div className="spinner-loader" />
    </>
)
}


export const Loader = () => {
    return (
        <>
        <div className="load">
           <div>
                <Skeleton height={100}/>
            </div>
            
            <div className="my-1">
                <Skeleton height={20}/>
            </div>
            <div className="my-1">
                <Skeleton height={20}/>
            </div>
           </div>
        </>
    )
}

export const CardLoader = () => {

    return(
        <>
            <div className="card-loader">
            {[1,2,3,4,5,6].map((item, i) => (
                   <Loader key={i}/>
            ))}
            </div>
        </>
    )
}