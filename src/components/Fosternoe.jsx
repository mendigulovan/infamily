import React from 'react';
import axios from 'axios';
import '../css/Information.css';
import { Jumbotron, Grid, Row} from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(){
        super();
        this.state={
            userMsg:null
        }
    }
    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/articles/13/",{}).then((res)=>{
                //on success
                this.setState({
            userMsg:res.data
        });

        }).catch((error)=>{
            //on error
            alert("There is an error in API call.");
        });
    }

render(){

    return(
          this.state.userMsg!=null &&
        <div className="content">
          <header class="head">
          </header>
            <Grid>
            <div className="menu">
              <Jumbotron className="text">
              <Row className="show-grid text-center">
                  <h2>Фостерное опекунство</h2>
              </Row>
                <div>
                <div className="text">{this.state.userMsg.content}</div>
            </div>
                </Jumbotron>
                </div>
              </Grid>
            </div>

        );
    }
}
