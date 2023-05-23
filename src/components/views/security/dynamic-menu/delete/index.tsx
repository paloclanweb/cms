import { type FC, type ReactElement, useCallback } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {DangerModal, DefaultLayout} from '@/components'
import { DynamicMenuService } from '@/service'
import { Route } from '@/constant'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
    const navigate = useNavigate()
    const toast = useToast()
    const { state } = useLocation()
    const params = useParams()
    const onClose = useCallback(() => {
        navigate(Route.Security.DynamicMenu.list, {
            ...state,
            data: null
        })
    }, [state])

    const deleteMenu = useCallback(async(): Promise<void> => {
        if(!params.id) {
            onClose()

            return toast({
                message: 'Something went wrong',
                status: 'error'
            })
        }
        const Service = new DynamicMenuService()
        const response = await Service.delete(params.id)

        onClose()

        if(!response) {
            return toast({
                message: 'Something went wrong',
                status: 'error'
            })
        }

        toast({
            message: 'Dynamic menu deleted successfully',
            status: 'success'
        })
    }, [params])

    return (
         <DefaultLayout title={'Dynamic Menu / Delete'}>
             <DangerModal
                 title={'Delete Menu'}
                 open
                 onClose={onClose}
                 onConfirm={deleteMenu}
                 text={`Are you sure to delete ${state.data.Caption} from Dynamic Menu?`}
                 strong={'This action cannot be undone.'}
                 confirmText={'YES, DELETE'}
                 closeText={'CANCEL'}
             />
         </DefaultLayout>
    )
}

export default Delete