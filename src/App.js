import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/any',
  name: '이시원',
  birthday: 950526,
  gender: '여자',
  job: '군무원'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/1',
  name: '강민주',
  birthday: 950526,
  gender: '남자',
  job: '대학생'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/2',
  name: '강민지',
  birthday: 950526,
  gender: '여자',
  job: '선생님'
},
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map(ct => {
          return (
            <Customer
              key= {ct.id}
              id={ct.id}
              image={ct.image} 
              name={ct.name} 
              birthday={ct.birthday} 
              gender={ct.gender} 
              job={ct.job} 
            />
          );
        })}
      </div>

    );
  }
}

export default App;
