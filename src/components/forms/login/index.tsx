import {type FC, FormEvent, type ReactElement, useCallback, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Route } from '@/constant'
import {ForgotPassword, Submit, FormContainer, LogoContainer, Title, Agreement} from './styles'
import {Box, Input, Grid, IconLogo, PasswordInput} from '@/components'
import {AuthService, type LoginDTO, type LoginModel, type TokenModel } from '@/service'
import {Cookie, Parser, Validation } from '@/helpers'
import { useToast } from '@/hooks'

const Form: FC = (): ReactElement => {
	const initialValues: LoginDTO = {
		email: '',
		password: ''
	}

	const Auth = new AuthService()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<LoginDTO>(initialValues)
	const toast = useToast()

	const onSubmitHandler = useCallback(async (event: FormEvent): Promise<void> => {
		event.preventDefault()

		const FormValidation = new Validation()
		const BrowserCookie = new Cookie()

		try {
			await FormValidation.email(formData.email)
		} catch (error) {
			return toast({
				status: 'error',
				message: error as string
			})
		}

		try {
			await FormValidation.password(formData.password)
		} catch (error) {
			return toast({
				status: 'error',
				message: error as string
			})
		}

		const response: LoginModel | void = await Auth.login(formData)

		if (!response) {
			return toast({
				status: 'error',
				message: 'Something went wrong, please try again later.'
			})
		}

		const Parse = new Parser()

		const user: TokenModel = Parse.token(response.AccessToken)

		if(user) {
			toast({
				message: `Welcome to Logipoly Admin Panel, ${user.fullName}`,
				status: 'success'
			})
		}

		BrowserCookie.set('token', response.AccessToken, response.ExpiresIn)
		navigate(Route.Security.AdminUsers.list, {replace: true})
	}, [formData.email, formData.password])

	return (
		<Box>
			<FormContainer>
				<LogoContainer>
					<IconLogo/>
					<Title>Admin Panel</Title>
				</LogoContainer>
				<Box component={'form'} onSubmit={onSubmitHandler}>
					<Input
						type={'email'}
						label={'Enter your e-mail'}
						variant={'outlined'}
						color={'primary'}
						fullWidth
						required
						defaultValue={formData.email}
						onChange={event => setFormData({...formData, email: event.currentTarget.value})}
					/>

					<PasswordInput
						label={'Password'}
						variant={'outlined'}
						color={'primary'}
						fullWidth
						required
						defaultValue={formData.password}
						onChange={event => setFormData({...formData, password: event.currentTarget.value})}
					/>

					<Grid container alignItems={'center'} justifyContent={'flex-end'} sx={{
						marginBottom: '1.5rem'
					}}>
						<Grid item>
							<ForgotPassword to={'/auth/forgot-password'}>Forgot Password</ForgotPassword>
						</Grid>
					</Grid>
					<Submit type={'submit'} variant={'contained'} color={'primary'}fullWidth>LOGIN</Submit>
				</Box>
			</FormContainer>
			<Agreement to={Route.Auth.Agreement('tr', 1)}>Aydınlatma Metinleri ve Anlaşmalar</Agreement>
		</Box>
	)
}

export default Form