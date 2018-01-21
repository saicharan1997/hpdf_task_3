import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


class Signup extends Component {
  render() {
    return (
    
    
    <MuiThemeProvider>
		<div style={{display:'flex', flexDirection:'row'}}>
                <div style={{marginLeft:470, marginTop:100, marginRight:60}} >
					<a href='/'><img style={{height:200,width:200}} src="images/logo.png" alt=" "/></a>
                </div>
               
                    <form style={{marginTop:90,marginLeft:-25}}>
                        <h4 style={{color:'#999999'}}>INTRODUCE YOURSELF</h4>
                        <h2 style={{color:'#333333', fontWeight:100}}>Hi there! My name is</h2>
                        <TextField 
                            underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 35,marginTop:-10, width: 300, height: 50,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3', color:'#acabab',}} type="text"/>
                        <h3 style={{color:'#333333',marginTop:25, fontWeight:100}}>Here’s my <b>email address:</b></h3>
                        <TextField 
                            underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} type="email"/>
                        <h3 style={{color:'#333333',marginTop:25, fontWeight:100}}>And here’s my<b> password:</b></h3>
                        <TextField
                            underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} type="password"/><br/><br/>
                        <FlatButton style={{height:50, fontSize:30, borderRadius:5, marginTop:5, border:'1px solid #de0000',
                    boxShadow: '0px 0px 3px #bfbfbf'}} labelStyle={{textTransform: 'none', color: '#FFFFFF', fontSize:20,fontFamily:'lobo',
                    textShadow: '0px -1px 0px #5d5d5d'}}
                        backgroundColor='#ff6200' hoverColor='#ff4500' rippleColor='#efefef' 
                        label="Sign me up!"  href="#SignupButtonRequest" />
                                                
                        <p style={{color:'#333333',fontSize:14,marginTop:10}}>Don't use USD for currency?
                        
                        <a style={{color:'#005580',fontSize:14,textDecoration: 'none', cursor:'pointer',}} href='#USDRequest'>Click here.</a>
                        
                        </p>
                    </form>
         </div>
      
     </MuiThemeProvider>    
      
    );
  }
}

export default Signup;
