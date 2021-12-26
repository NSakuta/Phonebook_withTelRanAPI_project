import * as yup from 'yup';
import styled from 'styled-components';
import Field from './Field';
import { set, useForm } from 'react-cool-form';


    const Wrapper = styled.div `
    width: 48%;
    margin-left: 2%;
    text-align: center;
`

const Button = styled.button `
  background-color: #1aa;
  font-size: 16px;
  color: white;
  margin-top: 20px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  outline: none;
  position: absolute;
  right: 0;


  &:hover {
    background-color: rgb(25, 88, 64);
  }
`;

const Form = styled.form `
  width: 100%;
  margin: 0 auto;
  position: relative;

`

export default function AddContactForm(){

    // const dispatch = useDispatch();
    // const history = useHistory();


    const yupSchema = yup.object().shape({
        firstName: yup.string().min(2).required(),
        lastName: yup.string().min(2).required(),
        email: yup.string().email().required(),
        phone: yup.number().min(6).required(),
        address: yup.string(),
        description: yup.string()
    })

    const validateWithYup = (schema) => async(values) => {
        let errors = {};
        try {
            await schema.validate(values, {abortEarly: false}) // нас выкидывает из валидации при первой ошибке
        } catch(yupError) {
            yupError.inner.forEach(({path, message}) => set(errors, path, message))
        }

        return errors;
    }

    const {form, use} = useForm({
        // defaultValues: contact ? {email: `${contact.email}`, phone: `${contact.phone}`, firstName: `${contact.firstName}`, lastName: `${contact.lastName}`, address: `${contact.address}`, description: `${contact.description}`} : {email: '', phone: '', firstName: '', lastName: '', address: '', description: ''},
        defaultValues: {email: '', phone: '', firstName: '', lastName: '', address: '', description: ''},
        validate: validateWithYup(yupSchema),
        onSubmit: (values, {reset}) => { // onSubmit: (values, event, e)
            console.log('values: ', values)
          
            // console.log('event: ', event)
            // console.log('e: ', e.submitter.name)
        }
    })

    const errors = use('errors', {errorWithTouched: true});

    return(
        <Wrapper>
            <h2>Edit contact</h2>
            <Form ref={form} noValidate>
                <Field name='firstName' placeholder='first name' error={errors.fistName}></Field>
                <Field name='lastName' placeholder='last name' error={errors.lastName}></Field>
                <Field name='email' placeholder='email' error={errors.email}></Field>
                <Field name='phone' placeholder='phone number' error={errors.phone}></Field>
                <Field name='address' placeholder='address' error={errors.address}></Field>
                <Field name='description' placeholder='description' error={errors.description}></Field>
                <Button>add contact</Button>
            </Form>
        </Wrapper>

    )
};