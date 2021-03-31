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