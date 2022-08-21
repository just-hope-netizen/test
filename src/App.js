import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { storeData } from './slice';
import Stats from './stats';
import Table from './table';

function App() {
  const [showStateData, setShowStateData] = useState(false);

  const { data } = useSelector(store => store.data)
  const dispatch = useDispatch()

  //prevent component from unneccessary calling the api
  const getData = useCallback(() => {
    fetch('https://covidnigeria.herokuapp.com/api').then(res => res.json()).then(data => {
      dispatch(storeData(data))
    }).catch(err => console.log(err))
  }, [dispatch])

  useEffect(() => {
    getData()
  }, [getData])

  //when data is store
  const dataNames = data && Object.getOwnPropertyNames(data.data)

  return (
    <div className="container">
      <header className='row mb-5 pt-5'>
        <h4 className='heading'>

          Nigeria covid statistics
        </h4>
      </header>
      <main className='pb-5 '>
        <div className='row'>
          <Stats name={dataNames?.[0]} detail={data?.data.totalSamplesTested} className='text-primary'/>
          <Stats name={dataNames?.[1]} detail={data?.data.totalConfirmedCases} className='text-primary' />
        </div>
        <div className='row'>
          <Stats name={dataNames?.[2]} detail={data?.data.totalActiveCases} className='text-warning'/>
          <Stats name={dataNames?.[3]} detail={data?.data.discharged} className='text-success'/>
        </div>
        <div className='row mb-5'>
          <Stats name={dataNames?.[4]} detail={data?.data.death} className='text-danger' />
        </div>
        <button type="button" className="btn btn-light mb-4" onClick={() => {
          setShowStateData(!showStateData)
        }}>
          {showStateData ? 'Hide state data' : 'see state data'}
        </button>
        {showStateData && <Table />}
      </main>
    </div>
  );
}

export default App;
