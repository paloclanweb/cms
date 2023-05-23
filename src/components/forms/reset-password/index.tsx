import {type FC, type ReactElement, type FormEvent, useState } from 'react'
import { Box, Input, IconNewPassword, IconSuccess, Message, PasswordInput } from '@/components'
import { Submit, FormContainer, LogoContainer, Title, Description } from './styles'

const Form: FC = (): ReactElement => {
	const [process, setProcess] = useState<boolean>(false)
	const onSubmitHandler = (event: FormEvent): void => {
		event.preventDefault()
		setProcess(true)
	}

	return process ? <Message icon={<IconSuccess />} title={'Password reset successful!'} description={'You can login with your new password now.'} back={{
		url: '/auth/login',
		text: 'GO BACK TO LOGIN'
	}} /> : (
		<FormContainer>
			<LogoContainer>
				<IconNewPassword />
				<Title as={'h1'}>Set new password</Title>
				<Description>Enter your e-mail and new password</Description>
			</LogoContainer>
			<Box component={'form'} onSubmit={onSubmitHandler}>
				<Input type={'email'} label={'Enter your e-mail'} variant={'outlined'} color={'primary'} fullWidth required />
				<PasswordInput type={'password'} label={'Password'} variant={'outlined'} color={'primary'} fullWidth required />
				<PasswordInput type={'password'} label={'Confirm Password'} variant={'outlined'} color={'primary'} fullWidth required />
				<Submit type={'submit'} variant={'contained'} color={'primary'} fullWidth>RESET PASSWORD</Submit>
			</Box>
		</FormContainer>
	)
}

export default Form