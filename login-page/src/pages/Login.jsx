import React,{useState} from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive'
import image from '../assets/group-3608.jpeg'

const Container=styled.div`
height: 100vh;
width: 100%;
background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper=styled.div`
height: 600px;
width: 70%;
/* border: 1px solid gray; */
display: flex;
justify-content: center;
align-items: center;
`;
const Left=styled.div`
height: 500px;
width: 40%;
border: 1px solid gray;
border-radius: 10px;
${mobile({display:"none",})}
`;
const Image=styled.img`
height: 100%;
width: 100%;
`;
const Right=styled.div`
height: 600px;
width: 60%;
/* border: 1px solid green; */
/* overflow: scroll; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title=styled.h1`
${mobile({margin:"12px 0px",})}
`;
const Form=styled.form`
height: auto;
width: 90%;

/* border: 1px solid blue; */
/* display: flex;
flex-direction: column;
justify-content: center; */
`;
const LoginContainer=styled.div`
/* width: 100%; */
`;
const PasswordContainer=styled.div``;
const Label=styled.label`
display: block;
margin: 10px;
`;
const Input=styled.input`
margin: 10px;
display: block;
width: 90%;
padding: 10px;
outline: none;
`;
const CheckBoxContainer=styled.div`
display: flex;
align-items: center;
${mobile({fontSize:"12px"})}
`;
const InputCheckBox=styled.input`
margin: 10px;
`;
const LabelCheckBox=styled.label`
`;
const Link=styled.a``;
const Button=styled.button`
display: block;
margin: 30px auto;
width: 60%;
height: 40px;
background: #006cbe;
color: white;
border: 1px solid #006cbe;
border-radius:10px;
cursor: pointer;
${mobile({margin:"25px auto",})}
&:hover{
    background: #015da3;
}
`;
const ErrorMessage = styled.p`
color: red;
`;
const Ul=styled.ul`
list-style: none;
`;
const Li=styled.li`
padding: 5px;
background: rgba(255, 255, 255, 0.5);
margin: 5px 0;
`;
const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userList, setUserList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (loginId==='' || password==='') {
            setError('Please enter all fields.');
            setTimeout(()=>setError(''),3000);
        } else {
            // Create a new user object
            const newUser = { loginId, password };
            // Update the user list
            setUserList([...userList, newUser]);
          // Clear fields
            setLoginId('');
            setPassword('');
        }
    };
    
return (
    <div>
        <Container>
            <Wrapper>
                {/* Left is for image */}
                <Left>
                    <Image src={image} alt='image'/>
                </Left>
                {/* Right is for title and form */}
                <Right>
                    <Title>Login</Title>
                    <Form onSubmit={handleSubmit}>
                        <LoginContainer>
                            <Label><b>Login ID</b></Label>
                            <Input 
                            type='text'
                            value={loginId}
                            placeholder='Enter Login ID' 
                            onChange={(e)=>setLoginId(e.target.value)}
                            />
                        </LoginContainer>
                        <PasswordContainer>
                            <Label><b>Password</b></Label>
                            <Input 
                            type='password' 
                            value={password}
                            placeholder='Enter Password' 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </PasswordContainer>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <CheckBoxContainer>
                            <InputCheckBox type='checkbox'/>
                            <LabelCheckBox>Remember Me</LabelCheckBox>
                            <Link style={{display:"block",float:"right",}} href='/'>Change Password</Link>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <InputCheckBox type='checkbox'/>
                            <LabelCheckBox>Agree to
                                <Link href='/'>Terms & Conditions</Link>
                            </LabelCheckBox>
                        </CheckBoxContainer>
                        {/* Button */}
                        <Button type='submit'>Login</Button>
                        <LabelCheckBox style={{display: "block",
                                                textAlign: "center",}}>
                            Don't have an account?
                                <Link href='/'>Register here</Link>
                        </LabelCheckBox>
                    </Form>
                    <Ul>
                        {userList.map((user,index)=>
                            <Li key={index}>
                                Login Id: {user.loginId}&nbsp;
                                Password: {user.password}
                            </Li>
                        )}
                    </Ul>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Login;