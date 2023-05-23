export type DangerModalProps = {
    title: string
    open: boolean
    onClose: () => void
    onConfirm: () => void
    confirmText: string
    closeText: string
    text: string
    strong?: string
}