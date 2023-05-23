import { type FC, type ReactElement, type FormEvent, useState, useCallback } from 'react'
import { Submit, FormContainer, Title, Description, LogoContainer } from './styles'
import { Box, IconForgotPassword, IconSentEmail, Input, Message  } from '@/components'
import { useToast } from '@/hooks'
import { AuthService } from '@/service'

const Form: FC = (): ReactElement => {
	const toast = useToast()
	const [email, setEmail] = useState<string>('')
	const [process, setProcess] = useState<boolean>(false)
	const onSubmitHandler = useCallback(async (event: FormEvent): Promise<void> => {
		event.preventDefault()
			
		const Service = new AuthService()
	
		const response = await Service.forgotPassword(email)

		if(!response) {
			return toast({
				message: 'Something went wrong, please try again later',
				status: 'error'
			})
		}

		toast({
			message: 'Forgot password e-mail successfully send!',
			status: 'success',
		})
		
		setProcess(true)
	}, [email])

	return process ? <Message icon={<IconSentEmail />} title={'We sent you an e-mail!'} description={'You can reset your password by following instructions on the e-mail.'} back={{
		url: '/auth/login',
		text: 'GO BACK TO LOGIN'
	}} /> : (
		<FormContainer>
			<LogoContainer>
				<IconForgotPassword />
				<Title as={'h1'}>Forgot your password?</Title>
				<Description>No worries. We’ll send you reset instructions.</Description>
			</LogoContainer>
			<Box component={'form'} onSubmit={onSubmitHandler}>
				<Input type={'email'} label={'Enter your e-mail'} variant={'outlined'} color={'primary'} value={email} onChange={event => setEmail(event.currentTarget.value)} fullWidth required />
				<Submit type={'submit'} variant={'contained'} color={'primary'} fullWidth disabled={email.length < 3}>RESET PASSWORD</Submit>
			</Box>
		</FormContainer>
	)
}

export default Form