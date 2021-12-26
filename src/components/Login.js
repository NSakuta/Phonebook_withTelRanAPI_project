import * as yup from 'yup'
import {set, useForm} from 'react-cool-form'
import Field from './Field'
import styled from 'styled-components'
import { login, registration } from '../api/api'


export default function Login() {

    const yupSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    const validateWithYup = (schema) => async(values) => {
        let errors = {};
        try {
            await schema.validate(values, {abortEarly: false})
        } catch(yupError) {
            yupError.inner.forEach(({path, message}) => set(errors, path, message))
        }

        return errors;
    }

    const {form, use} = useForm({
        defaultValues: {email: '', password: ''},
        validate: validateWithYup(yupSchema),
        onSubmit: (values, event, e) => {
            console.log('values: ', values)
            console.log('event: ', event)
            console.log('e: ', e)
            if(e.submitter.name === 'reg') {
                registration(values);
            } else {
                login(values);
            }
        }
    })

    const errors = use('errors', {errorWithTouched: true});

    
    return (
        <Wrapper>
        <Form ref={form} noValidate>
            <Field name='email' placeholder='type your email' error={errors.email}></Field>
            <Field name='password' placeholder='type your password' error={errors.password}></Field>
            <Button name="reg" id='reg'>Registration</Button>
            <Button name="log">Login</Button>
        </Form>
    </Wrapper>
    )
}

const Wrapper = styled.div `
    width: 70%;
    margin: 50px auto;
    text-align: right;
`

const Button = styled.button `
  background-color: #1aa;
  font-size: 16px;
  color: white;
  margin: 7px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  outline: none;


  &:hover {
    background-color: rgb(25, 88, 64);
  }
`;

const Form = styled.form `
  width: 100%;
`