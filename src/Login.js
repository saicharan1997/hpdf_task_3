import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

function handleClick() {
  window.location = '/';
}

const styles = {
  appbarTitle: {
    cursor: 'pointer', 
    width: 'wrap-content',
    marginLeft: 261,
    marginRight:567,
    marginTop: -8,
    fontSize: 20, 
    fontFamily: 'lato', 
    letterSpacing: 4,
  },
  
  login: {
	  lineHeight: '25px', 
	  width: 'wrap-content',
	  height:25, 
	  borderRadius:5, 
	  marginTop:2, 
	  border:'1px solid #06b11a'
   },
	  
	signup: {
		lineHeight: '25px',
		width: 'wrap-content', 
		height:25, 
		borderRadius:5, 
		marginTop:2, 
		marginRight:250, 
		border:'1px solid #de0000'
	},
	
	labelText: {
		textTransform: 'none', 
		color: '#FFFFFF',
		
		},
			
	small: {
		color: '#FFFFFF',
		},	
				  
};



class Login extends Component {
  render() {
    return (
    
	<MuiThemeProvider>
		<div style={{width: "96em"}}>			
			<div>
				<AppBar 
						position="static" 
						title="S P L I T W I S E"
						titleStyle={styles.appbarTitle}
						onTitleClick={handleClick} 
						style={{ height: 47, backgroundColor: "#5BC5A7",position: "fixed"}}
					
						iconElementRight={
							<span>
								<FlatButton style={styles.login} labelStyle={styles.labelText}
									backgroundColor='#48BE9D' hoverColor='#48C89D' rippleColor='#efefef' marginRight="100sp"
									label="Login" href="/Login" />
								<small style={styles.small}> or </small>
								<FlatButton style={styles.signup} labelStyle={styles.labelText}
									backgroundColor='#FF5216' hoverColor='#FF526F' rippleColor='#efefef' 
									label="Sign up" href="/Signup" />
							 </span>
							 }
						
						showMenuIconButton={false}
						
				/>
			
			</div>
			
			<Divider />
			
			
			<div style={{display:'flex', flexDirection:'row',}}>
				
				<div style={{marginLeft:500, marginTop:100, marginRight:60}} >
					<a href='/'><img style={{height:200,width:200}} src="images/logo.png" alt=" "/></a>
                </div>					
					<form style={{marginTop:90,marginLeft:-25}}>
                        
                        <h4 style={{color:'#999999'}}>WELCOME TO SPLITWISE</h4>
                        
                        <h3 style={{color:'#333333', fontWeight:100}}>Email address</h3>
                        
                        <TextField underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} 
								type="email" />
                        
                        <h3 style={{color:'#333333', marginTop:15,fontWeight:100}}>Password</h3>
                        
                        <TextField underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} 
								type="password"/><br/><br/>
                        
                        <FlatButton style={{height:50, fontSize:30, borderRadius:5, marginTop:5, border:'1px solid #de0000',
								boxShadow: '0px 0px 3px #bfbfbf'}} labelStyle={{textTransform: 'none' ,color: '#FFFFFF', fontSize:20, textShadow: '0px -1px 0px #5d5d5d'}}
								backgroundColor='#ff6200' hoverColor='#ff4500' rippleColor='#efefef' label=" &nbsp; Log in &nbsp; " href="#LoginButtonRequest" />
                        
                        <p style={{color:'#333333',fontSize:14,marginTop:10}}>Forgot your password?
                        
                        <a style={{color:'#005580',fontSize:14,textDecoration: 'none', cursor:'pointer',}} href='#ForgotPasswordRequest'>Click here.</a>
                        
                        </p>
                            
                    </form>
			</div>
			
			<div style={{backgroundColor:'#666666',height:120,marginTop:188}}>
				
				<div style={{marginLeft:290,marginRight:280}}>
				<br/>
					<div>
						<text style={{color:'#FFFFFF',fontSize:24}}>Made with ☻ in Providence, RI, USA</text>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						
						<span>
						<a href="https://www.facebook.com/splitwise"><img src='images/fb.png' alt=" "/></a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="https://twitter.com/splitwise"><img src='images/twitter.png' alt=" "/></a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="https://mixpanel.com/?from=partner"><img src='images/mixpanel.png' alt=" "/></a>
						</span>
					</div>
					<br/>
					
					<div>
						<text style={{color:'#FFFFFF',fontSize:16}}>Copyright © 2018 Splitwise, Inc. All rights reserved.</text>
						
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						
						<span>
							<a href="https://www.splitwise.com/about" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>About</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="https://www.splitwise.com/jobs" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Jobs</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="https://www.splitwise.com/calculators" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Calculator</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="https://blog.splitwise.com/" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Blog</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="https://www.splitwise.com/terms" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Terms</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="https://www.splitwise.com/press" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Press</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="http://dev.splitwise.com/" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>API</a>&nbsp;&nbsp;
							<text style={{color:'#FFFFFF',fontSize:14}}>|</text>&nbsp;&nbsp;
							<a href="http://feedback.splitwise.com/" style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold',textDecoration: 'none', cursor:'pointer'}}>Contact us</a>	
						</span>
					</div>
				
				</div>
			
			</div>
			
			
			
		
		</div>
	</MuiThemeProvider>
         
      
    );
  }
}

export default Login;
