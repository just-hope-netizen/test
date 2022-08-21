import { useSelector} from 'react-redux';

function Table() {
  const { data } = useSelector((store) => store.data);

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col'>State</th>
          <th scope='col' className='text-danger'>
            Death
          </th>
          <th scope='col' className='text-success'>
            Discharged
          </th>
          <th scope='col' className='text-warning'>
            casesOnAdmission
          </th>
          <th scope='col' className='text-primary'>
            confirmedCases
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data.states.map((state) => (
          <tr key={state._id}>
            <td>{state.state}</td>
            <td>{state.death}</td>
            <td>{state.discharged}</td>
            <td>{state.casesOnAdmission}</td>
            <td>{state.confirmedCases}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
