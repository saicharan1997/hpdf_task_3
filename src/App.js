import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


function handleClick() {
  window.location.reload();
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
	getStartedNow: {
		width: 300, 
		height:80, 
		borderRadius:5,  
		border:'1px solid #de0000',
	},
	
	labelGetStartedText: {
		textTransform: 'none', 
		color: '#FFFFFF',
		fontSize: 20,
		
		},	
		
	small: {
		color: '#FFFFFF',
		
		},
		
	cardTextOne: {
		 fontSize: '68px', 
		 fontFamily: 'lato',
		 fontWeight: 'bold',
		 color:"#444444",
			},
	cardTextThree: {
		 fontSize: '48px', 
		 fontFamily: 'lato',
		 fontWeight: 'bold',
		 color:"#444444",
			},		
			
	cardTextTwo: {
		 fontSize: '21px', 
		 fontFamily: 'lato',
		 color:"#444444",
		 marginTop: "-20px"
			},			  
};


class App extends Component {
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
		
			<div style={{marginTop:40,marginLeft:290,marginRight:280}}>
			     
			     
					<CardHeader
						title="Split expenses with friends."
						titleStyle={styles.cardTextOne}
						avatar={<span> <img style={{width:64,height:64}} src="images/logo.png" alt=" "/> </span>}
					/>
					<CardHeader
						title={<span><b>Share bills</b> and IOUs.<b> Make sure</b> everyone gets paid back.<b> Totally free</b> for web,iPhone & Android.</span>}
						titleStyle={styles.cardTextTwo}
					/>
					<CardMedia>
						<img  style={{height:415,width:400}} src="images/webniphone.png" alt=""/>
					</CardMedia>
					
					  <CardActions>
					  <center>
						<FlatButton style={styles.getStartedNow} labelStyle={styles.labelGetStartedText}
                        backgroundColor='#FF5216' hoverColor='#FF5266' rippleColor='#efefef' 
                        label={<span> <center><b>Get started now</b>(it's free!)</center></span>} href="/Signup" />
                      </center>
                      </CardActions>
				
			</div>
			
			<div style={{marginTop:40,marginLeft:290,marginRight:280}}>
				<Card style={{height:125,paddingTop:40}}>
			        
			        <span style={{paddingLeft:10}}>
						<a href="https://lifehacker.com/5936301/splitwise-keeps-track-of-your-split-bills-settles-them-via-paypal"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/lifehacker.png" alt=""/></a>
						<a href="https://bucks.blogs.nytimes.com/2011/04/28/a-new-tool-splittherent-com-for-roommates/"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/newyorktimes.png" alt=""/></a>
						<a href="https://www.aol.com/"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/aoinews.png" alt=""/></a>
						<a href="https://www.buzzfeed.com/alannaokun/tricks-to-make-living-with-roommates-so-much-better?utm_term=.wcVLa7KLM#.vfglKjpl5"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/buzzfeed.png" alt=""/></a>
						<a href="https://www.businessinsider.in/This-Startup-Is-Trying-To-Solve-The-Most-Annoying-Part-About-Going-Out-To-Eat-With-Friends/articleshow/21491792.cms"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/bussinessinsider.png" alt=""/></a>
						<a href="https://www.msn.com/en-us/money"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/msnmoney.png" alt=""/></a>
					</span>	
						
				</Card>
			</div>
			
			<div style={{marginTop:15,marginLeft:290,marginRight:280}}>
				
				<CardHeader
						title="IOUs made easy."
						titleStyle={styles.cardTextThree}
					/>
				<CardHeader
						title="Splitwise takes the trouble out of sharing expenses – with friends, with roommates, with anyone."
						titleStyle={styles.cardTextTwo}
					/>	
			</div>
			
			{/*<div style={{marginTop:10,marginLeft:290,marginRight:280}}>
				
				<Card style={{height:400}}>
				
						
					<CardTitle title={<span><font size="32px" color="#333333"><b>We do the math for you</b></font></span>} 
						subtitle={<span><b>Splitwise keeps a running total over time, so you can pay each other back in one big payment, instead of a bunch of small ones.</b></span>}
					>
					
					</CardTitle>	
							
				</Card>
				
			</div>*/}
			
			<div style={{backgroundColor:'#666666',height:120}}>
				
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

export default App;
