import React from 'react';
import axios from 'axios';
import '../css/Information.css';
import { Jumbotron, Grid, Row} from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(){
        super();
        this.state={
            userMsg:[]
        }
    }
    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/articles/13/",{}).then((res)=>{
                //on success
                const get = res.data;
                this.setState({
            userMsg: get
        });

        }).catch((error)=>{
            //on error
            alert("There is an error in API call.");
        });
    }

render(){
const api = this.state.userMsg.content;
console.log(api);
const p = 20;
    return(
          this.state.userMsg!=null &&
        <div className="content">
          <header class="head">
          </header>
            <Grid>
            <div className="main_content">
              <Jumbotron className="text">
              <Row className="show-grid text-center">
                  <h2>Фостерное опекунство</h2>
              </Row>
                <div>
                <div className="text"><div>{api}</div></div>
            </div>
                </Jumbotron>
                </div>
              </Grid>
            </div>

        );
    }
}
