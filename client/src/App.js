import './App.css';
import Customer from './component/Customer';
import Paper from '@mui/material/Paper';    /* 무언가를 감싸기 위한 보더가 있는 형태 */
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';
import { Component } from 'react';
import { createTheme } from '@mui/material/styles';
import axios from "axios";

const theme = createTheme();
const styles = {
  root : {
    width: '100%',
    marginTop: theme.spacing(3),  /* 위쪽으로의 여백을 3의 가중치만큼 줌 (8*3) */
    overflowX : 'auto'
  },
  table : {
    minWidth: 1080
  }
};

const customers = [
{
  'id' : 1,
  'image' : 'http://placeimg.com/80/80/any',
  'name' : '홍길동',
  'birthday' : '19930503',
  'age' : '29',
  'gender' : '남자',
  'jop' : '직장인'
}, 
{
  'id' : 2,
  'image' : 'http://placeimg.com/80/80/a2',
  'name' : '홍길자',
  'birthday' : '19980610',
  'age' : '24',
  'gender' : '여자',
  'jop' : '학생'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/80/80/3',
  'name' : '홍길구',
  'birthday' : '19890812',
  'age' : '32',
  'gender' : '남자',
  'jop' : '프로그래머'
}
]

class App extends Component {

  state = {
    customers : []
  };

  // Component API는 생명주기가 존재 - 모든 컴포넌트가 마운트가 완료되었을 때 실행되는 함수(완료 된 데이터를 받아온다)
  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    const response = await axios.get("/api/customer");
    let data = response.data.data;
    /* console.log(JSON.stringify(data)); */
    this.setState({
      customers : data
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.customers ? this.state.customers.map(c => {
                return(
                  <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jop={c.jop} />
                );
              }) : []
            }
          </TableBody>
        </Table>
      </Paper>
      );
    }
}

export default withStyles(styles)(App);
