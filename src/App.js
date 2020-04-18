import React from 'react';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})




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
    const {classes} = this.props;
    return (
      <div>
        <Paper className ={classes.root}>
          <Table className ={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년원일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(ct => {
                return (
                  <Customer
                    key={ct.id}
                    id={ct.id}
                    image={ct.image}
                    name={ct.name}
                    birthday={ct.birthday}
                    gender={ct.gender}
                    job={ct.job}
                  />
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>

    );
  }
}

export default withStyles(styles)(App);
