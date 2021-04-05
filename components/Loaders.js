import Skeleton from 'react-loading-skeleton';
import { BallSpinLoader } from 'react-pure-loaders';



export const SpinLoader = ({loading}) => {

    return (
    <>
    <div className={`${loading ? 'spin-loader' : ''}`}>
        <BallSpinLoader
        loading={loading}
        size={18}
        />
    </div>
    </>
)
}


export const AdLoader = () => {
  return (
      <>
  <div className="media mb-2">
  <div className="align-self-start mr-3">
  <Skeleton height={70} width={150}/>
  </div>
  <div className="media-body">
  <div>
  <Skeleton width={200}/>
  </div>
  <div>
  <Skeleton width={220}/>
  </div>
  <div>
  <Skeleton width={70}/>
  </div>
   </div>
  </div>
      </>
  )
}



export const ProfileLoader = () => {
    return (
        <>
            <div className="container-fluid bg-white p-5">
                <div className="row">
                    <div className="col-md-2">
                        <Skeleton width={'100%'} height={300}/>
                    </div>
                    <div className="col-md-8">
                        <Skeleton height={30}/>
                        <Skeleton height={60}/>
                        <Skeleton height={60}/>
                        <div className="mt-3">
                        <Skeleton height={60}/>
                        <Skeleton height={50}/>
                        <Skeleton height={60}/>
                        <Skeleton height={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CardLoader = () => {
    return (
        <>
        <div className="col-md-4">
           <div style={{
               width: '80%',
               margin: 'auto'
           }}
           className="w3-card p-1"
           >
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
        </div>
        </>
    )
}